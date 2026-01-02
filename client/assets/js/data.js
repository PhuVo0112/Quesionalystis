// data.js
let quizData = [
  {
    id: "it",
    name: "Công nghệ thông tin",
    icon: "💻", // Dùng emoji cho nhanh, thực tế có thể dùng link ảnh
    subTopics: [
      {
        id: "js",
        name: "JavaScript căn bản",
        questions: [
          {
            id: 1,
            question: "JS chạy ở đâu?",
            options: ["Browser", "Server", "Cả hai"],
            answer: 2,
          },
          {
            id: 2,
            question: "DOM là gì?",
            options: ["Document Object Model", "Data Object Model"],
            answer: 0,
          },
        ],
      },
      {
        id: "java",
        name: "Java Core",
        questions: [
          {
            id: 1,
            question: "Java là ngôn ngữ kiểu gì?",
            options: ["Statically Typed", "Dynamically Typed"],
            answer: 0,
          },
        ],
      },
    ],
  },
  {
    id: "traffic",
    name: "Luật Giao thông",
    icon: "🚦",
    subTopics: [
      {
        id: "a1",
        name: "Bằng A1",
        questions: [
          {
            id: 1,
            question:
              "Phần của đường bộ được sử dụng cho phương tiện giao thông đường bộ đi lại là gì?",
            options: [
              "1. Phần mặt đường và lề đường.",
              "2. Phần đường xe chạy.",
              "3. Phần đường xe cơ giới.",
            ],
            answer: 1,
          },
          {
            id: 2,
            question: "Làn đường là gì?",
            options: [
              "1. Là một phần của phần đường xe chạy được chia theo chiều dọc của đường, sử dụng cho xe chạy.",
              "2. Là một phần của phần đường xe chạy được chia theo chiều dọc của đường, có đủ chiều rộng cho xe chạy an toàn.",
              "3. Là đường cho xe ô tô chạy, dừng, đỗ an toàn.",
            ],
            answer: 1,
          },
          {
            id: 3,
            question:
              "Khổ giới hạn của đường bộ được hiểu như thế nào là đúng?",
            options: [
              "1. Khổ giới hạn của đường bộ là khoảng trống có kích thước giới hạn về chiều rộng, chiều cao của đường bộ để các xe, bao gồm cả hàng hoá xếp trên xe đi qua được an toàn và được xác định theo quy chuẩn, tiêu chuẩn kỹ thuật của đường bộ.",
              "2. Là khoảng trống có kích thước giới hạn về chiều rộng của đường, cầu, bến phà, hầm trên đường bộ để các xe kể cả hàng hóa xếp trên xe đi qua được an toàn.",
              "3. Là khoảng trống có kích thước giới hạn về chiều cao của cầu, bến phà, hầm trên đường bộ để các xe đi qua được an toàn.",
            ],
            answer: 0,
          },
          {
            id: 4,
            question: "Dải phân cách được lắp đặt để làm gì?",
            options: [
              "1. Để phân chia các làn đường dành cho xe cơ giới và xe thô sơ trên đường cao tốc.",
              "2. Để phân chia phần đường xe chạy thành hai chiều riêng biệt hoặc để phân chia phần đường dành cho xe cơ giới và xe thô sơ hoặc của nhiều loại xe khác nhau trên cùng một chiều đường.",
              "3. Để phân tách phần đường xe chạy và hành lang an toàn giao thông.",
            ],
            answer: 1,
          },
          {
            id: 5,
            question: "Vạch kẻ đường là gì?",
            options: [
              "1. Là báo hiệu đường bộ để hỗ trợ cảnh báo nguy hiểm cho người tham gia giao thông đường bộ.",
              "2. Là vạch chỉ sự phân chia làn đường, vị trí hoặc hướng đi, vị trí dừng lại.",
              "3. Là báo hiệu cho người tham gia giao thông đường bộ về các thông tin của đường bộ.",
              "4. Cả ba ý trên.",
            ],
            answer: 1,
          },
          {
            id: 6,
            question:
              "Người điều khiển phương tiện tham gia giao thông đường bộ được hiểu như thế nào là đúng?",
            options: [
              "1. Là người điều khiển xe cơ giới, người điều khiển xe thô sơ, người điều khiển xe máy chuyên dùng.",
              "2. Là người được giao nhiệm vụ hướng dẫn giao thông trên đường bộ.",
              "3. Cả hai ý trên.",
            ],
            answer: 0,
          },
          {
            id: 7,
            question: "Người lái xe được hiểu như thế nào là đúng?",
            options: [
              "1. Là người điều khiển xe cơ giới.",
              "2. Là người điều khiển xe thô sơ.",
              "3. Là người điều khiển xe máy chuyên dùng.",
            ],
            answer: 0,
          },
          {
            id: 8,
            question:
              "Trong nhóm các phương tiện giao thông đường bộ dưới đây, nhóm phương tiện nào là xe cơ giới?",
            options: [
              "1. Xe ô tô; máy kéo; xe mô tô hai bánh; xe mô tô ba bánh; xe gắn máy; xe cơ giới dùng cho người khuyết tật và xe máy chuyên dùng.",
              "2. Xe ô tô; rơ moóc được kéo bởi xe ô tô; sơ mi rơ moóc được kéo bởi ô tô đầu kéo; xe chở người bốn bánh có gắn động cơ; xe chở hàng bốn bánh có gắn động cơ; xe mô tô, xe gắn máy và các loại xe tương tự.",
            ],
            answer: 1,
          },
          {
            id: 9,
            question:
              "Trong nhóm các phương tiện giao thông đường bộ dưới đây, nhóm phương tiện nào là xe thô sơ?",
            options: [
              "1. Xe đạp, xe đạp máy, xe đạp điện; xe xích lô; xe lăn dùng cho người khuyết tật; xe vật nuôi kéo và các loại xe tương tự.",
              "2. Xe đạp (kể cả xe đạp máy, xe đạp điện), xe gắn máy, xe cơ giới dùng cho người khuyết tật và xe máy chuyên dùng.",
              "3. Xe ô tô, máy kéo, rơ moóc hoặc sơ mi rơ moóc được kéo bởi xe ô tô, máy kéo.",
            ],
            answer: 0,
          },
          {
            id: 10,
            question: "Phương tiện giao thông đường bộ gồm những loại nào?",
            options: [
              "1. Phương tiện giao thông cơ giới đường bộ.",
              "2. Phương tiện giao thông thô sơ đường bộ, xe máy chuyên dùng và các loại xe tương tự.",
              "3. Cả hai ý trên.",
            ],
            answer: 2,
          },
          {
            id: 11,
            question:
              "Người tham gia giao thông đường bộ gồm những đối tượng nào?",
            options: [
              "1. Người điều khiển, người được chở trên phương tiện tham gia giao thông đường bộ.",
              "2. Người điều khiển, dẫn dắt vật nuôi trên đường bộ; người đi bộ trên đường bộ.",
              "3. Cả hai ý trên.",
            ],
            answer: 2,
          },
          {
            id: 12,
            question:
              "Người điều khiển phương tiện tham gia giao thông đường bộ gồm những đối tượng nào dưới đây?",
            options: [
              "1. Người điều khiển xe cơ giới, người điều khiển xe thô sơ.",
              "2. Người điều khiển xe máy chuyên dùng.",
              "3. Cả hai ý trên.",
            ],
            answer: 2,
          },
          {
            id: 13,
            question:
              "Người điều khiển giao thông đường bộ được hiểu như thế nào là đúng?",
            options: [
              "1. Là người điều khiển phương tiện tham gia giao thông đường bộ.",
              "2. Là Cảnh sát giao thông và người được giao nhiệm vụ hướng dẫn giao thông trên đường bộ.",
              "3. Là người tham gia giao thông đường bộ.",
            ],
            answer: 1,
          },
          {
            id: 14,
            question: "Dừng xe được hiểu như thế nào là đúng?",
            options: [
              "1. Là trạng thái đứng yên của xe không giới hạn thời gian để cho người lên, xuống xe, xếp dỡ hàng hóa hoặc thực hiện công việc khác.",
              "2. Là trạng thái đứng yên tạm thời của xe trong một khoảng thời gian cần thiết đủ để cho người lên xe, xuống xe, xếp dỡ hàng hóa, kiểm tra kỹ thuật xe hoặc hoạt động khác.",
            ],
            answer: 1,
          },
          {
            id: 15,
            question: "Đỗ xe được hiểu như thế nào là đúng?",
            options: [
              "1. Là trạng thái đứng yên của xe có giới hạn thời gian trong một khoảng thời gian cần thiết đủ để cho người lên, xuống xe đó, xếp dỡ hàng hóa hoặc thực hiện công việc khác.",
              "2. Là trạng thái đứng yên của xe không giới hạn thời gian.",
            ],
            answer: 1,
          },
          {
            id: 16,
            question: "Đường cao tốc được hiểu như thế nào là đúng?",
            options: [
              "1. Là một cấp kỹ thuật của đường bộ, chỉ dành cho một số loại xe cơ giới, xe máy chuyên dùng tham gia giao thông theo quy định của pháp luật.",
              "2. Có dải phân cách phân chia hai chiều xe chạy riêng biệt, không giao nhau cùng mức với một hoặc các đường khác, chỉ cho xe ra, vào ở những điểm nhất định.",
              "3. Có hàng rào bảo vệ, trang thiết bị phục vụ, bảo đảm giao thông liên tục, an toàn, rút ngắn thời gian hành trình.",
              "4. Cả ba ý trên.",
            ],
            answer: 3,
          },
          {
            id: 17,
            question:
              "Thiết bị an toàn cho trẻ em được hiểu như thế nào là đúng?",
            options: [
              "1. Là thiết bị có đủ khả năng bảo đảm an toàn cho trẻ em ở tư thế ngồi hoặc nằm trên xe ô tô, được thiết kế để giảm nguy cơ chấn thương cho người dùng trong trường hợp xảy ra va chạm hoặc xe ô tô giảm tốc độ đột ngột, bằng cách hạn chế sự di chuyển của cơ thể trẻ em.",
              "2. Là thiết bị có đủ khả năng bảo đảm an toàn cho trẻ em ở tư thế đứng hoặc nằm trên xe ô tô, được thiết kế để giảm nguy cơ chấn thương cho người dùng trong trường hợp xe ô tô lưu thông bình thường.",
            ],
            answer: 0,
          },
          {
            id: 18,
            question:
              "Theo chức năng phục vụ thì đường bộ được phân loại như thế nào?",
            options: [
              "1. Đường chính, đường nhánh, đường gom, đường bên, đường dành cho giao thông công cộng, đường nội bộ, đường dành riêng cho người đi bộ, người đi xe đạp và các đường khác.",
              "2. Đường chính, đường nhánh, đường gom, đường dành cho giao thông công cộng, đường nội bộ, đường dành riêng cho người đi bộ, người đi xe đạp và các đường khác.",
              "3. Đường chính, đường nhánh, đường gom, đường bên, đường dành cho giao thông công cộng, đường dành riêng cho người đi bộ, người đi xe đạp và các đường khác.",
            ],
            answer: 0,
          },
          {
            id: 19,
            question: "Hành vi nào dưới đây bị nghiêm cấm?",
            options: [
              "1. Sử dụng xe đạp đi trên các tuyến quốc lộ.",
              "2. Rải vật sắc nhọn, đổ chất gây trơn trượt trên đường bộ.",
              "3. Cả hai ý trên.",
            ],
            answer: 1,
          },
          {
            id: 20,
            question:
              "Hành vi đưa xe cơ giới, xe máy chuyên dùng tham gia giao thông đường bộ nào dưới đây bị cấm?",
            options: [
              "1. Không có chứng nhận kiểm định an toàn kỹ thuật và bảo vệ môi trường.",
              "2. Hết niên hạn sử dụng.",
              "3. Cả hai ý trên.",
            ],
            answer: 2,
          },
        ],
      },
    ],
  },
];
