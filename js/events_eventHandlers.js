//! --- 1⬇️ using .querySelector method where we need to use '#' hashtag in id
// let button = document.querySelector("#myButton");
// button.addEventListener("click", function () {
//     console.log("Button clicked");
// });

//! --- 2⬇️ using .getElementById method where we don't need to use '#' hashtag in id
let button = document.getElementById("myButton");
button.addEventListener("click", function () {
    console.log("Button is clicked by someone")
});

// --- 3⬇️
let paragraph = document.querySelector("#myParagraph");
paragraph.textContent = "New Content!, This line is changed with (.textContent) in JavaScript";

// --- 1⬇️
// --- 1⬇️
// --- 1⬇️
// --- 1⬇️
