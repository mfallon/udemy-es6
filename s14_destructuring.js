/*
 * S14 - 38. Goldmine of ES6: Destructuring
 **/

const expense = {
    type: 'Business',
    amount: '$45 USD'
};

// sometimes you will, in order to abbreviate, pull a property off the object like so:
let type = expense.type
let amount = expense.amount

// But in ES6 we can DESTRUCTURE the properties with a left hand assignment:

const { type, amount } = expense;

/*
 * S14 - 39. Destructuring Arguments Object
 **/
var savedFile = {
    extension: 'jpg',
    name: 'repost',
    size: 14040
};

// summary
function fileSummary(file) {
    return `The file ${file.name}.${file.extension} is of size ${file.size}`;
}

console.log(fileSummary(savedFile));
// works but, lets use destructuring


function fileSummary({ name, extension, size }) {
    return `The file ${name}.${extension} is of size ${size}`;
}

/*
 * S14 - 40. Destructuring Arrays
 **/
 const companies = [
    'Google',
    'Facebook',
    'Uber'
];

// we now use angle bracket
// the order in which you destructure determines what gets assigned
const [ name, name2, name3, name4 ] = companies;

// name4 will just return undefined without throwing any error

// spread operator can be used here too - flexible

const [ name, name2, ...rest ] = companies;

// rest contiains all remaingin elements of the array!

/*
 * S14 - 41. Destructuring Arrays and Objects *At the Same Time*
 **/
const companies = [
    { name: 'Google', location: 'Mountain View' },
    { name: 'Facebook', location: 'Menlo Park' },
    { name: 'Uber', location: 'San Francisco' }
];

// want to get the location property of the first element
const [{ location }] = companies;

console.log(location);

// let's say we have a profile on google represented thus:
const google = {
    locations: [ 'Mountain View', 'New York', 'London' ]
};

// how to get access to first element to of the locations property
const { locations: [ location ] } = google;

/*
 * S14 - 42. So...When to Use Destructuring?
 **/
function signUp(username, password, email, dob, city) {
    // create new user
}

// other stuff

signUp('myname', 'mypassword', 'myemail@example.com', '1/1/1990', 'New York');

// so we need additional properties
// and we need to rember the order of the arguments order to function!
// this has happened!

// let's pass an object
//
const user = {
    username: 'myname',
    password: 'mypassword',
    email: 'myemail@example.com',
    dob: '1/1/1990',
    city: 'New York'
};

// no need to remember the order of the arguments!
function signUp({username, password, email, dob, city}) {
    // create new user
}

/*
 * S14 - 43. More on When to Use Destructuring
 **/
// array destructuring
const points = [
    [4, 5],
    [10, 1],
    [0, 40]
];

// in this instande the API has return the x,y coords as 2 element arrays
// but maybe the graphing library needs an object like this: [{x: 4, y: 5}, ...]
// so we'd need to transform this array somewhat
//
const pointsXY = points.map(([x, y]) => {
    // and use object literal syntax
    return {x, y};
});

/*
 * S14 - Destructuring in Practice
 * The snippet of code below duplicates references to 'profile' inside of the 'isEngineer' function.  Perhaps we can reduce the amount of code used for referencing the 'title' and 'department' properties.  Refactor this code to use destructuring.  Can you get the body of the 'isEngineer' function down to a single line?
 **/

const profile = {
    title: 'Engineer',
    department: 'Engineering'
};

function isEngineer(profile) {
      var title = profile.title;
        var department = profile.department;
          return title === 'Engineer' && department === 'Engineering';
}

function isEngineer({ title, department }) {
      return title === 'Engineer' && department === 'Engineering';
}

/*
 * S14 - Array Destructuring in Practice
 * The 'classes' variable holds an array of arrays, where each array represents a single class that a student is enrolled in.  Convert this array of arrays into an array of objects, where each object has the keys 'subject', 'time', and 'teacher' and assign the result to 'classesAsObject.  Use array destructuring and the map helper.
 *
 * An array for a class has the form [subject, time, teacher]
 *
 * The resulting data structure should look something like the following:
 *
 * const classesAsObject = [{ subject: 'Geography', time: '2PM', teacher: 'Mrs. Larsen' }]
 **/
const classes = [
  [ 'Chemistry', '9AM', 'Mr. Darnick' ],
    [ 'Physics', '10:15AM', 'Mrs. Lithun'],
      [ 'Math', '11:30AM', 'Mrs. Vitalis' ]
      ];

      const classesAsObject;

const classesAsObject = classes.map(([subject, time, teacher]) => {
        return {subject, time, teacher}
});

// careful with curlies as you can't do this:
const classesAsObject = classes.map(([subject, time, teacher]) => {subject, time, teacher});

// you can see how the arrow function parse cannot know whether the curlies
// are a code block on an object return
// but you could do it like this

const classesAsObject = classes.map(([subject, time, teacher]) => ({subject, time, teacher}));
/*
 * S14 - Recursion with Destructuring
 * This one is probably the hardest exercise in the entire course!  
 *
 * Use array destructuring, recursion, and the rest/spread operators to create a function 'double' that will return a new array with all values inside of it multiplied by two.  Do not use any array helpers! Sure, the map, forEach, or reduce helpers would make this extremely easy but give it a shot the hard way anyways :)
 *
 * Input:
 *
 * double([1,2,3])
 *
 * Output
 *
 * [2,4,6]
 *
 * Hint: Don't forget that with recursion you must add a base case so you don't get an infinite call stack.  For example, if 'const [ number, ...rest ] = numbers' and number is undefined do you need to keep walking through the array?
 **/
const numbers = [1, 2, 3];

function double([ num, ...rest ]) {
    if(!rest.length) {
        return [ num * 2 ];
    }
    return [ num*2, ...double(rest)];
}

function double([ num, ...rest ]) {
      return rest.length ? [ num*2, ...double(rest) ] : [ num * 2 ];
}

double(numbers);



