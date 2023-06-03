// --- 1⬇️ Converting the Traditional Function to an Arrow Function
const value = (a, b) => {
    return a + b;
};
const adding = value(500, 500);
console.log("The total sum: " + adding);

//! --- 2⬇️ After arrow: Optional Parentheses and Return Statement (If the arrow function has only one expression in its body)
const num = (a, b) => a + b;
const addition = num(50, 50);
console.log("The total: " + addition);

// --- 3⬇️  Handling Functions with No Parameters
const sayHello = () => {
    console.log("Hello, there!");
};
sayHello();

//! --- 4⬇️ if a function doesn't require parameters 
//! then we can use empty parentheses '()' or '_' underscore.
const hello = _ => {
    console.log("Namaste!")
};
hello();

//! --- 5⬇️  Using Arrow Functions as Callbacks
let numbers = [1, 2, 3, 4, 5];
let doubleNumbers = numbers.filter(x => x * 2);
console.log("Double numbers: " + doubleNumbers);


//! --- 6⬇️ filter
let d = [1, 2, 3, 4, 5];
let evenNum = d.filter(y => y % 2 === 0);
console.log("Even numbers only: " + evenNum);


//! --- 7⬇️ forEach
let f = [2, 4, 6, 8, 10];
let eachItem = f.forEach(n => n);
console.log(f);

// --- 2⬇️
// --- 2⬇️
// --- 2⬇️
// --- 2⬇️
// --- 2⬇️
// --- 2⬇️
