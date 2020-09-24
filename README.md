# ⚡ Harry Potter Quiz ⚡

## Summary
Put your knowledge of Harry Potter to the test with this quiz!

The Harry Potter Quiz features a 60 second timer and 10 multiple-choice questions. 10 points are awarded for every correct answer. 5 seconds are deducted from the timer for each incorrect answer. Beat the clock and try to get a new high score.

## Features
The quiz uses JavaScript to manipulate the Document Object Model (DOM) and dynamically update HTML and CSS. This allows players to interact with the webpage by clicking buttons to prompt changes.
* The DOM getElementByID() method is used to create hooks for  JavaScript to manipulate the HTML and CSS.
* The DOM style property is used to change the style of HTML and CSS elements, like hiding and showing elements.
* The DOM addEventListener() method is used to call functions when buttons are clicked on the page.

A timer counts down from 60 seconds notifying the player how much time is left on the clock. 
* The setInterval and clearInterval methods are used to set the timer and clear the timer when the game is over or the clock runs out.

Players can save their initials to the high score board at the end of the game.
* The localStorage property is used to save player names and scores to the high score list. This allows multiple players to play and save their data in the browser session.

## Built With
* [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - used to create the dynamic features of the page
* [Bootstrap](https://getbootstrap.com) - used to create the mobile responsive layout
* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) - used to create the structure of the page
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) - used to style HTML elements on the page
* [Git](https://git-scm.com/) - version control system used to track changes in source code
* [GitHub](https://github.com/) - hosts repository and deploys page on GitHub

## Deployed Link
[Harry Potter Quiz](https://engrebecca.github.io/code-quiz/)

## Code Snippet
The below code illustrates how local storage is used to store and retrieve key/value pairs for players names and scores. 

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

## Site Picture
![Password Generator](Assets/HarryPotterQuiz.png)

## Author
* Rebecca Eng
* [GitHub](https://github.com/engrebecca)
* [LinkedIn](https://www.linkedin.com/in/engrebecca/)

## Credits
* Documentation for creating a timer [w3schools](https://www.w3schools.com/js/js_timing.asp)

## License
This project is licensed under the MIT license