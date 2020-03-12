const filters = {
    searchText: '',
    hideCompleted: false
};

const getFilters = () => filters;

// adding destructuring
const setFilters = ({ searchText, hideCompleted }) => {
    if(typeof searchText === 'string') {
        filters.searchText = searchText;
    };

    if(typeof hideCompleted === 'boolean') {
        filters.hideCompleted = hideCompleted;
    };
};

// const setFilters = (updates) => {
//     if(typeof updates.searchText === 'string') {
//         filters.searchText = updates.searchText;
//     };

//     if(typeof updates.hideCompleted === 'boolean') {
//         filters.hideCompleted = updates.hideCompleted;
//     };
// };

export { getFilters, setFilters };