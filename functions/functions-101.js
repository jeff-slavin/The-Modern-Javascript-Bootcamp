
let greetUser = function() {
    console.log('Welcome user');
}

greetUser();
greetUser();
greetUser();

let square = function(num) {
    let result = num * num;
    return result;
}

let value = square(3);
let otherValue = square(10);

console.log(value);
console.log(otherValue);

let convertFahrenheitToCelcius = function(f) {
    let result = (f - 32) * 5 / 9;
    return result;
}

let c1 = convertFahrenheitToCelcius(32);
let c2 = convertFahrenheitToCelcius(68);
let c3 = convertFahrenheitToCelcius(100);

console.log(c1);
console.log(c2);
console.log(c3);
console.log(convertFahrenheitToCelcius(0));