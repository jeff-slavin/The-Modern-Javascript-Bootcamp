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

const incompleteTodos = todos.filter(function(todo) {
    return !todo.completed;
});

// List Total TODOs left
// let todosLeft = 0;

// todos.forEach(function(item) {
//     if (!item.completed) {
//         todosLeft += 1;
//     };
// });

const summary = document.createElement('H2');
summary.textContent = `You have ${incompleteTodos.length} todos left.`;
document.querySelector('BODY').appendChild(summary);

todos.forEach(function(item){
    const newParagraph = document.createElement('P');
    newParagraph.textContent = item.text;
    document.querySelector('BODY').appendChild(newParagraph);
});

// Listen for 'Add TODO' button click listener
document.querySelector('#add-todo').addEventListener('click', function(e) {
    console.log("I'm adding a new TODO.");
});

// Listen for text typed into the 'enter new todo' textbox
document.querySelector('#new-todo-text').addEventListener('input', function(e) {
    console.log(e.target.value);
});