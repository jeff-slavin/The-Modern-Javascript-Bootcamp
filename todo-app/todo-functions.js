
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

// Generate the DOM structure for a TODO
const generateTODODOM = function(todo) {
    const newElement = document.createElement('P');
    newElement.textContent = todo.text + ' - ' + 'Completed: ' + todo.completed;
    return newElement;
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