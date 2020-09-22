// SELECT DOM ELEMENTS
// Start quiz card
var startPage = document.getElementById("start");
var startButton = document.getElementById("start-btn")
// Question cards
var qPage = document.getElementById("question-pg");
var q2 = document.getElementById("question2");
var q3 = document.getElementById("question3");
var q4 = document.getElementById("question4");
var q5 = document.getElementById("question5");
var question = document.getElementById("question");
var optionA = document.getElementById("optionA");
var optionB = document.getElementById("optionB");
var optionC = document.getElementById("optionC");
var optionD = document.getElementById("optionD");
// Enter initials card
var scoreInitial = document.getElementById("scoreInitial");
var score = document.getElementById("score");
var nameSubmit = document.getElementById("nameSubmit");
var name = document.querySelector("input");
// High score card
var highScore = document.getElementById("highScore");
var goBack = document.getElementById("goBack");
var clearScore = document.getElementById("clearScore");

// VARIABLES & OBJECTS
var choices = [
    {q1: "This is question 1", choiceA: "answerA", choiceB: "answerB", choiceC: "answerC", choiceD: "answerD", correct: "Correct Answer"}, 
    {q2: "This is question 2", choiceA: "answerA", choiceB: "answerB", choiceC: "answerC", choiceD: "answerD", correct: "Correct Answer"},
    {q3: "This is question 3", choiceA: "answerA", choiceB: "answerB", choiceC: "answerC", choiceD: "answerD", correct: "Correct Answer"},
    {q4: "This is question 4", choiceA: "answerA", choiceB: "answerB", choiceC: "answerC", choiceD: "answerD", correct: "Correct Answer"},
    {q5: "This is question 5", choiceA: "answerA", choiceB: "answerB", choiceC: "answerC", choiceD: "answerD", correct: "Correct Answer"},
]

qPage.style.display = "none";

// FORMULAS
// Start the quiz
function startQuiz(){
    console.log("Quiz started!");
    promptQuestion();
    startPage.style.display = "none";
}


// Prompt Questions
function promptQuestion(){
    console.log("Prompt questions");
    qPage.style.display = "block";
    // Pull questions and anwer from array

    nextQuestion();
}

// Next Question
function nextQuestion(){
    console.log("Next question")
}

// Check Answer
function checkAnswer(){
    console.log("Checking answer");
}

// Show Score
function showScore(){
    console.log("Show score");
}

// EVENTS
startButton.addEventListener("click", startQuiz)
