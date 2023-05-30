// --- 1⬇️
function greet(name) {
    console.log("Hello, " + name + "!");
}
greet("Dipesh");

// --- 2⬇️ area of rectangle
function calculateArea(length, width) {
    let area = length * width;
    return area;
}
let rectangleArea = calculateArea(6, 10);
console.log("Area of rectangle: " + rectangleArea);

// --- 3⬇️ adding
function add(length, breadth) {
    let sum = length + breadth;
    return sum;
}
let total = add(5, 5);
console.log("The total sum: " + total);

// --- 4⬇️
function sayhello(person) {
    console.log("Hello, " + person);
}
sayhello("DiPS");

// --- 5⬇️
function addNumbers(a, b) {
    return a + b;
}
let sum = addNumbers(4, 6);
console.log("The total value is: " + sum);

//! --- 6⬇️ Function Scope:
function myFunction() {
    let message = "Hello";
    console.log(message);
}
myFunction(); // it gives output 'Hello'
// console.log(message); //Output: ReferenceError: message is not defined

//! --- 7⬇️ Function Parameters and Arguments
function greetPerson(firstName, lastName) {
    console.log("Hello, " + firstName + " " + lastName);
}
greetPerson("Dipesh", "Bhattarai");

//! --- 8⬇️ Default Parameters
function welcome(name = "Guest") {
    console.log("Hello, " + name);
}
welcome(); // it prints Hello, Guest
welcome("DiPS"); // and it prints Hello, DiPS

//!  --- 9⬇️ loop
let fruit = ["apple", "banana", "orange"];

for (let i = 0; i < fruit.length; i++) {
    console.log(fruit[i]);
}

// --- 10⬇️ factorial of a number
function factorial(n) {
    if (n === 0) {
        return 1;
    }
    else {
        return n * factorial(n - 1);
    }
}
let result = factorial(5);
console.log("The factorial is: " + result);

// --- 2⬇️
// --- 2⬇️
// --- 2⬇️
// --- 2⬇️
// --- 2⬇️
// --- 2⬇️
// --- 2⬇️
// --- 2⬇️
// --- 2⬇️
// --- 2⬇️
