let name = '  Jeff Slavin  ';

// Length Property
console.log(name.length);

// Convert to upper case
console.log(name.toUpperCase());

// Convert to lower case
console.log(name.toLowerCase());

// Includes method
let password = 'abc123paxssword098';
console.log(password.includes('password'));

// Trim - removes extra whitespace
console.log(name.trim());

let isValidPassword = function(password) {

    return (password.length > 8 && !password.includes('password'))

};

console.log(isValidPassword('asdfp'));
console.log(isValidPassword('abc123!@#$%^&'));
console.log(isValidPassword('asdfpasdfpoijpassword'));