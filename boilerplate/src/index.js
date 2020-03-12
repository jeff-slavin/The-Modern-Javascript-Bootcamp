// ...numbers - converts all incoming arguments into an array.
// Makes function dynamic so can take any number of arguments
//const calculateAverage = (...numbers) => {

// The below grabs the first argument as 'thing' and then everything else
const calculateAverage = (thing, ...numbers) => {
    let sum = 0;
    numbers.forEach((num) => sum += num);
    //return sum / numbers.length;
    const average = sum / numbers.length;
    return `The average ${thing} is ${average}`;
};

//console.log(calculateAverage(0, 100, 88, 64));
console.log(calculateAverage('age', 0, 100, 88, 64));

// Challenge Area
const printTeam = (teamName, coach, ...players) => {
    //let playerList = "";
    //players.forEach((player) => playerList += player + ', ');

    //return `Team: ${teamName} Coach: ${coach} Players: ${playerList}`;
    return `Team: ${teamName} Coach: ${coach} Players: ${players.join(', ')}`;

};

console.log(printTeam('Liberty', 'Casey Penn', 'Marge', 'Herbert', 'Sherry'));