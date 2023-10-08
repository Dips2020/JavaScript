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
    para.textContent = "This is new content";
}

// ------------------------------ ⬇️3⬇️ ------------------------------
let butt = document.getElementById("clickHello");
butt.addEventListener("click", function () {
    let message = "Someone is here..";
    console.log(message);
    document.getElementById("idEvent").innerHTML = message;
})

// ------------------------------ ⬇️4⬇️ ------------------------------
// ------------------------------ ⬇️5⬇️ ------------------------------
// ------------------------------ ⬇️6⬇️ ------------------------------
