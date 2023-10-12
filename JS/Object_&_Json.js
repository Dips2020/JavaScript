// ------------------------------ ⬇️1⬇️ ------------------------------
// function ObjectButton() {
//     let details = {
//         name: "DiPS",
//         age: 20,
//         address: "KTM"
//     }
//     console.log(details.name);
//     console.log(details.age);
//     console.log(details.address);
//     document.getElementById("idObj").innerHTML = `Name: ${details.name} <br> Age: ${details.age} <br> Address: ${details.address}`;
// }

// ------------------------------ ⬇️2⬇️ ------------------------------
// function ObjectButton() {
//     let name = prompt("Enter your name");
//     let age = Number(prompt("What is your age?"));
//     let details = {
//         name: `${name}`,
//         age: `${age}`
//     }
//     console.log(details.name);
//     console.log(details.age);
//     document.getElementById("idObj").innerHTML = `Name: ${details.name} <br> Age: ${details.age}`;
// }

// ------------------------------ ⬇️3⬇️ ------------------------------
// function JsonButton() {
//     let info = {
//         "name": "DiPS",
//         "age": 20,
//         "address": "KTM"
//     }
//     console.log(info.name, info.age, info.address);
//     document.getElementById("idJsn").innerHTML = `Name: ${info.name} <br> Age: ${info.age} <br> Address: ${info.address}`;
// }

// ------------------------------ ⬇️4⬇️ ------------------------------
// function JsonButton() {
//     let name = prompt("What is your name?");
//     let age = Number(prompt("What's your age?"));
//     let address = prompt("Where do you live?");
//     let info = {
//         "name": `${name}`,
//         "age": `${age}`,
//         "address": `${address}`
//     }
//     console.log(info.name, info.age, info.address);
//     document.getElementById("idJsn").innerHTML = `Name: ${info.name} <br> Age: ${info.age} <br> Address: ${info.address}`;
// }

// ------------------------------ ⬇️5⬇️ ------------------------------
//! nested object function
// function ObjectButton() {
//     let name = prompt("Enter your name");
//     let age = Number(prompt("What is your age?"));
//     let details = {
//         name: `${name}`,
//         age: `${age}`,
//         total: function () {
//             let message = "Nested Obj. function";
//             console.log(message);
//             return message; //! if not return, it displays undefined
//         }
//     }
//     console.log(details.name);
//     console.log(details.age);
//     console.log(details.total()); //! using () parenthesis
//     document.getElementById("idObj").innerHTML = `Name: ${details.name} <br> Age: ${details.age} <br> Nested Object: ${details.total()}`;
// }

// ------------------------------ ⬇️6⬇️ ------------------------------
//! nested object
// function ObjectButton() {
//     let firstName = prompt("Enter your first name");
//     let age = Number(prompt("What is your age?"));
//     let surname = prompt("Enter your surname");
//     let fatherName = prompt("What is your father's name?");
//     let details = {
//         name: `${firstName}`,
//         age: `${age}`,
//         nestedObj: {                //nested object
//             surname: `${surname}`,
//             fatherName: `${fatherName}`
//         }
//     }
//     console.log(details.name);
//     console.log(details.age);
//     console.log(details.nestedObj.surname);
//     console.log(details.nestedObj.fatherName);
//     console.log(details.nestedObj);
//     document.getElementById("idObj").innerHTML = `Name: ${details.name} <br> Age: ${details.age}`;
//     document.getElementById("idObjJson").innerHTML = `Nested Object: ${details.nestedObj.surname} <br> Nested Object: ${details.nestedObj.fatherName}`;
// }

// ------------------------------ ⬇️7⬇️ ------------------------------
//! nested object list
// function ObjectButton() {
//     let firstName = prompt("Enter your first name");
//     let age = Number(prompt("What is your age?"));
//     let country = prompt("Enter your country name");
//     let city = prompt("Enter your city");
//     let postalCode = Number(prompt("Enter postal code of your city"));
//     let details = {
//         name: `${firstName}`,
//         age: `${age}`,
//         nestedObjList: [             //nested list
//             country, city, postalCode
//         ]
//     }
//     console.log(details.name);
//     console.log(details.age);
//     console.log(details.nestedObjList[0]);
//     console.log(details.nestedObjList[1]);
//     console.log(details.nestedObjList[2]);
//     console.log(details.nestedObjList);
//     document.getElementById("idObj").innerHTML = `Name: ${details.name} <br> Age: ${details.age}`;
//     document.getElementById("idObjJson").innerHTML = `Country: ${details.nestedObjList[0]} <br> City: ${details.nestedObjList[1]} <br> Postal Code: ${details.nestedObjList[2]}`;
// }

// ------------------------------ ⬇️8⬇️ ------------------------------
//! nested Json
// function JsonButton() {
//     let name = prompt("What is your name?");
//     let age = Number(prompt("What's your age?"));
//     let address = prompt("Where do you live?");
//     let surname = prompt("Enter your surname");
//     let superhero = prompt("Enter your superhero name");
//     let info = {
//         "name": `${name}`,
//         "age": `${age}`,
//         "address": `${address}`,
//         "nestedJson": {                         //!nested Json
//             "surname": `${surname}`,
//             "superHero": `${superhero}`,
//         },
//         "nestedJsonList": [name, age, address, surname, superhero]         //! nested Json list
//     }
//     console.log(info.name, info.age, info.address, info.nestedJson, info.nestedJsonList);
//     console.log(info.nestedJson);
//     console.log(info.nestedJsonList);
//     console.log(info.nestedJsonList[0]);
//     console.log(info.nestedJsonList[1]);
//     console.log(info.nestedJsonList[2]);
//     console.log(info.nestedJsonList[3]);
//     console.log(info.nestedJsonList[4]);
//     document.getElementById("idJsn").innerHTML = `Name: ${info.name} <br> Age: ${info.age} <br> Address: ${info.address}`;
//     document.getElementById("idObjJson").innerHTML = `Surname: ${info.nestedJson.surname} <br> Superhero: ${info.nestedJson.superHero} <br> Nested Json List <br> Surname: ${surname} Superhero: ${superhero}`;
// }

// ------------------------------ ⬇️9⬇️ ------------------------------
// ------------------------------ ⬇️10⬇️ ------------------------------