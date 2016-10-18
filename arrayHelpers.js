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
/*
	S5 - 
*/
/*
	S5 - 
*/
/*
	S5 - 
*/
/*
	S5 - 
*/
/*
	S5 - 
*/
/*
	S5 - 
*/
/*
	S5 - 
*/
