
const getDataPromise = (num) => new Promise((resolve, reject) => {
    setTimeout(() => {
        typeof num === 'number' ? resolve(num * 2) : reject('Number must be provided');
    }, 2000);
});

const processData = async () => {
    //throw new Error('Something went wrong!');
    //return 12;

    let data = await getDataPromise(2);
    data = await getDataPromise(data);
    data = await getDataPromise(data);
    return data;
};

//console.log(processData());

processData().then((data) => {
    console.log('Data', data);
}).catch((err) => {
    console.log('Err', err);
});