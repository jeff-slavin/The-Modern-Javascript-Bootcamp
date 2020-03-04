// Type coersion - a string, a number, or a boolean
// Boolean version ok
// String and number versions you try to avoid at all costs (as shown below with the different behavior)

console.log('5' + 5);   // outputs '55' (string concatenation)
console.log('5' - 5);   // outputs 0 (you never subtract 2 strings, so it treats this as numbers)

// typically do not use == (two equal signs - there is no need to ever use this)
console.log(5===5);     // comparison operator (checks value and variable type)
console.log(5==5);      //  comparison - does not check variable type
console.log('5'==5);    // comparison - does not check variable types (tries to force them to be same type)

// Checking variable types
console.log(typeof 123);        // output 'number'
console.log(typeof 'hello');    // output 'string'
console.log(typeof []);         // output 'object'
console.log(typeof {});         // output 'object'
console.log(typeof true);       // output 'boolean'

const value = true + 12;
const type = typeof value;
console.log(`Type: ${type}   Value: ${value}`);
