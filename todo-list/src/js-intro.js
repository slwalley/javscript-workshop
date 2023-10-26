/* ---------- var, let, and const variable declaration ----------- */ 
var age = 30;
// console.log(age);

var age = '42';
// console.log(age);

let name = 'John';
// console.log(name);

name = 'Jane';
// console.log(name);

const fruit = 'mango';
// console.log(fruit);
// Cannot reassign a constant variable
// fruit = 'banana';
// console.log(fruit);

// But can change const arrays and object fields
const arr = [1, 2, 3]
// console.log("arr before:", arr);
arr.push(4);
// console.log("arr after:", arr);



/* ------------ Functions and Arrow Functions ----------- */
// console.log("mult regular function:", mult(4, 5));
//console.log("mul function:", multiply(5, 5)); // can't call arrow function before it's declared

function mult(num1, num2) {
  return num1 * num2;
}

const multiply = (num1, num2) => {
  return num1 * num2;
}

// console.log("multiply arrow function:", multiply(4, 5));

function add() {
  return arguments[0] + arguments[1];
}

const addition = (num1, num2) => num1 + num2;

// console.log("add regular function:", add(3, 10));
// console.log("addition arrow function:", addition(3, 10));

/* ----------- Arrays and Objects ----------- */

// Array destructuring
const fruits = ['mango', 'apple', 'orange', 'banana'];
// console.log("fruit:", fruits);

const [fruit1, fruit2, fruit3] = fruits;
// console.log("fruit1:", fruit1, "fruit2:", fruit2, "fruit3:", fruit3);

// Spread operator '...' followed by name of array
const moreFruits = ['lychee', ...fruits];
// console.log("moreFruits:", moreFruits);

const [,,,fruit4] = fruits;
// console.log("fruit4:", fruit4)

// Object destructuring
const person = {
  firstName: 'John',
  lastName: 'Doe',
  hobbies: {
    hobby1: 'skiing',
    hobby2: 'watercolor'
  },
  siblings: 3,
}

// console.log(person.firstName);
// console.log(person.hobbies.hobby1);
// optional chaining
// console.log(person?.hobbies?.hobby4 ? person?.hobbies?.hobby4 : "does not have a fourth hobby");

const {firstName, lastName, hobbies:hobby1, siblings:numSibs} = person;
// console.log("firstName:", firstName, "lastName:", lastName);
// console.log("hobby1:", hobby1, "number of siblings:", numSibs);

// Modifying and adding fields
// console.log(person);
person.firstName = 'Jane';
person.age = 20;
// console.log(person);

// Spread operator
const personMoreInfo = {
  ...person,
  birthday: '10/11/03',
  eyeColor: 'brown'
}
// console.log(personMoreInfo);

/* ---------- Array Functions ----------*/
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'violet', 'pink'];
const animals = [
  {
    name:'lion',
    category: 'carnivore',
  },
  {
    name: 'dog',
    category: 'pet',
  },
  {
    name: 'cat',
    category: 'pet',
  },
  {
    name: 'wolf',
    category: 'carnivore'
  }
]

// .map()
// colors.map((color, index) => {
//   console.log(index + ":", color);
// })

// animals.map((animal) => {
//   console.log(animal.name);
// })

// .filter()
// returns new array with all colors with 'e' as the second letter removed
const newColors = colors.filter((color) => { 
  return color.charAt(1) != 'e';
})
// console.log(newColors);

const newAnimals = animals.filter((animal) => {
  return animal.category === 'pet';
})
// console.log(newAnimals);

// .find()
// returns first instance of a four letter word
const chosenColor = colors.find((color) => {
  return color.length === 4;
})
// console.log(chosenColor);

const chosenAnimal = animals.find((animal) => {
  return animal.category === 'pet';
})
// console.log(chosenAnimal);

// .Set()
const repeats = [1, 1, 1, 2, 2, 3, 4, 5, 5, 6, 6, 6, 7, 7];
const unique = [...new Set(repeats)];
// console.log("Repeats:", repeats, "vs. Unique:", unique);

const uniqueCategories = [...new Set(animals.map((animal) => animal.category))];
// console.log(uniqueCategories);

// .reduce()
const sum0 = unique.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
const sum10 = unique.reduce((accumulator, currentValue) => accumulator + currentValue, 10);
// console.log("sum of numbers 0 to 7 starting with intial value of 0:", sum0);
// console.log("sum of numbers 0 to 7 starting with intial value of 10:", sum10);

const factorial = unique.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
// console.log("7! =", factorial);


/* ------------ Ternary Operator ------------ */

const x = 5; //10
const y = 10;
var isEqual = null;
if (x === y) {
  isEqual = true;
} else {
  isEqual = false;
}
// console.log("x equals y?", isEqual);

// Using ternary operator
var isEqual = x === y ? true : false;
// console.log("x equals y?", isEqual);


/* ---------- API calls using fetch and await/async ----------- */
// nesting callbacks
// fetch("https://type.fit/api/quotes")
//   .then((response) => {
//     if (!response.ok) {
//       throw Error(response.statusText);
//     }
//     return response.json();
//   })
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// using await/async, don't have to nest callbacks and improves readability
const fetchData = async () => {
  try {
    const quotes = await fetch("https://type.fit/api/quotes");
    const response = await quotes.json();
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
// fetchData();
