// Inheritance tree
// Look at product first
// Then look at the prototype
// product --> Object.prototype --> null

const product = {
    name: 'The War Of Art'
};

// This is the same as the above (using the 'new' and object constructor)
// Don't need to do this, because JS handles this correctly without 'new' on built in types

// const product = new Object();
// product.name = 'Rest';

// Generally a horrible idea, but you can override the behavior of the object prototype
//Object.prototype.hasOwnProperty = () => 'This is the new function';
Object.prototype.someNewMethod = () => 'This is a new method';
// hasOwnProperty - returns true or false if the object has that properpty
// hasOwnProperty - only looks at the object (in this case product) does not then look up the prototype chain
// Since this function lives up the prototype chain, the below returns false
console.log(product.hasOwnProperty('hasOwnProperty'));
console.log(product.someNewMethod());
console.log(product);