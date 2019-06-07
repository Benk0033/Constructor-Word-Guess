// * **Letter.js**: Contains a constructor, Letter. This constructor displays an underlying character or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter.


function Letter(character) {

    //   * A string value to store the underlying character for the letter
    this.character = character;

    //   * A boolean value that stores whether that letter has been guessed yet
    this.guessed = false;

    //   * A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed
    this.toString = function () {
        if (this.guessed) {
            return this.character + " ";
        } else if (this.guessed === false) {
            return "_ ";
        };
    };

    //   * A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly
    this.check = function (userGuess) {
        if (userGuess === this.character) {
            this.guessed = true;
        }
    };
};

// exports the Letter constructor
module.exports = Letter;