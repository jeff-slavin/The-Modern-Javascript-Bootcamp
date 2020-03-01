
let convertFahrenheitToCelcius = function(f) {
    let result = (f - 32) * 5 / 9;

    if(result <= 0) {
        let isFreezing = true;
    }

    return result;
}

let c1 = convertFahrenheitToCelcius(32);
let c2 = convertFahrenheitToCelcius(68);
let c3 = convertFahrenheitToCelcius(100);

console.log(c1);
console.log(c2);
console.log(c3);
console.log(convertFahrenheitToCelcius(1.3334));