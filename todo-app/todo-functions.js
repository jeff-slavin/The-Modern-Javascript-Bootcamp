
// Read existing TODOs from localStorage
const getSavedTODOs = function() {
    const todosJSON = localStorage.getItem('todos');

    if(todosJSON !== null) {
        return JSON.parse(todosJSON);
    } else {
        return [];
    };
};

// Save the TODOs to localStorage
const saveTODOs = function(todos) {
    localStorage.setItem('todos', JSON.stringify(todos));
};

// Remove a TODO from the list
const removeTODO = function(id) {
    const todoIndex = todos.findIndex(function(todo) {
        return todo.id === id;
    });

    if (todoIndex > -1) {
        todos.splice(todoIndex, 1);
    };
};

// Toggle the completed value for a given TODO
const toggleTODO = function(id) {
    const todo = todos.find(function(todo) {
        return todo.id === id;
    });

    if (todo != undefined) {
        todo.completed = !todo.completed;
    };
};

// Generate the DOM structure for a TODO
const generateTODODOM = function(todo) {

    const todoElement = document.createElement('div');
    const checkboxElement = document.createElement('input');
    const textElement = document.createElement('span');
    const button = document.createElement('button');

    // Setup the checkbox
    checkboxElement.setAttribute('type', 'checkbox');
    checkboxElement.checked = todo.completed;
    todoElement.appendChild(checkboxElement);
    checkboxElement.addEventListener('change', function() {
        toggleTODO(todo.id);
        saveTODOs(todos);
        renderTodos(todos, filters);
    });

    // Set the text element text and append
    textElement.textContent = todo.text + ' - ' + 'Completed: ' + todo.completed;
    todoElement.appendChild(textElement);

    // Append the button
    button.textContent = 'x';
    todoElement.appendChild(button);
    button.addEventListener('click', function(e) {
        removeTODO(todo.id);
        saveTODOs(todos);
        renderTodos(todos, filters);
    });

    return todoElement;
};

const generateTODOSummaryDOM = function(incompleteTodos) {
    const summary = document.createElement('H2');
    summary.textContent = `You have ${incompleteTodos.length} todos left.`;
    return summary;
};

// Render application TODOs
const renderTodos = function(todos, filters) {
    const filteredTodos = todos.filter(function (todo) {
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase());
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed;

        return searchTextMatch && hideCompletedMatch;
    });

    const incompleteTodos = filteredTodos.filter(function(todo) {
        return !todo.completed;
    });

    document.querySelector('#todos').innerHTML = '';
    document.querySelector('#todos').appendChild(generateTODOSummaryDOM(incompleteTodos));

    filteredTodos.forEach(function(item){
        document.querySelector('#todos').appendChild(generateTODODOM(item));
    });
};