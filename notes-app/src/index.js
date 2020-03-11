import { getNotes, createNote, removeNote, updateNote } from './notes';
import { getFilters, setFilters } from './filters';

// console.log(getNotes());
// createNote();
// removeNote('1');

// updateNote('ab798bb7-0f24-484a-be19-8ac2cc5e18ac', {
//     title: 'My note title',
//     body: 'This is the body for my note'
// });

// console.log(getNotes());

console.log(getFilters());
setFilters({
    searchText: 'Office',
    sortBy: 'byCreated'
});
console.log(getFilters());