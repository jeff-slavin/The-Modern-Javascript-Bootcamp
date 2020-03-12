// Destructing Lesson
const todo = {
    id: 'asdfasdfasdf',
    text: 'Pay the bills',
    completed: false
};

// if we want to work with the values separately and not reference the object every time, we do the below
// const text = todo.text;
// const completed = todo.completed;
// console.log(text);
// console.log(completed);

// Destructuring
// Below looks similar to our 'export' commands
// The below creates 2 new variables called text and completed and gets the values from the object
//const { text, completed } = todo

// The below creates a local variable called todoText with the value from text
// const { text:todoText, completed } = todo

// Creating a default value (should there not be a value in the object.. in this case 'details')
// Can set this default to an object, array, string, boolean, etc...
// const { text:todoText, completed, details = 'No details provided' } = todo
// The below still looks for details, but creates the variable otherDetails, while still looking for 'details' on the object
//const { text:todoText, completed, details:otherDetails = 'No details provided' } = todo



//---------------------------------------------------------------
// Challenge for functions
// Destructuring objects within function parameters
const printTODO = ({ text, completed }) => {
    console.log(`${text}: ${completed}`);
};

printTODO(todo);

// const printTODO = (todo) => {
//     console.log(`${todo.text}: ${todo.completed}`);
// };

// printTODO(todo);
//---------------------------------------------------------------

// using REST operator to grab everything else in the object we didn't explicitly ask to be destructured.
const { text:todoText, completed, details:otherDetails = 'No details provided', ...others } = todo

console.log(todoText);
console.log(completed);
console.log(otherDetails);       // printing the default value from the destructuring above
console.log(others);            // others is an object with everything we didn't ask for above via destructuring

// ARRAY DESTRUCTURING
const age = [65, 0, 13, 21];
// const [firstAge, secondAge] = age; // grabs the first and second items in the array
// const [firstAge, secondAge, , lastAge] = age    // skips the 3rd item, grabs 1st, 2nd, and 4th item

// Setting a default if the value does not exit (last age now is pointing at the 5th item, our array only has 4 items)
// const [firstAge, secondAge, , , lastAge = 123] = age // skips 3rd and 4th items in the array, provides default for undefined 5th item

// Rest parameter - we grab the first item, and then throw everything else in another array, in this case called 'otherAges'
const [firstAge, ...otherAges] = age

console.log(firstAge);
//console.log(secondAge);
//console.log(lastAge);
console.log(otherAges);


// const printTeam = (teamName, coach, ...players) => {
//     console.log(`Team: ${teamName}`);
//     console.log(`Coach: ${coach}`);
//     console.log(`Players: ${players.join(', ')}`);
// };

// const team = {
//     name: 'Liberty',
//     coach: 'Casey Penn',
//     players: ['Marge', 'Aiden', 'Herbert', 'Sherry']  
// };

// let house = {
//     bedrooms: 2,
//     bathrooms: 1.5,
//     yearBuilt: 2017
// };

// let newHouse = {
//     basement: true,
//     ...house,    // spread operator for an object (copies all of the house stuff over)
//     bedrooms: 3     // overrides the bedrooms value (since we spread out the original one above), if we set this above the spread-out, the spread out would override what we set. whatever comes last takes precedent
// };

// newHouse.yearBuilt = 2018;  // changing 2nd object only

// console.log(house);
// console.log(newHouse);

// // Challenge spread out objects

// const person = {
//     name: 'Jeff',
//     age: 38
// };

// const location = {
//     city: 'Highlands Ranch',
//     country: 'USA'
// };

// // combining the 2 objects above using the spread operator
// const overview = {
//     ...person,
//     ...location
// };

// console.log(overview);



// // Spread operator - "... team.players" - this spreads the array of players out to be separate arguments which our function requires
// // printTeam(team.name, team.coach, ...team.players);


// //const cities = ['Barcelona', 'Cape Town', 'Long Beach', 'Denver', 'Houston'];
// //console.log(cities);
// // const citiesCopy = [cities] // this would create an array with the cities array with (an array within an array)
// // const citiesCopy = [...cities]  // creates a copy of the array, spreaded out the arguments, so added each city as an item
// // const citiesCopy = ['Highlands Ranch', ...cities]   // adds a new item ahead of the spread out cities array
// //const citiesCopy = [...cities, 'Highlands Ranch'] // adds a new item at the end of the sprad out cities array
// // citiesCopy.push('Highlands Ranch'); // adding an item to the 2nd array, 1st array will not change

// // adding on an item to an array beginning or ending (another way to do this w/out push)
// // let cities = ['Barcelona', 'Cape Town', 'Long Beach', 'Denver', 'Houston']; 
// // cities = [...cities, 'Highlands Ranch'];

// //console.log(citiesCopy);
// // console.log(cities);

// // // ...numbers - converts all incoming arguments into an array.
// // // Makes function dynamic so can take any number of arguments
// // //const calculateAverage = (...numbers) => {

// // // The below grabs the first argument as 'thing' and then everything else
// // const calculateAverage = (thing, ...numbers) => {
// //     let sum = 0;
// //     numbers.forEach((num) => sum += num);
// //     //return sum / numbers.length;
// //     const average = sum / numbers.length;
// //     return `The average ${thing} is ${average}`;
// // };

// // //console.log(calculateAverage(0, 100, 88, 64));
// // console.log(calculateAverage('age', 0, 100, 88, 64));

// // // Challenge Area
// // const printTeam = (teamName, coach, ...players) => {
// //     //let playerList = "";
// //     //players.forEach((player) => playerList += player + ', ');

// //     //return `Team: ${teamName} Coach: ${coach} Players: ${playerList}`;
// //     return `Team: ${teamName} Coach: ${coach} Players: ${players.join(', ')}`;

// // };

// // console.log(printTeam('Liberty', 'Casey Penn', 'Marge', 'Aiden', 'Herbert', 'Sherry'));