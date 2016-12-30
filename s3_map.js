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

