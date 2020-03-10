//import './utilities' // can leave off the file extension (so no need to include '.js')

// Using named exports
//import { add, name } from './utilities';    // can leave off the file extension (so no need to include '.js')

// Using default export
// Can name the default export anything we want, since we are grabbing it for the fact it is a default, not by the name
// otherSquare below grabs the default 'square' function we created
import otherSquare, { add, name } from './utilities';
// Grabbing only the default - can name it whatever we want like above
// import otherSquare from './utilities';
// Guiding principle
//  if there is 1 main function that needs to be exported, usually name this as the default in that file (can only have 1)
//  if we are pulling 5 or 6 functions from the file, then usually use named exports (no defaults)

//import { scream } from './scream';    // named import
import otherScream from './scream';     // using default import (and renaming the function)

console.log('index.js');

console.log(add(32,1));
console.log(name);
console.log(otherScream(name));
console.log(otherSquare(10));