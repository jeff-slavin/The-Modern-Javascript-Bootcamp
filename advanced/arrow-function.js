const square = (num) => num * num;

console.log(square(5));

const squareLong = (num) => {
    return num * num;
};

const people = [{
    name: 'Andrew',
    age: 27
},{
    name: 'Jeff',
    age: 38
},{
    name: 'Noah',
    age: 4
}];

// const under30 = people.filter(function (person) {
//     return person.age < 30;
// });

const under30 = people.filter((person) => person.age < 30);
console.log(under30);

//Challenge
// Find the person with age 38
// Print person's name

const age38Name = people.find((person) => person.age === 38);
console.log(age38Name.name);