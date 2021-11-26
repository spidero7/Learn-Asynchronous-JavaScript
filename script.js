// Old way getting data from API
const getTodo = (resource) => { // Arrow function

  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest(); // HTTP Request

    request.addEventListener('readystatechange', () => {
      // console.log(request, request.readyState);
      if (request.readyState === 4 && request.status == 200) { // 4 stage -> Completed 
        const data = JSON.parse(request.responseText) // Covert JSON into JS Object
        resolve(data);
      } else if (request.readyState === 4) {
        reject('error getting resource');
      }
    });

    request.open('GET', resource); // GET from API Endpoint
    request.send();
    })
  
};

getTodo('./data/todos.json').then(data => {
  console.log('promise 1 resolved:', data);
  return getTodo('./data/todos-2.json');
}).then(data => {
  console.log('promise 2 resolved:', data);
  return getTodo('./data/todos-3.json');
}).then(data => {
  console.log('promise 3 resolved:', data)
}).catch(error => {
  console.log('promise rejected:', error);
});

// Promise example

// const getSomething = () => {
  
//   return new Promise((resolve, reject) => {
//     // fetch something
//     //resolve('some data');
//     reject('some error');
//   });
// }

// // 1 method (long)
// getSomething().then((data) => {
//   console.log(data)
// }, (error) => {
//   console.log(error);
// });

// 2 method (short)
// getSomething().then(data => {
//   console.log(data);
// }).catch(error => {
//   console.log(error);
// });