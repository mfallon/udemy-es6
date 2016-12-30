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

