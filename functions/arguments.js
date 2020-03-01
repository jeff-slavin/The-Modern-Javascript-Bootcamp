
// Multiple Arguments

let add = function(a, b, c) {
    return a + b + c;
}

let result = add(10, 1, 5);

console.log(result);

// Default Arguments
let getScoreText = function(name = 'Anonymous', score = 0) {
    // return 'Name: ' + name + ' - Score: ' + score;
    return `Name: ${name} - Score: ${score}`;
}

let scoreText = getScoreText(undefined, 99);
console.log(scoreText);

// Challenge
let tipValue = function(billTotal, tipPercent = 0.2) {
    return `A ${tipPercent * 100}% tip on $${billTotal} would be $${tipPercent * billTotal}.`;
}

console.log(tipValue(100));
console.log(tipValue(100, 0.1));
console.log(tipValue(500));
console.log(tipValue());

let name = 'Jeff';
let age = 38;
console.log(`Hey, my name is ${name}! I am ${age} years old`);