//console.log('utilities.js');

// Named export
//  can have as many as we need
//  need to name the specific export

// Default export
//  can only have 1

// Named exports
// export const add = (a, b) => a + b;
// export const name = 'Jeff';

// // Default export
// const square = (x) => x * x;
// export default square;

// New syntax - to export everything at once
const add = (a, b) => a + b;
const name = 'Jeff';

// Default export
const square = (x) => x * x;

// Last line of the file - can setup our exports
// Exports - named only - no default
// export { add, name, square };
// Exports with a default
export { add, name, square as default };
// can use 'as default' to set the default - does not have to be the last item, can appear anywhere in the curly brackets4
// do not need to include a default, but you can as shown above


