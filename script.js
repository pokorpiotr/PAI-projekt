var firstName;
var surname;
var age;
var id = 1;
var people = [];
let tab = document.getElementById("tab");


function addPerson() {
    firstName = document.getElementById("firstName").value;
    surname = document.getElementById("surname").value;
    age = parseInt(document.getElementById("age").value);
    let person = {
        id,
        firstName,
        surname,
        age
    };
    people.push(person);
    id = id + 1;
}

function showTable() {
    let person = {

    }
    for (let i = 0; i < people.length; i++) {
        person = {
            person_id: people[i].id,
            person_firstName: people[i].firstName,
            person_surname: people[i].surname,
            person_age: people[i].age
        }
        /*   document.getElementById("tab").innerHTML += 
           `<tr>
               <td>${person_id}</td>
               <td>${person_firstName}</td>
               <td>${person_surname}</td>
               <td>${person_age}</td>
           </tr>`/*/
        let row = tab.insertRow(i)
        let cellId = row.insertCell(0);
        let cellFirstName = row.insertCell(1);
        let cellSurname = row.insertCell(2);
        let cellAge = row.insertCell(3);
        cellId.innerText = person.person_id;
        cellFirstName.innerText = person.person_firstName;
        cellSurname.innerText = person.person_surname;
        cellAge.innerText = person.person_age;
    }
}

function deleteSpecific() {
    let deletePersonSelect = parseInt(document.getElementById("deletePersonSelect")).value - 1;
    tab.deleteRow(deletePersonSelect);

    console.log("deleteSpecific");
}

function deleteAll() {
    console.log("deleteAll");
}

function fontSizeIncrease() {
    console.log("fontSizeIncrease");
}

function fontSizeDecrease() {
    console.log("fontSizeDecrease");
}

function themeChange() {
    console.log("themeChange");
}