/*
	S12 - 33 - Specifying Default Function Arguments
*/
function makeAjaxRequest(url, method = 'GET') {
    // logic to make request
    return method;
}

makeAjaxRequest('http://www.google.com');
makeAjaxRequest('http://www.google.com', 'POST');

/*
	S12 - 34 - Use Cases of Defaulting Arguments
*/
// function to create a user object
// must have ID
function User(id) {
    this.id = id;
}
// require a generate ID function
function generateId() {
    return Math.random * 99999;
}
// want a concept of an admin user
function createAdminUser(user) {
    user.admin = true;
    return user;
}
// would therefore require this convoluted syntax
createAdminUser(new User(generateId())));

// preferably:
function createAdminUser(user = new User(generateId())) {
    user.admin = true;
    return user;
}

// so we can generate a new admin user in one step
const admin = createAdminUser();
// or pass one in
const basicUser = new User(generateId());
const adminUser = createAdminUser(user);
/*
	S12 - Exercise 5 - Using Default Arguments 
    Refactor the following code to use default function arguments.  Be sure to remove any unused code after you refactor it.
*/
function sum(a, b) {
    if (a === undefined) {
        a = 0; 
    }

    if (b === undefined) {
        b = 0; 
    }

    return a + b;
}


function sum(a = 0, bi = 0) {
    return a + b;
}

/*
	S12 - Exercise 6 - Dumping Unused Code
*/
function addOffset(style) {
    if (!style) {
        style = {}; 
    }
    style.offset = '10px';
    return style;
}

function addOffset(style = {}) {
    style.offset = '10px';
    return style;
}

