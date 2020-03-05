// Prototypal Inheritance (different than c++ inheritance)

// Constructor
class Person {
    
    constructor(firstName, lastName, age, likes = []) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.likes = likes;
    };

    getBio() {
        let bio = `${this.firstName} is ${this.age}.`;

        this.likes.forEach((like) => {
            bio += ` ${this.firstName} likes ${like}.`;
        });
    
        return bio;
    };

    setName(fullName) {
        const names = fullName.split(' ');  // splits the fullName by a space (returns an array with 2 items)
        this.firstName = names[0];
        this.lastName = names[1];
    };

};

// const myPerson = new PersonClass('Jeff', 'Slavin', 38, ['Teaching']);
// console.log(myPerson.getBio());

// // Constructor
// // Likes has a default of an empty array
// const Person = function(firstName, lastName, age, likes = []) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.likes = likes;
// };

// // Member method
// Person.prototype.getBio = function () {
//     let bio = `${this.firstName} is ${this.age}.`;

//     this.likes.forEach((like) => {
//         bio += ` ${this.firstName} likes ${like}.`;
//     });

//     return bio;
// };

// // Member method
// Person.prototype.setName = function (fullName) {
//     const names = fullName.split(' ');  // splits the fullName by a space (returns an array with 2 items)
//     this.firstName = names[0];
//     this.lastName = names[1];
// };

// Members do not need to be methods. This creates a non function member with the value of 'Thailand' for all instances of Person
// Usually does not serve much of a purpose
// Person.prototype.location = 'Thailand';

//const me = Person();
const me = new Person('Jenn', 'Slavin', 37, ['Teaching', 'Biking']);
// Shadowing (prototypal inheritance)
// We setup a new property on our instance
// "me" first looks on itself, and it finds getBio, it never goes up to the prototype
// This won't impact person2 below, since person2 does not have 'getBio' on the instance level, so it looks up to the prototype
// me.getBio = function () {
//     return 'This is fake!';
// };
me.setName('Noah Slavin');
// console.log(me);
// console.log(typeof me);
// console.log(me.age);
// me.firstName = 'Jeff';
// console.log(me);
console.log(me.getBio());

// you can change what the member method does (above 'me' variable gets the first bio msg, the one below will get this new testing msg)
// Person.prototype.getBio = function () {
//     return 'Testing testing';
// };

const person2 = new Person('Jake', 'Davis', 40);
// console.log(person2);
console.log(person2.getBio());