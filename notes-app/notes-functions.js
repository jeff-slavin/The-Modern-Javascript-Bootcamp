
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
    const noteElement = document.createElement('p');

        if (note.title.length > 0) {
            noteElement.textContent = note.title;
        } else {
            noteElement.textContent = 'Unnamed note';
        };

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