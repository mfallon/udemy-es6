
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
