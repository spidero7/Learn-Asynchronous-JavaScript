const getTodo = (resource, callback) => { // Arrow function
  const request = new XMLHttpRequest(); // HTTP Request

  request.addEventListener('readystatechange', () => {
    // console.log(request, request.readyState);
    if (request.readyState === 4 && request.status == 200) { // 4 stage -> Completed 
      const data = JSON.parse(request.responseText) // Covert JSON into JS Object
      callback(undefined, data);
    } else if (request.readyState === 4) {
      callback('Could not fetch data', undefined);
    }
  });

  request.open('GET', resource); // GET from API Endpoint
  request.send();
};


// Callback hell :(
getTodo('todos-2.json', (error, data) => {
  console.log(data);
  getTodo('todos-3.json', (error, data) => {
    console.log(data);
    getTodo('todos.json', (error, data) => {
      console.log(data)
    })
  })
});
