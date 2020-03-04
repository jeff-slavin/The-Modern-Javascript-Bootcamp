const products = [];
const product = products[0];

// Truthy - values that resolve to True in a boolean context
// Falsy - values that resolve to False in a boolean context
// Falsy values - false, 0, empty string, null, undefined, NaN
// Truthy values - (everything else)

if (product) {
    console.log('Product found');
} else {
    console.log('Product not found');
};

console.log(product ? 'Product found' : 'Product not found');

// if (undefined) {
//     console.log('Product found');
// } else {
//     console.log('Product not found');
// };

// if (product !== undefined) {
//     console.log('Product found');
// } else {
//     console.log('Product not found');
// };