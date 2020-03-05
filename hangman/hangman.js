// Constructor
const Hangman = function (word, remainingGuesses) {
    this.word = word.toLowerCase().split('');
    this.remainingGuesses = remainingGuesses;
    this.guessedLetters = [];
    this.status = 'playing';
};

// ************************************************************
// Member Methods
// ************************************************************
Hangman.prototype.calculateStatus = function () {

// START - different ways to handle this
    // let finished = true;

    // this.word.forEach((letter) => {
    //     if(this.guessedLetters.includes(letter)) {
            
    //     } else {
    //         finished = false;
    //     };
    // });

    // const lettersUnguessed = this.word.filter((letter) => {
    //     return !this.guessedLetters.includes(letter);
    // });

    // const finished = lettersUnguessed.length === 0;
// END - different ways to handle this

    const finished = this.word.every((letter) => this.guessedLetters.includes(letter));
// END - different ways to handle this

    if(this.remainingGuesses === 0) {
        this.status = 'failed';
    } else if (finished) {
        this.status = 'finished';
    } else {
        this.status = 'playing';
    };
};

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

    this.calculateStatus();
};