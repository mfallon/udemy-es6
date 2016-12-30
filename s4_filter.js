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

