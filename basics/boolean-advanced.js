let isAccountLocked = false;
let userRole = 'user';

if (isAccountLocked) {
    console.log('The account is locked.');
} else if (userRole === 'admin') {
    console.log('Welcome Admin!');
} else {
    console.log('Welcome!');
}

let temp = 115;

if (temp <= 32) {
    console.log('It is freezing outside!');
} else if(temp >= 110) {
    console.log('It is super hot outside!');
} else {
    console.log('It is nice outside, go enjoy your day.');
}