// const notes = [
//     'Note 1',
//     'Note 2',
//     'Note 3'
// ];

const notes = [ {
        title: 'My next trip',
        body: 'I would like to go to Spain'
    }, {
        title: 'Habbits to work on',
        body: 'Exercise. Eating a bit better'
    }, {
        title: 'Office modification',
        body: 'Get a new seat'
    }];

const sortNotes = function(notes) {
    notes.sort(function(a, b) {
        if(a.title.toLowerCase() < b.title.toLowerCase()) {
            return -1;
        } else if (b.title.toLowerCase() < a.title.toLowerCase()) {
            return 1;
        } else {
            return 0;
        }
    });
};

const findNote = function(notes, noteTitle) {
    return notes.find(function (note, index) {
        return note.title.toLowerCase() === noteTitle.toLowerCase();
    })
}

const findNotes = function(notes, query) {
    return notes.filter(function (note, index) {
        const isTitleMatch = note.title.toLowerCase().includes(query);
        const isBodyMatch = note.body.toLowerCase().includes(query);
    
        return (isTitleMatch || isBodyMatch);
    });
}

sortNotes(notes);
console.log(notes);

// console.log(findNotes(notes, 'eating'));

// const findNote = function(notes, noteTitle) {
//     const index = notes.findIndex(function (note, index) {
//         return note.title.toLowerCase() === noteTitle.toLowerCase();
//     })
//     return notes[index];
// }

// const note = findNote(notes, 'office modification');
// console.log(note);

// //notes.pop();    // removes last item (actually returns the removed items value)
// console.log(notes.pop());   // displays the item removed
// notes.push('Note 4');   // adds new item to the end

// console.log(notes.shift()); // removes the first item (also will return it just like pop())
// notes.unshift('Note 0');    // adds an item at the beginning

// splice can add or remove items from a specific spot in the array
// can also replace an item
// notes.splice(1, 1); // start at index 1, and remove 1 item
// notes.splice(1, 0, 'New Second Note'); adds an item
// notes.splice(1, 1, 'Replacing Second Item');    // replacing an item

// notes[2] = 'New Note 3'; // changes value of a note

// const doThis = function() {}
// notes.forEach(doThis);
// Could this this above, but no need to define a variable

// notes.forEach(function (item, index) {
//     console.log(index + ': ' + item);
// });

// console.log(notes);
// console.log(notes.length);

// const index = notes.findIndex(function(item, index) {
//     console.log(item);
//     return item.title === 'Habbits to work on';
// }); // goes through every item until the return finds True (and then has index). does not go through every item regardless

// console.log(index);

//console.log(notes.indexOf({})); // only way this returns true (searching for an empty object) if they are literally the exact same object
// indexOf always uses === so they need to be the same object to get 'true' (use findIndex instead)

// console.log(notes[0]);
//console.log(notes[22]); // no error, just get 'undefined'
//console.log(notes[notes.length - 1])    // grabs the last item
//console.log(notes[notes.length - 55]); // no error, just get 'undefined'

// for statement can go in reverse as well (as below)
// for (let count = 2; count >= 0; count--) {
//     console.log(count);
// };

// can also count in reverse (set count to length - 1, count >= 0, count--)
// for(let count = 0; count < notes.length; count++) {
//     console.log(notes[count]);
// }

// console.log(notes.indexOf('Note 2'));    // returns -1 if not found
