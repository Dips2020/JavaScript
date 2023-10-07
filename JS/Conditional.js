//
// ------------------------------ ⬇️1⬇️ ------------------------------
// ! switch case !!
// function conditional() {
//     // let day = 2;
//     let day = Number(prompt("Enter number between 0 and 7"));
//     switch (day) {
//         case 0:
//             day = "Sunday";
//             break;
//         case 1:
//             day = "Monday";
//             break;
//         case 2:
//             day = "Tuesday";
//             break;
//         default:
//             day = "Looking forward to the Weekend";
//             break;
//     }
//     console.log("The day is:", day);
//     document.getElementById("idConditional").innerHTML = `The day is: ${day}`;
// }

// ------------------------------ ⬇️2⬇️ ------------------------------
// function conditional() {
//     switch (new Date().getDay()) { // To get current day
//         case 0:
//             day = "Sunday";
//             break;
//         case 1:
//             day = "Monday";
//             break;
//         case 2:
//             day = "Tuesday";
//             break;
//         case 3:
//             day = "Wednesday";
//             break;
//         case 4:
//             day = "Thursday";
//             break;
//         case 5:
//             day = "Friday";
//             break;
//         case 6:
//             day = "Saturday";
//             break;

//         default:
//             day = "Looking forward to the Weekend";
//             break;
//     }
//     console.log("Current day is:", day)
//     document.getElementById("idConditional").innerHTML = `Current day is: ${day}`;
// }

// ------------------------------ ⬇️3⬇️ ------------------------------
// function conditional() {
//     let something = prompt("Type anything");
//     let message;
//     switch (something) {
//         case 'Apple':
//         case 'Banana':
//         case 'Mango':
//             message = `This is a fruit: ${something}`;
//             break;
//         case "Honda":
//         case "Lamborghini":
//         case "Bugatti":
//             message = `This is a super car: ${something}`;
//             break;
//         default:
//             message = `This is something else: ${something}`;
//             break;
//     }
//     console.log(message)
//     document.getElementById("idConditional").innerHTML = message;
// }

// ------------------------------ ⬇️4⬇️ ------------------------------
function conditional() {
    let something = prompt("Type anything").toUpperCase(); // here whatever the user types, it converts to uppercase
    let anything = something.toLowerCase();
    let message;
    switch (anything) {
        case 'apple':
        case 'banana':
        case 'mango':
            message = `This is a fruit: ${something}`;
            break;
        case "honda":
        case "lamborghini":
        case "bugatti":
            message = `This is a super car: ${something}`;
            break;
        default:
            message = `This is something else: ${something}`;
            break;
    }
    console.log(message)
    document.getElementById("idConditional").innerHTML = message;
}

// ------------------------------ ⬇️5⬇️ ------------------------------
// ------------------------------ ⬇️6⬇️ ------------------------------