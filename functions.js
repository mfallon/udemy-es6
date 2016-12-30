/*
	S10 - 27 - Fat Arrow Functions
*/
// ES5 Functions
const add = function(a, b) {
	return a + b;
}

// ES6 Functions
const add = (a, b) => {
	return a + b;
}

// implicit return
const add = (a, b) => a + b;

add(1, 2);

/*
	S10 - 28 - Advanced use of Fat Arrow Functions
*/

// single arguments don't need parens
const double = number => 2 * number;

// or when parens whole expression, omit semi-colon
const double = (number => 2 * number)

double(2);

const numbers = [1,2,3];

numbers.map(function(number) {
	return 2 * number;
});

// with es6
numbers.map(number => 2 * number);

/*
	S10 - 29 - When to use Fat Arrow Functions
	What do they solve? the 'this' context from the definition
*/

const team = {
	members: ['Jane', 'Bill'],
	teamName: 'Super Squad',
	teamSummary: function() {
		return this.members.map(function(member) {
			return `${member} is on team ${this.teamName}`;
		});// can add .bind(this) to function here or how we often safe a copy of 'this' to a variable, typically 'that'
	}
};

console.log(team.teamSummary()); // Cannot read 'teamName'!

// refactor to fat arrow
const team = {
	members: ['Jane', 'Bill'],
	teamName: 'Super Squad',
	teamSummary: function() {
		return this.members.map(member => { 
			return `${member} is on team ${this.teamName}`;
		});
	}
};
console.log(team.teamSummary()); 

/*
	S10 - Ex.21 - Refactoring Keyword Functions
	The function below uses the 'function' keyword.  There's nothing wrong with using the 'function' keyword here, but it might look a bit nicer if we refactor it to use the fat arrow syntax instead.  
*/
const fibonacci = n => {
  if (n < 3) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
};
console.log(fibonacci(100));
/*
	S10 - Ex.22 - Arrow Functions Aren't Always a Solution
    Arrow functions bind the value of 'this' to the surrounding context, and sometimes this isn't the behavior we expect.  The code below has an object that represents a users profile.  The profile has a 'name' currently.  Add another key to this object called 'getName'.  'getName' should be a function that returns the profiles name, using 'this.name'.  Does the solution work with a fat arrow function or will you have to use a function keyword instead?
*/

const profile = {
        name: 'Alex'
};
profile.getName = function() {
    return this.name;
};
console.log(profile.getName());

/*
	S11 - 31 - Enhanced Object Literals
*/
Function createBookShop(inventory) {
    return {
        inventory: inventory,
        inventoryValue: function() {
            // use reduce helper to iterate over inventory
            // remembering that arrow 1 line arrow functions without curlies implicitly return
            return this.inventory.reduce((total, book) => {total + book.price}, 0);
        },
        priceForTitle: function(title) {
            return this.inventory.find(book => book.title === title).price;
        }
    };
};

const inventory = [
    { title: 'Harry Potter', price: 38 },
    { title: 'Eloquent JavaScript', price: 15 }
];

const bookShop = createBookShop(inventory);

bookShop.inventoryValue();
bookShop.priceForTitle('Eloquent JavaScript');


/*
	S11 - 32 - Enhanced Object Literals #2
    Using es6 features to reduce amount of code we have to write
*/

Function createBookShop(inventory) {
    return {
        // when key assignment to value with same name:
        inventory,
        // remove function keyword
        inventoryValue() {
            return this.inventory.reduce((total, book) => {total + book.price}, 0); },
        // remove function keyword
        priceForTitle(title) {
            return this.inventory.find(book => book.title === title).price;
        }
    };
};

/*
	S11 - 32 - Wondering When to Use Enhanced Literals?
*/
// cleaning up to use abbreviated syntax
// generally keep abbreviated vars to the front of the decl
//
function saveFile(url, data) {
    $.ajax({
        url, 
        data, 
        method: 'POST'
    });
}

const url = 'http://fileupload.com';
const data = { color: 'red' };

saveFile(url, data);

/*
	S12 - Exercise 1 - Multiple Properties with Enhanced Notation
*/

const red = '#ff0000';
const blue = '#0000ff';

const COLORS = { red: red, blue: blue };
const COLORS = {
    red, 
    blue
};

/*
	S12 - Exercise 2 - Condensing Code with Enhanced Literals
*/
const fields = ['firstName', 'lastName', 'phoneNumber'];
      
const props = { fields };

/*
	S12 - Exercise 3 - Literals in Functions
*/
const canvasDimensions = function(width, initialHeight) {
    const height = initialHeight * 9 /16;
    return { 
        width, 
        height 
    };
}

/*
	S12 - Exercise 4 - Refactor to use enhanced literal notation
*/
const color = 'red';

const Car = {
      color,
      drive() {
        return 'Vroom!';
      },
      getColor() {
        return this.color;
      }
};

/*
	S12 - 33 - Specifying Default Function Arguments
*/
function makeAjaxRequest(url, method = 'GET') {
    // logic to make request
    return method;
}

makeAjaxRequest('http://www.google.com');
makeAjaxRequest('http://www.google.com', 'POST');

/*
	S12 - 34 - Use Cases of Defaulting Arguments
*/
// function to create a user object
// must have ID
function User(id) {
    this.id = id;
}
// require a generate ID function
function generateId() {
    return Math.random * 99999;
}
// want a concept of an admin user
function createAdminUser(user) {
    user.admin = true;
    return user;
}
// would therefore require this convoluted syntax
createAdminUser(new User(generateId())));

// preferably:
function createAdminUser(user = new User(generateId())) {
    user.admin = true;
    return user;
}

// so we can generate a new admin user in one step
const admin = createAdminUser();
// or pass one in
const basicUser = new User(generateId());
const adminUser = createAdminUser(user);
/*
	S12 - Exercise 5 - Using Default Arguments 
    Refactor the following code to use default function arguments.  Be sure to remove any unused code after you refactor it.
*/
function sum(a, b) {
    if (a === undefined) {
        a = 0; 
    }

    if (b === undefined) {
        b = 0; 
    }

    return a + b;
}


function sum(a = 0, bi = 0) {
    return a + b;
}

/*
	S12 - Exercise 6 - Dumping Unused Code
*/
function addOffset(style) {
    if (!style) {
        style = {}; 
    }
    style.offset = '10px';
    return style;
}

function addOffset(style = {}) {
    style.offset = '10px';
    return style;
}

/*
	S12 - 35 - Capturing Arguments with Rest and Spread
*/
function addNumbers(numbers) {
    return numbers.reduce((sum, number) => {
        return sum + number;
    }, 0);
}

// function expects the arg to be an array
// but how to handle if we are passing in an arbitrary number of args?
addNumbers([1,2,3,4,5]);


// this would cause some problems eh?
addNumbers(1,2,3,4,5);

// update implementation to use rest operator thus:
function addNumbers(...numbers) {
    return numbers.reduce((sum, number) => {
        return sum + number;
    }, 0);
}


// so now we can do this with as many args as you'd like
addNumbers(1,2,3,4,5);

/*
	S12 - 36. The Rest on Rest and Spread
*/
// closely related to rest, does the opposite: spreads them out

const defaultColors = ['red', 'green'];
const userFavoriteColors = ['orange', 'yellow'];

// to generate color palette we want to join all values to an one array
// use array.concat() ?
// but instead:

const colorPalette = [ 'blue', ...defaultColors, ...userFavoriteColors ];

// takes all elements and 'flattens them out' into the new array.
// and you can add any other elements you want so it's pretty flexible

function validateShoppingList(...items) {
    // ensure milk is part of shopping list
    if (items.indexOf('milk') < 0) {
        return [ 'milk', ...items];
    }

    // do other validation them return
    return items;
}

validateShoppingList('oranges', 'bread');

/*
	S12 - 37. Look to Use Rest and Spread in This Case
*/

const MathLibrary = {
    calculateProduct(a, b) {
        return a * b;
    }
};

// how to change name with minimum disruptions

const MathLibrary = {

    calculateProduct(...rest) {
        // pass call on with all args
        console.log('Please use the multiply method');
        return this.multiply(...rest);
    },

    multiply(a, b) {
        return a * b;
    }
};


/*
 *  Many, Many Arguments
 *
 *  Refactor the following function to use the rest operator.  Remember, an argument using the rest operator does *not* need to be called 'rest'.
 */

function product(a, b, c, d, e) {
      var numbers = [a,b,c,d,e];
        
        return numbers.reduce(function(acc, number) {
                return acc * number;
                  }, 1)
}

// solution:
function product(...numbers) {
      
      return numbers.reduce(function(acc, number) {
              return acc * number;
                }, 1)
}

/*
 * Spreadin' Arrays
 * Refactor the following to use the spread operator.
 */

function join(array1, array2) {
      return array1.concat(array2);
}

// solution:
function join(array1, array2) {
      return [ ...array1, ...array2];
}

/*
 * Mixing Rest and Spread
 * Refactor the following to use the only the rest operator
 */
function unshift(array, a, b, c, d, e) {
      return [a, b, c, d, e].concat(array);
}


// solution:
function unshift(array, ...args) {
      return [ ...args, ...array];
}

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



