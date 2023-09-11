// ------------------------------ ⬇️1⬇️ ------------------------------
// //! basic setTimeout -> checking synchronous
// function BasicFunction() {
//     setTimeout(function () {
//         console.log("Hello first");
//     }, 2000);
//     console.log("Hello, Second");
// }
// BasicFunction()

// ------------------------------ ⬇️2⬇️ ------------------------------
// //! to_check_synchronous is calling from html button
// function to_check_synchronous() {
//     let name = prompt("Enter your name");
//     let address = prompt("Enter your address");
//     setTimeout(function () {
//         document.getElementById("idSynchronousName").innerHTML = name;
//     }, 2000);
//     document.getElementById("idSynchronousAddress").innerHTML = address;
// }

// ------------------------------ ⬇️3⬇️ ------------------------------
// //! little bit modified version of number 2
// function to_check_synchronous() {
//     let name = prompt("Enter your full name");
//     let address = prompt("Enter your address");
//     setTimeout(function () {
//         let Newname = `Welcome to ${address}, Mr. ${name}`;
//         document.getElementById("idSynchronousName").innerHTML = Newname;
//     }, 2000);
//     document.getElementById("idSynchronousAddress").innerHTML = address;
// }

// ------------------------------ ⬇️4⬇️ ------------------------------
//! setInterval
function to_check_synchronous() {
    let interval = setInterval(function () {
        console.log("Hello First");
    }, 1000);
    setTimeout(function () {
        clearInterval(interval);
        console.log("Interval is closed.");
    }, 6000);
    console.log("Hello Second");
}

// ------------------------------ ⬇️5⬇️ ------------------------------
// ------------------------------ ⬇️6⬇️ ------------------------------
// ------------------------------ ⬇️7⬇️ ------------------------------
// ------------------------------ ⬇️8⬇️ ------------------------------
// ------------------------------ ⬇️9⬇️ ------------------------------
// ------------------------------ ⬇️10⬇️ ------------------------------
