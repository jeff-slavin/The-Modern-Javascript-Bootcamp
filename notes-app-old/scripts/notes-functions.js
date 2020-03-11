'use strict';

// let data;

// const processData = () => {
//     data = '1234567890';
// };

// processData();

// console.log(data);

// Read existing notes from localStorage
const getSavedNotes = () => {
    const notesJSON = localStorage.getItem('notes');

    try {
        return notesJSON ? JSON.parse(notesJSON) : [];
    } catch (e) {
        return [];
    };

    // return notesJSON !== null ? JSON.parse(notesJSON) : [];

    // if(notesJSON !== null) {
    //     return JSON.parse(notesJSON);
    // } else {
    //     return [];
    // };
};

// const getSavedNotes = function() {
//     const notesJSON = localStorage.getItem('notes');

//     if(notesJSON !== null) {
//         return JSON.parse(notesJSON);
//     } else {
//         return [];
//     };
// };

// Save the notes to localStorage
const saveNotes = (notes) => {
    localStorage.setItem('notes', JSON.stringify(notes));
};

// const saveNotes = function(notes) {
//     localStorage.setItem('notes', JSON.stringify(notes));
// };

// Remove a note from the list
const removeNote = (id) => {
    const noteIndex = notes.findIndex((note) => note.id === id);

    if (noteIndex > -1) {
        notes.splice(noteIndex, 1);
    };
};

// const removeNote = function(id) {
//     const noteIndex = notes.findIndex(function(note) {
//         return note.id === id;
//     });

//     if (noteIndex > -1) {
//         notes.splice(noteIndex, 1);
//     };
// };

// Generate the DOM structure for a note
const generateNoteDOM = (note) => {

    const noteElement = document.createElement('a');
    const textElement = document.createElement('p');
    const statusElement = document.createElement('p');

    // const button = document.createElement('button');

    // // Setup the remove note button
    // button.textContent = 'x';
    // noteElement.appendChild(button);
    // button.addEventListener('click', (e) => {
    //     removeNote(note.id);
    //     saveNotes(notes);
    //     renderNotes(notes, filters);
    // });

    // Setup the note title text
    if (note.title.length > 0) {
        textElement.textContent = note.title;
    } else {
        textElement.textContent = 'Unnamed note';
    };
    textElement.classList.add('list-item__title');
    noteElement.appendChild(textElement);

    // Setup the link
    noteElement.setAttribute('href', `/edit.html#${note.id}`);
    noteElement.classList.add('list-item');

    // Setup the status message
    statusElement.textContent = generateLastEdited(note.updatedAt);
    statusElement.classList.add('list-item__subtitle');
    noteElement.appendChild(statusElement);

    return noteElement;
};

// sort your notes by one of three ways
const sortNotes = (notes, sortBy) => {
    if(sortBy === 'byEdited') {
        return notes.sort((a, b) => {
            if (a.updatedAt > b.updatedAt) {
                return -1;
            } else if (a.updatedAt < b.updatedAt) {
                return 1;
            } else {
                return 0;
            };
        });
    } else if (sortBy === 'byCreated') {
        return notes.sort((a, b) => {
            if (a.createdAt > b.createdAt) {
                return -1;
            } else if (a.createdAt < b.createdAt) {
                return 1;
            } else {
                return 0;
            };
        });
    } else if (sortBy === 'alphabetical') {
        return notes.sort((a, b) => {
            if (a.title.toLowerCase() < b.title.toLowerCase()) {
                return -1;
            } else if (a.title.toLowerCase() > b.title.toLowerCase()) {
                return 1;
            } else {
                return 0;
            };
        });
    } else {
        return notes;
    };
};

// Render application notes
const renderNotes = (notes, filters) => {
    
    const notesElement = document.querySelector('#notes');
    notes = sortNotes(notes, filters.sortBy);
    
    const filteredNotes = notes.filter((item) => item.title.toLowerCase().includes(filters.searchText.toLowerCase()));

    notesElement.innerHTML = '';
    
    if (filteredNotes.length > 0) {
        filteredNotes.forEach((note) => {
            const noteElement = generateNoteDOM(note);  
            notesElement.appendChild(noteElement);
        });
    } else {
        const emptyMessage = document.createElement('p');
        emptyMessage.textContent = 'No notes to show';
        emptyMessage.classList.add('empty-message')
        notesElement.appendChild(emptyMessage);
    };

    
};

// Generate the last edited message
const generateLastEdited = (timestamp) => {
    return `Last edited ${moment(timestamp).fromNow()}`;
};