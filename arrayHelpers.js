/**
  * Array Helper Methods
  * 	- a recap on the array helper methods from es5
**/

/* 
	S2 - 4
*/

var colors = ['red', 'blue', 'green'];

// moving away from for loops which are nasty

// we pass the iterator function as it's first argument
colors.forEach(function(color) {
	// for every element of the array, output to consol
	console.log(color);
});


/*
	S2 - 5
*/
// create an array of numbers
var numbers = [1,2,3,4,5];

// creat a variable to hold the sum
var sum = 0 ;
function adder(number) {
	sum += number;
}

// loop over the array , incrementing the sum variable
numbers.forEach(adder);

// print the sum variable
console.log(sum);


/*
	S2 - Coding Exercise 1
	Replace for loop with forEach
*/

function handlePosts() {
    var posts = [
      { id: 23, title: 'Daily JS News' },
      { id: 52, title: 'Code Refactor City' },
      { id: 105, title: 'The Brightest Ruby' }
    ];
    
    posts.forEach(function(post) {
        savePost(post);
    });
}

/*
	S2 - Coding Exercise 2
	Processing Values
*/

var images = [
  { height: 10, width: 30 },
  { height: 20, width: 90 },
  { height: 54, width: 32 }
];
var areas = [];

images.forEach(function(image) {
   areas.push(image.height*image.width); 
});

console.log(areas);

/*
	S3 - 7 - The Map Helper
	Map is used whenever we want to mutate each element returning a new value
*/
var numbers = [1,2,3];
// avoid mutating original data
var doubledNumbers = [];

// using forEach we could do this
numbers.forEach(function(number) {
	doubledNumbers.push(number*2);
});

// still works
console.log(doubledNumbers);

// but more elegant with map
var doubled = numbers.map(function(number) {
	// each element produced new element which will get added to array 'doubled'
	// note this needs 'return' statement
	return number * 2;
});

console.log(doubled);

/*
	S3 - 8 - Map Helper Continued
	Particularly useful when we want to 'pluck' a property off an array of objects
*/

var cars = [
	{ model: 'Buick', price: 'Cheap' },
	{ model: 'Camaro', price: 'Expensive' },
];

var prices = cars.map(function(car) {
	return car.price;
});

console.log(prices);

/*
	S3 - 9 - Where Map is used
	Best for rendering a list of data - i.e. a list of objects retrieved from a DB/API
*/

/*
	S3 - Coding Exercise 1
	Using map to pluck properties off an object
*/

var images = [
  { height: '34px', width: '39px' },
  { height: '54px', width: '19px' },
  { height: '83px', width: '75px' },
];

var heights = images.map(function(image) {
    return image.height;
});

console.log(heights);

/*
	S3 - Exercise 2 - Calculating Values with Map
	Using map, create a new array that contains the distance / time value from each trip.  In other words, the new array should contain the (distance / time) value.  Assign the result to the variable 'speeds'.
*/

var trips = [
  { distance: 34, time: 10 },
  { distance: 90, time: 50 },
  { distance: 59, time: 25 }
];

var speeds = trips.map(function(trip){
    return Math.round(trip.distance / trip.time,2);
});

console.log(speeds);

/*
	S3 - Exercise 3 - Really Hard - Implementing 'Pluck'
	Implement a 'pluck' function.  Pluck should accept an array and a string representing a property name and return an  array containing that property from each object. 
*/

function pluck(array, property) {
	// not checking for integrity here!
    return array.map(function(element) {
        return element[property];
    });
}

var paints = [ { color: 'red' }, { color: 'blue' }, { color: 'yellow' }];
var colors = pluck(paints, 'color');

console.log(colors);

/*
	S4 - 10 - Selecting needed data with filter
*/
var products = [
	{ name: 'cucumber', type: 'vegetable' },
	{ name: 'banana', type: 'fruit' },
	{ name: 'celery', type: 'vegetable' },
	{ name: 'orange', type: 'fruit' },
];

// what args do you provide to filter then eh?
// the return truthy will add the element to the new array
// no need to inner if statements resulting in more elegant code
var veg = products.filter(function(product) {
	return product.type === 'vegetable';
});

console.log(veg);

/*
	S4 - 11 - More on filtering
*/

var products = [
	{ name: 'cucumber', type: 'vegetable', quantity: 0, price: 1 },
	{ name: 'banana', type: 'fruit', quantity: 10, price: 15 },
	{ name: 'celery', type: 'vegetable', quantity: 30, price: 13 },
	{ name: 'orange', type: 'fruit', quantity: 3, price: 5 },
];


// type is 'fruit', quantity is greater than 0, prices is lesss than 10

var filteredProducts = products.filter(function(product) {
	return product.type === 'fruit' && product.quantity > 0 && product.price < 10;
});

console.log(filteredProducts);

/*
	S4 - 12 - Choosing when to use filter
*/
var post = { id: 4, title: 'New Post' };

var comments = [
	{ postId: 4, content: 'awesome post' },
	{ postId: 3, content: 'it was ok' },
	{ postId: 4, content: 'neat' }
];

function commentsForPost(post, comments) {
	return comments.filter(function(comment) {
		return comment.postId === post.id;
	}); 
};

console.log(commentsForPost(post, comments));

/*
	S4 - Exercise 1 - Filtering Values
	Filter the array of numbers using the filter helper, creating a new array that only contains numbers greater than 50.  Assign this new array to a variable called 'filteredNumbers'.  Don't forget to use the 'return' keyword in the function!
*/
var numbers = [15, 25, 35, 45, 55, 65, 75, 85, 95];

var filteredNumbers = numbers.filter(function(number){
    return number > 50;
});

console.log(filteredNumbers);

/*
	S4 - Exercise 2 - Handling Permissions with Filter
	Filter the array of users, only returning users who have admin level access.  Assign the result to the variable 'filteredUsers'. Don't forget to use the 'return' keyword in the function!
*/

/*
	S4 - Exercise 3 - Challenging! Implementing 'reject'.
	This is a hard one!  Create a function called 'reject'.  Reject should work in the opposite way of 'filter' - if a function returns 'true', the item should *not* be included in the new array.  Hint: you can reuse filter.
*/

// I don't get the hint 'reuse' filter. Maybe it's phrased badly but without touching the inner implementation of iterator function
// I have to work with the output of the iterator function and limit it to the implementation of reject, which should negate the output of the iterator on the original array
// so this works but not sure if it is what is required as I have to run 2 filters

function reject(array, iteratorFunction) {
  var iteratorResultSet = array.filter(iteratorFunction);
  return array.filter(function(element){
    return iteratorResultSet.indexOf(element) === -1;
  });
}

var numbers = [10, 20, 30];

var lessThanFifteen = reject(numbers, function(number){
  return number > 15;
});

console.log(lessThanFifteen);

/*
	S5 - 13 - Querying For Records with Find
*/

var users = [
	{ name: "Joe" },
	{ name: "Paul" },
	{ name: "Conor" },
	{ name: "Keith" }
];

var user1 = users.find(function(user) {
	// return a truthy value
	// return first vlue that returns true
	return user.name === "Conor";
});

console.log(user1.name);

/*
	S5 - 14 - Find Continued
*/

function Car(model) {
	this.model = model;
}

var cars = [
	new Car("Buick"),
	new Car("Camaro"),
	new Car("Focus")
];

var car1 = cars.find(function(car) {
	// etc
});

// most useful for finding the parent record from a child - i.e. using the post to retrieve all comments for the post

/*
	S5 - 15 - Using find to search for users
*/
// a diagram showing the basic concept of find.
/*
	S5 - Ex 1
*/
// could be likened to the SQL query: SELECT * FROM users WHERE admin = 'true';
var users = [
  { id: 1, admin: false },
  { id: 2, admin: false },
  { id: 3, admin: true }
];

var admin = users.find(function(user){
    return user.admin === true;
});

console.log(admin);
/*
	S5 - Ex 2
*/
var accounts = [
  { balance: -10 },
  { balance: 12 },
  { balance: 0 }
];

var account = accounts.find(function(account){
    return account.balance === 12;
});

console.log(account);
/*
	S5 - Ex 3
	Your goal: Write a 'findWhere' function that achieves this shorthand approach.  'findWhere' should return the found object.
*/
var ladders = [
  { id: 1, height: 20 },
  { id: 3, height: 25 },
  { id: 2, height: 65 }
];

// My implementation seems a little over complicated here but it works.
// want to be able to provide arbitrary props in
function findWhere(array, criteria) {
  return array.find(function(element) {
      var props = Object.keys(criteria);
      var found = [];
      props.forEach(function(prop) {
        found.push(element[prop] === criteria[prop]);
      });
	// need to have passed props otherwise no criteria returns nothin
      return found.length && found.indexOf(false) === -1;
  });
}

var found = findWhere(ladders, { height: 25 });
console.log(found);

/*
	S6 - 16 - A little every and alot of some
	Now dealing with condensing array down to a single value
*/

// we have a program that can only run when ram is > 16
var computers = [
	{ name: "Acer", ram: 24 },
	{ name: "Apple", ram: 4 },
	{ name: "Compaq", ram: 32}
];

// safer to assume that 'some' can't until we find one that does
var someComputersCanRunProgram = false;

// safer to assume that 'all' can until we encounter one that can't - bit like how I was working with 'found' variable above
var everyComputersCanRunProgram = true;

// SOME: Results from iterators OR'd together
var someComputersCanRunProgram = computers.some(function(computer) {
	// note result is the same for both but the logic is OR
	return computer.ram > 16;
});

// EVERY: Results from iterators AND'd together
var everyComputersCanRunProgram = computers.every(function(computer) {
	// note result is the same for both but the logic is AND
	return computer.ram > 16;
});

console.log("some:", someComputersCanRunProgram, "every:", everyComputersCanRunProgram);

/*
	S6 - 19 - Every / Some in practice
*/

// form validation example

var Field = function(field) {
	this.field = field;
};

// <returns> Boolean
Field.prototype.validate = function() {
	return this.field.length > 0;
};

var username = new Field("Mark");
var password = new Field("pass123");
var dob = new Field("06/02/1973");

var fields = [username, password, dob];
var validated = [];

// so instead of having to explicitly && every field
// or in your case doing something like:
fields.forEach(function(field) {
   validated.push(field.validate());
});

// and then doing:
fieldsAreValid = validated.indexOf(false) === -1;
console.log("fieldsAreValid: ", fieldsAreValid);

// which is nearly as bad as && all fields
// we can do

var fieldsAreValid = fields.every(function(field) {
	return field.validate();
});

console.log("fieldsAreValid: ", fieldsAreValid);

/*
	S6 - Ex - 1
	Given an array of users, return 'true' if every user has submitted a request form.  Assign the result to the variable 'hasSumbmitted'.
*/
var users = [
  { id: 21, hasSubmitted: true },
  { id: 62, hasSubmitted: false },
  { id: 4, hasSubmitted: true }
];

var hasSubmitted = users.every(function(user){
    return user.hasSubmitted;
});

console.log("hasSubmitted:", hasSubmitted);
/*
	S6 - Ex - 2
	Given an array of network objects representing network requests, assign the boolean 'true' to the variable 'inProgress' if any network request has a 'status' of 'pending'.
*/
var requests = [
  { url: '/photos', status: 'complete' },
  { url: '/albums', status: 'pending' },
  { url: '/users', status: 'failed' }
];

var inProgress = requests.some(function(request) {
    return request.status === 'pending';
});

console.log("inProgress", inProgress);

/*
	S7 - 20 - Condensing Lists with Reduce
	Can actually implement all other helpers with reduce?
	Good use case is addition
	Note the extra arg, which is the previous carry thru:
		arr.reduce(callback[, initialValue])
	See rules around previous, current and initial value
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
*/

var numbers = [10, 20, 33];

var sum = numbers.reduce(function(sum, number) {
	return number + sum;		
}, 0);

console.log("sum:", sum);

/*
	S7 - 21 - A touch more on reduce
*/

var primaryColors = [
	{ color: 'red' },
	{ color: 'yellow' },
	{ color: 'blue' }
];

// note 2nd arg is to pass in empty array to intialise it, then it is bound to 'prev' or first arg to function
var mixed = primaryColors.reduce(function(prev, col) {
	prev.push(col.color);
	return prev;
}, []);

console.log("mixed:", mixed);

/*
	S7 - 22 - Ace your next interview with Reduce
	Balanced parens problem
		"(((())))" // balanced
		"()()()()" // balanced
		"()))))))" // unbalanced
	Easy to track a counter:
		( = +1
		) = -1
*/

// inital value is 0
function balancedParens(string) {
	return string.split('').reduce(function(prev, char, i) {
		console.log("prev:",prev,"char:",char,"i:",i);
		// special logi
		if(i === 0 && char === ")") {
			return null;
		}
		prev += char === "(" ? 1 : char === ")" ? -1 : 0;
		return prev;
	}, 0); 
}

// this is how he outlined it:
function balancedParens(string) {
        return string.split('').reduce(function(prev, char, i) {
		if (prev < 0) {
			return prev;
		}
		if (char === "(") {
			return ++prev;
		}
		if (char === ")") {
			return --prev;
		}
                return prev;
        }, 0);
}

console.log("balanced?", !balancedParens(")("));

/*
	S7 - 23 - Ex. 1
	Use the 'reduce' helper to find the sum of all the distances traveled.  Assign the result to the variable 'totalDistance'

*/
var trips = [{ distance: 34 }, { distance: 12 } , { distance: 1 }];

var totalDistance = trips.reduce(function(prev, element) {
    return prev += element.distance;
}, 0);

console.log("totalDistance:", totalDistance);
/*
	S7 - 24 - Ex. 2 - Reducing Properties
	Use the 'reduce' helper to create an object that tallies the number of sitting and standing desks.  The object returned should have the form '{ sitting: 3, standing: 2 }'.  The initial value has been provided to you. Hint: Don't forget to return the accumulator object (the first argument to the iterator function)
*/
var desks = [
  { type: 'sitting' },
  { type: 'standing' },
  { type: 'sitting' },
  { type: 'sitting' },
  { type: 'standing' }
];

var deskTypes = desks.reduce(function(tally, desk) {
	tally[desk.type]++;
	return tally;
}, { sitting: 0, standing: 0 });

console.log("tally:", deskTypes);

/*
	S7 - 25 - Hardmode: Custom 'Unique' Helper
	Another really hard one!  Write a function called 'unique' that will remove all the duplicate values from an array.
For example, given the following array:
var numbers = [1, 1, 2, 3, 4, 4];
Your function should return
[1, 2, 3, 4]
Hint: Use the 'reduce' and 'find' helpers.  

*/

var numbers = [1, 1, 2, 3, 4, 4];

function unique(array) {
	return array.reduce(function(prev, element, index, original) {
		// need to create a copy where the current element is removed
		// so our find function doesn't find itself
		var copyForward = original.slice(index+1);
		if(!copyForward.find(function(el) {
			return el === element;
		})) {
			prev.push(element);
		}
		return prev;
	}, []);
}

unique(numbers);

console.log(unique(numbers));


