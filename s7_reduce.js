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



