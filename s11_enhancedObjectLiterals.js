/*
	S11 - 31 - Enhanced Object Literals
*/
Function createBookShop(inventory) {
    return {
        inventory: inventory,
        inventoryValue: function() {
            // use reduce helper to iterate over inventory
            // remembering that arrow 1 line arrow functions without curlies implicitly return
            return this.inventory.reduce((total, book) => {total + book.price}, 0);
        },
        priceForTitle: function(title) {
            return this.inventory.find(book => book.title === title).price;
        }
    };
};

const inventory = [
    { title: 'Harry Potter', price: 38 },
    { title: 'Eloquent JavaScript', price: 15 }
];

const bookShop = createBookShop(inventory);

bookShop.inventoryValue();
bookShop.priceForTitle('Eloquent JavaScript');


/*
	S11 - 32 - Enhanced Object Literals #2
    Using es6 features to reduce amount of code we have to write
*/

Function createBookShop(inventory) {
    return {
        // when key assignment to value with same name:
        inventory,
        // remove function keyword
        inventoryValue() {
            return this.inventory.reduce((total, book) => {total + book.price}, 0); },
        // remove function keyword
        priceForTitle(title) {
            return this.inventory.find(book => book.title === title).price;
        }
    };
};

/*
	S11 - 32 - Wondering When to Use Enhanced Literals?
*/
// cleaning up to use abbreviated syntax
// generally keep abbreviated vars to the front of the decl
//
function saveFile(url, data) {
    $.ajax({
        url, 
        data, 
        method: 'POST'
    });
}

const url = 'http://fileupload.com';
const data = { color: 'red' };

saveFile(url, data);

/*
	S12 - Exercise 1 - Multiple Properties with Enhanced Notation
*/

const red = '#ff0000';
const blue = '#0000ff';

const COLORS = { red: red, blue: blue };
const COLORS = {
    red, 
    blue
};

/*
	S12 - Exercise 2 - Condensing Code with Enhanced Literals
*/
const fields = ['firstName', 'lastName', 'phoneNumber'];
      
const props = { fields };

/*
	S12 - Exercise 3 - Literals in Functions
*/
const canvasDimensions = function(width, initialHeight) {
    const height = initialHeight * 9 /16;
    return { 
        width, 
        height 
    };
}

/*
	S12 - Exercise 4 - Refactor to use enhanced literal notation
*/
const color = 'red';

const Car = {
      color,
      drive() {
        return 'Vroom!';
      },
      getColor() {
        return this.color;
      }
};

