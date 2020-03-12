import { renderTODOs } from './views';
import { setFilters } from './filters';
import { createTODO, loadTODOs } from './todos';

renderTODOs();

document.querySelector('#search-text').addEventListener('input', (e) => {
    setFilters({
        searchText: e.target.value
    });
    renderTODOs();
});

document.querySelector('#new-todo').addEventListener('submit', (e) => {
    const text = e.target.elements.text.value.trim();
    e.preventDefault();

    if(text.length > 0) {
        createTODO(text);
        renderTODOs();
        e.target.elements.text.value = '';
    };
});

document.querySelector('#hide-completed').addEventListener('change', (e) => {
    setFilters({
        hideCompleted: e.target.checked
    });
    renderTODOs();
});

// Keeps multiple tabs in sync
window.addEventListener('storage', (e) => {
    if (e.key === 'todos') {
        loadTODOs();
        renderTODOs();
    };
});