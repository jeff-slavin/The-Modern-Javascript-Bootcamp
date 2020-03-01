
if(10 === 10) {
    var firstName = 'Jenn';
    let lastName = 'Slavin';
}

const setName = function() {
    var middleName = 'Michael'; 
}

setName();

console.log(firstName);
// console.log(lastName); // error - lastName is block scoped to the IF statement
// console.log(middleName); // error - var is function scope (so it can only be available in the setName function)


age = 10;
console.log(age);
var age;    // gets global scoped (the declaration of the variable, basically this line gets moved up above the console.log)

