
const puzzleElement = document.querySelector('#puzzle');
const guessesElement = document.querySelector('#guesses');

const game1 = new Hangman('cat', 2);
// console.log(game1.getPuzzle());
// console.log(game1.remainingGuesses);
puzzleElement.textContent = game1.puzzle;
guessesElement.textContent = game1.statusMessage;

//console.log(game1.status);

// const game2 = new Hangman('New Jersey', 4);
// game2.makeGuess('w');
// console.log(game2.getPuzzle());
// console.log(game2.remainingGuesses);

window.addEventListener('keypress', function (e) {
    //const guess = String.fromCharCode(e.CharCode);
    const guess = e.key
    //console.log(guess);
    game1.makeGuess(guess);
    puzzleElement.textContent = game1.puzzle;
    guessesElement.textContent = game1.statusMessage;
    // console.log(game1.getPuzzle());
    // console.log(game1.remainingGuesses);
    // console.log(game1.status);
});



// Inheritance tree
// Look at product first
// Then look at the prototype
// Prototype chain for an object: myObject --> Object.prototype --> null
// Primitive Value: a value that does not have properties (non object)
// There are 5 of these in JavaScript: string, number, boolean, null, undefined
// Array: myArray --> Array.prototype --> Object.prototype --> null
// Function: myFunction --> Function.prototype --> Object.prototype --> null
// String: myString --> String.prototype --> Object.prototype --> null
// Number: myNumber --> Number.prototype --> Object.prototype --> null
// Boolean: myBoolean --> Boolean.prototype --> Object.prototype --> null

// const product = 'Computer';
// console.log(product);
// const otherProduct = new String('Phone');
// console.log(otherProduct);

// const getScore = () => 1;
// console.log(getScore);

// const team = ['Luke', 'Madison'];
// const team = new Array(['Luke', 'Madison']);
// console.log(team.hasOwnProperty('filter'));
// console.log(team);
// const product = {
//     name: 'The War Of Art'
// };

// This is the same as the above (using the 'new' and object constructor)
// Don't need to do this, because JS handles this correctly without 'new' on built in types

// const product = new Object();
// product.name = 'Rest';

// Generally a horrible idea, but you can override the behavior of the object prototype
//Object.prototype.hasOwnProperty = () => 'This is the new function';
// Object.prototype.someNewMethod = () => 'This is a new method';
// hasOwnProperty - returns true or false if the object has that properpty
// hasOwnProperty - only looks at the object (in this case product) does not then look up the prototype chain
// Since this function lives up the prototype chain, the below returns false
// console.log(product.hasOwnProperty('hasOwnProperty'));
// console.log(product.someNewMethod());
// console.log(product);