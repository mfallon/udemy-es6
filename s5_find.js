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

