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

