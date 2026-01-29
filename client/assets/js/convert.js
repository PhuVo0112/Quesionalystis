const fs = require("fs");
const mammoth = require("mammoth");
const cheerio = require("cheerio");

// --- CẤU HÌNH (CONFIG) ---
const CONFIG = {
  inputFile: "Bo_cau_hoi.docx",
  outputFile: "data_output.json",

  // Thông tin hiển thị trên App
  topicId: "kien_thuc_chung",
  topicName: "Kiến thức chung",
  topicIcon: "📚",
  subTopicId: "phan_1",
  subTopicName: "Phần 1",

  // Ký tự đánh dấu câu điểm liệt trong file Word
  // Ví dụ: "Câu 1: [!] Hành vi nào..." -> isImportant = 1
  criticalMarker: "[!]",
};

async function convertDocxToJson() {
  try {
    console.log(`> Đang xử lý: ${CONFIG.inputFile}...`);

    // 1. Chuyển DOCX -> HTML
    const result = await mammoth.convertToHtml({
      path: `./${CONFIG.inputFile}`,
    });
    const $ = cheerio.load(result.value);

    const questions = [];
    let currentQ = null;
    let ansIdx = -1; // Index tạm để check in đậm

    // Regex nhận diện
    const rgxQ = /^\s*Câu\s+(\d+)[\.:]?\s*(.*)/i; // Khớp: "Câu 1: ..."
    const rgxOpt = /^(.*)/; // Khớp: "1. Nội dung..."

    // Duyệt qua các thẻ text
    $("p, li, td, tr").each((_, el) => {
      let text = $(el).text().replace(/\s+/g, " ").trim();
      if (!text) return;

      // --- A. PARSE CÂU HỎI ---
      const matchQ = text.match(rgxQ);
      if (matchQ) {
        // Đẩy câu trước đó vào mảng
        if (currentQ) {
          finalizeQ(currentQ, ansIdx);
          questions.push(currentQ);
        }

        let rawContent = matchQ[2].trim();
        let isImp = 0;

        // Logic: Chỉ check thủ công theo marker người dùng nhập
        // Mặc định là 0 nếu không thấy marker
        if (rawContent.includes(CONFIG.criticalMarker)) {
          isImp = 1;
          // Xóa marker khỏi nội dung hiển thị
          rawContent = rawContent.replace(CONFIG.criticalMarker, "").trim();
        }

        // Init object câu hỏi
        currentQ = {
          id: parseInt(matchQ[1]),
          question: rawContent,
          options: [],
          answer: "",
          isImportant: isImp,
        };
        ansIdx = -1;
        return;
      }

      // --- B. PARSE ĐÁP ÁN ---
      if (currentQ) {
        // Xử lý trường hợp nhiều đáp án 1 dòng (VD: "1. A   2. B")
        const parts = text.split(/(?=\b\d+\.\s)/g);
        let handled = false;

        for (let p of parts) {
          p = p.trim();
          const matchOpt = p.match(rgxOpt);

          if (matchOpt) {
            handled = true;
            currentQ.options.push(matchOpt[2].trim());

            // Check in đậm -> Đáp án đúng
            if ($(el).find("strong, b").length || $(el).is("strong, b")) {
              ansIdx = currentQ.options.length - 1;
            }
          }
        }

        // --- C. FIX LỖI XUỐNG DÒNG ---
        // Nối text vào phần tử cuối cùng nếu không phải option mới
        if (!handled) {
          if (currentQ.options.length === 0) currentQ.question += " " + text;
          else currentQ.options[currentQ.options.length - 1] += " " + text;
        }
      }
    });

    // Đẩy câu cuối cùng
    if (currentQ) {
      finalizeQ(currentQ, ansIdx);
      questions.push(currentQ);
    }

    // Build JSON cuối cùng
    const output = {
      id: CONFIG.topicId,
      name: CONFIG.topicName,
      icon: CONFIG.topicIcon,
      subTopics: [
        { id: CONFIG.subTopicId, name: CONFIG.subTopicName, questions },
      ],
    };

    // Ghi file
    fs.writeFileSync(
      CONFIG.outputFile,
      JSON.stringify(output, null, 2),
      "utf8",
    );
    console.log(
      `> Hoàn tất. Output: ${CONFIG.outputFile} (${questions.length} câu)`,
    );
  } catch (e) {
    console.error("> Lỗi:", e);
  }
}

// Helper: Map index đúng sang string
function finalizeQ(q, idx) {
  // Nếu có index in đậm -> lấy text, ngược lại rỗng
  q.answer = idx !== -1 && q.options[idx] ? q.options[idx] : "";
}

convertDocxToJson();
