var firstName;
var surname;
var age;
var people = [];
var id = people.length + 1;
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
    tab.innerText = "";
    let person = {

    }
    for (let i = 0; i < people.length; i++) {
        person = {
            person_id: people[i].id,
            person_firstName: people[i].firstName,
            person_surname: people[i].surname,
            person_age: people[i].age
        };
        let row = tab.insertRow(i);
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
    let deletePersonSelect = parseInt(document.getElementById("deletePersonSelect").value) - 1;
    people.splice(deletePersonSelect, 1);
    let counter = people.length;
    let person = {};
    for (let i = 0; i < counter; i++) {
        person = {
            person_id: people[i].id,
            person_firstName: people[i].firstName,
            person_surname: people[i].surname,
            person_age: people[i].age
        };
        if (person.person_id > deletePersonSelect) {
            person.person_id--;
        }
        console.log(person);
        people.push(person);
    }


    console.log(people);
    showTable();
}

function deleteAll() {
    people.splice(0, people.length);
    id = people.length + 1;
    showTable();
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