let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
};

let otherBook = {
    title: 'A Peoples History',
    author: 'Howard Zinn',
    pageCount: 723
};

let getSummary = function(book) {
    
    return {
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long.`
    };

}

console.log(getSummary(myBook).summary);
console.log(getSummary(myBook).pageCountSummary);
console.log(getSummary(otherBook).summary);
console.log(getSummary(otherBook).pageCountSummary);

//Challenge Area

let convertFahrenheit = function(fahrenheit) {

    return {
        fahrenheit: fahrenheit,
        celcius: (fahrenheit - 32) * 5 / 9,
        kelvin: (fahrenheit + 459.67) * 5 / 9
    };

}

let conversionObject = convertFahrenheit(74);

console.log(`F:${conversionObject.fahrenheit}, C:${conversionObject.celcius}, K:${conversionObject.kelvin}.`);
console.log(conversionObject);
console.log(convertFahrenheit(0));