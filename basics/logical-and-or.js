let temp = 55;

if (temp >= 60 && temp <= 90) {
    console.log('It is pretty nice out today');
} else if (temp < 0 || temp > 120) {
    console.log('The temperature is dangerous outside right now');
} else {
    console.log('Eh, do what you want');
}

let isGuest1Vegan = false;
let isGuest2Vegan = false;

if (isGuest1Vegan && isGuest2Vegan) {
    console.log('Only offer up vegan menu items');
} else if(isGuest1Vegan || isGuest2Vegan) {
    console.log('Be sure to offer some vegan options');
} else {
    console.log('Offer anything on the menu');
}