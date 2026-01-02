// --- 1. KHAI BÁO BIẾN & DOM ELEMENTS ---
const homeScreen = document.getElementById("home-screen");
const subtopicScreen = document.getElementById("subtopic-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");

const categoryGrid = document.getElementById("category-grid");
const subtopicGrid = document.getElementById("subtopic-grid");
const categoryTitle = document.getElementById("category-title");

let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let timer;
const TIME_PER_QUESTION = 15;

// --- 2. KHỞI TẠO ỨNG DỤNG (Màn hình trang chủ) ---
function initApp() {
  // Xóa nội dung cũ để tránh bị trùng lặp
  categoryGrid.innerHTML = "";

  // Duyệt qua dữ liệu để tạo ô chủ đề lớn
  quizData.forEach((category) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
            <span class="card-icon">${category.icon}</span>
            <span class="card-title">${category.name}</span>
        `;
    // Click vào thì mở màn hình Sub-topic
    card.onclick = () => showSubTopics(category);
    categoryGrid.appendChild(card);
  });
}

// --- 3. CHUYỂN ĐỔI MÀN HÌNH ---

// Hiện danh sách chủ đề con
function showSubTopics(category) {
  // Ẩn Home, hiện Subtopic
  homeScreen.classList.remove("active");
  subtopicScreen.classList.add("active");

  // Cập nhật tiêu đề
  categoryTitle.innerText = category.name;
  subtopicGrid.innerHTML = ""; // Reset lưới cũ

  // Tạo các ô chủ đề con
  category.subTopics.forEach((sub) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
            <span class="card-title">${sub.name}</span>
            <p style="font-size: 0.9em; color: #666; margin-top:5px;">${sub.questions.length} câu hỏi</p>
        `;

    // --- QUAN TRỌNG: SỰ KIỆN CLICK BẮT ĐẦU QUIZ ---
    card.onclick = () => {
      console.log("Đã chọn chủ đề:", sub.name); // Kiểm tra log
      startQuiz(sub.questions);
    };

    subtopicGrid.appendChild(card);
  });
}

// Quay lại trang chủ
function goBackHome() {
  // Ẩn tất cả màn hình phụ, hiện màn hình Home
  subtopicScreen.classList.remove("active");
  quizScreen.classList.remove("active");
  resultScreen.classList.remove("active");
  homeScreen.classList.add("active");
  clearInterval(timer); // Dừng đồng hồ nếu có
}

// --- 4. LOGIC LÀM BÀI QUIZ ---

function startQuiz(questionsList) {
  if (!questionsList || questionsList.length === 0) {
    alert("Chủ đề này chưa có câu hỏi nào!");
    return;
  }

  // Trộn câu hỏi ngẫu nhiên
  currentQuestions = questionsList.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  score = 0;

  // Chuyển màn hình
  subtopicScreen.classList.remove("active");
  quizScreen.classList.add("active");

  // Cập nhật điểm hiển thị ban đầu
  document.getElementById("current-score").innerText = score;

  // Load câu đầu tiên
  loadQuestion();
}

function loadQuestion() {
  clearInterval(timer); // Reset đồng hồ cũ

  const data = currentQuestions[currentQuestionIndex];

  // Hiển thị nội dung câu hỏi
  document.getElementById("question-text").innerText = `Câu ${
    currentQuestionIndex + 1
  }: ${data.question}`;

  const optionsDiv = document.getElementById("options-container");
  optionsDiv.innerHTML = ""; // Xóa nút cũ

  // Tạo nút đáp án
  data.options.forEach((opt, index) => {
    const btn = document.createElement("button");
    btn.innerText = opt;
    btn.className = "btn-option"; // Dùng class css đã tạo
    // Gán sự kiện click chọn đáp án
    btn.onclick = () => checkAnswer(index, data.answer, btn);
    optionsDiv.appendChild(btn);
  });

  // Bắt đầu đếm ngược
  startTimer();
}

function checkAnswer(selectedIndex, correctIndex, btnElement) {
  clearInterval(timer); // Dừng đồng hồ

  const allButtons = document.querySelectorAll(".btn-option");
  // Khóa tất cả nút
  allButtons.forEach((btn) => btn.classList.add("disabled"));

  if (selectedIndex === correctIndex) {
    btnElement.classList.add("correct"); // Màu xanh
    score += 10;
    document.getElementById("current-score").innerText = score;
  } else {
    btnElement.classList.add("wrong"); // Màu đỏ
    // Hiện đáp án đúng
    allButtons[correctIndex].classList.add("correct");
  }

  // Chuyển câu sau 1.5s
  setTimeout(nextQuestion, 1500);
}

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < currentQuestions.length) {
    loadQuestion();
  } else {
    endQuiz();
  }
}

// --- 5. LOGIC ĐỒNG HỒ & KẾT THÚC ---

function startTimer() {
  let time = TIME_PER_QUESTION;
  document.getElementById("time-left").innerText = time;

  timer = setInterval(() => {
    time--;
    document.getElementById("time-left").innerText = time;
    if (time <= 0) {
      clearInterval(timer);
      handleTimeOut();
    }
  }, 1000);
}

function handleTimeOut() {
  const data = currentQuestions[currentQuestionIndex];
  const allButtons = document.querySelectorAll(".btn-option");
  allButtons.forEach((btn) => btn.classList.add("disabled"));

  // Hiện đáp án đúng khi hết giờ
  allButtons[data.answer].classList.add("correct");

  setTimeout(nextQuestion, 1500);
}

function endQuiz() {
  quizScreen.classList.remove("active");
  resultScreen.classList.add("active");
  document.getElementById("final-score").innerText = `${score} / ${
    currentQuestions.length * 10
  }`;
}

// --- 6. CHẠY ỨNG DỤNG ---
initApp();

// --- 7. TÍNH NĂNG ĐỌC FILE (FILE READER) ---

// Hàm kích hoạt thẻ input ẩn
function triggerUpload() {
  document.getElementById("file-input").click();
}

// Hàm xử lý khi người dùng chọn file
function handleFileSelect(event) {
  const file = event.target.files[0];

  if (!file) {
    return; // Người dùng nhấn Cancel
  }

  // Kiểm tra đuôi file có phải JSON không (đơn giản)
  if (file.type !== "application/json" && !file.name.endsWith(".json")) {
    alert("Vui lòng chọn file đúng định dạng .JSON!");
    return;
  }

  const reader = new FileReader();

  // Sự kiện khi đọc file hoàn tất
  reader.onload = function (e) {
    try {
      const fileContent = e.target.result;

      // QUAN TRỌNG: Chuyển đổi text thành Object/Array
      const newData = JSON.parse(fileContent);

      // Kiểm tra sơ bộ xem dữ liệu có đúng cấu trúc không
      if (!Array.isArray(newData)) {
        throw new Error("Dữ liệu không phải là danh sách (Array)!");
      }

      // CẬP NHẬT DỮ LIỆU
      // Lưu ý: Biến quizData ở file data.js phải khai báo là 'let' hoặc 'var'
      // (Nếu đang là 'const' thì phải sửa lại thành 'let' ở file data.js)

      // Cách xử lý an toàn: Ghi đè biến toàn cục
      // (JS cho phép ghi đè biến global nếu không dùng const/let trong block scope)
      window.quizData = newData;

      alert("Đã nạp dữ liệu thành công!");

      // Vẽ lại giao diện trang chủ với dữ liệu mới
      initApp();
      goBackHome();
    } catch (error) {
      console.error(error);
      alert("Lỗi đọc file: File JSON bị lỗi cú pháp hoặc sai cấu trúc!");
    }
  };

  // Bắt đầu đọc file dưới dạng văn bản
  reader.readAsText(file);

  // Reset thẻ input để có thể chọn lại cùng 1 file nếu muốn
  event.target.value = "";
}
