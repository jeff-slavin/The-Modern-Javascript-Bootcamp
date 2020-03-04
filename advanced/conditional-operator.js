const myAge = 38;
// let message;
const voteMessage = myAge >= 18 ? 'You can vote!' : 'You cannot vote.';
console.log(voteMessage);

const showPage = () => {
    //console.log('Showing the page');
    return 'Showing the page';
};

const showErrorPage = () => {
    //console.log('Showing the error page');
    return 'Showing the error page';
};

const drinkMessage = myAge >= 21 ? showPage() : showErrorPage();
console.log(drinkMessage);

//myAge >= 21 ? showPage() : showErrorPage();

// message = myAge >= 18 ? 'You can vote!' : 'You cannot vote.';

// if (myAge >= 18) {
//     message = 'You can vote!';
// } else {
//     message = 'You cannot vote.';
// };

// Challenge Area
const team = ['Tyler', 'Porter', 'Jeff', 'Andrew', 'Jenn'];
//const teamMessage = team.length <= 4 ? `Team size: ${team.length}` : 'Too many people on your team';
//console.log(teamMessage);
//console.log(team.length <= 4 ? `Team size: ${team.length}` : 'Too many people on your team');
team.length <= 4 ? console.log(`Team size: ${team.length}`) : console.log('Too many people on your team');