/*
	S9 - 25 - Template Strings
	"syntactic sugar"
*/
	
function getMessage() {
	const year = new Date().getFullYear();
	return `The year is ${year}`;
}

console.log(getMessage());

/*
	S9 - 26 - When to Reach for Template Strings
*/
// PHP
// $data = '{"device_id":"' . $device_id . '"guid":"' . $guid .'"guid":"' . $guid .'"guid":"' . $guid .'"guid":"' . $guid . '"}';

// JS
let device_id = 'Marks Device', guid = '1928AJDFJVH9348CK', username = 'Mark Fallon', d = `device_id: ${device_id}, guid: ${guid}, username: ${username}`;
console.log(d);


/*
	S9 - Ex. 19 - Template Strings in Practice
	Refactor the function to use template strings
*/
function doubleMessage(number) {
  return `Your number doubled is ${(2 * number)}`;
}

console.log(doubleMessage(12));
/*
	S9 - Ex. 20 - Name Helpers
	Refactor the function to use template strings
*/
function fullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}

console.log(fullName("Mark", "Fallon"));


