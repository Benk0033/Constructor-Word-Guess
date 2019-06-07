// * **Word.js**: Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess.

// importing the Letter constructor from the Letter.js file
var Letter = require('./Letter.js')

function Word(answer) {

    //   * An array to hold `new` Letter objects representing the letters of the underlying word
    this.letterArr = [];

    // loops through word and creates a new letter object for each character then pushes them to the letterArr array
    for (var i = 0; i < answer.length; i++) {
        var correctLetter = new Letter(answer[i]);
        this.letterArr.push(correctLetter);
    };

    //   * A function that returns a string representing the word. This calls the function on each letter object (the first function defined in `Letter.js`) that displays the character or an underscore and concatenate those together.
    this.displayString = function () {

        var str = '';

        for (var i = 0; i < this.letterArr.length; i++) {
            str += this.letterArr[i].toString();
        }

        console.log(str);

    };

    //   * A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in `Letter.js`)
    this.checkLetter = function (userGuess) {
        for (var i = 0; i < this.letterArr.length; i++) {
            this.letterArr[i].check(userGuess);
        }
    }

};

// exports the Word contructot function
module.exports = Word;





