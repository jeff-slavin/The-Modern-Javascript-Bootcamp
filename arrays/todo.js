const myTODOList = [ {
    text: 'Sleep',
    completed: true
}, {
    text: 'Wake Up',
    completed: true
}, {
    text: 'Get Dressed',
    completed: true
}, {
    text: 'Shower',
    completed: true
}, {
    text: 'Get Dressed',
    completed: true
}, {
    text: 'Dress Kids',
    completed: false
}, {
    text: 'Drop Kids Off At School',
    completed: false
}, {
    text: 'Drive To Work',
    completed: false
}];

const deleteTODO = function(todos, todoText) {
    const index = todos.findIndex(function (todo, index) {
        return todo.text.toLowerCase() === todoText.toLowerCase();
    });

    if (index > -1) {
        todos.splice(index, 1);
    }
};

const getThingsToDo = function(todos) {
    return todos.filter(function(todo, index) {
        return !todo.completed;
    });
};

const sortTodos = function(todos) {
    todos.sort(function(a,b) {
        if (!a.completed && b.completed) {
            return -1;
        } else if (a.completed && !b.completed) {
            return 1;
        } else {
            return 0;
        }
    });
};

sortTodos(myTODOList);
console.log(myTODOList);

// console.log(getThingsToDo(myTODOList));

// deleteTODO(myTODOList, 'wake up');
// console.log(myTODOList);



// // Delete the 3rd item
// myTODOList.splice(2, 1);
// // Add New Item To End
// myTODOList.push('New Last Item');
// // Remove First Item
// // myTODOList.splice(0, 1);
// myTODOList.shift();

// console.log(`You have ${myTODOList.length} things to do`);

// myTODOList.forEach(function(item, index) {
//     console.log((index + 1) + '. ' + item);
//     // could also have used a template string here
// })

// for (let count = 0; count < myTODOList.length; count++) {
//     console.log(count + 1 + ': ' + myTODOList[count]);
// }