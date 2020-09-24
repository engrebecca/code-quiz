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
var totalSecondsAllowed = 60;
var secondsLeft;
var timerHandle;
var scoreCounter = 0;
var currentIndex = 0;

var questionText = [
    {question: "What is the name of the street Harry Potter and the Dursleys lived on?", A: "Privet Drive", B: "Lilly Lane", C: "Coldwater Street", D: "Surrey Lane", correct: "A"}, 
    {question: "What Hogwarts house is Draco Malfoy in?", A: "Gryffindor", B: "Ravenclaw", C: "Slytherin", D: "Hufflepuff", correct: "C"},
    {question: "What country is Beauxbatons located in?", A: "Spain", B: "Switzerland", C: "Belgium", D: "France", correct: "D"},
    {question: "What position does Harry play on his Quidditch team?", A: "Chaser", B: "Seeker", C: "Beater", D: "Keeper", correct: "B"},
    {question: "What does the Imperius Curse do?", A: "Kills", B: "Controls", C: "Tortures", D: "Burns", correct: "B"},
    {question: "What horcrux was inside Bellatrix Lastrange's vault in Gringotts?", A: "Ravenclaw's Diadem", B: "Gaunt's Ring", C: "Hufflepuff's Cup", D: "Slytherin's Lockett", correct: "C"},
    {question: "What is Harry's Patronus?", A: "A Doe", B: "A Wolf", C: "A Lion", D: "A Stag", correct: "D"},
    {question: "Which is not a method of transportation for wizards?", A: "Apparation", B: "A Portkey", C: "Transfiguration", D: "Floo Powder", correct: "C"},
    {question: "What is the name of Hagrid's dragon?", A: "Fluffy", B: "Norbert", C: "Skrewt", D: "Norris", correct: "B"},
    {question: "Which is not an ingredient in Polyjuice Potion?", A: "Dragon Blood", B: "Shredded Boomslang Skin", C: "Lacewing Flies", D: "Knotgrass", correct: "A"},
];

// Set hidden pages to not display
qPage.style.display = "none";
scorePage.style.display = "none";
highScorePage.style.display = "none";

// Timer Functions
function setSecondsLeft(seconds) {
    secondsLeft = seconds;
    timerDisplay.textContent = secondsLeft;
}

function startTimer() {
    setSecondsLeft(totalSecondsAllowed);
    timerHandle = setInterval(function() {
        setSecondsLeft(secondsLeft-1);
        if (secondsLeft < 0) {
            timerDisplay.textContent = "0";
            clearInterval(timerHandle);
            alert("You ran out of time!");
            finishQuiz();
        }
    }, 1000);
}

// Start the quiz
function startQuiz(){
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
    return function(event){
        if (questionText[currentIndex].correct === answerId) {
            scoreCounter = scoreCounter + 10;
            answerFlag.textContent = "CORRECT";
        } else {
            setSecondsLeft(secondsLeft - 5);
            answerFlag.textContent = "WRONG";
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
    clearInterval(timerHandle);
    timerDisplay.textContent = "0";
    answerFlag.textContent = " ";
    showScore();
}

// Show Score
function showScore(){
    qPage.style.display = "none";
    scorePage.style.display = "block";
    score.textContent = scoreCounter;
}

// Store name to board
function storeName(event){
    event.preventDefault();
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
    scoreList.appendChild(listEl);

}

// Return to name input page
function goBackPage(){
    qPage.style.display = "none";
    scorePage.style.display = "none";
    highScorePage.style.display = "none";
    startPage.style.display = "block";
    answerFlag.textContent = " ";
    setSecondsLeft(0);
    scoreCounter = 0;
    currentIndex = 0;
}

// Clear the score
function clearScores(){
    scoreList.textContent = "";
}

// View high Score page from corner button
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
buttonA.addEventListener("click", answerOnClick("A"));
buttonB.addEventListener("click", answerOnClick("B"));
buttonC.addEventListener("click", answerOnClick("C"));
buttonD.addEventListener("click", answerOnClick("D"));
nameSubmitButton.addEventListener("click", storeName);
goBack.addEventListener("click", goBackPage);
clearScore.addEventListener("click", clearScores);
viewHighScore.addEventListener("click", viewScores);