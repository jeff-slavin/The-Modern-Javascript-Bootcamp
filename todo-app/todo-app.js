const todos = [{
    text: 'Order cat food',
    completed: false
}, {
    text: 'Clean kitchen',
    completed: true
}, {
    text: 'Buy food',
    completed: true
}, {
    text: 'Do work',
    completed: false
}, {
    text: 'Exercise',
    completed: true
}];

const filters = {
    searchText: '',
    hideCompleted: false
};

const renderTodos = function(todos, filters) {
    const filteredTodos = todos.filter(function (todo) {
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase());
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed;

        return searchTextMatch && hideCompletedMatch;

        // return todo.text.toLowerCase().includes(filters.searchText.toLowerCase());
    });

    // filteredTodos = filteredTodos.filter(function(todo) {
    //     // return !filters.hideCompleted || !todo.completed;
    //     // if (filters.hideCompleted) {
    //     //     return !todo.completed;
    //     // } else {
    //     //     return true;
    //     // };
    // });

    const incompleteTodos = filteredTodos.filter(function(todo) {
        return !todo.completed;
    });

    document.querySelector('#todos').innerHTML = '';

    const summary = document.createElement('H2');
    summary.textContent = `You have ${incompleteTodos.length} todos left.`;
    document.querySelector('#todos').appendChild(summary);

    filteredTodos.forEach(function(item){
        const newParagraph = document.createElement('P');
        newParagraph.textContent = item.text + ' - ' + 'Completed: ' + item.completed;
        document.querySelector('#todos').appendChild(newParagraph);
    });
};

renderTodos(todos, filters);

document.querySelector('#search-text').addEventListener('input', function(e) {
    filters.searchText = e.target.value;
    renderTodos(todos, filters);
});

document.querySelector('#new-todo').addEventListener('submit', function(e) {
    e.preventDefault();
    todos.push({
        text: e.target.elements.text.value,
        completed: false
    });
    renderTodos(todos, filters);
    e.target.elements.text.value = '';
})

document.querySelector('#hide-completed').addEventListener('change', function(e) {
    filters.hideCompleted = e.target.checked;
    renderTodos(todos, filters);
});

// List Total TODOs left
// let todosLeft = 0;

// todos.forEach(function(item) {
//     if (!item.completed) {
//         todosLeft += 1;
//     };
// });

// // Listen for 'Add TODO' button click listener
// document.querySelector('#add-todo').addEventListener('click', function(e) {
//     console.log("I'm adding a new TODO.");
// });

// // Listen for text typed into the 'enter new todo' textbox
// document.querySelector('#new-todo-text').addEventListener('input', function(e) {
//     console.log(e.target.value);
// });