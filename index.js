// * **index.js**: The file containing the logic for the course of the game, which depends on `Word.js` and:

//   * Randomly selects a word and uses the `Word` constructor to store it

//   * Prompts the user for each guess and keeps track of the user's remaining guesses

// imports the npm inquirer package
var inquirer = require('inquirer');

// imports the Word contstructor function
var Word = require('./Word.js');

// array to hold list of words for game
var wordArr = ["black", "blue", "red", "purple", "yellow", "green", "pink", "brown", "orange", "white"];

// chooses a random word from the wordArr array
var randomWord = wordArr[Math.floor(Math.random() * wordArr.length)];

var remainingGuesses = 10;

// create new word object based on random word selected from wordArr array
var word = new Word(randomWord);

// displays the underscore when game starts to show player how many characters are in the word
word.displayString();

// function to start the game
function startGame() {

    // recursion to keep calling startGame function as long as there are still underscores and remaining guesses are above zero
    if (word.letterArr.join("").indexOf("_") > -1 && remainingGuesses > 0) {

        // inquires player to guess a letter
        inquirer.prompt([
            {
                name: "guess",
                message: "Guess a letter!",
                validate: function validateString(name) {

                    return name !== '';

                }
            }
        ]).then(function (answer) {

            // stores user input into a variable
            var userGuess = answer.guess;

            // calls methods from word objects to check user input against correct characters
            word.checkLetter(userGuess)
            // shows character if user input is correct
            word.displayString();

            // if user guess is in word log "Correct!!!", else log "Incorrect!!!" and decrement remaining guesses by one. Also displays remaining guesses to console
            if (word.letterArr.join("").indexOf(userGuess) > -1) {
                console.log("CORRECT!!!");
            } else {
                console.log("INCORRECT!!!");
                remainingGuesses--
                console.log("remaining guesses: " + remainingGuesses);
            }

            // recursion
            startGame();

        });
    }
    // if no more underscore, then player wins round and moves on to next word
    else if (word.letterArr.join("").indexOf("_") === -1) {

        console.log("YOU GOT IT! NEXT WORD!");

        newGame();

    }
    // else player lose and program will ask if they want to restart the game
    else {
        console.log("It's just colors man");
        inquirer.prompt({
            type: "confirm",
            message: "Restart Game?",
            name: "confirm",
            default: true
        })
            .then(function (response) {
                if (response.confirm) {
                    newGame();
                }
                else {
                    console.log("Bye Felicia!");
                }
            });
    };

};

// initializes the game
startGame();

function newGame() {
    var newRandomWord = wordArr[Math.floor(Math.random() * wordArr.length)];
    word = new Word(newRandomWord);
    remainingGuesses = 10;
    word.displayString();
    startGame();
};
