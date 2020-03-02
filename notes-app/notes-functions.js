
// Read existing notes from localStorage
const getSavedNotes = function() {
    const notesJSON = localStorage.getItem('notes');

    if(notesJSON !== null) {
        return JSON.parse(notesJSON);
    } else {
        return [];
    };
};

// Save the notes to localStorage
const saveNotes = function(notes) {
    localStorage.setItem('notes', JSON.stringify(notes));
};

// Generate the DOM structure for a note
const generateNoteDOM = function(note) {

    const noteElement = document.createElement('div');
    const textElement = document.createElement('span');
    const button = document.createElement('button');

    // Setup the remove note button
    button.textContent = 'x';
    noteElement.appendChild(button);

    // Setup the note title text
    if (note.title.length > 0) {
        textElement.textContent = note.title;
    } else {
        textElement.textContent = 'Unnamed note';
    };

    noteElement.appendChild(textElement);

    return noteElement;
};

// Render application notes
const renderNotes = function (notes, filters) {
    const filteredNotes = notes.filter(function(item) {
        return item.title.toLowerCase().includes(filters.searchText.toLowerCase());
    });

    document.querySelector('#notes').innerHTML = '';
    
    filteredNotes.forEach(function (note) {
        const noteElement = generateNoteDOM(note);  
        document.querySelector('#notes').appendChild(noteElement);
    });
};