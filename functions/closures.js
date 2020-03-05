const createCounter = () => {
    let count = 0;

    return {
        increment() {
            count++;
        },
        decrement() {
            count--;
        },
        get() {
            return count;
        }
    };

};

const counter = createCounter();

counter.increment();
counter.decrement();
counter.decrement();
console.log(counter.get());

// Adder
const createAdder = (a) => {
    return (b) => {
        return a + b;
    };
};

const add10 = createAdder(10);
console.log(add10(-2));
console.log(add10(20));
const add100 = createAdder(100);
console.log(add100(-90));

// Challenge: Tipper
const tipper = (baseTip) => {
    return (billAmount) => {
        return baseTip * billAmount;
    };
};

const myTipper25 = tipper(.30);
const myTipper20 = tipper(.20);
console.log(myTipper25(100));
console.log(myTipper20(100));


// const myFunction = () => {
//     const message = 'This is my message';

//     const printMessage = () => {
//         console.log(message);
//     }

//     return printMessage;
// }

// const myPrintMessage = myFunction();
// myPrintMessage();