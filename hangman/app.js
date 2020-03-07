// HTTP (Hyper Text Transfer Protocol)
// Request - What do we want to do
// Response - What was actually done

const puzzleElement = document.querySelector('#puzzle');
const guessesElement = document.querySelector('#guesses');

const game1 = new Hangman('car parts', 2);
// console.log(game1.getPuzzle());
// console.log(game1.remainingGuesses);
puzzleElement.textContent = game1.puzzle;
guessesElement.textContent = game1.statusMessage;

window.addEventListener('keypress', (e) => {
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

getPuzzle('2').then ((puzzle) => {
    console.log(puzzle);
}).catch((err) => {
    console.log(`Error: ${err}`);
});

getCountry('US').then ((country) => {
    console.log(country.name);
}).catch((err) => {
    console.log(`Error: ${err}`);
});

// fetch('http://puzzle.mead.io/puzzle', {}).then((response) => {
//     if (response.status === 200) {
//         return response.json();
//     } else {
//         throw new Error('Unable to fetch the puzzle.');
//     };
// }).then((data) => {
//     console.log(data.puzzle);
// }).catch((err) => {
//     console.log(err);
// });

// const puzzle = getPuzzleSync();
// console.log(puzzle);

// console.log('Do something else');

// Making an HTTP request
// const request = new XMLHttpRequest();

// request.addEventListener('readystatechange', (e) => {
//     if (e.target.readyState === 4 && e.target.status === 200) {        // 4 is 'DONE', the final response
//         const data = JSON.parse(e.target.responseText);
//         console.log(data);
//     } else if (e.target.readyState === 4) {
//         console.log('An error has taken place');
//     }
// });

// request.open('GET', 'http://puzzle.mead.io/puzzle?wordCount=3');
// request.send();

// const countryCode = "US";
// const countryRequest = new XMLHttpRequest();

// countryRequest.addEventListener('readystatechange', (e) => {
    
//     if (e.target.readyState === 4 && e.target.status === 200) {
//         const data = JSON.parse(e.target.responseText);
//         const country = data.find((country) => country.alpha2Code === countryCode)
//         console.log(country.name);
//     } else if (e.target.readyState === 4) {
//         console.log('An error has occured');
//     }
// });

// countryRequest.open('GET', 'http://restcountries.eu/rest/v2/all');
// countryRequest.send();

//console.log(game1.status);

// const game2 = new Hangman('New Jersey', 4);
// game2.makeGuess('w');
// console.log(game2.getPuzzle());
// console.log(game2.remainingGuesses);

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