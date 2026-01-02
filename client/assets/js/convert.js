const fs = require("fs");
const mammoth = require("mammoth");
const cheerio = require("cheerio");

// Cấu hình đường dẫn file
const INPUT_FILE =
  "Bộ 600 câu hỏi dành cho sát hạch lái xe cơ giới đường bộ.docx";
const OUTPUT_FILE = "traffic_data.json";

async function convertDocxToJson() {
  try {
    console.log("Đang xử lý file Word... Vui lòng đợi.");

    // 1. Chuyển sang HTML (giữ thẻ strong/b để biết đáp án đúng)
    const result = await mammoth.convertToHtml({
      path: `D://SetUp//${INPUT_FILE}`,
    });
    const html = result.value;

    // 2. Load HTML vào Cheerio
    const $ = cheerio.load(html);
    const questions = [];
    let currentQuestion = null;

    // Regex nhận diện câu hỏi (Chấp nhận cả "Câu 1.", "Câu 1:", "Câu 1")
    const questionRegex = /^\s*Câu\s+(\d+)[\.:]?\s*(.*)/i;

    // Regex nhận diện đáp án (Ví dụ: "1. Nội dung", "2. Nội dung")
    const optionStartRegex = /^(\d+)\.\s+(.*)/;

    // Lấy tất cả các thẻ có khả năng chứa text (đoạn văn, dòng trong list, ô trong bảng)
    const elements = $("p, li, td, tr");

    elements.each((index, element) => {
      let text = $(element).text().replace(/\s+/g, " ").trim(); // Xóa khoảng trắng thừa
      if (!text) return;

      // --- A. XỬ LÝ CÂU HỎI ---
      const qMatch = text.match(questionRegex);
      if (qMatch) {
        // Lưu câu hỏi cũ
        if (currentQuestion) {
          questions.push(currentQuestion);
        }

        // Tạo câu hỏi mới
        currentQuestion = {
          id: parseInt(qMatch[1]),
          question: qMatch[2].trim(),
          options: [],
          answer: 0,
        };
        return; // Xong dòng này, sang dòng tiếp theo
      }

      // --- B. XỬ LÝ ĐÁP ÁN ---
      if (currentQuestion) {
        // Kiểm tra xem dòng này có phải là đáp án không (Bắt đầu bằng số "1.", "2.")
        // Hoặc nếu dòng này chứa nhiều đáp án (VD: "1. A   2. B")

        // Tách dòng thành các phần dựa trên số thứ tự (1. , 2. , 3. )
        // Logic: Tìm các vị trí bắt đầu bằng "số + dấu chấm"
        const parts = text.split(/(?=\b\d+\.\s)/g);

        let isLineHandled = false;

        for (let part of parts) {
          part = part.trim();
          const optMatch = part.match(optionStartRegex);

          if (optMatch) {
            isLineHandled = true;

            // Kiểm tra in đậm (đáp án đúng)
            // Lưu ý: Logic kiểm tra in đậm này áp dụng cho cả dòng.
            // Nếu 1 dòng có 2 đáp án mà chỉ 1 cái in đậm thì mammoth có thể trả về cả dòng in đậm hoặc không.
            // Đây là hạn chế khi tách dòng gộp, nhưng ta cứ check thẻ strong/b trong element gốc.
            const isBold =
              $(element).find("strong, b").length > 0 ||
              $(element).is("strong, b");

            const optionIndex = parseInt(optMatch[1]); // Số thứ tự đáp án trong text (1, 2...)

            // Thêm vào danh sách options
            // Lưu ý: Ta format lại chuỗi cho đẹp
            currentQuestion.options.push(part);

            // Nếu in đậm -> set index đáp án đúng (lấy index theo mảng 0-based)
            if (isBold) {
              // Vì optionIndex là số trong text (ví dụ 1, 2), nhưng mảng bắt đầu từ 0
              // Ta map dựa trên số lượng options hiện có
              currentQuestion.answer = currentQuestion.options.length - 1;
            }
          }
        }

        // --- C. XỬ LÝ NỐI DÒNG (FIX LỖI MẤT CHỮ) ---
        // Nếu dòng này KHÔNG phải câu hỏi, KHÔNG phải bắt đầu bằng "1.", "2."
        // Thì nó là phần tiếp theo của câu hỏi hoặc đáp án trước đó bị xuống dòng.
        if (!isLineHandled) {
          // Nếu chưa có options nào -> Nối vào câu hỏi
          if (currentQuestion.options.length === 0) {
            currentQuestion.question += " " + text;
          }
          // Nếu đã có options -> Nối vào option cuối cùng
          else {
            let lastOptIdx = currentQuestion.options.length - 1;
            currentQuestion.options[lastOptIdx] += " " + text;
          }
        }
      }
    });

    // Lưu câu cuối cùng
    if (currentQuestion) {
      questions.push(currentQuestion);
    }

    // Tạo cấu trúc JSON cuối cùng
    const finalJson = {
      id: "traffic",
      name: "Luật Giao thông",
      icon: "🚦",
      subTopics: [
        {
          id: "a1",
          name: "Bằng A1",
          questions: questions,
        },
      ],
    };

    // Ghi file (Bắt buộc dùng encoding utf8)
    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(finalJson, null, 2), {
      encoding: "utf8",
    });

    console.log("---------------------------------------------------");
    console.log(`✅ Đã xong! Tổng số câu hỏi lấy được: ${questions.length}`);
    console.log(`📁 File kết quả: ${OUTPUT_FILE}`);
    console.log(
      "👉 Mẹo: Hãy mở file JSON bằng VS Code hoặc Notepad++ để không bị lỗi font tiếng Việt."
    );
    console.log("---------------------------------------------------");
  } catch (error) {
    console.error("❌ Lỗi:", error);
  }
}

convertDocxToJson();
