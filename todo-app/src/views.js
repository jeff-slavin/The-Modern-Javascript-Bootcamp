import { getTODOs, toggleTODO, removeTODO } from './todos';
import { getFilters } from './filters';

// Render application TODOs
// DESTRUCTURING
const renderTODOs = () => {
    const todoElement = document.querySelector('#todos');
    const { searchText, hideCompleted } = getFilters();
    
    //const filters = getFilters();
    
    const filteredTodos = getTODOs().filter((todo) => {
        const searchTextMatch = todo.text.toLowerCase().includes(searchText.toLowerCase());
        const hideCompletedMatch = !hideCompleted || !todo.completed;
        return searchTextMatch && hideCompletedMatch;
    });

    const incompleteTodos = filteredTodos.filter((todo) => !todo.completed);

    todoElement.innerHTML = '';
    todoElement.appendChild(generateTODOSummaryDOM(incompleteTodos));

    if (filteredTodos.length > 0) {
        filteredTodos.forEach((item) => {
            todoElement.appendChild(generateTODODOM(item));
        });
    } else {
        const messageElement = document.createElement('p');
        messageElement.classList.add('empty-message');
        messageElement.textContent = 'No to-dos to show';
        todoElement.appendChild(messageElement);
    };
    
};

// Render application TODOs
// const renderTODOs = () => {
//     const todoElement = document.querySelector('#todos');


//     const filters = getFilters();
    
//     const filteredTodos = getTODOs().filter((todo) => {
//         const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase());
//         const hideCompletedMatch = !filters.hideCompleted || !todo.completed;
//         return searchTextMatch && hideCompletedMatch;
//     });

//     const incompleteTodos = filteredTodos.filter((todo) => !todo.completed);

//     todoElement.innerHTML = '';
//     todoElement.appendChild(generateTODOSummaryDOM(incompleteTodos));

//     if (filteredTodos.length > 0) {
//         filteredTodos.forEach((item) => {
//             todoElement.appendChild(generateTODODOM(item));
//         });
//     } else {
//         const messageElement = document.createElement('p');
//         messageElement.classList.add('empty-message');
//         messageElement.textContent = 'No to-dos to show';
//         todoElement.appendChild(messageElement);
//     };
    
// };

// Generate the DOM structure for a TODO
const generateTODODOM = (todo) => {

    const todoElement = document.createElement('label');
    const containerElement = document.createElement('div');
    const checkboxElement = document.createElement('input');
    const textElement = document.createElement('span');
    const button = document.createElement('button');

    // Setup the checkbox
    checkboxElement.setAttribute('type', 'checkbox');
    checkboxElement.checked = todo.completed;
    containerElement.appendChild(checkboxElement);
    checkboxElement.addEventListener('change', () => {
        toggleTODO(todo.id);
        renderTODOs();
    });

    // Set the text element text and append
    textElement.textContent = todo.text;
    containerElement.appendChild(textElement);

    // Setup container
    todoElement.classList.add('list-item');
    containerElement.classList.add('list-item__container');
    todoElement.appendChild(containerElement);

    // Setup the remove button
    button.textContent = 'Remove';
    button.classList.add('button', 'button--text');
    todoElement.appendChild(button);
    button.addEventListener('click', (e) => {
        removeTODO(todo.id);
        renderTODOs();
    });

    return todoElement;
};

const generateTODOSummaryDOM = (incompleteTodos) => {
    const summary = document.createElement('H2');
    const plural = incompleteTodos.length === 1 ? '' : 's';
    summary.classList.add('list-title');
    summary.textContent = `You have ${incompleteTodos.length} todo${plural} left.`;
    return summary;
};

export { generateTODODOM, renderTODOs, generateTODOSummaryDOM };