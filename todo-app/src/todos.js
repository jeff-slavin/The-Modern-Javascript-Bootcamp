import uuidv4 from 'uuid/v4';

let todos = [];

// Fetch existing TODOs from localStorage
const loadTODOs = () => {
    const todosJSON = localStorage.getItem('todos');
   
    try {
        todos = todosJSON ? JSON.parse(todosJSON) : [];
    } catch (e) {
        todos = [];
    };
};

// Save the TODOs to localStorage
const saveTODOs = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
};

const getTODOs = () => todos;

const createTODO = (text) => {

    todos.push({
        id: uuidv4(),
        text: text,
        completed: false
    });

    saveTODOs();

};

const removeTODO = (id) => {
    const todoIndex = todos.findIndex((todo) => todo.id === id);

    if (todoIndex > -1) {
        todos.splice(todoIndex, 1);
        saveTODOs();
    };
};

// Toggle the completed value for a given TODO
const toggleTODO = (id) => {
    const todo = todos.find((todo) => todo.id === id);

    if (todo) {
        todo.completed = !todo.completed;
        saveTODOs();
    };

};

loadTODOs();

export { getTODOs, createTODO, removeTODO, toggleTODO };