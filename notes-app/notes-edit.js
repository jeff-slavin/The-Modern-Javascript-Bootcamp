
const titleElement = document.querySelector('#note-title');
const bodyElement = document.querySelector('#note-body');
const removeElement = document.querySelector('#remove-note');
const dateElement = document.querySelector('#last-edited');
const noteID = location.hash.substring(1);
let notes = getSavedNotes();

let note = notes.find((note) => note.id === noteID);

if (note == undefined) {
    location.assign('/index.html');
}

titleElement.value = note.title;
bodyElement.value = note.body;
dateElement.textContent = generateLastEdited(note.updatedAt);

titleElement.addEventListener('input', (e) => {
    note.title = e.target.value;
    note.updatedAt = moment().valueOf();
    dateElement.textContent = generateLastEdited(note.updatedAt);
    saveNotes(notes);
});

bodyElement.addEventListener('input', (e) => {
    note.body = e.target.value;
    note.updatedAt = moment().valueOf();
    dateElement.textContent = generateLastEdited(note.updatedAt);
    saveNotes(notes);
});

removeElement.addEventListener('click', (e) => {
    removeNote(note.id);
    saveNotes(notes);
    location.assign('/index.html');
});

// This event fires when any local storage data fires
// This only fires on the 'other' pages. If I change some data on one page that changes local storage, this will not fire on that page
// this would only fire on the other pages that depend on that local storage
// The page doing the manipulation (that saved the local storage) does not get this event
window.addEventListener('storage', (e) => {
    if (e.key === 'notes') {
        notes = JSON.parse(e.newValue);

        note = notes.find((note) => note.id === noteID);
        
        if (note == undefined) {
            location.assign('/index.html');
        }
        
        titleElement.value = note.title;
        bodyElement.value = note.body;
        dateElement.textContent = generateLastEdited(note.updatedAt);
    };
});