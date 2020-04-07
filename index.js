// ES6 Classes
// JS does not use classical inheritance.  JS uses prototype inheritance.

// ES5 and previous, to build a waffle, we could use a factory function or a construction function

// a constructor function:
function Waffle(attrs){
  this.waffle_type = attrs.waffle_type
  this.size = attrs.size
  this.shape = attrs.shape
  this.toppings = attrs.toppings
}

// constructor invocation pattern
const newWaffle = new Waffle({
  waffle_type: "Belgian",
  size: "Big",
  shape: "Square",
  toppings: "Butter, Maple Syrup, and Whipped Cream"
})

// ES5 adding a prototype method
Waffle.prototype.serve = function(){
  console.log(`Your ${this.waffle_type} waffle is served with ${this.toppings}`)
}

// ES6 class
class Waffle {
  constructor(attrs) {
    this.waffle_type = attrs.waffle_type
    this.size = attrs.size
    this.shape = attrs.shape
    this.toppings = attrs.toppings
  }

  serve() {
    console.log(`Your ${this.waffle_type} waffle is served with ${this.toppings}`)
  }
}

// Declaring a variable in JS:  Four options, but two are not an option!!!!!!!!!!!!!
// 1. NOT EVER AN OPTION - implicit global 'declaration' - no keyword
  myName = "Howard"
// 2. Not really an option anymore - `var`
  var yourName = "Francine"
  // can be global or function scoped
  // if declared globally, is added as a property to the global object
  // can be re-declared
  // can be re-assigned
  // hoisted, and during compiliation phase, is initialized to `undefined`

// 3. `let`
  let anotherName = "Sally"
  // can be global, function, or block scoped
  // cannot be re-declared
  // can be re-assigned
  // practically, is not hoisted
  // can be delclared with no initializer but will be given `undefined` during execution not compiliation

// 4. `const`
  const flavor = "Sweet"
  // can be global, function, or block scoped
  // cannot be re-declared
  // cannot be re-assigned
  // practically, is not hoisted
  // cannot be delclared with no initializer -- must be given one right away
  // if a `const` variable is assigned to any object (plain object, function, array, etc), all legal methods are availabe including those that are destructive -- I just can't use the assignment `=` operator


  // `this`...
  this.description = "I am the global object"

  const finalFantasy = {
    description: "RPG",
    cloud: {
      name: "Cloud",
      description: "Spikey Haird",
      fight: function() {
        return `I am ${this.description} and I am defeating monsters`
      },
      fightWithArrows: () => `I am ${this.description} and I am defeating monsters`
    }
  }

  // Destructuring

  const myObj = {
    name: "Fred",
    favoriteIceCream: "Chocolate"
    nestedStuff: {
      otherFavoriteIceCream: "Peach"
    }
  }

  const favoriteIceCream = myObj.favoriteIceCream
  const { favoriteIceCream, nestedStuff: { otherFavoriteIceCream }} = myObj

  const myArray = ["red", "green", "blue"]

  const [red, green, blue] = myArray

// destructuring arguments

const greet = ({name, greeting}) => `${greeting} ${name}`

greet({name: "Susie", greeting: "Hiya!"})

const infoString = "Ricky Whattup"
const [name, greeting] = inforString.split(" ")

// default arguments and rest parameters...
function greet(greeting="Hi", name, ...otherNames) {

  return `${greeting} ${name} ${otherNames.length >= 1 ? otherNames.join(" ") : ""}`
}


// Spread operator:
// Allows us to preserve values from an object or an array to make copies...

  const myObj = {
    name: "Fred",
    favoriteIceCream: "Chocolate"
    nestedStuff: {
      otherFavoriteIceCream: "Peach"
    }
  }

  const newObj = {
    ...myObj,
    name: "Howard"
  }

const array = [1,3,4]

const copyOfArray = [...array]
const copyOfArrayAndAdd7 = [...array, 7]
