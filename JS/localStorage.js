// ------------------------------ ⬇️1⬇️ ------------------------------
// Basic of localStorage
// function LocalStorage() {
//     let name = "DiPS";
//     let address = "KTM";

//     localStorage.setItem("Username", `${name}`);
//     localStorage.setItem("Address", `${address}`);
// }
// function ClearLocalStorage() {
//     // To clear everything in localStorage
//     localStorage.clear();
// }

// ------------------------------ ⬇️2⬇️ ------------------------------
// Prompt the user and display it on frontend too using getItem()
// function LocalStorage() {
//     let name = prompt("Enter your name");
//     let age = prompt("Enter your age");
//     let address = prompt("Enter your address");

//     localStorage.setItem("Username", `${name}`);
//     localStorage.setItem("Age", `${age}`);
//     localStorage.setItem("Address", `${address}`);

//     // calling MyDetails() inside the MyFunction()
//     MyDetails();
// }
// function MyDetails() {
//     let NewName = localStorage.getItem("Username");
//     let NewAge = localStorage.getItem("Age");
//     let NewAddress = localStorage.getItem("Address");

//     // for displaying in frontend
//     if (NewName) {
//         // idName is from HTML id
//         idName.innerHTML = NewName;
//     }
//     if (NewAge) {
//         // idAge is from HTML id
//         idAge.innerHTML = NewAge;
//     }
//     if (NewAddress) {
//         // idAddress is from HTML id
//         idAddress.innerHTML = NewAddress;
//     }
// }
// function ClearLocalStorage() {
//     // To clear everything in localStorage
//     localStorage.clear();
// }

// ------------------------------ ⬇️3⬇️ ------------------------------
// ! Same as above number 2 but removed if(){ conditions ..} and updated with document.getElementById
// function LocalStorage() {
//     let name = prompt("Enter your name");
//     let age = prompt("Enter your age");
//     let address = prompt("Enter your address");

//     localStorage.setItem("Username", `${name}`);
//     localStorage.setItem("Age", `${age}`);
//     localStorage.setItem("Address", `${address}`);

//     // calling MyDetails() inside the MyFunction()
//     MyDetails();
// }
// function MyDetails() {
//     let NewName = localStorage.getItem("Username");
//     let NewAge = localStorage.getItem("Age");
//     let NewAddress = localStorage.getItem("Address");

//     // for displaying in frontend
//     document.getElementById("idName").innerHTML = NewName;
//     document.getElementById("idAge").innerHTML = NewAge;
//     document.getElementById("idAddress").innerHTML = NewAddress;
// }
// function ClearLocalStorage() {
//     // To clear everything in localStorage
//     localStorage.clear();
// }

// ------------------------------ ⬇️4⬇️ ------------------------------
// Newname, NewAge, and NewAddress are listed in a single line by taking single h1 tag id ("idHead")
function LocalStorage() {
    let name = prompt("Enter your name");
    let age = prompt("Enter your age");
    let address = prompt("Enter your address");

    localStorage.setItem("Username", name);
    localStorage.setItem("Age", age);
    localStorage.setItem("Address", address);

    // calling MyDetails() inside the MyFunction()
    MyDetails();
}
function MyDetails() {
    let NewName = localStorage.getItem("Username");
    let NewAge = localStorage.getItem("Age");
    let NewAddress = localStorage.getItem("Address");

    // for displaying in frontend
    document.getElementById("idHead").innerHTML = `Name: ${NewName} <br> Age: ${NewAge} <br> Address: ${NewAddress}`;
}
function ClearLocalStorage() {
    // To clear everything in localStorage
    localStorage.clear();
}

// ------------------------------ ⬇️5⬇️ ------------------------------
// ------------------------------ ⬇️6⬇️ ------------------------------
// ------------------------------ ⬇️7⬇️ ------------------------------

