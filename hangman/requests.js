
const getPuzzle = (callback) => {
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', (e) => {
        if (e.target.readyState === 4 && e.target.status === 200) {        // 4 is 'DONE', the final response
            const data = JSON.parse(e.target.responseText);
            callback(undefined, data.puzzle);
        } else if (e.target.readyState === 4) {
            callback('An error has taken place', undefined);
        };
    });

    request.open('GET', 'http://puzzle.mead.io/puzzle?wordCount=3');
    request.send();
};

// const getPuzzle = () => {
//     const request = new XMLHttpRequest();

//     request.addEventListener('readystatechange', (e) => {
//         if (e.target.readyState === 4 && e.target.status === 200) {        // 4 is 'DONE', the final response
//             const data = JSON.parse(e.target.responseText);
//             console.log(data);
//             return data;
//         } else if (e.target.readyState === 4) {
//             console.log('An error has taken place');
//         }
//     });

//     request.open('GET', 'http://puzzle.mead.io/puzzle?wordCount=3');
//     request.send();
// };