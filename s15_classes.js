/*
 * 44. Introduction to Classes
 */

// classes simply put a wrap around javascript's native 
// prototypal inheritance

function Car(options) {
    this.title = options.title;
}

// in order to add a method to this class we would 
Car.prototype.drive = function() {
    return 'vroom';
}

// reference the prototype
const car = new Car({ title: 'Focus' });
car.drive();

/*
 * 45. Prototypal Inheritance
 */

function Toyota(options) {
    // run initialisation for car here too
    Car.call(this, options);
    this.color = options.color;
}

// setup Toyota linkage the bad old way
Toyota.prototype = Object.create(Car.prototype);
Toyota.prototype.constructor = Toyota;

Toyota.prototype.honk= function() {
    return 'beep';
}

const toyota = new Toyota({ color: 'red', title: 'Starlet' });

/*
 * 46. Refactoring with Classes
 */
class Car {

    // destructure the title the prop
    constructor({ title }) {
        this.title = title;
    }

    drive() {
        return 'vroom';
    }

}

const car = new Car({ title: 'Focus' });

/*
 * 47. Extending Behavior of Classes
 */

class Toyota extends Car {
    constructor(options) {
        super(options);
        this.color = options.color;
    }

    honk() {
        return 'beep';
    }
}

const toyota = new Toyota({ title: 'Starlet', color: 'Red' });
// we can now call the Toyota and Car methods

toyota.drive();
toyota.honk();

/*
 * 48. When to Use Classes
 */

// in react you can see how classes have helped manage inheritance

/*
 * Coding Exercise 35: Game Classes
 * Game Classes
 *
 * You are a game developer tasked with setting up some basic classes for a new game you are working on.  Create a class called 'Monster'.  In the constructor, you'll need to do some basic setup for Monster whenever they are created. 
 *
 * Initialize the Monster's health to 100.
 * The constructor will be called with an 'options' object that has a 'name' property.  Assign the 'name' to the Monster
 */
class Monster {
      
}
class Monster {
      constructor(options) {
                this.health = 100;
                      this.name = options.name;
                        }
}
/*
 * Coding Exercise 36: Subclassing Monsters
 * Subclassing Monsters
 *
 * Now that you have a monster created, create a subclass of the Monster called Snake.  
 *
 * The Snake should have a 'bite' method.  The only argument to this method is another instance of a Snake.
 * The instance of Snake that is passed in should have their health deducated by 10
 */

class Monster {
      constructor(options) {
              this.health = 100;
                  this.name = options.name;
                    }
}

class Snake extends Monster {
        
         constructor(options) {
                      super(options);
                               
                           }
              
              bite(snake) {
                           snake.health -= 10;
                                }
}
