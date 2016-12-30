
/*
 * 61. Code Execution in Javascript
 */
//
// es6 that bring promises as native to javascript

/*
 * 62. Terminology of Promises
 */

/*
 * 63. Creating Promises
 */
let promise = new Promise((resolve, reject) => {
    // in pending state
    reject(); // rejected status
    resolve(); // resolved status
});
/*
 * 64. Then and Catch
 */

let promise = new Promise((resolve, reject) => {
    reject(); // then will not get executed
});

// everything went well
promise
    .then(() => console.log('finally finished'))
    .then(() => console.log('I was also ran'))
    .catch(() => console.log('uh oh!'));

// something bad happended
promise.catch();

/*
 * 
 * 65. Async Code with Promises
 */

let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve();
    }, 3000);
});

// everything went well
promise
    .then(() => console.log('finally finished'))
    .then(() => console.log('I was also ran'))
    .catch(() => console.log('uh oh!'));


/*
 * 66. Ajax Requests with Fetch
 */

// fetch is a native code function
const url = "https://jsonplaceholder.typicode.com/posts/";

fetch(url) // returns a promise
    .then(response = response.json()) // will go here even with a 404
    .catch(error => console.log('BAD', error); // catch doesn't happen unless the dns fails
