const printTeam = (teamName, coach, ...players) => {
    console.log(`Team: ${teamName}`);
    console.log(`Coach: ${coach}`);
    console.log(`Players: ${players.join(', ')}`);
};

const team = {
    name: 'Liberty',
    coach: 'Casey Penn',
    players: ['Marge', 'Aiden', 'Herbert', 'Sherry']  
};

let house = {
    bedrooms: 2,
    bathrooms: 1.5,
    yearBuilt: 2017
};

let newHouse = {
    basement: true,
    ...house,    // spread operator for an object (copies all of the house stuff over)
    bedrooms: 3     // overrides the bedrooms value (since we spread out the original one above), if we set this above the spread-out, the spread out would override what we set. whatever comes last takes precedent
};

newHouse.yearBuilt = 2018;  // changing 2nd object only

console.log(house);
console.log(newHouse);

// Challenge spread out objects

const person = {
    name: 'Jeff',
    age: 38
};

const location = {
    city: 'Highlands Ranch',
    country: 'USA'
};

// combining the 2 objects above using the spread operator
const overview = {
    ...person,
    ...location
};

console.log(overview);



// Spread operator - "... team.players" - this spreads the array of players out to be separate arguments which our function requires
// printTeam(team.name, team.coach, ...team.players);


//const cities = ['Barcelona', 'Cape Town', 'Long Beach', 'Denver', 'Houston'];
//console.log(cities);
// const citiesCopy = [cities] // this would create an array with the cities array with (an array within an array)
// const citiesCopy = [...cities]  // creates a copy of the array, spreaded out the arguments, so added each city as an item
// const citiesCopy = ['Highlands Ranch', ...cities]   // adds a new item ahead of the spread out cities array
//const citiesCopy = [...cities, 'Highlands Ranch'] // adds a new item at the end of the sprad out cities array
// citiesCopy.push('Highlands Ranch'); // adding an item to the 2nd array, 1st array will not change

// adding on an item to an array beginning or ending (another way to do this w/out push)
// let cities = ['Barcelona', 'Cape Town', 'Long Beach', 'Denver', 'Houston']; 
// cities = [...cities, 'Highlands Ranch'];

//console.log(citiesCopy);
// console.log(cities);

// // ...numbers - converts all incoming arguments into an array.
// // Makes function dynamic so can take any number of arguments
// //const calculateAverage = (...numbers) => {

// // The below grabs the first argument as 'thing' and then everything else
// const calculateAverage = (thing, ...numbers) => {
//     let sum = 0;
//     numbers.forEach((num) => sum += num);
//     //return sum / numbers.length;
//     const average = sum / numbers.length;
//     return `The average ${thing} is ${average}`;
// };

// //console.log(calculateAverage(0, 100, 88, 64));
// console.log(calculateAverage('age', 0, 100, 88, 64));

// // Challenge Area
// const printTeam = (teamName, coach, ...players) => {
//     //let playerList = "";
//     //players.forEach((player) => playerList += player + ', ');

//     //return `Team: ${teamName} Coach: ${coach} Players: ${playerList}`;
//     return `Team: ${teamName} Coach: ${coach} Players: ${players.join(', ')}`;

// };

// console.log(printTeam('Liberty', 'Casey Penn', 'Marge', 'Aiden', 'Herbert', 'Sherry'));