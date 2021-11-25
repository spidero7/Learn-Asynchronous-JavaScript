const getTodo = (callback) => { // Arrow function
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

  request.open('GET', 'todos.json'); // GET from API Endpoint
  request.send();
};

console.log(1)
console.log(2)

getTodo((error, data) => {
  console.log('Callback fired');
  if (error) {
    console.log(error);
  } else {
    console.log(data);
  }
});

console.log(3)
console.log(4)