// ------------------------------ ⬇️1⬇️ ------------------------------
//! basic setTimeout -> checking synchronous
// function BasicFunction() {
//     setTimeout(function () {
//         console.log("Hello first");
//     }, 2000);
//     console.log("Hello, Second");
// }
// BasicFunction()

// ------------------------------ ⬇️2⬇️ ------------------------------
// to_check_asynchronous is calling from html button
// function to_check_asynchronous() {
//     let name = prompt("Enter your name");
//     let address = prompt("Enter your address");
//     setTimeout(function () {
//         document.getElementById("idSynchronous").innerHTML = name;
//     }, 2000);
//     document.getElementById("idSynchronousTwo").innerHTML = address;
// }

// ------------------------------ ⬇️3⬇️ ------------------------------
//  little bit modified version of number 2
// function to_check_asynchronous() {
//     let name = prompt("Enter your name");
//     let address = prompt("Enter your address");
//     setTimeout(function () {
//         let Newname = `Welcome to ${address}, Mr. ${name}`;
//         document.getElementById("idSynchronous").innerHTML = Newname;
//     }, 2000);
//     document.getElementById("idSynchronousTwo").innerHTML = address;
// }

// ------------------------------ ⬇️4⬇️ ------------------------------
// function to_check_asynchronous() {
//     let name = prompt("Enter your name");
//     let surname = prompt("Enter your surname");
//     let address = prompt("Enter your address");
//     setTimeout(function () {
//         document.getElementById("idSynchronous").innerHTML = `Welcome to ${address}, Mr. ${name} ${surname}`;
//     }, 2000);
//     document.getElementById("idSynchronousTwo").innerHTML = `Address: ${address}`;
// }

// ------------------------------ ⬇️5⬇️ ------------------------------
//! Basic setInterval
// function to_check_asynchronous() {
//     let interval = setInterval(function () {
//         console.log("Hello First");
//     }, 1000);
//     setTimeout(function () {
//         clearInterval(interval);
//         console.log("Interval is closed.");
//     }, 6000);
//     console.log("Hello Second");
// }

// ------------------------------ ⬇️6⬇️ ------------------------------
//  setInterval with prompt and displaying in frontend
// function to_check_asynchronous() {
//     let n = prompt("Enter your name");
//     let m = prompt("Enter your address");

//     let l = "Loading...";
//     console.log(l);
//     document.getElementById("idSynchronousSix").innerHTML = l;

//     let interval = setInterval(function () {
//         let name = `${n}`;
//         let address = `${m}`;
//         console.log(name, address);
//         document.getElementById("idSynchronous").innerHTML = name;
//         document.getElementById("idSynchronousTwo").innerHTML = address;
//     }, 1000)
// }

// ------------------------------ ⬇️7⬇️ ------------------------------
// //  made the (loading...) display none in frontend
// function to_check_asynchronous() {
//     let n = prompt("Enter your name");
//     let m = prompt("Enter your address");

//     let l = "Loading...";
//     console.log(l);
//     document.getElementById("idSynchronousSix").innerHTML = l;

//     let interval = setInterval(function () {
//         let name = `${n}`;
//         let address = `${m}`;
//         console.log(name, address);

//         document.getElementById("idSynchronous").innerHTML = name;
//         document.getElementById("idSynchronousTwo").innerHTML = address;
//         // display none
//         document.getElementById("idSynchronousSix").style.display = "none";
//     }, 1000)
// }

// ------------------------------ ⬇️8⬇️ ------------------------------
// // setting up the interval count and displaying in frontend
// function to_check_asynchronous() {
//     let name = prompt("Enter your name");
//     let address = prompt("Enter your address");

//     let l = "Loading...";
//     console.log(l);
//     document.getElementById("idSynchronousSix").innerHTML = l;

//     // initializing
//     let intervalCount = 0;

//     let interval = setInterval(function () {
//         // Increment the interval count by 1
//         intervalCount += 1;

//         let NewName = `${name}`;
//         let NewAddress = `${address}`;
//         console.log(name, address);

//         document.getElementById("idSynchronous").innerHTML = NewName;
//         document.getElementById("idSynchronousTwo").innerHTML = NewAddress;
//         // display none
//         document.getElementById("idSynchronousSix").style.display = "none";

//         //intervalCount
//         document.getElementById("idSynchronousFour").innerHTML = `Interval Count: ${intervalCount}`;
//     }, 1000)
// }

// ------------------------------ ⬇️9⬇️ ------------------------------
// // setting up the setTimeout to stop interval
// function to_check_asynchronous() {
//     let name = prompt("Enter your name");
//     let address = prompt("Enter your address");

//     let loading = "Loading...";
//     console.log(loading);
//     document.getElementById("idSynchronousSix").innerHTML = loading;

//     // initializing
//     let intervalCount = 0;

//     let interval = setInterval(function () {
//         // Increment the interval count by 1
//         intervalCount += 1;

//         let NewName = `${name}`;
//         let NewAddress = `${address}`;
//         console.log(NewName, NewAddress);

//         document.getElementById("idSynchronous").innerHTML = NewName;
//         document.getElementById("idSynchronousTwo").innerHTML = NewAddress;
//         // display none (Loading...)
//         document.getElementById("idSynchronousSix").style.display = "none";

//         //intervalCount
//         document.getElementById("idSynchronousFour").innerHTML = `Interval Count: ${intervalCount}`;
//     }, 1000)

//     // setting up clearInterval
//     setTimeout(function () {
//         clearInterval(interval);
//         let clearedInterval = "Interval Cleared";
//         console.log(clearedInterval);
//         document.getElementById("idSynchronousFive").innerHTML = clearedInterval;
//     }, 6000)
// }

// ------------------------------ ⬇️10⬇️ ------------------------------
// better than 9
function to_check_asynchronous() {
    let name = prompt("Enter your name");
    let surname = prompt("Enter your surname");
    let address = prompt("Enter your address");

    let loading = "Loading...";
    console.log(loading);
    document.getElementById("idSynchronousSix").innerHTML = loading;

    let intervalCount = 0;
    let interval = setInterval(function () {
        intervalCount += 1;
        console.log("Name:", name, surname, address);
        document.getElementById("idSynchronous").innerHTML = `Full Name: ${name} ${surname}`;
        document.getElementById("idSynchronousThree").innerHTML = `Interval Count: ${intervalCount}`;
        document.getElementById("idSynchronousSix").style.display = "none";
    }, 1000)
    document.getElementById("idSynchronousTwo").innerHTML = `Address: ${address}`;
    setTimeout(function () {
        clearInterval(interval)
        let clearedInterval = "Interval Cleared";
        console.log(clearedInterval);
        document.getElementById("idSynchronousFour").innerHTML = `Interval Cleared: ${clearedInterval}`;
    }, 6000)
}

// ------------------------------ ⬇️11⬇️ ------------------------------
// ------------------------------ ⬇️12⬇️ ------------------------------
// ------------------------------ ⬇️13⬇️ ------------------------------
// ------------------------------ ⬇️14⬇️ ------------------------------
// ------------------------------ ⬇️15⬇️ ------------------------------
// ------------------------------ ⬇️16⬇️ ------------------------------
// ------------------------------ ⬇️17⬇️ ------------------------------
