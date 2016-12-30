/*
 * 49. One Quick Thing: For...Of Loops
 */
const colors = ['red', 'green', 'blue'];
const numbers= [1,2,3];

let total = 0;
for (let color of colors) {
    total += number;
}

// obviously use array helpers usually for this kind of stuff
// but this leads onto generators

/*
 * 50. Introduction to Generators
 */
// a generator is a function that can be entered and exited multiple times
// with one, you can enter a function, return a value then enter it back the same place you left it
// like subroutines in a wa/

function* number() {
}

function *number() {
}

// you'll notice that there are some unusual properties here
console.log(number);

function *number() {
    // not sure what yield does here for the moment
    yield;
    // depending on yield will affect the next()
}

const gen = numbers();
gen.next(); // false
gen.next(); // true 

/*
 * 51. Generators With a Short Story
 */

function *shopping() {
    // stuff on the side-walk
    // walking down the side-walk
    // we go into the store with cash
    const stuffFromStore = yield 'cash';// making the transition with some cash
    // stuffFromStore now contains what the return from gen.next('groceries');
    // walking back home
    return stuffFromStore;
}

const gen = shopping(); // does not actually call code in function
gen.next(); // leaving the house
// walked into the store
gen.next('groceries'); // leaving the store 

// stuff in the store

/*
 * 52. Another Step in Our Generator Story
 */

function *shopping() {
    // stuff on the side-walk
    // walking down the side-walk
    // we go into the store with cash
    const stuffFromStore = yield 'cash';// making the transition with some cash
    // stuffFromStore now contains what the return from gen.next('groceries');
    const cleanClothes = yield 'laundry';
    // walking back home
    return [stuffFromStore, cleanClothes];
}

const gen = shopping(); // does not actually call code in function
gen.next(); // leaving the house
// walked into the store
// this is how we execute code inside tje generator
gen.next('groceries'); // leaving the store 
gen.next('clean clothes'); // leaving the store 

/*
 * 53. The Big Reveal on ES6 Generators
 */
function* colors() {
    yield 'red';
    yield 'blue';
    yield 'green';
}

const gen = colors();
//
// executes everything up to the first yield statement
gen.next(); // { value: "red", done: "false" }
// executes up to the second yield statement
gen.next(); // { value: "blue", done: "false" }
gen.next();
gen.next(); // { done: "true" }


// generators work well with for..of loops
const myColors = [];
// no need to use gen.next()
for (let color of colors()) {
    myColors.push(color);
}

/*
 * 54. A Practical Use of ES6 Generators
 */
const engineeringTeam = {
    size: 3,
    department: 'Engineering',
    lead: 'Jill',
    manager: 'Alex',
    engineer: 'Dave'
};

function* TeamIterator(team) {
    yield team.lead;
    yield team.manager;
    yield team.engineer;
}

const names = [];
// I just want to iterate over very particular properties
for (let name of TeamIterator(engineeringTeam)) {
    names.push(name);
}
// ["Jill", "Alex", "Dave']

/*
 * 55. Delegation of Generators
 */
const testingTeam = {
    lead: 'Amanda',
    tester: 'Bill'
};

const engineeringTeam = {
    testingTeam,
    size: 3,
    department: 'Engineering',
    lead: 'Jill',
    manager: 'Alex',
    engineer: 'Dave'
};


function* TeamIterator(team) {
    yield team.lead;
    yield team.manager;
    yield team.engineer;
    // creates the generator
    const testingTeamIterator = TestingTeamIterator(team.testingTeam);
    // hey I"m currently in a generator, but i have anotehr generator that has few
    // yeild statments tht you might care about
    // like a trrrap door that the for of loop falls through
    yield* testingTeamGenerator;
}

function* TestingTeamIterator(team) {
    // seeing as the generator is in here, it may was well yield to them
    yield team.lead;
    yield team.tester;
}

/*
 * 56. Delegation of Generators Continued
 */

const names = [];
// One iterator to collect names from all 
// requires generator delegation
for (let name of TeamIterator(engineeringTeam)) {
    names.push(name);
}

/*
 * 57. Symbol.Iterator with Generators
 */
// symbol iterator will clean this up

// we need to tell testing team how to behave when iterated over
const testingTeam = {
    lead: 'Amanda',
    tester: 'Bill',
    // if this key exists, the for of loop will know how to iterate over this object
    [Symbol.iterator]: function* () {
        yield this.lead;
        yield this.tester;
    }
};

const engineeringTeam = {
    size: 3,
    department: 'Engineering',
    lead: 'Jill',
    manager: 'Alex',
    engineer: 'Dave',
};

function* TeamIterator(team) {
    yield team.lead;
    yield team.manager;
    yield team.engineer;
    yield* team.testingTeam;
}

/*
 * 58. Complexities of Symbol.Iterator
 */
// we need to tell testing team how to behave when iterated over
const testingTeam = {
    lead: 'Amanda',
    tester: 'Bill',
    // if this key exists, the for of loop will know how to iterate over this object
    [Symbol.iterator]: function* () {
        yield this.lead;
        yield this.tester;
    }
};

const engineeringTeam = {
    testingTeam,
    size: 3,
    department: 'Engineering',
    lead: 'Jill',
    manager: 'Alex',
    engineer: 'Dave',
    [Symbol.iterator]: function* () {
        yield this.lead;
        yield this.manager;
        yield this.engineer;
        yield* this.testingTeam;
    }
};

// don't need the team iterator anymore
const names = [];
// One iterator to collect names from all 
// requires generator delegation
for (let name of engineeringTeam) {
    names.push(name);
}

/*
 * 59. Generators with Recursion
 */
/*
 * 60. More on Generators and Recursion
 */

// great way of iterating through a tree structure
class Comment {
    constructor(content, children) {
        this.content = content;
        this.children = children;
    }

    // handles a nested data structure elegantly
    *[Symbol.iterator]() {
        // first thing is to yield current content
        yield this.content;
        // now deal with children
        // array helpers are of no use to use with generators
        for (let child of this.children) {
            // see if the child is iterable
            yield* child;
        }
    }
}

const children = {
    new Comment('good comment', []),
    new Comment('bad comment', []),
    new Comment('another comment', [])
}

const tree = new Comment('Great Post!', children);
const values = [];
for (let value of tree) {
    values.push(value);
}

