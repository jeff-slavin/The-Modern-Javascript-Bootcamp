import uuidv4 from 'uuid/v4';
import moment from 'moment';

let notes = [];

const loadNotes = () => {
    const notesJSON = localStorage.getItem('notes');

    try {
        return notesJSON ? JSON.parse(notesJSON) : [];
    } catch (e) {
        return [];
    };
};

// Save notes to localStorage
const saveNotes = () => {
    localStorage.setItem('notes', JSON.stringify(notes));
};

// Expose 'notes' array from module
const getNotes = () => notes;

const createNote = () => {
    const uniqueID = uuidv4();
    const timestamp = moment().valueOf();

    notes.push( {
        id: uniqueID,
        title: '',
        body: '',
        createdAt: timestamp,
        updatedAt: timestamp
        
    });

    saveNotes();
};

notes = loadNotes();

export { getNotes, createNote };