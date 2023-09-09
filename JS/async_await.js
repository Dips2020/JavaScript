// ------------------------------ ⬇️1⬇️ ------------------------------
// //! normal async await use
// function A_Function() {
//     let name = "DiPS";
//     return name;
// }
// async function B_Function() {
//     let normal = await A_Function();
//     console.log(normal);
// }
// B_Function()

// ------------------------------ ⬇️2⬇️ ------------------------------
// //! this is about single return
// function MyFunction() {
//     let name = prompt("Enter your name");
//     return name;
// }
// //! here function -> AsyncAwait()  is calling from html
// async function AsyncAwait() {
//     let Show_AsyncAwait = await MyFunction();
//     // console.log(result);

//     if (Show_AsyncAwait) {
//         // idAsyncAwait is from HTML id
//         idAsyncAwait.innerHTML = Show_AsyncAwait;
//     }
// }

// ------------------------------ ⬇️3⬇️ ------------------------------
// ! this is about 2 or more return case
function MyFunction() {
    let FullName = prompt("Enter your name");
    let LastName = prompt("Enter your last name");
    let age = Number(prompt("Enter your age"))
    return { FullName, LastName, age };
}
//! here function -> AsyncAwait()  is calling from html
async function AsyncAwait() {
    let Show_AsyncAwait = await MyFunction();
    // console.log(result);

    if (Show_AsyncAwait) {
        let { FullName, LastName, age } = Show_AsyncAwait;

        // idAsyncAwait is from HTML id
        document.getElementById("idAsyncAwait").innerHTML = `Full Name: ${FullName} ${LastName} <br> Age: ${age}`;
    }
}

// ------------------------------ ⬇️4⬇️ ------------------------------
// ------------------------------ ⬇️5⬇️ ------------------------------
