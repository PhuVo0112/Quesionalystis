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
        ],
      },
    ],
  },
];
