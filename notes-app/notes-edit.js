
const titleElement = document.querySelector('#note-title');
const bodyElement = document.querySelector('#note-body');
const removeElement = document.querySelector('#remove-note');
const noteID = location.hash.substring(1);
let notes = getSavedNotes();

let note = notes.find(function(note) {
    return note.id === noteID;
});

if (note == undefined) {
    location.assign('/index.html');
}

titleElement.value = note.title;
bodyElement.value = note.body;

titleElement.addEventListener('input', function(e) {
    note.title = e.target.value;
    saveNotes(notes);
});

bodyElement.addEventListener('input', function(e) {
    note.body = e.target.value;
    saveNotes(notes);
});

removeElement.addEventListener('click', function(e) {
    removeNote(note.id);
    saveNotes(notes);
    location.assign('/index.html');
});

// This event fires when any local storage data fires
// This only fires on the 'other' pages. If I change some data on one page that changes local storage, this will not fire on that page
// this would only fire on the other pages that depend on that local storage
// The page doing the manipulation (that saved the local storage) does not get this event
window.addEventListener('storage', function(e) {
    if (e.key === 'notes') {
        notes = JSON.parse(e.newValue);

        note = notes.find(function(note) {
            return note.id === noteID;
        });
        
        if (note == undefined) {
            location.assign('/index.html');
        }
        
        titleElement.value = note.title;
        bodyElement.value = note.body;
    };
});