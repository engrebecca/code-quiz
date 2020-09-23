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
var score = document.getElementById("score");
var nameSubmitButton = document.getElementById("nameSubmitButton");
var userName = document.querySelector("userName");
// High score card
var highScore = document.getElementById("highScore");
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

qPage.style.display = "none";

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

function answerOnClick(answerId) {
    return function(event) {
        if (questionText[currentIndex].correct === answerId) {
            scoreCounter++;
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

// Start the quiz
function startQuiz(){
    console.log("Quiz started!");
    promptQuestion();
    startTimer();
    startPage.style.display = "none";
}

// Prompt Questions
function promptQuestion(){
    console.log("Prompt questions");
    qPage.style.display = "block";
    var currentQ = questionText[currentIndex];
    question.textContent = currentQ.question;
    buttonA.textContent = currentQ.A;
    buttonB.textContent = currentQ.B;
    buttonC.textContent = currentQ.C;
    buttonD.textContent = currentQ.D;
    console.log("Index: " + currentIndex);
}

// End the quiz
function finishQuiz() {
    clearInterval(timerHandle);
    console.log("Quiz finished!")
}

// Show Score
function showScore(){
    console.log("Show score");
}

// EVENTS
startButton.addEventListener("click", startQuiz);
buttonA.addEventListener("click", answerOnClick("A"));
buttonB.addEventListener("click", answerOnClick("B"));
buttonC.addEventListener("click", answerOnClick("C"));
buttonD.addEventListener("click", answerOnClick("D"));
