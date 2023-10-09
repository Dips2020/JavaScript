// ------------------------------ ⬇️1⬇️ ------------------------------
function errorHandling() {
    let ageStr = prompt("Enter your age");
    try {
        let age = Number(ageStr);
        if (isNaN(age)) {
            throw new Error("Invalid input. Enter a number not an alphabet.");
        } if (age >= 20) {
            let message = "Yes !!!.";
            console.log(message);
            document.getElementById("idError").innerHTML = message;
        } else {
            let message = "No !!!";
            console.log(message)
            document.getElementById("idErrorTwo").innerHTML = message;
        }
    } catch (error) {
        // Display the error message
        alert("Error: " + error.message);// It will be displayed if the code is wrong either in HTML or in js.
    } finally {
        let message = "Process completed";
        console.log(message);
        document.getElementById("idErrorThree").innerHTML = message;
    }
}

// ------------------------------ ⬇️2⬇️ ------------------------------
// ------------------------------ ⬇️3⬇️ ------------------------------
// ------------------------------ ⬇️4⬇️ ------------------------------
// ------------------------------ ⬇️5⬇️ ------------------------------
// ------------------------------ ⬇️6⬇️ ------------------------------
// ------------------------------ ⬇️7⬇️ ------------------------------
// ------------------------------ ⬇️8⬇️ ------------------------------