//
//! To understand callback, a function is taken as a parameter in other function where we need to call the function.

// ------------------------------ ⬇️1⬇️ ------------------------------
// here I have created a to_check_callBack() as a main function where to_check_callBack is triggered by button from HTML 
// function to_check_callBack() {
//     function sayHi() {
//         console.log("Hi..")
//     }
//     function sayHello() {
//         console.log("Hello...")
//     }
//     function add(num1, num2, callback) { // adding callback as a parameter
//         console.log(num1 + num2);
//         callback(); // executing callback
//     }
//     let a = 10;
//     let b = 30;
//     add(a, b, sayHello); // here sayHello function is taken as a parameter in add function and as it is taken as parameter so it is not required to use parenthesis().
//     add(a, b, sayHi); // here sayHi function is taken as a parameter in add function and as it is taken as parameter so it is not required to use parenthesis().
// }

// ------------------------------ ⬇️2⬇️ ------------------------------
// ! Using setTimeout() in callback
// function to_check_callBack() {
//     function sayHi() {
//         let greet = "Hi...";
//         console.log(greet);
//         document.getElementById("idCallback").innerHTML = greet;
//     }
//     function MyFunction(callback) {
//         console.log(name, address)
//         callback();
//     }
//     setTimeout(() => {
//         MyFunction(sayHi);
//     }, 0)
//     let name = prompt("Enter your full name");
//     let address = prompt("Enter your address");
//     document.getElementById("idCallbackTwo").innerHTML = `Full Name: ${name} <br> Address: ${address}`;
// }

// ------------------------------ ⬇️3⬇️ ------------------------------
// ! without setTimeout()
function to_check_callBack() {
    function sayHi() {
        let message = "Hi...";
        console.log(message);
        document.getElementById("idCallback").innerHTML = message;
    }
    function MyFunction(name, address, age, callback) {
        console.log(name, address, age);
        document.getElementById("idCallbackTwo").innerHTML = `Name: ${name} <br> Address: ${address} <br> Age: ${age}`;
        callback();
    }
    let name = prompt("What's your name?");
    let address = prompt("Where do you live?");
    let age = Number(prompt("How old are you?"));
    //calling function
    MyFunction(name, address, age, sayHi);
}

// ------------------------------ ⬇️4⬇️ ------------------------------
// ------------------------------ ⬇️5⬇️ ------------------------------
// ------------------------------ ⬇️6⬇️ ------------------------------
// ------------------------------ ⬇️7⬇️ ------------------------------