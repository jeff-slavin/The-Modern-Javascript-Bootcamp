let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
};

console.log(`${myBook.title} by ${myBook.author} is ${myBook.pageCount} pages long.`);

myBook.title = 'Animal Farm';

console.log(`${myBook.title} by ${myBook.author} is ${myBook.pageCount} pages long.`);

let myPerson = {
    name: 'Jeff',
    age: 38,
    location: 'Denver'
};

console.log(`${myPerson.name} is ${myPerson.age} and lives in ${myPerson.location}.`);

myPerson.age += 1;

console.log(`${myPerson.name} is ${myPerson.age} and lives in ${myPerson.location}.`);