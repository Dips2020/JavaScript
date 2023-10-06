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
function conditional() {
    switch (new Date().getDay()) {
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
            break;

        default:
            day = "Looking forward to the Weekend";
            break;
    }
    console.log("Current day is:", day)
    document.getElementById("idConditional").innerHTML = `Current day is: ${day}`;
}
// ------------------------------ ⬇️3⬇️ ------------------------------
// ------------------------------ ⬇️4⬇️ ------------------------------
// ------------------------------ ⬇️5⬇️ ------------------------------
// ------------------------------ ⬇️6⬇️ ------------------------------