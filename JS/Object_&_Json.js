// ------------------------------ ⬇️1⬇️ ------------------------------
// Basic object with Hardcoded Values
// function ObjectButton() {
//     let details = {
//         name: "DiPS",
//         age: 20,
//         address: "KTM"
//     };
//     console.log("JavaScript Object:", details)
//     console.log(details.name);
//     console.log(details.age);
//     console.log(details.address);
//     document.getElementById("idObj").innerHTML = `Name: ${details.name} <br> Age: ${details.age} <br> Address: ${details.address}`;
// }

// ------------------------------ ⬇️2⬇️ ------------------------------
// Basic object with user input values using template literals
// function ObjectButton() {
//     let name = prompt("Enter your name");
//     let age = Number(prompt("What is your age?"));
//     let details = {
//         name: `${name}`,
//         age: `${age}`
//     };
//     console.log("JavaScript Object:", details);
//     console.log(details.name);
//     console.log(details.age);
//     document.getElementById("idObj").innerHTML = `Name: ${details.name} <br> Age: ${details.age}`;
// }

// ------------------------------ ⬇️3⬇️ ------------------------------
// function JsonButton() {
//     let info = { //! this is still a JS object because JASON data is inside this (let info = `{data here..}`)
//         "name": "DiPS",
//         "age": 20,
//         "address": "KTM"
//     } //! if the data 'info' was inside the (let info = `{data here..}`), data cannot be accessed with (.) dot notation
//     console.log("Still Object:", info)
//     console.log(info.name, info.age, info.address); //So it is possible to access js object data with dot(.) notation.
//     document.getElementById("idJsn").innerHTML = `Name: ${info.name} <br> Age: ${info.age} <br> Address: ${info.address}`;
// }

// ------------------------------ ⬇️4⬇️ ------------------------------
// function JsonButton() {
//     let name = prompt("What is your name?");
//     let age = Number(prompt("What's your age?"));
//     let address = prompt("Where do you live?");
//     //!! Note: we cannot include comments inside the JSON String.
//     let info = `{
//         "name": "${name}",
//         "age": "${age}",
//         "address": "${address}"
//     }`; //! Now this is complete JSON String
//     console.log("JSON String:", info); //JSON string
//     let resultParse = JSON.parse(info); //! converting JSON String into JavaScript Object (to access the data using dot(.) notation)
//     console.log("JSON String into JavaScript Object:", resultParse);
//     console.log(resultParse.name);
//     console.log(resultParse.age);
//     console.log(resultParse.address);
// }

// ------------------------------ ⬇️5⬇️ ------------------------------
// ! Object Using Template Literals
// !nested(object function), (object) and(object list)
// function ObjectButton() {
//     let name = prompt("Enter your name");
//     let age = Number(prompt("What is your age?"));
//     let surname = prompt("Enter your surname");
//     let fatherName = prompt("What is your father's name?");
//     let country = prompt("Enter your country name");
//     let city = prompt("Enter your city");
//     let postalCode = Number(prompt("Enter postal code of your city"));
//     //! Main Object Using Template Literals⬇️
//     let details = {
//         name: `${name}`,
//         age: `${age}`,
//         //! nested object function
//         total: function () {
//             let message = "This is nested object function";
//             console.log(message);
//             return message; //! if not return, it displays undefined
//         },
//         //! nested object
//         nestedObj: {
//             surname: `${surname}`,
//             fatherName: `${fatherName}`
//         },
//         //! nested list
//         nestedObjList: [country, city, postalCode]
//     };

//     console.log("Object Details:", details);
//     // nested object function
//     console.log(details.name);
//     console.log(details.age);
//     console.log(details.total()); //! using () parenthesis
//     document.getElementById("idObj").innerHTML = `Name: ${details.name} <br> Age: ${details.age} <br> Nested Object Function: ${details.total()}`;
//     // nested object
//     console.log(details.nestedObj);
//     console.log(details.nestedObj.surname);
//     console.log(details.nestedObj.fatherName);
//     document.getElementById("idJsn").innerHTML = `Surname: ${details.nestedObj.surname} <br> Father's Name: ${details.nestedObj.fatherName}`;
//     // nested list
//     console.log(details.nestedObjList);
//     console.log(details.nestedObjList[0]);
//     console.log(details.nestedObjList[1]);
//     console.log(details.nestedObjList[2]);
//     document.getElementById("idObjJson").innerHTML = `Country: ${details.nestedObjList[0]} <br> City: ${details.nestedObjList[1]} <br> Postal Code: ${details.nestedObjList[2]}`;
// }


// ------------------------------ ⬇️6⬇️ ------------------------------
// ! ⬇️JSON.stringify (it converts JS object to Json string)
// function ObjectButton() {
//     //! Object Hardcoded Values⬇️
//     let details = {
//         name: "DiPS",
//         age: 21,
//         address: "Kathmandu"
//     }
//     console.log("This is JS Object:", details);
//     let jsonStringify = JSON.stringify(details); //! Converting JS Object to JSON String
//     console.log("This is JSON String:", jsonStringify);
// }

// ------------------------------ ⬇️7⬇️ ------------------------------
// !⬇️JSON.stringify- Object Without Template Literals
// function ObjectButton() {
//     let name = prompt("Enter your name");
//     let age = Number(prompt("What is your age?"));
//     let surname = prompt("Enter your surname");
//     let fatherName = prompt("What is your father's name");
//     let country = prompt("Enter your country name");
//     let postalCode = Number(prompt("Enter postal code of your city"));
//     // ! Main Object Without Template Literals⬇️
//     let details = {
//         name: name,
//         age: age,
//         nestedObj: {
//             Surname: surname,
//             FatherName: fatherName
//         },
//         nestedObjList: [country, postalCode]
//     };
//     console.log("JS Object:", details);
//     console.log("Name:", details.name);
//     console.log("Age:", details.age);
//     console.log("Father's Name:", details.nestedObj.FatherName);
//     console.log("Country:", details.nestedObjList[0]);

//     let jsonStringify = JSON.stringify(details); //! converting object to JSON String
//     console.log("Now this is JSON String:", jsonStringify);
//     document.getElementById("idObj").innerHTML = `Now this is JSON String: <br> ${jsonStringify}`;
// }

// ------------------------------ ⬇️8⬇️ ------------------------------
//! ⬇️JSON.parse (it converts Json string to JS object)
// function JsonButton() {
//     let info = `{
//         "name": "DiPS",
//         "age": 21,
//         "address": "KTM",
//         "nestedJson": {
//             "surname": "Bhattarai",
//             "country": "Nepal",
//             "Year": 2023
//         },
//         "nestedJsonList": [
//             "SuperMan", 30, "SpiderMan"
//         ]
//     }`;
//     console.log("JSON String:", info); //this is Json String
//     let jsonParse = JSON.parse(info); //! Converted JSON string to JS Object
//     console.log("JS Object:", jsonParse); // This is JS object
//     console.log(jsonParse.name);
//     console.log(jsonParse.nestedJson.surname);
//     console.log(jsonParse.nestedJsonList[0]);
//     console.log(jsonParse.nestedJsonList[1]);
//     console.log(jsonParse.nestedJsonList[2]);
// }

// ------------------------------ ⬇️9⬇️ ------------------------------
//! nested (JSON string), (JSON list)
function JsonButton() {
    let name = prompt("What is your name?");
    let age = Number(prompt("What's your age?"));
    let address = prompt("Where do you live?");
    let surname = prompt("Enter your surname");
    let superhero = prompt("Enter your superhero name");
    // Main JSON String
    let info = `{
        "name": "${name}",
        "age": "${age}",
        "address": "${address}",
        "nestedJson": {
            "FamilyName": "${surname}",
            "SuperHero": "${superhero}"
        },
        "nestedJsonList": ["${name}", "${age}", "${address}", "${surname}", "${superhero}"]
    }`;

    console.log("Main JSON String:", info);
    let jsonParse = JSON.parse(info); //!Now converting JSON String to JavaScript Object

    console.log("This is just main JSON string \n", jsonParse.name, jsonParse.age, jsonParse.address);
    document.getElementById("idObj").innerHTML = `Name: ${jsonParse.name}, Age: ${jsonParse.age}, Address: ${jsonParse.address}`;
    // nested JSON String
    console.log("This is JSON nested String \n", jsonParse.nestedJson.FamilyName, jsonParse.nestedJson.SuperHero);
    document.getElementById("idJsn").innerHTML = `This is nested JSON String,<br> Surname: ${jsonParse.nestedJson.FamilyName}, Favorite SuperHero: ${jsonParse.nestedJson.SuperHero}`;
    // nested JSON LIST
    console.log("This is JSON Nested List \n", jsonParse.nestedJsonList[0], jsonParse.nestedJsonList[1], jsonParse.nestedJsonList[2], jsonParse.nestedJsonList[3], jsonParse.nestedJsonList[4]);
    document.getElementById("idObjJson").innerHTML = `This is nested JSON List,<br> Name: ${jsonParse.nestedJsonList[0]}, Age: ${jsonParse.nestedJsonList[1]}, Address: ${jsonParse.nestedJsonList[2]}, Surname: ${jsonParse.nestedJsonList[3]}, Favorite SuperHero: ${jsonParse.nestedJsonList[4]}`;
}

// ------------------------------ ⬇️10⬇️ ------------------------------
// ------------------------------ ⬇️11⬇️ ------------------------------
// ------------------------------ ⬇️12⬇️ ------------------------------
// ------------------------------ ⬇️13⬇️ ------------------------------
// ------------------------------ ⬇️14⬇️ ------------------------------
// ------------------------------ ⬇️15⬇️ ------------------------------
// ------------------------------ ⬇️16⬇️ ------------------------------