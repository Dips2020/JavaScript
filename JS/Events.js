// ------------------------------ ⬇️1⬇️ ------------------------------
let dateTime = document.querySelector("#clickEvents");
// dateTime.addEventListener('mouseover', function () {
dateTime.addEventListener('click', function () {
    let currentDate = Date();
    console.log("Current Date", currentDate);
    //alert(Date()) // it displays the current date time
    document.getElementById("dateTimes").innerHTML = `Current Date: ${currentDate}`;
})

// ------------------------------ ⬇️2⬇️ ------------------------------
function change() {
    let para = document.getElementById("idEventPara");
    para.textContent = "This is new content changed due to (.textContent) from JS";
}

// ------------------------------ ⬇️3⬇️ ------------------------------
let butt = document.getElementById("clickHello");
butt.addEventListener("click", function () {
    let message = "Someone is here..";
    console.log(message);
    document.getElementById("idEvent").innerHTML = message;
})

// ------------------------------ ⬇️4⬇️ ------------------------------
let sth = document.getElementById("countButton");
let countButton = 0;
sth.addEventListener("click", function () {
    countButton += 1;
    document.getElementById("idEventCountPara").innerHTML = `Button clicked count: ${countButton}`;
    let message = "Someone is clicking";
    console.log(message);
    document.getElementById("idEventTwo").innerHTML = message;
})
// ------------------------------ ⬇️5⬇️ ------------------------------
// ------------------------------ ⬇️6⬇️ ------------------------------
