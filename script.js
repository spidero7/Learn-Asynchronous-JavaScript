const getTodo = (callback) => {
  const request = new XMLHttpRequest();

  request.addEventListener('readystatechange', () => {
    // console.log(request, request.readyState);
    if (request.readyState === 4 && request.status == 200) {
      callback(undefined, request.responseText);
    } else if (request.readyState === 4) {
      callback('Could not fetch data', undefined);
    }
  });

  request.open('GET', 'https://jsonplaceholder.typicode.com/todos');
  request.send();
};

getTodo((error, data) => {
  console.log('Callback fired');
  if (error) {
    console.log(error);
  } else {
    console.log(data);
  }
});
