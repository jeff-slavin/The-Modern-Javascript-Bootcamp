// Constructor
const Hangman = function (word, remainingGuesses) {
    this.word = word.toLowerCase().split('');
    this.remainingGuesses = remainingGuesses;
    this.guessedLetters = [];
};

// Member Method
Hangman.prototype.getPuzzle = function () {

    let puzzle = '';

    this.word.forEach((letter) => {
        if (this.guessedLetters.includes(letter) || letter === ' ') {
            puzzle += letter;
        } else {
            puzzle += '*';
        };
    });

    return puzzle;
};

Hangman.prototype.makeGuess = function (guess) {
    guess = guess.toLowerCase();
    const isUnique = !this.guessedLetters.includes(guess);
    const isBadGuess = !this.word.includes(guess);

    if (isUnique) {
        this.guessedLetters.push(guess);
    };

    if (isUnique && isBadGuess) {
        this.remainingGuesses--;
    };
};

const game1 = new Hangman('cat', 2);
console.log(game1.getPuzzle());
console.log(game1.remainingGuesses);

// const game2 = new Hangman('New Jersey', 4);
// game2.makeGuess('w');
// console.log(game2.getPuzzle());
// console.log(game2.remainingGuesses);

window.addEventListener('keypress', function (e) {
    //const guess = String.fromCharCode(e.CharCode);
    const guess = e.key
    //console.log(guess);
    game1.makeGuess(guess);
    console.log(game1.getPuzzle());
    console.log(game1.remainingGuesses);
});