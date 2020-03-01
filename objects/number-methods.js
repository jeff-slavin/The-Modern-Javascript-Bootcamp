let num = 103.941;

console.log(num.toFixed(2));

console.log(Math.round(num));

console.log(Math.floor(num));
console.log(Math.ceil(num));

let min = 0;
let max = 5;

let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomNum);

// Challenge Area

let makeGuess = function(myGuess) {
    return (myGuess === randomNum);
}

console.log(makeGuess(0));
console.log(makeGuess(1));
console.log(makeGuess(2));
console.log(makeGuess(3));
console.log(makeGuess(4));
console.log(makeGuess(5));