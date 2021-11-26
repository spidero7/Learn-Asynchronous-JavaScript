// Async & await
    // Use everytime
    // No block the rest of the code
    // Cleaner way to chaining promises

// async - always return a Promise
// await instead of then method
const getTodos = async() => {

    const response = await fetch('data/todos.json') 
    // await stop JS (stop assigning a value to variable) until fetch get us a value
    // fetch return a Promise
    const data = await response.json();
    return data;
};

getTodos()
    .then(data => console.log('resolved', data));

// fetch('data/todos.json').then(response => {
//     console.log('resolved', response)
//     return response.json();
// }).then(data => {
//     console.log(data);
// }).catch(error => {
//     console.log('not fetch the data', error)
// })