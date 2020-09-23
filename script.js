// SELECT DOM ELEMENTS
// Start quiz card
var startPage = document.getElementById("start");
var startButton = document.getElementById("start-btn")
// Question cards
var qPage = document.getElementById("question-pg");
var question = document.getElementById("question");
var buttonA = document.getElementById("optionA");
var buttonB = document.getElementById("optionB");
var buttonC = document.getElementById("optionC");
var buttonD = document.getElementById("optionD");
// Enter initials card
var scorePage = document.getElementById("scorePage");
var score = document.getElementById("score");
var userName = document.getElementById("userName");
var nameSubmitButton = document.getElementById("nameSubmitButton");
// High score card
var highScorePage = document.getElementById("highScorePage");
var scoreList = document.getElementById("scoreList");
var goBack = document.getElementById("goBack");
var clearScore = document.getElementById("clearScore");
// Nav bar / other
var viewHighScore = document.getElementById("viewHighScore");
var timerDisplay = document.getElementById("timerDisplay");
var answerFlag = document.getElementById("answerFlag");

// VARIABLES & OBJECTS
var totalSecondsAllowed = 30;
var secondsLeft;
var timerHandle;
var scoreCounter = 0;
var currentIndex = 0;

var questionText = [
    {question: "This is question 1", A: "answer1A", B: "answer1B", C: "answer1C", D: "answer1D", correct: "A"}, 
    {question: "This is question 2", A: "answer2A", B: "answer2B", C: "answer2C", D: "answer2D", correct: "B"},
    {question: "This is question 3", A: "answer3A", B: "answer3B", C: "answer3C", D: "answer3D", correct: "C"},
    {question: "This is question 4", A: "answer4A", B: "answer4B", C: "answer4C", D: "answer4D", correct: "A"},
    {question: "This is question 5", A: "answer5A", B: "answer5B", C: "answer5C", D: "answer5D", correct: "D"},
];

// Set hidden pages to not display
qPage.style.display = "none";
scorePage.style.display = "none";
highScorePage.style.display = "none";

// Timer Functions
function setSecondsLeft(seconds) {
    secondsLeft = seconds;
    console.log(secondsLeft);
    timerDisplay.textContent = secondsLeft;
}

function startTimer() {
    setSecondsLeft(totalSecondsAllowed);
    timerHandle = setInterval(function() {
        setSecondsLeft(secondsLeft-1);
        if (secondsLeft === 0) {
            clearInterval(timerHandle);
            alert("You ran out of time!");
            finishQuiz();
        }
    }, 1000);
}

// Start the quiz
function startQuiz(){
    console.log("Quiz started!");
    promptQuestion();
    startTimer();
    startPage.style.display = "none";
}

// Prompt Questions
function promptQuestion(){
    qPage.style.display = "block";
    answerFlag.style.display = "none";
    console.log(answerFlag)
    var currentQ = questionText[currentIndex];
    question.textContent = currentQ.question;
    buttonA.textContent = currentQ.A;
    buttonB.textContent = currentQ.B;
    buttonC.textContent = currentQ.C;
    buttonD.textContent = currentQ.D;
}

// Validate Answers
function answerOnClick(answerId) {
    if (questionText[currentIndex].correct === answerId) {
        scoreCounter = scoreCounter + 10;
        answerFlag.style.display = "block";
        answerFlag.textContent = "CORRECT";
        console.log(answerFlag);
    } else {
        console.log("Time deduct!")
        setSecondsLeft(secondsLeft - 5);
        answerFlag.style.display = "block";
        answerFlag.textContent = "WRONG";
        console.log(answerFlag);
    }
    currentIndex++;
    if (currentIndex < questionText.length) {
        promptQuestion();
    } else {
        finishQuiz();
    }
}


// End the quiz
function finishQuiz() {
    console.log("Quiz finished!")
    clearInterval(timerHandle);
    showScore();
}

// Show Score
function showScore(){
    console.log("Show score");
    qPage.style.display = "none";
    scorePage.style.display = "block";
    score.textContent = scoreCounter;
}

// Store name to board
function storeName(event){
    event.preventDefault();
    console.log("Name submitted")
    var nameInput = userName.value
    if (nameInput !== ""){
        var nameScore = nameInput + " - " + scoreCounter;
        localStorage.setItem("name-score", nameScore);
        userName.value = "";
        showHighScores();
    } else {
        alert("Please enter your name")
    }
}

// Show high score page
function showHighScores(){
    scorePage.style.display = "none";
    highScorePage.style.display = "block";
    nameScore = localStorage.getItem("name-score");
    var listEl = document.createElement("p");
    listEl.textContent = nameScore;
    console.log(listEl);
    scoreList.appendChild(listEl);

}

// Return to name input page
function goBackPage(){
    qPage.style.display = "none";
    scorePage.style.display = "none";
    highScorePage.style.display = "none";
    startPage.style.display = "block";
    setSecondsLeft(0);
    scoreCounter = 0;
    currentIndex = 0;
}

// Clear the score
function clearScores(){
    scoreList.textContent = "";
}

// View high Score page from link
function viewScores(){
    startPage.style.display = "none";
    qPage.style.display = "none";
    scorePage.style.display = "none";
    highScorePage.style.display = "block";
    clearInterval(timerHandle);
    setSecondsLeft(0);
}
// EVENTS
startButton.addEventListener("click", startQuiz);
buttonA.addEventListener("click", function(event) {
    answerOnClick("A")
});
buttonB.addEventListener("click", function(event){
    answerOnClick("B")
});
buttonC.addEventListener("click", function(event){
    answerOnClick("C")
});
buttonD.addEventListener("click", function(event){
    answerOnClick("D")
});
nameSubmitButton.addEventListener("click", storeName);
goBack.addEventListener("click", goBackPage);
clearScore.addEventListener("click", clearScores);
viewHighScore.addEventListener("click", viewScores);