const Questions = [
    { question: "Which keyword is used to declare a variable in JavaScript?", options: ["var", "int", "string", "define"], answer: 0 },
    { question: "Which method converts JSON to a JavaScript object?", options: ["JSON.parse()", "JSON.stringify()", "JSON.convert()", "JSON.object()"], answer: 0 },
    { question: "Which function runs after a delay?", options: ["setInterval()", "setTimeout()", "wait()", "delay()"], answer: 1 },
    { question: "Which array method adds an item to the end?", options: ["push()", "pop()", "shift()", "unshift()"], answer: 0 }
];

// Background colors for each stage
const bgColors = ["#764ba2", "#667eea", "#00b894", "#fdb827", "#ff7675"];

let currentQuestion = 0, score = 0, timeRemaining = 300, timerInterval, startTime, selectedAnswer;

const startQuiz = () => {
    document.getElementById("welcomeContainer").classList.add("content-hide");
    document.getElementById("resultsContainer").classList.add("content-hide");
    document.getElementById("quizContainer").classList.remove("content-hide");
    
    currentQuestion = 0; score = 0; timeRemaining = 300;
    startTime = Date.now();
    startTimer();
    loadQuestion();
};

const startTimer = () => {
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        timeRemaining--;
        let min = Math.floor(timeRemaining / 60), sec = timeRemaining % 60;
        document.getElementById("timer").textContent = `${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
        if (timeRemaining <= 0) showResult();
    }, 1000);
};

const loadQuestion = () => {
    selectedAnswer = null;
    document.getElementById("nextBtn").disabled = true;
    const q = Questions[currentQuestion];
    
    // Change body background color based on progress
    document.body.style.background = bgColors[currentQuestion % bgColors.length];

    document.getElementById("questionCounter").textContent = `Question ${currentQuestion + 1} of ${Questions.length}`;
    document.getElementById("progressBar").style.width = `${(currentQuestion / Questions.length) * 100}%`;

    let html = `<h3>${q.question}</h3>`;
    q.options.forEach((opt, i) => {
        html += `<div class="answer-option" onclick="selectOption(${i})">${opt}</div>`;
    });
    document.getElementById("quizBody").innerHTML = html;
};

window.selectOption = (i) => {
    selectedAnswer = i;
    document.querySelectorAll(".answer-option").forEach((o, idx) => o.classList.toggle("selected", idx === i));
    document.getElementById("nextBtn").disabled = false;
};

const handleNext = () => {
    const correct = Questions[currentQuestion].answer;
    const options = document.querySelectorAll(".answer-option");
    options.forEach(o => o.style.pointerEvents = "none");

    if(selectedAnswer === correct) score++;
    options[correct].classList.add("correct");
    if(selectedAnswer !== correct) options[selectedAnswer].classList.add("incorrect");

    setTimeout(() => {
        currentQuestion++;
        currentQuestion < Questions.length ? loadQuestion() : showResult();
    }, 1000);
};

const showResult = () => {
    clearInterval(timerInterval);
    document.body.style.background = "#2d3436"; // Final result background
    document.getElementById("quizContainer").classList.add("content-hide");
    document.getElementById("resultsContainer").classList.remove("content-hide");
    document.getElementById("finalScore").textContent = Math.floor((score / Questions.length) * 100) + "%";
    document.getElementById("correctCount").textContent = score;
    let taken = Math.floor((Date.now() - startTime) / 1000);
    document.getElementById("timeTaken").textContent = `${Math.floor(taken/60)}m ${taken%60}s`;
};

document.getElementById("startQuizBtn").onclick = startQuiz;
document.getElementById("nextBtn").onclick = handleNext;
document.getElementById("restartBtn").onclick = () => {
    document.getElementById("resultsContainer").classList.add("content-hide");
    document.getElementById("welcomeContainer").classList.remove("content-hide");
};