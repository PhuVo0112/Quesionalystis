// Các thành phần DOM (DOM Elements)
const homeScreen = document.getElementById("home-screen");
const subtopicScreen = document.getElementById("subtopic-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");

const categoryGrid = document.getElementById("category-grid");
const subtopicGrid = document.getElementById("subtopic-grid");
const categoryTitle = document.getElementById("category-title");

// Trạng thái ứng dụng (State)
let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let timer;
const TIME_PER_QUESTION = 20;

// Khởi tạo (Init)
function initApp() {
  categoryGrid.innerHTML = "";

  quizData.forEach((category) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
            <span class="card-icon">${category.icon}</span>
            <span class="card-title">${category.name}</span>
        `;
    card.onclick = () => showSubTopics(category);
    categoryGrid.appendChild(card);
  });
}

// Điều hướng (Navigation)
function showSubTopics(category) {
  homeScreen.classList.remove("active");
  subtopicScreen.classList.add("active");

  categoryTitle.innerText = category.name;
  subtopicGrid.innerHTML = "";

  category.subTopics.forEach((sub) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
            <span class="card-title">${sub.name}</span>
            <p style="font-size: 0.9em; color: #666; margin-top:5px;">${sub.questions.length} câu hỏi</p>
        `;
    card.onclick = () => startQuiz(sub.questions);
    subtopicGrid.appendChild(card);
  });
}

function goBackHome() {
  subtopicScreen.classList.remove("active");
  quizScreen.classList.remove("active");
  resultScreen.classList.remove("active");
  homeScreen.classList.add("active");
  clearInterval(timer);
}

// Logic bài thi (Quiz Logic)
function startQuiz(questionsList) {
  if (!questionsList || questionsList.length === 0) {
    alert("Chủ đề này chưa có câu hỏi nào!");
    return;
  }

  // Deep copy để tránh thay đổi dữ liệu gốc khi trộn (Deep copy)
  const questionsCopy = JSON.parse(JSON.stringify(questionsList));

  // Trộn thứ tự câu hỏi
  currentQuestions = questionsCopy.sort(() => Math.random() - 0.5);

  // Trộn thứ tự đáp án trong từng câu
  currentQuestions.forEach((q) => {
    q.options.sort(() => Math.random() - 0.5);
  });

  currentQuestionIndex = 0;
  score = 0;

  subtopicScreen.classList.remove("active");
  quizScreen.classList.add("active");
  document.getElementById("current-score").innerText = score;

  loadQuestion();
}

function loadQuestion() {
  clearInterval(timer);

  const data = currentQuestions[currentQuestionIndex];
  document.getElementById("question-text").innerText =
    `Câu ${currentQuestionIndex + 1}: ${data.question}`;

  const optionsDiv = document.getElementById("options-container");
  optionsDiv.innerHTML = "";

  data.options.forEach((opt, index) => {
    const btn = document.createElement("button");
    btn.innerText = opt;
    btn.className = "btn-option";
    btn.onclick = () => checkAnswer(index, data.answer, btn);
    optionsDiv.appendChild(btn);
  });

  startTimer();
}

function checkAnswer(selectedIndex, correctAnswerString, btnElement) {
  clearInterval(timer);

  const allButtons = document.querySelectorAll(".btn-option");
  allButtons.forEach((btn) => btn.classList.add("disabled"));

  const currentQ = currentQuestions[currentQuestionIndex];
  const selectedText = currentQ.options[selectedIndex];

  // So sánh chuỗi vì thứ tự đáp án đã bị trộn
  if (selectedText === correctAnswerString) {
    btnElement.classList.add("correct");
    score += 10;
    document.getElementById("current-score").innerText = score;
    setTimeout(nextQuestion, 2000);
  } else {
    btnElement.classList.add("wrong");

    // Tìm và highlight đáp án đúng
    allButtons.forEach((btn) => {
      if (btn.innerText === correctAnswerString) btn.classList.add("correct");
    });

    // KIỂM TRA ĐIỂM LIỆT (Critical Check)
    // Nếu sai câu quan trọng -> Rớt ngay lập tức
    if (currentQ.isImportant == 1) {
      showCriticalFailure();
      return;
    }

    setTimeout(nextQuestion, 2000);
  }
}

function showCriticalFailure() {
  score = 0;
  document.getElementById("current-score").innerText = score;

  // Chèn HTML cảnh báo trực tiếp vào body
  const warningHTML = `
        <div id="critical-overlay" class="critical-overlay">
            <div class="critical-box">
                <div class="critical-icon">☠️</div>
                <h2>SAI CÂU ĐIỂM LIỆT!</h2>
                <p>Bạn đã trả lời sai câu hỏi quan trọng.</p>
                <p class="critical-reason">Theo quy định, bài thi bị <strong>HỦY BỎ</strong> lập tức.</p>
                <div class="critical-score">Điểm: 0</div>
                <button class="btn-critical-confirm" onclick="confirmCriticalEnd()">Xem kết quả</button>
            </div>
        </div>
    `;
  document.body.insertAdjacentHTML("beforeend", warningHTML);
}

// Gán vào window để gọi được từ HTML string ở trên
window.confirmCriticalEnd = function () {
  const overlay = document.getElementById("critical-overlay");
  if (overlay) overlay.remove();
  endQuiz();
};

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < currentQuestions.length) {
    loadQuestion();
  } else {
    endQuiz();
  }
}

// Bộ đếm giờ (Timer)
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
  allButtons.forEach((btn) => {
    btn.classList.add("disabled");
    if (btn.innerText === data.answer) {
      btn.classList.add("correct");
    }
  });

  setTimeout(nextQuestion, 3000);
}

function endQuiz() {
  quizScreen.classList.remove("active");
  resultScreen.classList.add("active");
  document.getElementById("final-score").innerText =
    `${score} / ${currentQuestions.length * 10}`;
}

// Điểm chạy chính (Entry Point)
initApp();

// Xử lý nạp file (File Upload Handler)
function triggerUpload() {
  document.getElementById("file-input").click();
}

function handleFileSelect(event) {
  const file = event.target.files[0];
  if (!file) return;

  if (file.type !== "application/json" && !file.name.endsWith(".json")) {
    alert("Vui lòng chọn file đúng định dạng .JSON!");
    return;
  }

  const reader = new FileReader();

  reader.onload = function (e) {
    try {
      const newData = JSON.parse(e.target.result);

      if (!Array.isArray(newData))
        throw new Error("Cấu trúc dữ liệu không hợp lệ (không phải mảng)");

      // Ghi đè biến toàn cục (đảm bảo 'quizData' khai báo là let/var trong data.js)
      window.quizData = newData;

      alert("Đã nạp dữ liệu thành công!");
      initApp();
      goBackHome();
    } catch (error) {
      console.error(error);
      alert("Lỗi đọc file JSON: Dữ liệu bị lỗi cú pháp hoặc sai cấu trúc!");
    }
  };

  reader.readAsText(file);
  event.target.value = "";
}
