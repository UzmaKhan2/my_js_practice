
// Variables and Data Types
let name = "Zakiyah";
const age = 1;
var isGirl = true;

// Basic Math Operations
let x = 10;
let y = 5;
let sum = x + y;
let difference = x - y;
let product = x * y;
let quotient = x / y;

// Conditional Statements
if (age >= 1 && age <= 4) {
  console.log(name + " is a toodler.");
} else {
  console.log(name + " is a not a toddler.");
}

// Loops
for (let i = 0; i < 5; i++) {
  console.log(name + " is now " + (i + 1) + " years old ");
}

// Functions
function greet(name) {
  console.log("Hello, " + name + "!");
}
greet (name);
greet("Zaki's dad");

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

console.log("Factorial of 5:", factorial(5));

// Create an arrow function
const addNumbers = (a, b) => a + b;
console.log("Addition result:", addNumbers(10, 20));

// Arrays
let fruits = ["apple", "bananas", "grapes", "watermelon" , "mangoes"];
console.log("First fruit: " + fruits[0]);
console.log("Number of fruits: " + fruits.length);
console.log("Zaki's fav fruit are " + fruits[2] )

// Objects
let person = {
  firstName: "Zakiyah",
  lastName: "Hassaan",
  age: 1,
};

console.log(person.firstName + " " + person.lastName);

//A little cypress practice
//integration
/*
describe("Basic Cypress Test", () => {
  it("Visits the Cypress website", () => {
    // Visit the Cypress website
    cy.visit("https://www.cypress.io/");

    // Find an element with the Cypress logo
    cy.get(".navbar-logo > img").should("be.visible");

    // Assert that the title includes "Cypress"
    cy.title().should("include", "Cypress");
  });
});
*/