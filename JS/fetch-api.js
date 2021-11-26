// Fetch API

// this fetch() returns as a Promise (at some point Promise resolve if we'll have a success, or reject if error)
fetch('data/todos.json').then(response => {
    console.log('resolved', response)
    return response.json();
}).then(data => {
    console.log(data);
}).catch(error => {
    console.log('not fetch the data', error)
})