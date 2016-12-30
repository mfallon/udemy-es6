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

