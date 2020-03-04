// Constructor
const Person = function(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
};

//const me = Person();
const me = new Person('Jenn', 'Slavin', 37);

console.log(me);
console.log(typeof me);
console.log(me.age);
me.firstName = 'Jeff';
console.log(me);

const person2 = new Person('Jake', 'Davis', 40);
console.log(person2);