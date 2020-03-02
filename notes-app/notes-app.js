// DOM - Document Object Model

const notes = [{
    title: 'My next trip',
    body: 'I would like to go to Spain'
}, {
    title: 'Habbits to work on',
    body: 'Exercise. Eating a bit better.'
}, {
    title: 'Office modification',
    body: 'Get a new seat'
}];

const filters = {
    searchText: ''
};

const renderNotes = function (notes, filters) {
    const filteredNotes = notes.filter(function(item) {
        return item.title.toLowerCase().includes(filters.searchText.toLowerCase());
    });

 document.querySelector('#notes').innerHTML = '';
    
    filteredNotes.forEach(function (note) {
        const noteElement = document.createElement('p');
        noteElement.textContent = note.title;
        document.querySelector('#notes').appendChild(noteElement);
    })
};

renderNotes(notes, filters);

document.querySelector('#create-note').addEventListener('click', function(e) {
    e.target.textContent = 'The button was clicked';
});

// document.querySelector('#remove-all').addEventListener('click', function(e) {
//     document.querySelectorAll('.note').forEach(function(note) {
//         note.remove();
//     });
// });

document.querySelector('#search-text').addEventListener('input', function(e) {
    filters.searchText = e.target.value;
    renderNotes(notes, filters);
});

document.querySelector('#filter-by').addEventListener('change', function(e) {
    console.log(e.target.value);
});

// document.querySelector('#for-fun').addEventListener('change', function(e) {
//     console.log(e.target.checked);
// });

// document.querySelector('#name-form').addEventListener('submit', function(e) {
//     // cancel default browser action (full page refresh and URL changing to include data)
//     e.preventDefault();
//     console.log(e.target.elements.firstName.value);
//     e.target.elements.firstName.value = '';
// })

// document.querySelector('#search-text').addEventListener('change', function(e) {
//     console.log(e.target.value);
// })

// Targeting
// 'p' - target items with tag 'p'
// #replace - target all items with ID = 'replace'
// .item - target all things with a class = 'item'
// p#order - paragraph tag with id=order
// button.inventory - all buttons with class name inventory
// h1#title.application - all H1 tags with ID=title and class=application
// h1.application#title - same as the above

// document.querySelector('#remove-all').addEventListener('click', function(e) {
//     console.log('Delete all notes');
// })

// document.querySelectorAll('BUTTON')[1].addEventListener('click', function(e) {
//     console.log('Delete all notes');   
// })

// // querySelector matches the first tag found
// // const p = document.querySelector('p');
// // console.log('Removing paragraph');
// // p.remove();
// // console.log('Paragraph removed');

// // queryAll gives you back a list of all tags
// const ps = document.querySelectorAll('p');

// ps.forEach(function(item){
//     item.textContent = '*********'
//     //console.log(item.textContent);
//     //item.remove();
// })

// // Add a new element
// const newParagraph = document.createElement('P');
// newParagraph.textContent = 'This is a new element from JavaScript';
// document.querySelector('BODY').appendChild(newParagraph);