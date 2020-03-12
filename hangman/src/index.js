import Hangman from './hangman';
import getPuzzle from './requests';

const puzzleElement = document.querySelector('#puzzle');
const guessesElement = document.querySelector('#guesses');
const lettersGuessedElement = document.querySelector('#letters-guessed');
let game1;

window.addEventListener('keypress', (e) => {
    const guess = e.key;
    game1.makeGuess(guess);
    render();
});

const render = () => {
    puzzleElement.innerHTML = '';

    game1.puzzle.split('').forEach((letter) => {
        const letterElement = document.createElement('span');
        letterElement.textContent = letter;
        puzzleElement.appendChild(letterElement);
    });

    guessesElement.textContent = game1.statusMessage;
    lettersGuessedElement.textContent = `Letters guessed: ${game1.guessedLetters}`;
};

const startGame = async () => {
    const puzzle = await getPuzzle('2');
    game1 = new Hangman(puzzle, 5);
    render();
};

document.querySelector('#reset').addEventListener('click', startGame);

startGame();