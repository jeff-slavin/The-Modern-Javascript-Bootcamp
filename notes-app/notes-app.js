// DOM - Document Object Model

let notes = getSavedNotes();

const filters = {
    searchText: ''
};

renderNotes(notes, filters);

document.querySelector('#create-note').addEventListener('click', function(e) {
    const uniqueID = uuidv4();
    
    notes.push( {
        id: uniqueID,
        title: '',
        body: ''
    });

    saveNotes(notes);
    // renderNotes(notes, filters); // no need to render the notes since we are immediately redirecting
    location.assign(`/edit.html#${uniqueID}`);
});

document.querySelector('#search-text').addEventListener('input', function(e) {
    filters.searchText = e.target.value;
    renderNotes(notes, filters);
});

document.querySelector('#filter-by').addEventListener('change', function(e) {
    console.log(e.target.value);
});

window.addEventListener('storage', function(e) {
    if (e.key === 'notes') {
        notes = JSON.parse(e.newValue);
        renderNotes(notes, filters);
    };
});

// const now = moment();   // current time
// now.add(1, 'year').subtract(20, 'days');
// // console.log(now.toString());
// console.log(now.format('MMMM Do, YYYY'));
// console.log(now.fromNow());
// console.log(now.valueOf()); // unix epoch
// // now.minute(1);
// // console.log(now.toString());

const birthday = moment();
// birthday.year(1981);
// birthday.month(8);
// birthday.day(28);
birthday.year(1981).month(7).days(28);
console.log(birthday.format('MMM D, YYYY'));
