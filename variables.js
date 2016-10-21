/*
	S8 - 23 - Variable Declarations with const and let
*/
// var is replaced by mutable and immutable let and const

// ES5
var name = 'Jane';
var title = 'Software Engineer';
var hourlyWage = 20;

// won't change really
const name = 'Jane';
// probably will
let title = 'Software Engineer';
let hourlyWage = 20;

/*
	S8 - 24 - What const and let solve
	Helps you to infer what these variables are doing in the code
*/

// es5 style
function count(targetString) {
	var characters = ['a','e','i','o','u'];
	var number = 0;

	for(var i = 0; i< targetString.length; i++) {
		if (characters.includes(targetString[i])) {
			number ++;
		}
	}

	return number;
}

console.log(count('aeibxleifibumdivuho'));


// es6 style
function count(targetString) {
	// won't change
        const characters = ['a','e','i','o','u'];
	// will change
        let number = 0;

        for(var i = 0; i< targetString.length; i++) {
                if (characters.includes(targetString[i])) {
                        number ++;
                } 
        }

        return number;
} 

console.log(count('aeibxleifibumdivuho'));

/*
	S8 - Ex.17 - A Constant Exercise of Letting Variables Be Variables
	Imagine that you are building an application to manage a user's Facebook profile.  A profile might have a 'name', 'age', and 'dateOfBirth'.
	Declare three variables with these same names, making sure to use 'const' or 'let' depending on whether you expect the value to change over time.
*/

const name = 'Mark Fallon';
const dateOfBirth = '06/02/1973';
let age = 43;

/*
	S8 - Ex.18 - Const/Let Refactoring
	The following code uses 'var' instead of 'const' and 'let'. Refactor the function to use the new keywords.  Be sure to consider whether the variable should be declared using 'const' or 'let' depending on whether the variable gets reassigned or not.
*/

const statuses = [ 
  { code: 'OK', response: 'Request successful' },
  { code: 'FAILED', response: 'There was an error with your request' },
  { code: 'PENDING', response: 'Your reqeust is still pending' }
];

let message = '';
let currentCode = 'OK';

for (let i = 0; i < statuses.length; i++) {
  if (statuses[i].code === currentCode) {
    message = statuses[i].response;
  }
}

/*
	S9 - 25 - Template Strings
	"syntactic sugar"
*/
	
function getMessage() {
	const year = new Date().getFullYear();
	return `The year is ${year}`;
}

console.log(getMessage());

/*
	S9 - 26 - When to Reach for Template Strings
*/
// PHP
// $data = '{"device_id":"' . $device_id . '"guid":"' . $guid .'"guid":"' . $guid .'"guid":"' . $guid .'"guid":"' . $guid . '"}';

// JS
let device_id = 'Marks Device', guid = '1928AJDFJVH9348CK', username = 'Mark Fallon', d = `device_id: ${device_id}, guid: ${guid}, username: ${username}`;
console.log(d);


/*
	S9 - Ex. 19 - Template Strings in Practice
	Refactor the function to use template strings
*/
function doubleMessage(number) {
  return `Your number doubled is ${(2 * number)}`;
}

console.log(doubleMessage(12));
/*
	S9 - Ex. 20 - Name Helpers
	Refactor the function to use template strings
*/
function fullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}

console.log(fullName("Mark", "Fallon"));

