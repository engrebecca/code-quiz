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

// VARIABLES & OBJECTS
var totalSecondsAllowed = 5;
var secondsLeft = 0;
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

// Creating a timer
// "loop"
// store our scores

// Timer Functions
function setSecondsLeft(seconds) {
    secondsLeft = seconds;
    console.log(secondsLeft);
}

function startTimer() {
    setSecondsLeft(totalSecondsAllowed);
    timerHandle = setInterval(function() {
        setSecondsLeft(secondsLeft-1);
        if (secondsLeft === 0) {
            clearInterval(timerHandle);
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
    var currentQ = questionText[currentIndex];
    question.textContent = currentQ.question;
    buttonA.textContent = currentQ.A;
    buttonB.textContent = currentQ.B;
    buttonC.textContent = currentQ.C;
    buttonD.textContent = currentQ.D;
}

// Validate Answers
function answerOnClick(answerId) {
    return function(event) {
        if (questionText[currentIndex].correct === answerId) {
            scoreCounter = scoreCounter + 10;
        } else {
            console.log("Time deduct!")
            // setSecondsLeft(secondsLeft - 5);
        }
        currentIndex++;
        if (currentIndex < questionText.length) {
            promptQuestion();
        } else {
            finishQuiz();
        }
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
        localStorage.setItem("user", nameInput);
        showHighScores();
    } else {
        alert("Please enter your name")
    }
}

// Clear display for all cards
function clearDisplay(){
    qPage.style.display = "none";
    scorePage.style.display = "none";
    highScorePage.style.display = "none";
    startPage.style.display = "none";
} 

// Show high score page
function showHighScores(){
    scorePage.style.display = "none";
    highScorePage.style.display = "block";

}

// Return to name input page
function goBackPage(){
    clearDisplay();
    scorePage.style.display = "block";
}

// Clear the score
function clearScores(){
    console.log("Scores cleared");
}

// EVENTS
startButton.addEventListener("click", startQuiz);
buttonA.addEventListener("click", answerOnClick("A"));
buttonB.addEventListener("click", answerOnClick("B"));
buttonC.addEventListener("click", answerOnClick("C"));
buttonD.addEventListener("click", answerOnClick("D"));
nameSubmitButton.addEventListener("click", storeName);
goBack.addEventListener("click", goBackPage);
clearScore.addEventListener("click", clearScores);