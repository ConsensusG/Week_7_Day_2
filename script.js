// //========== Exercise #1 ===========//
// /*
// Write a function that parses through the below object and displays all of their
// favorite food dishes as shown:
// */

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

console.log(person3.pizza)
console.log(person3.tacos)
console.log(person3.burgers)
console.log(person3.ice_cream)
console.log(person3.shakes[0].oberwise)
console.log(person3.shakes[0].dunkin)
console.log(person3.shakes[0].culvers)
console.log(person3.shakes[0].mcDonalds)
console.log(person3.shakes[0].cupids_candies)


// //======= Exercise #2=========//
// /*
// Write an Javascript Class for a Person that has a name and age, has a
// printInfo method, and also has a method that 
// increments the persons age by 1 each time the method is called.
// Create two people using the 'new' keyword, and print 
// both of their infos and increment one persons
// age by 3 years. Use an arrow function for both methods.
// */

// // Create our Person Class

// // Use an arrow to create the printInfo method

// // Create another arrow function for the addAge method that takes a single parameter
// // Adding to the age 

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  printInfo = () => {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  }

  addAge = (years) => {
    this.age += years;
  }
}

const person1 = new Person("Bartholemundus", 29);
const person2 = new Person("Philosophicles", 72);

person1.printInfo();
person2.printInfo();

person1.addAge(3);

person1.printInfo();
person2.printInfo();



// // ============= Exercise #3 ============//
// /*
//     Using the Ergast API, fetch to 'http://ergast.com/api/f1/2008/5/driverStandings.json'
//     handle the promise with callbacks (.then(), .catch()) or async/await, and log the data.
// */

async function fetchData() {
    try {
      const response = await fetch('http://ergast.com/api/f1/2008/5/driverStandings.json');
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log('Error:', error);
    }
  }
  
  fetchData();
  
//~~~~~~~~~~~~~~~~~~~~CODEWARS~~~~~~~~~~~~~~~~~~~~~~

// Given an array of integers your solution should find the smallest integer.
// For example:
// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
// You can assume, for the purpose of this kata, that the supplied array will not be empty.

class SmallestIntegerFinder {
    findSmallestInt(args) { //this is a method which takes one argument which I know is going to be an array of intergers
      return Math.min(...args); //These 3 dots 'spread' the array of integers into a list of intergers so the function can look at them individually
    }
  }


// Your task is to create a function that does four basic mathematical operations.
// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

function basicOp(operation, value1, value2) { //Just using the switch/case method that we learned in class
    switch (operation) {
      case '+':
        return value1 + value2;
      case '-':
        return value1 - value2;
      case '*':
        return value1 * value2;
      case '/':
        return value1 / value2;
      default:
        throw new Error('Invalid operation');
    }
  }