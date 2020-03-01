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
    searchText: ''
};

const renderTodos = function(todos, filters) {
    const filteredTodos = todos.filter(function (todo) {
        return todo.text.toLowerCase().includes(filters.searchText.toLowerCase());
    });

    const incompleteTodos = filteredTodos.filter(function(todo) {
        return !todo.completed;
    });

    document.querySelector('#todos').innerHTML = '';

    const summary = document.createElement('H2');
    summary.textContent = `You have ${incompleteTodos.length} todos left.`;
    document.querySelector('#todos').appendChild(summary);

    filteredTodos.forEach(function(item){
        const newParagraph = document.createElement('P');
        newParagraph.textContent = item.text;
        document.querySelector('#todos').appendChild(newParagraph);
    });
};

renderTodos(todos, filters);

// List Total TODOs left
// let todosLeft = 0;

// todos.forEach(function(item) {
//     if (!item.completed) {
//         todosLeft += 1;
//     };
// });

// // Listen for 'Add TODO' button click listener
document.querySelector('#add-todo').addEventListener('click', function(e) {
    console.log("I'm adding a new TODO.");
});

// // Listen for text typed into the 'enter new todo' textbox
document.querySelector('#new-todo-text').addEventListener('input', function(e) {
    console.log(e.target.value);
});

document.querySelector('#search-text').addEventListener('input', function(e) {
    filters.searchText = e.target.value;
    renderTodos(todos, filters);
});