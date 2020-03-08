'use strict';

// Read existing TODOs from localStorage
const getSavedTODOs = () => {

    try {
        const todosJSON = localStorage.getItem('todos');
        return todosJSON ? JSON.parse(todosJSON) : [];
    } catch (e) {
        return [];
    };


    // return todosJSON !== null ? JSON.parse(todosJSON) : [];

    // if(todosJSON !== null) {
    //     return JSON.parse(todosJSON);
    // } else {
    //     return [];
    // };
};

// Save the TODOs to localStorage
const saveTODOs = (todos) => {
    localStorage.setItem('todos', JSON.stringify(todos));
};

// Remove a TODO from the list
const removeTODO = (id) =>{
    const todoIndex = todos.findIndex((todo) => todo.id === id);

    if (todoIndex > -1) {
        todos.splice(todoIndex, 1);
    };
};

// Toggle the completed value for a given TODO
const toggleTODO = (id) => {
    const todo = todos.find((todo) => todo.id === id);

    if (todo) {
        todo.completed = !todo.completed;
    };

    // if (todo != undefined) {
    //     todo.completed = !todo.completed;
    // };
};

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
        saveTODOs(todos);
        renderTodos(todos, filters);
    });

    // Set the text element text and append
    textElement.textContent = todo.text;
    containerElement.appendChild(textElement);

    // Setup container
    todoElement.classList.add('list-item');
    containerElement.classList.add('list-item__container');
    todoElement.appendChild(containerElement);

    // Append the button
    button.textContent = 'Remove';
    button.classList.add('button', 'button--text');
    todoElement.appendChild(button);
    button.addEventListener('click', (e) => {
        removeTODO(todo.id);
        saveTODOs(todos);
        renderTodos(todos, filters);
    });

    return todoElement;
};

// Render application TODOs
const renderTodos = (todos, filters) => {
    const todoElement = document.querySelector('#todos');
    const filteredTodos = todos.filter((todo) => {
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase());
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed;

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

const generateTODOSummaryDOM = (incompleteTodos) => {
    const summary = document.createElement('H2');
    const plural = incompleteTodos.length === 1 ? '' : 's';
    summary.classList.add('list-title');
    summary.textContent = `You have ${incompleteTodos.length} todo${plural} left.`;
    return summary;
};