//
//! To understand callback, a function is taken as a parameter in other function where we need to call the function.

// ------------------------------ ⬇️1⬇️ ------------------------------
// here I have created a to_check_callBack() as a main function where to_check_callBack is triggered by button from HTML 
function to_check_callBack() {
    function sayHi() {
        console.log("Hi..")
    }
    function sayHello() {
        console.log("Hello...")
    }
    function add(num1, num2, callback) { // adding callback as a parameter
        console.log(num1 + num2);
        callback(); // executing callback
    }
    let a = 10;
    let b = 30;
    add(a, b, sayHello); // here sayHello function is taken as a parameter in add function and as it is taken as parameter so it is not required to use parenthesis().
    add(a, b, sayHi); // here sayHi function is taken as a parameter in add function and as it is taken as parameter so it is not required to use parenthesis().
}

// ------------------------------ ⬇️2⬇️ ------------------------------
// ------------------------------ ⬇️3⬇️ ------------------------------
// ------------------------------ ⬇️4⬇️ ------------------------------