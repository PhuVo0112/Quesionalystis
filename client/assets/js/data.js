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
        name: "Bằng A1 - (1,50)",
        questions: [
          {
            id: 1,
            question:
              "Phần của đường bộ được sử dụng cho các phương tiện giao thông qua lại là gì?",
            options: [
              "Phần mặt đường và lề đường.",
              "Phần đường xe chạy.",
              "Phần đường xe cơ giới.",
            ],
            answer: "Phần đường xe chạy.",
            isImportant: 0,
          },
          {
            id: 2,
            question: "“Làn đường” là gì?",
            options: [
              "Là một phần của phần đường xe chạy được chia theo chiều dọc của đường, sử dụng cho xe chạy.",
              "Là một phần của phần đường xe chạy được chia theo chiều dọc của đường, có bề rộng đủ cho xe chạy an toàn.",
              "Là đường cho xe ô tô chạy, dừng, đỗ an toàn.",
            ],
            answer:
              "Là một phần của phần đường xe chạy được chia theo chiều dọc của đường, có bề rộng đủ cho xe chạy an toàn.",
            isImportant: 0,
          },
          {
            id: 3,
            question:
              "Trong các khái niệm dưới đây, “dải phân cách” được hiểu như thế nào là đúng?",
            options: [
              "Là bộ phận của đường để ngăn cách không cho các loại xe vào những nơi không được phép.",
              "Là bộ phận của đường để phân tách phần đường xe chạy và hành lang an toàn giao thông.",
              "Là bộ phận của đường để phân chia mặt đường thành hai chiều xe chạy riêng biệt hoặc để phân chia phần đường của xe cơ giới và xe thô sơ.",
            ],
            answer:
              "Là bộ phận của đường để phân chia mặt đường thành hai chiều xe chạy riêng biệt hoặc để phân chia phần đường của xe cơ giới và xe thô sơ.",
            isImportant: 0,
          },
          {
            id: 4,
            question: "“Dải phân cách” trên đường bộ gồm những loại nào?",
            options: [
              "Dải phân cách gồm loại cố định và loại di động.",
              "Dải phân cách gồm tường chống ồn, hộ lan cứng và hộ lan mềm.",
              "Dải phân cách gồm giá long môn và biển báo hiệu đường bộ.",
            ],
            answer: "Dải phân cách gồm loại cố định và loại di động.",
            isImportant: 0,
          },
          {
            id: 5,
            question:
              "Người lái xe được hiểu như thế nào trong các khái niệm dưới đây?",
            options: [
              "Là người điều khiển xe cơ giới.",
              "Là người điều khiển xe thô sơ.",
              "Là người điều khiển xe có súc vật kéo.",
            ],
            answer: "Là người điều khiển xe cơ giới.",
            isImportant: 0,
          },
          {
            id: 6,
            question:
              "Đường mà trên đó phương tiện tham gia giao thông được các phương tiện giao thông đến từ hướng khác nhường đường khi qua nơi đường giao nhau, được cắm biển báo hiệu đường ưu tiên là loại đường gì?",
            options: [
              "Đường không ưu tiên.",
              "Đường tỉnh lộ.",
              "Đường quốc lộ.",
              "Đường ưu tiên.",
            ],
            answer: "Đường ưu tiên.",
            isImportant: 0,
          },
          {
            id: 7,
            question:
              "Khái niệm “phương tiện giao thông cơ giới đường bộ” được hiểu thế nào là đúng?",
            options: [
              "Gồm xe ô tô; máy kéo; rơ moóc hoặc sơ mi rơ moóc được kéo bởi xe ô tô, máy kéo.",
              "Gồm xe mô tô hai bánh; xe mô tô ba bánh; xe gắn máy (kể cả xe máy điện) và các loại xe tương tự.",
              "Cả ý 1 và ý 2.",
            ],
            answer: "Cả ý 1 và ý 2.",
            isImportant: 0,
          },
          {
            id: 8,
            question:
              "Khái niệm “phương tiện giao thông thô sơ đường bộ” được hiểu thế nào là đúng?",
            options: [
              "Gồm xe đạp (kể cả xe đạp máy, xe đạp điện), xe xích lô, xe lăn dùng cho người khuyết tật, xe súc vật kéo và các loại xe tương tự.",
              "Gồm xe đạp (kể cả xe đạp máy, xe đạp điện), xe xích lô, xe lăn dùng cho người khuyết tật, xe mô tô hai bánh, xe mô tô ba bánh.",
              "Gồm xe ô tô, máy kéo, rơ moóc hoặc sơ mi rơ moóc được kéo bởi xe ô tô, máy kéo.",
            ],
            answer:
              "Gồm xe đạp (kể cả xe đạp máy, xe đạp điện), xe xích lô, xe lăn dùng cho người khuyết tật, xe súc vật kéo và các loại xe tương tự.",
            isImportant: 0,
          },
          {
            id: 9,
            question:
              "“Phương tiện tham gia giao thông đường bộ” gồm những loại nào?",
            options: [
              "Phương tiện giao thông cơ giới đường bộ.",
              "Phương tiện giao thông thô sơ đường bộ và xe máy chuyên dùng.",
              "Cả ý 1 và ý 2.",
            ],
            answer: "Cả ý 1 và ý 2.",
            isImportant: 0,
          },
          {
            id: 10,
            question:
              "“Người tham gia giao thông đường bộ” gồm những đối tượng nào?",
            options: [
              "Người điều khiển, người sử dụng phương tiện tham gia giao thông đường bộ.",
              "Người điều khiển, dẫn dắt súc vật; người đi bộ trên đường bộ.",
              "Cả ý 1 và ý 2.",
            ],
            answer: "Cả ý 1 và ý 2.",
            isImportant: 0,
          },
          {
            id: 11,
            question:
              "“Người điều khiển phương tiện tham gia giao thông đường bộ” gồm những đối tượng nào dưới đây?",
            options: [
              "Người điều khiển xe cơ giới, người điều khiển xe thô sơ.",
              "Người điều khiển xe máy chuyên dùng tham gia giao thông đường bộ.",
              "Cả ý 1 và ý 2.",
            ],
            answer: "Cả ý 1 và ý 2.",
            isImportant: 0,
          },
          {
            id: 12,
            question:
              "Khái niệm “người điều khiển giao thông” được hiểu như thế nào là đúng?",
            options: [
              "Là người điều khiển phương tiện tham gia giao thông tại nơi thi công, nơi ùn tắc giao thông, ở bến phà, tại cầu đường bộ đi chung với đường sắt.",
              "Là cảnh sát giao thông, người được giao nhiệm vụ hướng dẫn giao thông tại nơi thi công, nơi ùn tắc giao thông, ở bến phà, tại cầu đường bộ đi chung với đường sắt.",
              "Là người tham gia giao thông tại nơi thi công, nơi ùn tắc giao thông, ở bến phà, tại cầu đường bộ đi chung với đường sắt.",
            ],
            answer:
              "Là cảnh sát giao thông, người được giao nhiệm vụ hướng dẫn giao thông tại nơi thi công, nơi ùn tắc giao thông, ở bến phà, tại cầu đường bộ đi chung với đường sắt.",
            isImportant: 0,
          },
          {
            id: 13,
            question: "Cuộc đua xe chỉ được thực hiện khi nào?",
            options: [
              "Diễn ra trên đường phố không có người qua lại.",
              "Được người dân ủng hộ.",
              "Được cơ quan có thẩm quyền cấp phép.",
            ],
            answer: "Được cơ quan có thẩm quyền cấp phép.",
            isImportant: 1,
          },
          {
            id: 14,
            question:
              "Người điều khiển phương tiện giao thông đường bộ mà trong cơ thể có chất ma túy có bị nghiêm cấm hay không?",
            options: [
              "Bị nghiêm cấm.",
              "Không bị nghiêm cấm.",
              "Không bị nghiêm cấm, nếu có chất ma túy ở mức nhẹ, có thể điều khiển phương tiện tham gia giao thông.",
            ],
            answer: "Bị nghiêm cấm.",
            isImportant: 1,
          },
          {
            id: 15,
            question:
              "Sử dụng rượu, bia khi lái xe, nếu bị phát hiện thì bị xử lý như thế nào?",
            options: [
              "Chỉ bị nhắc nhở.",
              "Bị xử phạt hành chính hoặc có thể bị xử lý hình sự tùy theo mức độ vi phạm.",
              "Không bị xử lý hình sự.",
            ],
            answer:
              "Bị xử phạt hành chính hoặc có thể bị xử lý hình sự tùy theo mức độ vi phạm.",
            isImportant: 1,
          },
          {
            id: 16,
            question:
              "Theo Luật phòng chống tác hại của rượu, bia, đối tượng nào dưới đây bị cấm sử dụng rượu, bia khi tham gia giao thông?",
            options: [
              "Người điều khiển: Xe ô tô, xe mô tô, xe đạp, xe gắn máy.",
              "Người ngồi phía sau người điều khiển xe cơ giới.",
              "Người đi bộ.",
              "Cả ý 1 và ý 2.",
            ],
            answer: "Người điều khiển: Xe ô tô, xe mô tô, xe đạp, xe gắn máy.",
            isImportant: 1,
          },
          {
            id: 17,
            question:
              "Hành vi điều khiển xe cơ giới chạy quá tốc độ quy định, giành đường, vượt ẩu có bị nghiêm cấm hay không?",
            options: [
              "Bị nghiêm cấm tùy từng trường hợp.",
              "Không bị nghiêm cấm.",
              "Bị nghiêm cấm.",
            ],
            answer: "Bị nghiêm cấm.",
            isImportant: 1,
          },
          {
            id: 18,
            question:
              "Ở phần đường dành cho người đi bộ qua đường, trên cầu, đầu cầu, đường cao tốc, đường hẹp, đường dốc, tại nơi đường bộ giao nhau cùng mức với đường sắt có được quay đầu xe hay không?",
            options: ["Được phép.", "Không được phép.", "Tùy từng trường hợp."],
            answer: "Không được phép.",
            isImportant: 1,
          },
          {
            id: 19,
            question:
              "Hành vi vượt xe tại các vị trí có tầm nhìn hạn chế, đường vòng, đầu dốc có bị nghiêm cấm hay không?",
            options: [
              "Không bị nghiêm cấm.",
              "Không bị nghiêm cấm khi rất vội.",
              "Bị nghiêm cấm.",
              "Không bị nghiêm cấm khi không có xe đi ngược chiều.",
            ],
            answer: "Bị nghiêm cấm.",
            isImportant: 1,
          },
          {
            id: 20,
            question:
              "Người lái xe không được quay đầu xe ở các khu vực nào dưới đây?",
            options: [
              "Ở phần đường dành cho người đi bộ qua đường.",
              "Trên cầu, đầu cầu, gầm cầu vượt, ngầm.",
              "Tại nơi đường bộ giao nhau cùng mức với đường sắt.",
              "Cả 3 ý trên.",
            ],
            answer: "Cả 3 ý trên.",
            isImportant: 0,
          },
          {
            id: 21,
            question:
              "Người điều khiển xe mô tô hai bánh, ba bánh, xe gắn máy có được phép sử dụng xe để kéo hoặc đẩy các phương tiện khác khi tham gia giao thông không?",
            options: [
              "Được phép.",
              "Nếu phương tiện được kéo, đẩy có khối lượng nhỏ hơn phương tiện của mình.",
              "Tùy trường hợp.",
              "Không được phép.",
            ],
            answer: "Không được phép.",
            isImportant: 1,
          },
          {
            id: 22,
            question:
              "Người điều khiển xe mô tô hai bánh, xe mô tô ba bánh, xe gắn máy, những hành vi buông cả hai tay; sử dụng xe để kéo, đẩy xe khác, vật khác; sử dụng chân chống của xe quệt xuống đường khi xe đang chạy có được phép hay không?",
            options: ["Được phép.", "Tùy trường hợp.", "Không được phép."],
            answer: "Không được phép.",
            isImportant: 1,
          },
          {
            id: 23,
            question:
              "Khi điều khiển xe mô tô hai bánh, xe mô tô ba bánh, xe gắn máy, những hành vi nào không được phép?",
            options: [
              "Buông cả hai tay; sử dụng xe để kéo, đẩy xe khác, vật khác; sử dụng chân chống của xe quệt xuống đường khi xe đang chạy.",
              "Buông một tay; sử dụng xe để chở người hoặc hàng hóa; để chân chạm xuống đất khi khởi hành.",
              "Đội mũ bảo hiểm; chạy xe đúng tốc độ quy định và chấp hành đúng quy tắc giao thông đường bộ.",
              "Chở người ngồi sau dưới 14 tuổi.",
            ],
            answer:
              "Buông cả hai tay; sử dụng xe để kéo, đẩy xe khác, vật khác; sử dụng chân chống của xe quệt xuống đường khi xe đang chạy.",
            isImportant: 1,
          },
          {
            id: 24,
            question:
              "Người ngồi trên xe mô tô hai bánh, ba bánh, xe gắn máy khi tham gia giao thông có được mang, vác vật cồng kềnh hay không?",
            options: [
              "Được mang, vác tùy trường hợp cụ thể.",
              "Không được mang, vác.",
              "Được mang, vác nhưng phải đảm bảo an toàn.",
              "Được mang, vác tùy theo sức khỏe của bản thân.",
            ],
            answer: "Không được mang, vác.",
            isImportant: 1,
          },
          {
            id: 25,
            question:
              "Người ngồi trên xe mô tô hai bánh, xe mô tô ba bánh, xe gắn máy khi tham gia giao thông có được bám, kéo hoặc đẩy các phương tiện khác không?",
            options: [
              "Được phép.",
              "Được bám trong trường hợp phương tiện của mình bị hỏng.",
              "Được kéo, đẩy trong trường hợp phương tiện khác bị hỏng.",
              "Không được phép.",
            ],
            answer: "Không được phép.",
            isImportant: 1,
          },
          {
            id: 26,
            question:
              "Người ngồi trên xe mô tô hai bánh, xe mô tô ba bánh, xe gắn máy khi tham gia giao thông có được sử dụng ô, khi trời mưa hay không?",
            options: [
              "Được sử dụng.",
              "Chỉ người ngồi sau được sử dụng.",
              "Không được sử dụng.",
              "Được sử dụng nếu không có áo mưa.",
            ],
            answer: "Không được sử dụng.",
            isImportant: 1,
          },
          {
            id: 27,
            question:
              "Khi đang lên dốc người ngồi trên xe mô tô có được kéo theo người đang điều khiển xe đạp hay không?",
            options: [
              "Chỉ được phép nếu cả hai đội mũ bảo hiểm.",
              "Không được phép.",
              "Chỉ được phép thực hiện trên đường vắng.",
              "Chỉ được phép khi người đi xe đạp đã mệt.",
            ],
            answer: "Không được phép.",
            isImportant: 1,
          },
          {
            id: 28,
            question:
              "Hành vi sử dụng xe mô tô để kéo, đẩy xe mô tô khác bị hết xăng đến trạm mua xăng có được phép hay không?",
            options: [
              "Chỉ được kéo nếu đã nhìn thấy trạm xăng.",
              "Chỉ được thực hiện trên đường vắng xe tại các khung giờ thấp điểm.",
              "Không được phép.",
            ],
            answer: "Không được phép.",
            isImportant: 1,
          },
          {
            id: 29,
            question:
              "Hành vi vận chuyển đồ vật cồng kềnh bằng xe mô tô, xe gắn máy khi tham gia giao thông có được phép hay không?",
            options: [
              "Không được vận chuyển.",
              "Chỉ được vận chuyển khi đã chằng buộc cẩn thận.",
              "Chỉ được vận chuyển vật cồng kềnh trên xe máy nếu khoảng cách về nhà ngắn hơn 2km.",
            ],
            answer: "Không được vận chuyển.",
            isImportant: 1,
          },
          {
            id: 30,
            question:
              "Người đủ 16 tuổi được điều khiển các loại xe nào dưới đây?",
            options: [
              "Xe mô tô 2 bánh có dung tích xi-lanh từ 50 cm3 trở lên.",
              "Xe gắn máy có dung tích xi-lanh dưới 50 cm3.",
              "Xe ô tô tải dưới 3,5 tấn; xe chở người đến 9 chỗ ngồi.",
              "Tất cả các ý nêu trên.",
            ],
            answer: "Xe gắn máy có dung tích xi-lanh dưới 50 cm3.",
            isImportant: 0,
          },
          {
            id: 31,
            question:
              "Người đủ 18 tuổi được điều khiển các loại xe nào dưới đây?",
            options: [
              "Xe mô tô hai bánh có dung tích xi-lanh từ 50 cm3 trở lên.",
              "Xe mô tô ba bánh có dung tích xi-lanh từ 50 cm3 trở lên.",
              "Xe gắn máy có dung tích xi-lanh dưới 50 cm3.",
              "Cả 3 ý nêu trên.",
            ],
            answer: "Xe mô tô hai bánh có dung tích xi-lanh từ 50 cm3 trở lên.",
            isImportant: 0,
          },
          {
            id: 32,
            question:
              "Người có giấy phép lái xe mô tô hạng A1 được phép điều khiển loại xe nào dưới đây?",
            options: [
              "Xe mô tô hai bánh có dung tích xi-lanh từ 50 cm3 đến dưới 175 cm3.",
              "Xe mô tô ba bánh dùng cho người khuyết tật.",
              "Cả ý 1 và ý 2.",
            ],
            answer: "Cả ý 1 và ý 2.",
            isImportant: 0,
          },
          {
            id: 33,
            question:
              "Người có giấy phép lái xe mô tô hạng A1 không được phép điều khiển loại xe nào dưới đây?",
            options: [
              "Xe mô tô có dung tích xi-lanh 125 cm3.",
              "Xe mô tô có dung tích xi-lanh từ 175 cm3 trở lên.",
              "Xe mô tô có dung tích xi-lanh 100 cm3.",
            ],
            answer: "Xe mô tô có dung tích xi-lanh từ 175 cm3 trở lên.",
            isImportant: 0,
          },
          {
            id: 34,
            question:
              "Biển báo hiệu có dạng hình tròn, viền đỏ, nền trắng, trên nền có hình vẽ hoặc chữ số, chữ viết màu đen là biểu thị cho loại biển gì dưới đây?",
            options: [
              "Biển báo nguy hiểm.",
              "Biển báo cấm.",
              "Biển báo hiệu lệnh.",
              "Biển báo chỉ dẫn.",
            ],
            answer: "Biển báo cấm.",
            isImportant: 0,
          },
          {
            id: 35,
            question:
              "Biển báo hiệu có dạng hình tam giác đều, viền đỏ, nền màu vàng, trên có hình vẽ màu đen là loại biển gì dưới đây?",
            options: [
              "Biển báo nguy hiểm.",
              "Biển báo cấm.",
              "Biển báo hiệu lệnh.",
              "Biển báo chỉ dẫn.",
            ],
            answer: "Biển báo nguy hiểm.",
            isImportant: 0,
          },
          {
            id: 36,
            question:
              "Biển báo hiệu hình tròn có nền xanh lam có hình vẽ màu trắng là loại biển gì dưới đây?",
            options: [
              "Biển báo nguy hiểm.",
              "Biển báo cấm.",
              "Biển báo hiệu lệnh phải thi hành.",
              "Biển báo chỉ dẫn.",
            ],
            answer: "Biển báo hiệu lệnh phải thi hành.",
            isImportant: 0,
          },
          {
            id: 37,
            question:
              "Biển báo hiệu hình chữ nhật hoặc hình vuông hoặc hình mũi tên nền xanh lam là loại biển gì dưới đây?",
            options: [
              "Biển báo nguy hiểm.",
              "Biển báo cấm.",
              "Biển báo hiệu lệnh.",
              "Biển báo chỉ dẫn.",
            ],
            answer: "Biển báo chỉ dẫn.",
            isImportant: 0,
          },
          {
            id: 38,
            question:
              "Khi tập lái xe ô tô, người tập lái xe phải thực hiện các điều kiện gì dưới đây?",
            options: [
              "Phải thực hành lái xe trên xe tập lái và có giáo viên bảo trợ tay lái.",
              "Phải mang theo phù hiệu “Học viên tập lái xe”.",
              "Phải mang theo Giấy chứng nhận kiểm định an toàn kỹ thuật và bảo vệ môi trường còn hiệu lực, giấy phép vận chuyển (nếu loại xe đó cần).",
              "Cả ý 1 và ý 2.",
            ],
            answer: "Cả ý 1 và ý 2.",
            isImportant: 0,
          },
          {
            id: 39,
            question:
              "Khi sử dụng giấy phép lái xe đã khai báo mất để điều khiển phương tiện cơ giới đường bộ, ngoài việc bị thu hồi giấy phép lái xe, chịu trách nhiệm trước pháp luật, người lái xe không được cấp giấy phép lái xe trong thời gian bao nhiêu năm?",
            options: ["02 năm.", "03 năm.", "05 năm.", "04 năm."],
            answer: "05 năm.",
            isImportant: 1,
          },
          {
            id: 40,
            question:
              "Khi gặp hiệu lệnh như dưới đây của Cảnh sát giao thông thì người tham gia giao thông phải đi như thế nào là đúng quy tắc giao thông? (Mô tả: CSGT giơ tay thẳng đứng)",
            options: [
              "Người tham gia giao thông ở các hướng phải dừng lại.",
              "Người tham gia giao thông ở các hướng được đi theo chiều gậy chỉ của Cảnh sát giao thông.",
              "Người tham gia giao thông ở phía bên phải và bên trái người điều khiển được đi tất cả các hướng.",
              "Người tham gia giao thông ở phía trước và phía sau người điều khiển được đi tất cả các hướng.",
            ],
            answer: "Người tham gia giao thông ở các hướng phải dừng lại.",
            isImportant: 0,
          },
          {
            id: 41,
            question:
              "Khi gặp hiệu lệnh như dưới đây của Cảnh sát giao thông thì người tham gia giao thông phải đi như thế nào là đúng quy tắc giao thông? (Mô tả: CSGT dang hai tay hoặc một tay sang ngang)",
            options: [
              "Người tham gia giao thông ở phía trước và phía sau người điều khiển được đi tất cả các hướng; người tham gia giao thông ở phía bên phải và bên trái người điều khiển phải dừng lại.",
              "Người tham gia giao thông ở phía trước và phía sau người điều khiển phải dừng lại; người tham gia giao thông ở phía bên phải và bên trái người điều khiển được đi tất cả các hướng.",
              "Người tham gia giao thông ở các hướng đều phải dừng lại trừ các xe đã ở trong khu vực giao nhau.",
              "Người tham gia giao thông ở phía trước và phía sau người điều khiển phải dừng lại; người tham gia giao thông ở phía bên phải và bên trái người điều khiển đi thẳng và rẽ phải.",
            ],
            answer:
              "Người tham gia giao thông ở phía trước và phía sau người điều khiển phải dừng lại; người tham gia giao thông ở phía bên phải và bên trái người điều khiển được đi tất cả các hướng.",
            isImportant: 0,
          },
          {
            id: 42,
            question:
              "Tại nơi có biển báo hiệu cố định lại có báo hiệu tạm thời thì người tham gia giao thông phải chấp hành hiệu lệnh của báo hiệu nào?",
            options: ["Biển báo hiệu cố định.", "Báo hiệu tạm thời."],
            answer: "Báo hiệu tạm thời.",
            isImportant: 0,
          },
          {
            id: 43,
            question:
              "Trên đường có nhiều làn đường cho xe đi cùng chiều được phân biệt bằng vạch kẻ phân làn đường, người điều khiển phương tiện phải cho xe đi như thế nào?",
            options: [
              "Cho xe đi trên bất kỳ làn đường nào hoặc giữa hai làn đường nếu không có xe phía trước; khi cần thiết phải chuyển làn đường, người lái xe phải quan sát xe trước để bảo đảm an toàn.",
              "Phải cho xe đi trong một làn đường và chỉ được chuyển làn đường ở những nơi cho phép; khi chuyển làn đường phải có tín hiệu báo trước và phải bảo đảm an toàn.",
              "Phải cho xe đi trong một làn đường, khi cần thiết phải chuyển làn đường, người lái xe phải quan sát xe trước để bảo đảm an toàn.",
            ],
            answer:
              "Phải cho xe đi trong một làn đường và chỉ được chuyển làn đường ở những nơi cho phép; khi chuyển làn đường phải có tín hiệu báo trước và phải bảo đảm an toàn.",
            isImportant: 0,
          },
          {
            id: 44,
            question:
              "Trên đường một chiều có vạch kẻ phân làn đường, xe thô sơ và xe cơ giới phải đi như thế nào là đúng quy tắc giao thông?",
            options: [
              "Xe thô sơ phải đi trên làn đường bên trái ngoài cùng, xe cơ giới, xe máy chuyên dùng đi trên làn đường bên phải.",
              "Xe thô sơ phải đi trên làn đường bên phải trong cùng, xe cơ giới, xe máy chuyên dùng đi trên làn đường bên trái.",
              "Xe thô sơ đi trên làn đường phù hợp không gây cản trở giao thông, xe cơ giới, xe máy chuyên dùng đi trên làn đường bên phải.",
            ],
            answer:
              "Xe thô sơ phải đi trên làn đường bên phải trong cùng, xe cơ giới, xe máy chuyên dùng đi trên làn đường bên trái.",
            isImportant: 0,
          },
          {
            id: 45,
            question:
              "Bạn đang lái xe trong khu vực đô thị từ 22 giờ đêm đến 5 giờ sáng hôm sau và cần vượt một xe khác, bạn cần báo hiệu như thế nào để đảm bảo an toàn giao thông?",
            options: [
              "Phải báo hiệu bằng đèn hoặc còi.",
              "Chỉ được báo hiệu bằng còi.",
              "Phải báo hiệu bằng cả còi và đèn.",
              "Chỉ được báo hiệu bằng đèn.",
            ],
            answer: "Chỉ được báo hiệu bằng đèn.",
            isImportant: 0,
          },
          {
            id: 46,
            question:
              "Khi điều khiển xe chạy trên đường biết có xe sau xin vượt nếu đủ điều kiện an toàn, người lái xe phải làm gì?",
            options: [
              "Tăng tốc độ và ra hiệu cho xe sau vượt, không được gây trở ngại cho xe sau vượt.",
              "Người điều khiển phương tiện phía trước phải giảm tốc độ, đi sát về bên phải của phần đường xe chạy cho đến khi xe sau đã vượt qua, không được gây trở ngại cho xe sau vượt.",
              "Cho xe tránh về bên trái mình và ra hiệu cho xe sau vượt; nếu có chướng ngại vật phía trước hoặc thiếu điều kiện an toàn thì không được cho xe sau vượt.",
            ],
            answer:
              "Người điều khiển phương tiện phía trước phải giảm tốc độ, đi sát về bên phải của phần đường xe chạy cho đến khi xe sau đã vượt qua, không được gây trở ngại cho xe sau vượt.",
            isImportant: 0,
          },
          {
            id: 47,
            question:
              "Xe mô tô hai bánh, xe mô tô ba bánh, xe gắn máy đi từ đường nhánh ra đường chính phải xử lý như thế nào là đúng quy tắc giao thông?",
            options: [
              "Giảm tốc độ, nhường đường cho xe đi trên đường chính từ bất kỳ hướng nào tới.",
              "Nháy đèn, bấm còi để xe đi trên đường chính biết và tăng tốc độ cho xe đi ra đường chính.",
              "Quan sát xe đang đi trên đường chính, nếu là xe có kích thước lớn hơn thì nhường đường, xe có kích thước nhỏ hơn thì tăng tốc độ cho xe đi ra đường chính.",
            ],
            answer:
              "Giảm tốc độ, nhường đường cho xe đi trên đường chính từ bất kỳ hướng nào tới.",
            isImportant: 0,
          },
          {
            id: 48,
            question:
              "Người lái xe mô tô xử lý như thế nào khi cho xe mô tô phía sau vượt?",
            options: [
              "Nếu đủ điều kiện an toàn, người lái xe phải giảm tốc độ, đi sát về bên phải của phần đường xe chạy cho đến khi xe sau đã vượt qua, không được gây trở ngại đối với xe xin vượt.",
              "Lái xe vào lề đường bên trái và giảm tốc độ để xe phía sau vượt qua, không được gây trở ngại đối với xe xin vượt.",
              "Nếu đủ điều kiện an toàn, người lái xe phải tăng tốc độ, đi sát về bên phải của phần đường xe chạy để xe phía sau vượt qua.",
            ],
            answer:
              "Nếu đủ điều kiện an toàn, người lái xe phải giảm tốc độ, đi sát về bên phải của phần đường xe chạy cho đến khi xe sau đã vượt qua, không được gây trở ngại đối với xe xin vượt.",
            isImportant: 0,
          },
          {
            id: 49,
            question:
              "Trong các trường hợp dưới đây, để đảm bảo an toàn khi tham gia giao thông, người lái xe mô tô cần thực hiện như thế nào?",
            options: [
              "Phải đội mũ bảo hiểm đạt chuẩn, có cài quai đúng quy cách, mặc quần áo gọn gàng; không sử dụng ô, điện thoại di động, thiết bị âm thanh (trừ thiết bị trợ thính).",
              "Phải đội mũ bảo hiểm khi trời mưa gió hoặc trời quá nắng; có thể sử dụng ô, điện thoại di động, thiết bị âm thanh nhưng phải đảm bảo an toàn.",
              "Phải đội mũ bảo hiểm khi cảm thấy mất an toàn trên đường hoặc chuẩn bị đi xa.",
            ],
            answer:
              "Phải đội mũ bảo hiểm đạt chuẩn, có cài quai đúng quy cách, mặc quần áo gọn gàng; không sử dụng ô, điện thoại di động, thiết bị âm thanh (trừ thiết bị trợ thính).",
            isImportant: 1,
          },
          {
            id: 50,
            question:
              "Đường bộ trong khu vực đông dân cư gồm những đoạn đường nào dưới đây?",
            options: [
              "Là đoạn đường nằm trong khu công nghiệp có đông người và phương tiện tham gia giao thông và được xác định cụ thể bằng biển chỉ dẫn địa giới.",
              "Là đoạn đường bộ nằm trong khu vực nội thành phố, nội thị xã, nội thị trấn và những đoạn đường có đông dân cư sinh sống sát dọc theo đường, có các hoạt động ảnh hưởng đến an toàn giao thông; được xác định bằng biển báo hiệu là đường khu đông dân cư.",
              "Là đoạn đường nằm ngoài khu vực nội thành phố, nội thị xã có đông người và phương tiện tham gia giao thông và được xác định cụ thể bằng biển chỉ dẫn địa giới.",
            ],
            answer:
              "Là đoạn đường bộ nằm trong khu vực nội thành phố, nội thị xã, nội thị trấn và những đoạn đường có đông dân cư sinh sống sát dọc theo đường, có các hoạt động ảnh hưởng đến an toàn giao thông; được xác định bằng biển báo hiệu là đường khu đông dân cư.",
            isImportant: 0,
          },
        ],
      },
      {
        id: "a1",
        name: "Bằng A1 - (51,100)",
        questions: [
          {
            id: 51,
            question:
              "Tốc độ tối đa cho phép đối với xe máy chuyên dùng, xe gắn máy (kể cả xe máy điện) và các loại xe tương tự trên đường bộ (trừ đường cao tốc) không được vượt quá bao nhiêu km/h?",
            options: ["50 km/h.", "40 km/h.", "60 km/h."],
            answer: "40 km/h.",
            isImportant: 0,
          },
          {
            id: 52,
            question:
              "Trên đường bộ (trừ đường cao tốc) trong khu vực đông dân cư, đường hai chiều hoặc đường một chiều có một làn xe cơ giới, loại xe nào tham gia giao thông với tốc độ tối đa cho phép là 50 km/h?",
            options: [
              "Ô tô con, ô tô tải, ô tô chở người trên 30 chỗ.",
              "Xe gắn máy, xe máy chuyên dùng.",
              "Cả ý 1 và ý 2.",
            ],
            answer: "Ô tô con, ô tô tải, ô tô chở người trên 30 chỗ.",
            isImportant: 0,
          },
          {
            id: 53,
            question:
              "Khi điều khiển xe chạy với tốc độ dưới 60 km/h, để đảm bảo khoảng cách an toàn giữa hai xe, người lái xe phải điều khiển xe như thế nào?",
            options: [
              "Chủ động giữ khoảng cách an toàn phù hợp với xe chạy liền trước xe của mình.",
              "Đảm bảo khoảng cách an toàn theo mật độ phương tiện, tình hình giao thông thực tế.",
              "Cả ý 1 và ý 2.",
            ],
            answer: "Cả ý 1 và ý 2.",
            isImportant: 0,
          },
          {
            id: 54,
            question:
              "Người lái xe phải xử lý như thế nào khi quan sát phía trước thấy người đi bộ đang sang đường tại nơi có vạch đường dành cho người đi bộ để đảm bảo an toàn?",
            options: [
              "Giảm tốc độ, đi từ từ để vượt qua trước người đi bộ.",
              "Giảm tốc độ, có thể dừng lại nếu cần thiết trước vạch dừng xe để nhường đường cho người đi bộ qua đường.",
              "Tăng tốc độ để vượt qua trước người đi bộ.",
            ],
            answer:
              "Giảm tốc độ, có thể dừng lại nếu cần thiết trước vạch dừng xe để nhường đường cho người đi bộ qua đường.",
            isImportant: 1,
          },
          {
            id: 55,
            question:
              "Tại nơi đường bộ giao nhau cùng mức với đường sắt, chỉ có đèn tín hiệu hoặc chuông báo hiệu, khi đèn tín hiệu màu đỏ đã bật sáng hoặc có tiếng chuông báo hiệu, người tham gia giao thông phải dừng lại ngay và giữ khoảng cách tối thiểu bao nhiêu mét tính từ ray gần nhất?",
            options: ["5 mét.", "3 mét.", "4 mét."],
            answer: "5 mét.",
            isImportant: 1,
          },
          {
            id: 56,
            question:
              "Các phương tiện tham gia giao thông đường bộ (kể cả những xe có quyền ưu tiên) đều phải dừng lại bên phải đường của mình và trước vạch dừng xe tại các điểm giao cắt giữa đường bộ và đường sắt khi có báo hiệu nào dưới đây?",
            options: [
              "Hiệu lệnh của nhân viên gác chắn.",
              "Đèn đỏ sáng nháy, cờ đỏ, biển đỏ.",
              "Còi, chuông kêu, chắn đã đóng.",
              "Tất cả các ý trên.",
            ],
            answer: "Tất cả các ý trên.",
            isImportant: 1,
          },
          {
            id: 57,
            question:
              "Tại nơi đường giao nhau, người lái xe đang đi trên đường không ưu tiên phải xử lý như thế nào là đúng quy tắc giao thông?",
            options: [
              "Tăng tốc độ qua đường giao nhau để đi trước xe đi trên đường ưu tiên.",
              "Giảm tốc độ qua đường giao nhau để đi trước xe đi trên đường ưu tiên.",
              "Nhường đường cho xe đi trên đường ưu tiên từ bất kỳ hướng nào tới.",
            ],
            answer:
              "Nhường đường cho xe đi trên đường ưu tiên từ bất kỳ hướng nào tới.",
            isImportant: 0,
          },
          {
            id: 58,
            question:
              "Tại nơi đường giao nhau không có báo hiệu đi theo vòng xuyến, người điều khiển phương tiện phải nhường đường như thế nào là đúng quy tắc giao thông?",
            options: [
              "Phải nhường đường cho xe đi đến từ bên phải.",
              "Xe báo hiệu xin đường trước xe đó được đi trước.",
              "Phải nhường đường cho xe đi đến từ bên trái.",
            ],
            answer: "Phải nhường đường cho xe đi đến từ bên phải.",
            isImportant: 0,
          },
          {
            id: 59,
            question:
              "Tại nơi đường giao nhau có báo hiệu đi theo vòng xuyến, người điều khiển phương tiện phải nhường đường như thế nào là đúng quy tắc giao thông?",
            options: [
              "Phải nhường đường cho xe đi đến từ bên phải.",
              "Xe báo hiệu xin đường trước xe đó được đi trước.",
              "Phải nhường đường cho xe đi đến từ bên trái.",
            ],
            answer: "Phải nhường đường cho xe đi đến từ bên trái.",
            isImportant: 0,
          },
          {
            id: 60,
            question:
              "Tại nơi đường giao nhau, người lái xe đang đi trên đường ưu tiên phải nhường đường như thế nào?",
            options: [
              "Nhường đường cho xe đi trên đường không ưu tiên từ bất kỳ hướng nào tới.",
              "Nhường đường cho xe đi trên đường ưu tiên từ bất kỳ hướng nào tới.",
              "Không phải nhường đường.",
            ],
            answer: "Không phải nhường đường.",
            isImportant: 0,
          },
          {
            id: 61,
            question:
              "Người lái xe mô tô xử lý như thế nào khi cho xe mô tô phía sau vượt?",
            options: [
              "Nếu đủ điều kiện an toàn, người lái xe phải giảm tốc độ, đi sát về bên phải của phần đường xe chạy cho đến khi xe sau đã vượt qua, không được gây trở ngại đối với xe xin vượt.",
              "Lái xe vào lề đường bên trái và giảm tốc độ để xe phía sau vượt qua.",
              "Nếu đủ điều kiện an toàn, người lái xe phải tăng tốc độ, đi sát về bên phải để xe sau vượt qua.",
            ],
            answer:
              "Nếu đủ điều kiện an toàn, người lái xe phải giảm tốc độ, đi sát về bên phải của phần đường xe chạy cho đến khi xe sau đã vượt qua, không được gây trở ngại đối với xe xin vượt.",
            isImportant: 0,
          },
          {
            id: 62,
            question:
              "Trong các trường hợp dưới đây, xe sau có thể vượt bên phải khi nào?",
            options: [
              "Khi xe trước có tín hiệu rẽ trái hoặc đang rẽ trái.",
              "Khi xe chuyên dùng đang làm việc trên đường mà không thể vượt bên trái được.",
              "Cả ý 1 và ý 2.",
            ],
            answer: "Cả ý 1 và ý 2.",
            isImportant: 0,
          },
          {
            id: 63,
            question:
              "Tại nơi đường giao nhau không có báo hiệu đi theo vòng xuyến, người điều khiển phương tiện phải nhường đường như thế nào là đúng quy tắc giao thông?",
            options: [
              "Phải nhường đường cho xe đi đến từ bên trái.",
              "Xe báo hiệu xin đường trước xe đó được đi trước.",
              "Phải nhường đường cho xe đi đến từ bên phải.",
            ],
            answer: "Phải nhường đường cho xe đi đến từ bên phải.",
            isImportant: 0,
          },
          {
            id: 64,
            question:
              "Tại nơi đường giao nhau có báo hiệu đi theo vòng xuyến, người điều khiển phương tiện phải nhường đường như thế nào là đúng quy tắc giao thông?",
            options: [
              "Phải nhường đường cho xe đi đến từ bên phải.",
              "Xe báo hiệu xin đường trước xe đó được đi trước.",
              "Phải nhường đường cho xe đi đến từ bên trái.",
            ],
            answer: "Phải nhường đường cho xe đi đến từ bên trái.",
            isImportant: 0,
          },
          {
            id: 65,
            question:
              "Người lái xe phải làm gì khi điều khiển xe vào đường cao tốc?",
            options: [
              "Phải có tín hiệu xin vào và phải nhường đường cho xe đang chạy trên đường.",
              "Khi thấy an toàn mới cho xe nhập vào dòng xe ở làn đường sát mép ngoài.",
              "Nếu có làn đường tăng tốc thì phải cho xe chạy trên làn đường đó trước khi vào làn đường của đường cao tốc.",
              "Tất cả các ý nêu trên.",
            ],
            answer: "Tất cả các ý nêu trên.",
            isImportant: 0,
          },
          {
            id: 66,
            question: "Khi ra khỏi đường cao tốc phải làm gì?",
            options: [
              "Phải thực hiện chuyển dần sang làn đường phía bên phải, nếu có làn đường giảm tốc thì phải cho xe chạy trên làn đường đó trước khi rời khỏi đường cao tốc.",
              "Phải thực hiện chuyển ngay sang làn đường phía bên phải khi thấy biển báo lối ra.",
              "Quan sát xe phía sau, nếu không thấy xe nào thì chuyển ngay sang làn bên phải.",
            ],
            answer:
              "Phải thực hiện chuyển dần sang làn đường phía bên phải, nếu có làn đường giảm tốc thì phải cho xe chạy trên làn đường đó trước khi rời khỏi đường cao tốc.",
            isImportant: 0,
          },
          {
            id: 67,
            question: "Người lái xe phải làm gì khi lùi xe?",
            options: [
              "Phải quan sát phía sau, có tín hiệu cần thiết và chỉ khi nào không nguy hiểm mới được lùi.",
              "Lùi xe thật nhanh nếu đoạn đường đó vắng người.",
              "Lùi xe và bật đèn khẩn cấp để báo hiệu.",
            ],
            answer:
              "Phải quan sát phía sau, có tín hiệu cần thiết và chỉ khi nào không nguy hiểm mới được lùi.",
            isImportant: 1,
          },
          {
            id: 68,
            question:
              "Khi tránh xe đi ngược chiều, các xe phải nhường đường như thế nào là đúng quy tắc giao thông?",
            options: [
              "Nơi đường hẹp chỉ đủ cho một xe chạy và có chỗ tránh xe thì xe nào ở gần chỗ tránh hơn phải vào vị trí tránh, nhường đường cho xe kia đi.",
              "Xe xuống dốc phải nhường đường cho xe đang lên dốc.",
              "Xe nào có chướng ngại vật phía trước phải nhường đường cho xe không có chướng ngại vật đi trước.",
              "Tất cả các ý nêu trên.",
            ],
            answer: "Tất cả các ý nêu trên.",
            isImportant: 0,
          },
          {
            id: 69,
            question:
              "Xe xuống dốc và xe đang lên dốc thì xe nào phải nhường đường?",
            options: [
              "Xe đang lên dốc phải nhường đường cho xe xuống dốc.",
              "Xe xuống dốc phải nhường đường cho xe đang lên dốc.",
              "Xe nào có trọng tải lớn hơn thì được đi trước.",
            ],
            answer: "Xe xuống dốc phải nhường đường cho xe đang lên dốc.",
            isImportant: 0,
          },
          {
            id: 70,
            question:
              "Khi dừng xe, đỗ xe trên đường phố, bánh xe gần nhất phải cách lề đường, vỉa hè không quá bao nhiêu mét?",
            options: ["0,20 mét.", "0,25 mét.", "0,30 mét.", "0,40 mét."],
            answer: "0,25 mét.",
            isImportant: 0,
          },
          {
            id: 71,
            question:
              "Dừng xe, đỗ xe trên đường phố hẹp, phải dừng, đỗ xe ở vị trí cách xe ô tô đang đỗ bên kia đường khoảng cách tối thiểu là bao nhiêu mét?",
            options: ["5 mét.", "10 mét.", "15 mét.", "20 mét."],
            answer: "20 mét.",
            isImportant: 0,
          },
          {
            id: 72,
            question:
              "Người điều khiển xe mô tô hai bánh, xe gắn máy có được đi xe dàn hàng ngang không?",
            options: ["Được phép.", "Tùy trường hợp.", "Không được phép."],
            answer: "Không được phép.",
            isImportant: 1,
          },
          {
            id: 73,
            question:
              "Người ngồi trên xe mô tô hai bánh có được sử dụng ô (dù) khi tham gia giao thông không?",
            options: [
              "Được phép.",
              "Không được phép.",
              "Chỉ người ngồi sau được sử dụng.",
            ],
            answer: "Không được phép.",
            isImportant: 1,
          },
          {
            id: 74,
            question:
              "Khi điều khiển xe mô tô tay ga xuống dốc dài, độ dốc cao, người lái xe cần lưu ý gì?",
            options: [
              "Giữ tay ga ở mức độ phù hợp, sử dụng cả phanh trước và phanh sau để giảm tốc độ.",
              "Nhả hết tay ga, tắt động cơ để tiết kiệm xăng.",
              "Chỉ sử dụng phanh trước để tránh trượt bánh sau.",
            ],
            answer:
              "Giữ tay ga ở mức độ phù hợp, sử dụng cả phanh trước và phanh sau để giảm tốc độ.",
            isImportant: 1,
          },
          {
            id: 75,
            question:
              "Kỹ thuật cơ bản để giữ thăng bằng khi đi xe mô tô trên đường gồ ghề là gì?",
            options: [
              "Đứng thẳng trên giá gác chân, hơi gập đầu gối và khuỷu tay, đi chậm.",
              "Ngồi lùi về phía sau và tăng tốc vượt nhanh qua.",
              "Ngồi nghiêng sang một bên để tránh xóc.",
            ],
            answer:
              "Đứng thẳng trên giá gác chân, hơi gập đầu gối và khuỷu tay, đi chậm.",
            isImportant: 0,
          },
          {
            id: 76,
            question:
              "Biện pháp nào dưới đây giúp tiết kiệm nhiên liệu khi lái xe?",
            options: [
              "Bảo dưỡng xe định kỳ và kiểm tra áp suất lốp đúng quy định.",
              "Luôn chạy xe ở tốc độ cao nhất có thể.",
              "Chạy xe ở số thấp thường xuyên.",
            ],
            answer:
              "Bảo dưỡng xe định kỳ và kiểm tra áp suất lốp đúng quy định.",
            isImportant: 0,
          },
          {
            id: 77,
            question:
              "Mục đích chính của bảo dưỡng định kỳ đối với xe máy là gì?",
            options: [
              "Để xe luôn có tính năng kỹ thuật tốt, tăng tuổi thọ của xe.",
              "Để xe trông sạch sẽ và mới hơn.",
              "Chỉ để thay nhớt xe khi cần.",
            ],
            answer:
              "Để xe luôn có tính năng kỹ thuật tốt, tăng tuổi thọ của xe.",
            isImportant: 0,
          },
          {
            id: 78,
            question:
              "Xe mô tô hai bánh có được phép kéo, đẩy xe khác, vật khác khi tham gia giao thông không?",
            options: [
              "Được phép.",
              "Không được phép.",
              "Chỉ được phép khi vắng người.",
            ],
            answer: "Không được phép.",
            isImportant: 1,
          },
          {
            id: 79,
            question:
              "Khi gặp biển báo 'Cấm đi ngược chiều', người lái xe xử lý như thế nào?",
            options: [
              "Không được đi vào trừ các xe ưu tiên theo luật định.",
              "Có thể đi vào nếu đường vắng.",
              "Đi vào và bật đèn báo khẩn cấp.",
            ],
            answer: "Không được đi vào trừ các xe ưu tiên theo luật định.",
            isImportant: 0,
          },
          {
            id: 80,
            question:
              "Để giảm tốc độ khi xe mô tô đang chạy, người lái xe phải thực hiện như thế nào?",
            options: [
              "Nhả hết tay ga và thực hiện phanh.",
              "Vừa tăng ga vừa phanh.",
              "Chỉ cần bóp phanh trước thật mạnh.",
            ],
            answer: "Nhả hết tay ga và thực hiện phanh.",
            isImportant: 0,
          },
          {
            id: 81,
            question:
              "Khi điều khiển xe mô tô quay đầu, người lái xe cần thực hiện như thế nào để đảm bảo an toàn?",
            options: [
              "Bật tín hiệu báo rẽ trước khi quay đầu, từ từ giảm tốc độ đến mức có thể dừng lại.",
              "Chỉ quay đầu xe tại những nơi được phép quay đầu.",
              "Quan sát an toàn các phương tiện tới từ phía trước, phía sau, hai bên đồng thời nhường đường cho xe từ bên phải và phía trước đi tới.",
              "Tất cả các ý nêu trên.",
            ],
            answer: "Tất cả các ý nêu trên.",
            isImportant: 0,
          },
          {
            id: 82,
            question:
              "Tay ga trên xe mô tô hai bánh có tác dụng gì trong các trường hợp dưới đây?",
            options: [
              "Để điều khiển xe chạy về phía trước.",
              "Để điều tiết lượng nhiên liệu đi vào buồng cháy, qua đó điều tiết công suất động cơ và tốc độ của xe.",
              "Để điều khiển xe chạy lùi.",
              "Cả ý 1 và ý 2.",
            ],
            answer: "Cả ý 1 và ý 2.",
            isImportant: 0,
          },
          {
            id: 83,
            question:
              "Gương chiếu hậu của xe mô tô hai bánh có tác dụng gì trong các trường hợp dưới đây?",
            options: [
              "Để quan sát phía trái khi chuẩn bị rẽ trái.",
              "Để quan sát phía phải khi chuẩn bị rẽ phải.",
              "Để quan sát phía sau cả bên trái và bên phải trước khi chuyển hướng.",
              "Để quan sát phía trước.",
            ],
            answer:
              "Để quan sát phía sau cả bên trái và bên phải trước khi chuyển hướng.",
            isImportant: 0,
          },
          {
            id: 84,
            question:
              "Để đảm bảo an toàn khi tham gia giao thông, người lái xe mô tô hai bánh cần điều khiển tay ga như thế nào trong các trường hợp dưới đây?",
            options: [
              "Tăng ga thật nhanh, giảm ga từ từ.",
              "Tăng ga thật nhanh, giảm ga thật nhanh.",
              "Tăng ga từ từ, giảm ga thật nhanh.",
              "Tăng ga từ từ, giảm ga từ từ.",
            ],
            answer: "Tăng ga từ từ, giảm ga thật nhanh.",
            isImportant: 0,
          },
          {
            id: 85,
            question:
              "Kỹ thuật cơ bản để giữ thăng bằng khi điều khiển xe mô tô đi trên đường gồ ghề như thế nào là đúng?",
            options: [
              "Đứng thẳng trên giá gác chân lái sau đó hơi gập đầu gối và khuỷu tay, đi chậm để không bị xóc quá mạnh.",
              "Ngồi lùi hết ra khoang yên sau, tăng ga vượt nhanh qua đoạn đường xóc.",
              "Ngồi lệch sang bên trái hoặc bên phải để thiết lập thăng bằng cho xe.",
            ],
            answer:
              "Đứng thẳng trên giá gác chân lái sau đó hơi gập đầu gối và khuỷu tay, đi chậm để không bị xóc quá mạnh.",
            isImportant: 0,
          },
          {
            id: 86,
            question:
              "Khi điều khiển xe mô tô tay ga xuống dốc dài, độ dốc cao, người lái xe cần thực hiện các thao tác nào dưới đây để đảm bảo an toàn?",
            options: [
              "Giữ tay ga ở mức độ phù hợp, sử dụng phanh trước và phanh sau để giảm tốc độ.",
              "Nhả hết tay ga, tắt động cơ, sử dụng phanh trước và phanh sau để giảm tốc độ.",
              "Tắt chìa khóa điện, nhả hết tay ga.",
            ],
            answer:
              "Giữ tay ga ở mức độ phù hợp, sử dụng phanh trước và phanh sau để giảm tốc độ.",
            isImportant: 1,
          },
          {
            id: 87,
            question:
              "Khi quay đầu xe, người lái xe cần phải làm gì để đảm bảo an toàn?",
            options: [
              "Quan sát biển báo hiệu để biết nơi được phép quay đầu; quan sát kỹ địa hình nơi chọn để quay đầu; lựa chọn quỹ đạo quay đầu xe cho thích hợp; quay đầu xe với tốc độ thấp.",
              "Nếu quay đầu xe ở nơi nguy hiểm thì đưa đầu xe về phía nguy hiểm, đưa đuôi xe về phía an toàn.",
              "Cả ý 1 và ý 2.",
            ],
            answer:
              "Quan sát biển báo hiệu để biết nơi được phép quay đầu; quan sát kỹ địa hình nơi chọn để quay đầu; lựa chọn quỹ đạo quay đầu xe cho thích hợp; quay đầu xe với tốc độ thấp.",
            isImportant: 0,
          },
          {
            id: 88,
            question:
              "Khi tránh nhau trên đường hẹp, người lái xe cần phải chú ý những điểm nào để đảm bảo an toàn giao thông?",
            options: [
              "Không nên đi cố vào đường hẹp; xe đi ở sườn núi nên dừng lại trước để nhường đường; khi dừng xe nhường đường phải đỗ ngay ngắn.",
              "Trong khi tránh nhau không nên đổi số; khi tránh nhau ban đêm phải tắt đèn pha bật đèn cốt.",
              "Khi tránh nhau ban đêm phải bật đèn pha tắt đèn cốt.",
              "Cả ý 1 và ý 2.",
            ],
            answer: "Cả ý 1 và ý 2.",
            isImportant: 0,
          },
          {
            id: 89,
            question:
              "Khi điều khiển xe mô tô hai bánh tăng số, người lái xe cần thực hiện như thế nào?",
            options: [
              "Tăng ga từ từ đồng thời giảm ga thật nhanh, thực hiện tăng số.",
              "Giảm ga đồng thời thực hiện tăng số.",
              "Thực hiện tăng ga đồng thời thực hiện tăng số.",
              "Tăng ga từ từ, không cần giảm ga.",
            ],
            answer: "Giảm ga đồng thời thực hiện tăng số.",
            isImportant: 0,
          },
          {
            id: 90,
            question:
              "Khi điều khiển xe mô tô hai bánh giảm số, người lái xe cần thực hiện như thế nào?",
            options: [
              "Tăng ga thật nhanh đồng thời thực hiện giảm số.",
              "Giảm ga đồng thời thực hiện giảm số.",
              "Thực hiện tăng ga đồng thời giảm số.",
              "Giữ nguyên ga đồng thời giảm số.",
            ],
            answer: "Giảm ga đồng thời thực hiện giảm số.",
            isImportant: 0,
          },
          {
            id: 91,
            question:
              "Khi gặp một đoàn xe, một đoàn xe tang hay một đoàn người đi bộ có tổ chức theo đội ngũ, người lái xe phải xử lý như thế nào?",
            options: [
              "Bóp còi, rú ga để cắt ngang đoàn người, đoàn xe.",
              "Không được cắt ngang qua đoàn người, đoàn xe.",
              "Báo hiệu bằng đèn cho đoàn người, đoàn xe biết để mình đi qua.",
            ],
            answer: "Không được cắt ngang qua đoàn người, đoàn xe.",
            isImportant: 1,
          },
          {
            id: 92,
            question:
              "Tại nơi đường giao nhau không có báo hiệu đi theo vòng xuyến, người điều khiển phương tiện phải nhường đường như thế nào là đúng quy tắc giao thông?",
            options: [
              "Phải nhường đường cho xe đi đến từ bên trái.",
              "Xe báo hiệu xin đường trước xe đó được đi trước.",
              "Phải nhường đường cho xe đi đến từ bên phải.",
            ],
            answer: "Phải nhường đường cho xe đi đến từ bên phải.",
            isImportant: 0,
          },
          {
            id: 93,
            question:
              "Tại nơi đường giao nhau có báo hiệu đi theo vòng xuyến, người điều khiển phương tiện phải nhường đường như thế nào là đúng quy tắc giao thông?",
            options: [
              "Phải nhường đường cho xe đi đến từ bên phải.",
              "Xe báo hiệu xin đường trước xe đó được đi trước.",
              "Phải nhường đường cho xe đi đến từ bên trái.",
            ],
            answer: "Phải nhường đường cho xe đi đến từ bên trái.",
            isImportant: 0,
          },
          {
            id: 94,
            question:
              "Người ngồi trên xe mô tô hai bánh, xe gắn máy phải đội mũ bảo hiểm có cài quai đúng quy cách khi nào?",
            options: [
              "Khi tham gia giao thông đường bộ.",
              "Chỉ khi đi trên đường cao tốc.",
              "Khi cảm thấy mất an toàn giao thông.",
            ],
            answer: "Khi tham gia giao thông đường bộ.",
            isImportant: 1,
          },
          {
            id: 95,
            question:
              "Cơ quan nào quy định đoạn đường cấm đi, đường đi một chiều, nơi cấm dừng, cấm đỗ, cấm quay đầu xe?",
            options: [
              "Ủy ban nhân dân cấp tỉnh.",
              "Bộ Giao thông vận tải.",
              "Cơ quan cảnh sát giao thông.",
              "Thanh tra giao thông.",
            ],
            answer: "Ủy ban nhân dân cấp tỉnh.",
            isImportant: 0,
          },
          {
            id: 96,
            question:
              "Người điều khiển xe mô tô hai bánh, xe gắn máy có được đi xe dàn hàng ngang; đi xe vào phần đường dành cho người đi bộ và phương tiện khác; sử dụng ô, điện thoại di động, thiết bị âm thanh (trừ thiết bị trợ thính) hay không?",
            options: [
              "Được phép.",
              "Không được phép.",
              "Được phép tùy từng trường hợp.",
            ],
            answer: "Không được phép.",
            isImportant: 1,
          },
          {
            id: 97,
            question:
              "Khi điều khiển xe trên đường vòng, người lái xe cần phải làm gì?",
            options: [
              "Quan sát cẩn thận các chướng ngại vật và báo hiệu bằng còi, đèn; giảm tốc độ tới mức an toàn, về số thấp.",
              "Tăng tốc độ để nhanh chóng vượt qua đường vòng, giảm bớt thời gian nguy hiểm.",
              "Cả ý 1 và ý 2.",
            ],
            answer:
              "Quan sát cẩn thận các chướng ngại vật và báo hiệu bằng còi, đèn; giảm tốc độ tới mức an toàn, về số thấp.",
            isImportant: 0,
          },
          {
            id: 98,
            question:
              "Để giảm tốc độ khi xe đang xuống dốc dài, người lái xe mô tô cần thực hiện thao tác nào?",
            options: [
              "Nhả hết tay ga, thực hiện phanh đồng thời phanh trước và phanh sau.",
              "Chỉ phanh trước.",
              "Chỉ phanh sau.",
            ],
            answer:
              "Nhả hết tay ga, thực hiện phanh đồng thời phanh trước và phanh sau.",
            isImportant: 0,
          },
          {
            id: 99,
            question:
              "Khi gặp biển báo dưới đây, người lái xe phải xử lý như thế nào? (Biển báo người đi bộ cắt ngang)",
            options: [
              "Giảm tốc độ, nhường đường cho người đi bộ.",
              "Tăng tốc độ để vượt qua người đi bộ.",
              "Bóp còi để người đi bộ tránh ra.",
            ],
            answer: "Giảm tốc độ, nhường đường cho người đi bộ.",
            isImportant: 0,
          },
          {
            id: 100,
            question: "Biển nào dưới đây cấm xe gắn máy?",
            options: [
              "Biển 1 (Hình xe mô tô tròn đỏ).",
              "Biển 2 (Hình xe máy tròn đỏ).",
              "Không biển nào.",
            ],
            answer: "Biển 2 (Hình xe máy tròn đỏ).",
            isImportant: 0,
          },
        ],
      },
      {
        id: "a1",
        name: "Bằng A1 - (101,150)",
        questions: [
          {
            id: 101,
            question:
              "Biển nào chỉ dẫn tên đường trên các tuyến đường đối ngoại?",
            options: ["Biển 1", "Biển 2", "Biển 3"],
            answer: "Biển 3",
            isImportant: 0,
          },
          {
            id: 102,
            question: "Biển nào báo hiệu cầu vượt liên thông?",
            options: ["Biển 1 và 2", "Biển 1 và 3", "Biển 2 và 3", "Cả 3 biển"],
            answer: "Biển 1 và 3",
            isImportant: 0,
          },
          {
            id: 103,
            question: "Biển nào báo hiệu đoạn đường hay xảy ra tai nạn?",
            options: ["Biển 1", "Biển 2", "Biển 3"],
            answer: "Biển 2",
            isImportant: 0,
          },
          {
            id: 104,
            question:
              "Biển nào báo hiệu đoạn đường hay có hiện tượng lật xe bên phải khi đường cong vòng sang trái?",
            options: ["Biển 1", "Biển 2", "Cả hai biển"],
            answer: "Biển 1",
            isImportant: 0,
          },
          {
            id: 105,
            question: "Biển nào báo hiệu cửa chui?",
            options: ["Biển 1", "Biển 2", "Biển 3"],
            answer: "Biển 2",
            isImportant: 0,
          },
          {
            id: 106,
            question:
              "Khi gặp biển nào thì người lái xe phải nhường đường cho người đi bộ?",
            options: ["Biển 1", "Biển 2", "Biển 3", "Cả 3 biển"],
            answer: "Biển 1",
            isImportant: 0,
          },
          {
            id: 107,
            question:
              "Biển nào chỉ đường dành cho người đi bộ, các loại xe không được đi vào khi gặp biển này?",
            options: ["Biển 1", "Biển 2", "Biển 3"],
            answer: "Biển 3",
            isImportant: 0,
          },
          {
            id: 108,
            question: "Biển nào báo hiệu sắp đến chỗ giao nhau nguy hiểm?",
            options: ["Biển 1", "Biển 2", "Biển 3", "Cả 3 biển"],
            answer: "Cả 3 biển",
            isImportant: 0,
          },
          {
            id: 109,
            question: "Biển nào báo hiệu giao nhau có tín hiệu đèn?",
            options: ["Biển 1", "Biển 2", "Biển 3", "Cả 3 biển"],
            answer: "Biển 3",
            isImportant: 0,
          },
          {
            id: 110,
            question:
              "Biển nào báo hiệu nguy hiểm giao nhau với đường sắt có rào chắn?",
            options: ["Biển 1", "Biển 2", "Biển 3"],
            answer: "Biển 1",
            isImportant: 0,
          },
          {
            id: 111,
            question:
              "Biển nào báo hiệu đường sắt giao nhau với đường bộ không có rào chắn?",
            options: ["Biển 1 và 2", "Biển 1 và 3", "Biển 2 và 3"],
            answer: "Biển 2 và 3",
            isImportant: 0,
          },
          {
            id: 112,
            question: "Biển nào báo hiệu hết đoạn đường ưu tiên?",
            options: ["Biển 1", "Biển 2", "Biển 3"],
            answer: "Biển 2",
            isImportant: 0,
          },
          {
            id: 113,
            question: "Biển nào báo hiệu cửa chui?",
            options: ["Biển 1", "Biển 2", "Biển 3"],
            answer: "Biển 2",
            isImportant: 0,
          },
          {
            id: 114,
            question: "Biển nào báo hiệu chú ý chướng ngại vật?",
            options: ["Biển 1", "Biển 2 và 3", "Cả 3 biển"],
            answer: "Biển 2 và 3",
            isImportant: 0,
          },
          {
            id: 115,
            question: "Biển nào báo hiệu đường đi một chiều?",
            options: ["Biển 1", "Biển 2", "C cả hai biển"],
            answer: "Biển 2",
            isImportant: 0,
          },
          {
            id: 116,
            question: "Biển nào báo hiệu đường bị hẹp cả hai bên?",
            options: ["Biển 1", "Biển 2", "Biển 3", "Biển 1 và 2"],
            answer: "Biển 1",
            isImportant: 0,
          },
          {
            id: 117,
            question: "Biển nào báo hiệu giao nhau với đường không ưu tiên?",
            options: ["Biển 1", "Biển 2", "Biển 3"],
            answer: "Biển 1",
            isImportant: 0,
          },
          {
            id: 118,
            question: "Biển nào báo hiệu giao nhau với đường ưu tiên?",
            options: ["Biển 1", "Biển 2", "Biển 3"],
            answer: "Biển 3",
            isImportant: 0,
          },
          {
            id: 119,
            question: "Biển nào báo hiệu bắt đầu đoạn đường ưu tiên?",
            options: ["Biển 1", "Biển 2", "Biển 3"],
            answer: "Biển 1",
            isImportant: 0,
          },
          {
            id: 120,
            question:
              "Biển nào báo hiệu rẽ ra đường có làn đường dành cho ô tô khách?",
            options: ["Biển 1", "Biển 2", "Biển 3"],
            answer: "Biển 3",
            isImportant: 0,
          },
          {
            id: 121,
            question: "Biển nào báo hiệu 'Đường dành cho xe thô sơ'?",
            options: ["Biển 1", "Biển 2", "Biển 3"],
            answer: "Biển 1",
            isImportant: 0,
          },
          {
            id: 122,
            question: "Biển nào báo hiệu 'Hướng đi thẳng phải theo'?",
            options: ["Biển 1", "Biển 2"],
            answer: "Biển 1",
            isImportant: 0,
          },
          {
            id: 123,
            question: "Biển nào báo hiệu 'Đường một chiều'?",
            options: ["Biển 1", "Biển 2"],
            answer: "Biển 2",
            isImportant: 0,
          },
          {
            id: 124,
            question: "Biển nào báo hiệu 'Hết đoạn đường ưu tiên'?",
            options: ["Biển 1", "Biển 2", "Biển 3"],
            answer: "Biển 3",
            isImportant: 0,
          },
          {
            id: 125,
            question: "Biển nào báo hiệu 'Giao nhau với đường ưu tiên'?",
            options: ["Biển 1", "Biển 2", "Biển 3"],
            answer: "Biển 2",
            isImportant: 0,
          },
          {
            id: 126,
            question: "Biển nào báo hiệu 'Cấm xe đạp'?",
            options: ["Biển 1", "Biển 2", "Biển 3"],
            answer: "Biển 1",
            isImportant: 0,
          },
          {
            id: 127,
            question: "Biển nào báo hiệu 'Cấm xe mô tô hai bánh'?",
            options: ["Biển 1", "Biển 2", "Biển 3"],
            answer: "Biển 1",
            isImportant: 0,
          },
          {
            id: 128,
            question: "Biển nào báo hiệu 'Cấm xe mô tô ba bánh'?",
            options: ["Biển 1 và 2", "Biển 1 và 3", "Biển 2 và 3"],
            answer: "Biển 1 và 2",
            isImportant: 0,
          },
          {
            id: 129,
            question: "Biển nào báo hiệu 'Cấm quay đầu xe'?",
            options: ["Biển 1", "Biển 2", "Cả hai biển"],
            answer: "Biển 2",
            isImportant: 0,
          },
          {
            id: 130,
            question: "Biển nào báo hiệu 'Cấm rẽ trái'?",
            options: ["Biển 1", "Biển 2", "C cả hai biển"],
            answer: "Biển 1",
            isImportant: 0,
          },
          {
            id: 131,
            question: "Biển nào báo hiệu 'Đường cấm'?",
            options: ["Biển 1", "Biển 2"],
            answer: "Biển 1",
            isImportant: 0,
          },
          {
            id: 132,
            question: "Biển nào báo hiệu 'Cấm đi ngược chiều'?",
            options: ["Biển 1", "Biển 2"],
            answer: "Biển 2",
            isImportant: 0,
          },
          {
            id: 133,
            question: "Khi gặp biển nào xe mô tô hai bánh được đi vào?",
            options: ["Biển 1", "Biển 2 và 3", "Cả 3 biển"],
            answer: "Biển 2 và 3",
            isImportant: 0,
          },
          {
            id: 134,
            question: "Biển nào xe mô tô hai bánh không được đi vào?",
            options: ["Biển 1", "Biển 2", "Biển 3"],
            answer: "Biển 2",
            isImportant: 0,
          },
          {
            id: 135,
            question: "Biển nào báo hiệu 'Cấm xe xúc tiến, xe lôi'?",
            options: ["Biển 1", "Biển 2", "Biển 3"],
            answer: "Biển 3",
            isImportant: 0,
          },
          {
            id: 136,
            question:
              "Thứ tự các xe đi như thế nào là đúng quy tắc giao thông? (Sa hình: Xe con, xe lam, xe mô tô)",
            options: [
              "Xe con, xe lam, xe mô tô",
              "Xe mô tô, xe lam, xe con",
              "Xe lam, xe con, xe mô tô",
            ],
            answer: "Xe mô tô, xe lam, xe con",
            isImportant: 0,
          },
          {
            id: 137,
            question:
              "Trường hợp này xe nào được quyền đi trước? (Sa hình: Xe quân sự và xe công an)",
            options: ["Xe quân sự", "Xe công an"],
            answer: "Xe quân sự",
            isImportant: 1,
          },
          {
            id: 138,
            question:
              "Xe nào được quyền đi trước trong trường hợp này? (Sa hình: Xe cứu thương và xe hộ đê)",
            options: ["Xe cứu thương", "Xe hộ đê"],
            answer: "Xe cứu thương",
            isImportant: 1,
          },
          {
            id: 139,
            question: "Theo hướng mũi tên, những hướng nào xe gắn máy đi được?",
            options: ["Cả 3 hướng", "Hướng 1 và 3", "Chỉ hướng 1"],
            answer: "Cả 3 hướng",
            isImportant: 0,
          },
          {
            id: 140,
            question:
              "Theo hướng mũi tên, những hướng nào xe mô tô được phép đi?",
            options: ["Cả 3 hướng", "Hướng 1 và 3", "Hướng 2 và 3"],
            answer: "Hướng 1 và 3",
            isImportant: 0,
          },
          {
            id: 141,
            question:
              "Xe nào vi phạm quy tắc giao thông? (Sa hình: Xe khách vượt xe tải có vạch kẻ liền)",
            options: ["Xe khách", "Xe tải", "Cả hai xe"],
            answer: "Xe khách",
            isImportant: 0,
          },
          {
            id: 142,
            question:
              "Các xe đi theo thứ tự nào là đúng quy tắc giao thông đường bộ? (Sa hình ngã tư không biển báo)",
            options: [
              "Xe đạp, xe khách, xe con",
              "Xe khách, xe con, xe đạp",
              "Xe con, xe đạp, xe khách",
            ],
            answer: "Xe đạp, xe khách, xe con",
            isImportant: 0,
          },
          {
            id: 143,
            question:
              "Xe nào được quyền đi trước trong trường hợp này? (Sa hình: Xe mô tô và xe con tại ngã tư)",
            options: ["Xe mô tô", "Xe con"],
            answer: "Xe mô tô",
            isImportant: 0,
          },
          {
            id: 144,
            question:
              "Xe nào phải nhường đường trong trường hợp này? (Sa hình: Xe con và xe tải tại vòng xuyến)",
            options: ["Xe con", "Xe tải"],
            answer: "Xe tải",
            isImportant: 0,
          },
          {
            id: 145,
            question:
              "Người lái xe điều khiển xe chạy theo hướng nào là đúng quy tắc giao thông? (Sa hình: Hướng 1, 2, 3, 4)",
            options: ["Hướng 1 và 2", "Hướng 2 và 3", "Hướng 1, 3 và 4"],
            answer: "Hướng 1 và 2",
            isImportant: 0,
          },
          {
            id: 146,
            question:
              "Xe nào phải nhường đường là đúng quy tắc giao thông? (Sa hình: Xe con và xe tải đi thẳng/rẽ trái)",
            options: ["Xe tải", "Xe con"],
            answer: "Xe con",
            isImportant: 0,
          },
          {
            id: 147,
            question:
              "Trong trường hợp này xe nào đỗ vi phạm quy tắc giao thông? (Sa hình: Biển cấm dừng đỗ có biển phụ xe tải)",
            options: ["Xe tải", "Xe con và xe mô tô", "Cả 3 xe"],
            answer: "Xe tải",
            isImportant: 0,
          },
          {
            id: 148,
            question:
              "Xe nào vi phạm quy tắc giao thông? (Sa hình: Xe mô tô vượt xe con tại đoạn đường có biển cấm vượt)",
            options: ["Xe con", "Xe mô tô"],
            answer: "Xe mô tô",
            isImportant: 0,
          },
          {
            id: 149,
            question:
              "Để điều khiển cho xe đi thẳng, người lái xe phải làm gì là đúng quy tắc giao thông?",
            options: [
              "Nhường đường cho xe con rẽ trái trước",
              "Biết xe con nhường đường cho mình",
              "Tăng tốc độ để đi qua trước",
            ],
            answer: "Nhường đường cho xe con rẽ trái trước",
            isImportant: 0,
          },
          {
            id: 150,
            question:
              "Bạn xử lý như thế nào khi xe phía trước đang lùi ra khỏi điểm đỗ?",
            options: [
              "Chuyển sang làn đường bên trái",
              "Bấm còi và đi tiếp",
              "Giảm tốc độ, dừng lại nhường đường",
            ],
            answer: "Giảm tốc độ, dừng lại nhường đường",
            isImportant: 0,
          },
        ],
      },
      {
        id: "a1",
        name: "Bằng A1 - (151,200)",
        questions: [
          {
            id: 151,
            question:
              "Khi điều khiển xe mô tô tay ga xuống dốc dài, độ dốc cao, người lái xe cần thực hiện thao tác nào để đảm bảo an toàn?",
            options: [
              "Giữ tay ga ở mức độ phù hợp, sử dụng đồng thời phanh trước và phanh sau để giảm tốc độ.",
              "Nhả hết tay ga, tắt động cơ, sử dụng phanh trước và phanh sau để giảm tốc độ.",
              "Tắt chìa khóa điện, nhả hết tay ga để xe tự trôi xuống dốc.",
            ],
            answer:
              "Giữ tay ga ở mức độ phù hợp, sử dụng đồng thời phanh trước và phanh sau để giảm tốc độ.",
            isImportant: 1,
          },
          {
            id: 152,
            question:
              "Khi đang lái xe mô tô, nếu có nhu cầu sử dụng điện thoại để nhắn tin hoặc gọi điện, người lái xe phải thực hiện như thế nào?",
            options: [
              "Giảm tốc độ để đảm bảo an toàn với xe phía trước và sử dụng điện thoại để nhắn tin hoặc gọi điện.",
              "Giảm tốc độ để dừng xe ở nơi cho phép dừng xe, sau đó sử dụng điện thoại để nhắn tin hoặc gọi điện.",
              "Tăng tốc độ để cách xa xe phía sau và sử dụng điện thoại.",
            ],
            answer:
              "Giảm tốc độ để dừng xe ở nơi cho phép dừng xe, sau đó sử dụng điện thoại để nhắn tin hoặc gọi điện.",
            isImportant: 1,
          },
          {
            id: 153,
            question:
              "Những thói quen nào dưới đây khi điều khiển xe mô tô tay ga dễ gây tai nạn nguy hiểm?",
            options: [
              "Sử dụng cả phanh trước và phanh sau.",
              "Chỉ sử dụng phanh trước.",
              "Giảm ga từ từ.",
            ],
            answer: "Chỉ sử dụng phanh trước.",
            isImportant: 0,
          },
          {
            id: 154,
            question:
              "Tại nơi đường giao nhau cùng mức với đường sắt, chỉ có đèn tín hiệu hoặc chuông báo hiệu, khi đèn tín hiệu màu đỏ đã bật sáng hoặc có tiếng chuông báo hiệu, người tham gia giao thông phải xử lý như thế nào?",
            options: [
              "Dừng lại ngay và giữ khoảng cách tối thiểu 5 mét tính từ ray gần nhất.",
              "Nhanh chóng cho xe vượt qua đường sắt trước khi tàu đến.",
              "Giảm tốc độ và quan sát, nếu thấy không có tàu thì vượt qua.",
            ],
            answer:
              "Dừng lại ngay và giữ khoảng cách tối thiểu 5 mét tính từ ray gần nhất.",
            isImportant: 1,
          },
          {
            id: 155,
            question:
              "Người lái xe phải xử lý như thế nào khi quan sát phía trước thấy người đi bộ đang sang đường tại nơi có vạch đường dành cho người đi bộ?",
            options: [
              "Giảm tốc độ, đi từ từ để vượt qua trước người đi bộ.",
              "Giảm tốc độ, có thể dừng lại nếu cần thiết trước vạch dừng xe để nhường đường cho người đi bộ.",
              "Tăng tốc độ để vượt qua trước người đi bộ.",
            ],
            answer:
              "Giảm tốc độ, có thể dừng lại nếu cần thiết trước vạch dừng xe để nhường đường cho người đi bộ.",
            isImportant: 1,
          },
          {
            id: 156,
            question:
              "Khi muốn lùi xe nhưng không quan sát được phía sau, người lái xe cần làm gì để đảm bảo an toàn?",
            options: [
              "Phải xuống xe để quan sát.",
              "Không được lùi xe.",
              "Bấm còi 3 lần liên tiếp trước khi lùi.",
            ],
            answer: "Không được lùi xe.",
            isImportant: 1,
          },
          {
            id: 157,
            question:
              "Khi điều khiển xe mô tô hai bánh tăng số, người lái xe cần thực hiện như thế nào để đảm bảo vận hành đúng kỹ thuật?",
            options: [
              "Tăng ga từ từ, đồng thời giảm ga thật nhanh, thực hiện tăng số.",
              "Giảm ga đồng thời thực hiện tăng số.",
              "Cả ý 1 và ý 2.",
            ],
            answer: "Giảm ga đồng thời thực hiện tăng số.",
            isImportant: 0,
          },
          {
            id: 158,
            question:
              "Tại ngã tư không có đảo an toàn (vòng xuyến), người lái xe phải nhường đường như thế nào là đúng?",
            options: [
              "Nhường đường cho xe đi từ bên phải đến.",
              "Nhường đường cho xe đi từ bên trái đến.",
              "Xe nào đến trước được đi trước.",
            ],
            answer: "Nhường đường cho xe đi từ bên phải đến.",
            isImportant: 0,
          },
          {
            id: 159,
            question:
              "Người lái xe phải giảm tốc độ thấp hơn tốc độ tối đa cho phép đến mức cần thiết trong trường hợp nào dưới đây?",
            options: [
              "Khi có biển báo hiệu nguy hiểm trên đường.",
              "Khi qua cầu, cống hẹp; khi lên gần đỉnh dốc, khi xuống dốc.",
              "Cả ý 1 và ý 2.",
            ],
            answer: "Cả ý 1 và ý 2.",
            isImportant: 0,
          },
          {
            id: 160,
            question:
              "Trên đường cao tốc, người lái xe phải dừng xe, đỗ xe như thế nào?",
            options: [
              "Chỉ được dừng xe, đỗ xe ở nơi quy định.",
              "Được dừng xe, đỗ xe ở nơi đường rộng.",
              "Chỉ được dừng xe, đỗ xe trên làn đường khẩn cấp.",
            ],
            answer: "Chỉ được dừng xe, đỗ xe ở nơi quy định.",
            isImportant: 0,
          },
          {
            id: 161,
            question:
              "Khi gặp xe buýt đang dừng đón, trả khách, người điều khiển xe mô tô phải xử lý như thế nào?",
            options: [
              "Tăng tốc độ để nhanh chóng vượt qua xe buýt.",
              "Giảm tốc độ đến mức an toàn, quan sát và từ từ vượt qua xe buýt.",
              "Bấm còi liên tục để cảnh báo hành khách đang lên xuống xe.",
            ],
            answer:
              "Giảm tốc độ đến mức an toàn, quan sát và từ từ vượt qua xe buýt.",
            isImportant: 0,
          },
          {
            id: 162,
            question:
              "Hành vi sử dụng xe mô tô để kéo theo một xe mô tô khác bị hết xăng có được phép hay không?",
            options: [
              "Được phép.",
              "Không được phép.",
              "Được phép nếu có dây kéo chắc chắn.",
            ],
            answer: "Không được phép.",
            isImportant: 1,
          },
          {
            id: 163,
            question:
              "Người điều khiển xe mô tô phải giảm tốc độ và hết sức thận trọng khi qua những đoạn đường nào dưới đây?",
            options: [
              "Đường ướt, đường có sỏi cát trên mặt đường.",
              "Đường hẹp có nhiều điểm giao cắt.",
              "Tất cả các ý nêu trên.",
            ],
            answer: "Tất cả các ý nêu trên.",
            isImportant: 0,
          },
          {
            id: 164,
            question: "Khi gặp biển nào thì xe mô tô hai bánh được đi vào?",
            options: [
              "Biển 1 (Cấm xe mô tô).",
              "Biển 2 (Cấm xe ô tô).",
              "Biển 3 (Cấm xe tải).",
            ],
            answer: "Biển 2 và 3",
            isImportant: 0,
          },
          {
            id: 165,
            question: "Biển nào báo hiệu giao nhau với đường không ưu tiên?",
            options: ["Biển 1", "Biển 2", "Biển 3"],
            answer: "Biển 1",
            isImportant: 0,
          },
          {
            id: 166,
            question:
              "Biển nào báo hiệu đường sắt giao nhau với đường bộ không có rào chắn?",
            options: ["Biển 1", "Biển 2 và 3", "Cả 3 biển"],
            answer: "Biển 2 và 3",
            isImportant: 0,
          },
          {
            id: 167,
            question:
              "Gặp biển nào người lái xe phải giảm tốc độ, chú ý xe đi ngược chiều, xe đi ở phía đường bị hẹp phải nhường đường cho xe đi ngược chiều?",
            options: ["Biển 1", "Biển 2 và 3", "Biển 2"],
            answer: "Biển 2 và 3",
            isImportant: 0,
          },
          {
            id: 168,
            question: "Biển nào báo hiệu hướng đi thẳng phải theo?",
            options: ["Biển 1", "Biển 2"],
            answer: "Biển 1",
            isImportant: 0,
          },
          {
            id: 169,
            question:
              "Vạch kẻ đường nào dưới đây là vạch phân chia các làn xe cùng chiều?",
            options: ["Vạch 1", "Vạch 2", "Vạch 1 và 2"],
            answer: "Vạch 1 và 2",
            isImportant: 0,
          },
          {
            id: 170,
            question: "Khi gặp vạch kẻ đường nào các xe được phép đè vạch?",
            options: ["Vạch 1", "Vạch 2", "Vạch 1 và 3"],
            answer: "Vạch 1 và 3",
            isImportant: 0,
          },
          {
            id: 171,
            question:
              "Tại nơi đường giao nhau, khi đèn điều khiển giao thông có tín hiệu vàng, người điều khiển phương tiện phải thực hiện như thế nào?",
            options: [
              "Phải dừng lại trước vạch dừng.",
              "Nếu đã đi quá vạch dừng hoặc đã quá gần vạch dừng mà dừng lại thấy nguy hiểm thì được đi tiếp.",
              "Cả ý 1 và ý 2.",
            ],
            answer: "Cả ý 1 và ý 2.",
            isImportant: 1,
          },
          {
            id: 172,
            question: "Biển nào báo hiệu 'Giao nhau với đường ưu tiên'?",
            options: ["Biển 1", "Biển 2", "Biển 3"],
            answer: "Biển 3",
            isImportant: 0,
          },
          {
            id: 173,
            question:
              "Theo tín hiệu đèn, xe nào được quyền đi là đúng quy tắc giao thông? (Sa hình ngã tư có đèn)",
            options: ["Xe con, xe tải", "Xe mô tô", "Tất cả các xe"],
            answer: "Xe con, xe tải",
            isImportant: 0,
          },
          {
            id: 174,
            question:
              "Xe nào vi phạm quy tắc giao thông khi dừng đỗ tại nơi có biển cấm dừng đỗ?",
            options: ["Xe mô tô", "Xe tải", "Cả hai xe"],
            answer: "Cả hai xe",
            isImportant: 0,
          },
          {
            id: 175,
            question:
              "Bạn xử lý như thế nào khi thấy một người già đang bắt đầu đi bộ sang đường?",
            options: [
              "Bấm còi để người đó dừng lại cho mình đi qua.",
              "Giảm tốc độ, dừng lại nhường đường một cách an toàn.",
              "Tăng tốc độ vượt qua trước khi người đó đi ra giữa đường.",
            ],
            answer: "Giảm tốc độ, dừng lại nhường đường một cách an toàn.",
            isImportant: 0,
          },
          {
            id: 176,
            question:
              "Khi gặp xe ưu tiên đang phát tín hiệu ưu tiên đi làm nhiệm vụ, người lái xe phải thực hiện hành vi nào dưới đây?",
            options: [
              "Nhanh chóng tăng tốc độ, tránh sang đường để nhường đường cho xe ưu tiên. Không được gây cản trở xe ưu tiên.",
              "Giảm tốc độ, tránh hoặc dừng lại sát lề đường bên phải để nhường đường.",
              "Cứ đi tự nhiên vì mình đang đi đúng phần đường của mình.",
            ],
            answer:
              "Giảm tốc độ, tránh hoặc dừng lại sát lề đường bên phải để nhường đường.",
            isImportant: 1,
          },
          {
            id: 177,
            question:
              "Tại nơi đường giao nhau, người lái xe đang đi trên đường không ưu tiên phải nhường đường như thế nào là đúng quy tắc giao thông?",
            options: [
              "Nhường đường cho xe đi ở bên phải mình tới.",
              "Nhường đường cho xe đi ở bên trái mình tới.",
              "Nhường đường cho xe đi trên đường ưu tiên hoặc đường chính từ bất kỳ hướng nào tới.",
            ],
            answer:
              "Nhường đường cho xe đi trên đường ưu tiên hoặc đường chính từ bất kỳ hướng nào tới.",
            isImportant: 1,
          },
          {
            id: 178,
            question:
              "Khi điều khiển xe trên đường cao tốc, những hành vi nào dưới đây bị nghiêm cấm?",
            options: [
              "Quay đầu xe, lùi xe, cho xe chạy quá tốc độ tối đa hoặc dưới tốc độ tối thiểu ghi trên biển báo hiệu, sơn kẻ mặt đường.",
              "Dừng xe, đỗ xe đúng nơi quy định.",
              "Chạy xe ở làn đường khẩn cấp khi xe gặp sự cố.",
            ],
            answer:
              "Quay đầu xe, lùi xe, cho xe chạy quá tốc độ tối đa hoặc dưới tốc độ tối thiểu ghi trên biển báo hiệu, sơn kẻ mặt đường.",
            isImportant: 1,
          },
          {
            id: 179,
            question:
              "Người lái xe mô tô có được phép buông cả hai tay khi đang điều khiển xe không?",
            options: [
              "Được phép nếu xe đang đi trên đường vắng.",
              "Không được phép.",
              "Được phép nếu là người lái xe có kinh nghiệm.",
            ],
            answer: "Không được phép.",
            isImportant: 1,
          },
          {
            id: 180,
            question: "Biển nào báo hiệu 'Giao nhau với đường ưu tiên'?",
            options: ["Biển 1", "Biển 2", "Biển 3"],
            answer: "Biển 2",
            isImportant: 0,
          },
          {
            id: 181,
            question:
              "Biển nào báo hiệu đường sắt giao nhau với đường bộ vuông góc?",
            options: ["Biển 1 và 2", "Biển 1 và 3", "Biển 2 và 3"],
            answer: "Biển 1 và 2",
            isImportant: 0,
          },
          {
            id: 182,
            question:
              "Trong trường hợp xe cứu hỏa và xe cứu thương cùng đi làm nhiệm vụ, xe nào được quyền đi trước?",
            options: ["Xe cứu hỏa", "Xe cứu thương"],
            answer: "Xe cứu hỏa",
            isImportant: 1,
          },
          {
            id: 183,
            question:
              "Thứ tự các xe đi như thế nào là đúng quy tắc giao thông? (Ngã tư có xe ưu tiên)",
            options: [
              "Xe ưu tiên, xe đường ưu tiên, xe đường không ưu tiên.",
              "Xe đường ưu tiên, xe ưu tiên, xe đường không ưu tiên.",
              "Xe nào đến ngã tư trước thì được đi trước.",
            ],
            answer: "Xe ưu tiên, xe đường ưu tiên, xe đường không ưu tiên.",
            isImportant: 0,
          },
          {
            id: 184,
            question:
              "Người lái xe phải xử lý như thế nào khi thấy biển báo hiệu đường bị hẹp có xe đi ngược chiều?",
            options: [
              "Nhường đường cho xe đi ngược chiều đã vào đoạn đường hẹp.",
              "Tăng tốc độ để vượt qua đoạn đường hẹp trước.",
              "Bấm còi báo hiệu để xe ngược chiều phải dừng lại.",
            ],
            answer: "Nhường đường cho xe đi ngược chiều đã vào đoạn đường hẹp.",
            isImportant: 0,
          },
          {
            id: 185,
            question:
              "Hành vi lắp đặt, sử dụng còi, đèn không đúng thiết kế của nhà sản xuất đối với từng loại xe cơ giới có được phép hay không?",
            options: [
              "Được phép.",
              "Không được phép.",
              "Được phép nếu đi vào ban đêm.",
            ],
            answer: "Không được phép.",
            isImportant: 1,
          },
          {
            id: 186,
            question: "Biển nào báo hiệu hết đường dành cho xe ô tô?",
            options: ["Biển 1", "Biển 2"],
            answer: "Biển 2",
            isImportant: 0,
          },
          {
            id: 187,
            question:
              "Khi gặp biển 'Dừng lại' (STOP), những loại xe nào phải dừng lại?",
            options: [
              "Tất cả các loại xe cơ giới kể cả xe ưu tiên theo luật định.",
              "Chỉ các loại xe không phải xe ưu tiên.",
              "Các loại xe tải có trọng tải lớn.",
            ],
            answer:
              "Tất cả các loại xe cơ giới kể cả xe ưu tiên theo luật định.",
            isImportant: 1,
          },
          {
            id: 188,
            question: "Biển nào báo hiệu cầu hẹp?",
            options: ["Biển 1", "Biển 2", "Biển 3"],
            answer: "Biển 2",
            isImportant: 0,
          },
          {
            id: 189,
            question:
              "Biển nào báo hiệu đường giao nhau của các tuyến đường cùng cấp?",
            options: ["Biển 1", "Biển 2", "Biển 3"],
            answer: "Biển 1",
            isImportant: 0,
          },
          {
            id: 190,
            question:
              "Người lái xe mô tô xử lý như thế nào khi thấy xe phía trước đè lên vạch kẻ đường nét liền?",
            options: [
              "Báo hiệu và vượt qua bình thường.",
              "Giữ khoảng cách an toàn và không vượt.",
              "Cố gắng lách qua bên phải xe đó.",
            ],
            answer: "Giữ khoảng cách an toàn và không vượt.",
            isImportant: 0,
          },
          {
            id: 191,
            question:
              "Tác dụng của mũ bảo hiểm cho người đi xe mô tô hai bánh khi tham gia giao thông là gì?",
            options: [
              "Để làm đẹp.",
              "Để tránh mưa nắng.",
              "Để giảm thiểu chấn thương vùng đầu.",
              "Để đối phó với cảnh sát giao thông.",
            ],
            answer: "Để giảm thiểu chấn thương vùng đầu.",
            isImportant: 0,
          },
          {
            id: 192,
            question:
              "Khi điều khiển xe mô tô, người lái xe có được phép sử dụng chân chống quẹt xuống đường khi xe đang chạy không?",
            options: [
              "Được phép.",
              "Không được phép.",
              "Chỉ thực hiện trên đường vắng.",
            ],
            answer: "Không được phép.",
            isImportant: 1,
          },
          {
            id: 193,
            question: "Biển nào báo hiệu đường hầm?",
            options: ["Biển 1", "Biển 2", "Biển 3"],
            answer: "Biển 2",
            isImportant: 0,
          },
          {
            id: 194,
            question: "Biển nào báo hiệu hướng đi thẳng phải theo?",
            options: ["Biển 1", "Biển 2"],
            answer: "Biển 1",
            isImportant: 0,
          },
          {
            id: 195,
            question:
              "Khi gặp xe ưu tiên đi làm nhiệm vụ nhưng không phát tín hiệu còi, cờ, đèn theo quy định, người lái xe xử lý như thế nào?",
            options: [
              "Vẫn phải nhường đường như xe có tín hiệu.",
              "Không bắt buộc phải nhường đường, đối xử như xe bình thường.",
              "Tăng tốc độ để vượt qua.",
            ],
            answer:
              "Không bắt buộc phải nhường đường, đối xử như xe bình thường.",
            isImportant: 0,
          },
          {
            id: 196,
            question:
              "Trên đoạn đường dốc, xe xuống dốc và xe đang lên dốc thì xe nào phải nhường đường?",
            options: [
              "Xe lên dốc nhường xe xuống dốc.",
              "Xe xuống dốc phải nhường đường cho xe đang lên dốc.",
            ],
            answer: "Xe xuống dốc phải nhường đường cho xe đang lên dốc.",
            isImportant: 0,
          },
          {
            id: 197,
            question:
              "Khoảng cách an toàn tối thiểu giữa hai xe khi chạy với tốc độ 60km/h trên đường khô ráo là bao nhiêu?",
            options: ["35 mét.", "55 mét.", "70 mét."],
            answer: "35 mét.",
            isImportant: 0,
          },
          {
            id: 198,
            question: "Biển nào báo hiệu kết thúc đường cao tốc?",
            options: ["Biển 1", "Biển 2"],
            answer: "Biển 2",
            isImportant: 0,
          },
          {
            id: 199,
            question:
              "Hành vi bỏ trốn sau khi gây tai nạn để trốn tránh trách nhiệm hoặc khi có điều kiện mà cố ý không cứu giúp người bị nạn bị xử lý như thế nào?",
            options: [
              "Không bị xử lý.",
              "Bị xử phạt hành chính.",
              "Bị nghiêm cấm.",
            ],
            answer: "Bị nghiêm cấm.",
            isImportant: 1,
          },
          {
            id: 200,
            question:
              "Người lái xe có văn hóa giao thông khi tham gia giao thông phải có các biểu hiện nào dưới đây?",
            options: [
              "Có tính trách nhiệm cao, tự giác chấp hành quy tắc giao thông đường bộ.",
              "Có tính cộng đồng, biết nhường nhịn và giúp đỡ người khác khi gặp khó khăn.",
              "Cả ý 1 và ý 2.",
            ],
            answer: "Cả ý 1 và ý 2.",
            isImportant: 0,
          },
        ],
      },
    ],
  },
];
