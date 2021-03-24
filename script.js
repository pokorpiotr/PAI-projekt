var firstName;
var surname;
var age;
var people = [];
var id = people.length + 1;
let tab = document.getElementById("tab");
var bodyFontSize = 16;
var inputFontSize = 12;
var elements = document.body.getElementsByTagName("input");

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
            id: people[i].id,
            firstName: people[i].firstName,
            surname: people[i].surname,
            age: people[i].age
        };
        let row = tab.insertRow(i);
        let cellId = row.insertCell(0);
        let cellFirstName = row.insertCell(1);
        let cellSurname = row.insertCell(2);
        let cellAge = row.insertCell(3);
        cellId.innerText = person.id;
        cellFirstName.innerText = person.firstName;
        cellSurname.innerText = person.surname;
        cellAge.innerText = person.age;
    }
}

function deleteSpecific() {
    let deletePersonSelect = parseInt(document.getElementById("deletePersonSelect").value) - 1;
    people.splice(deletePersonSelect, 1);
    let counter = people.length;
    let person = {};
    tab.innerText = "";
    for (let i = 0; i < counter; i++) {
        person = {
            id: people[i].id,
            firstName: people[i].firstName,
            surname: people[i].surname,
            age: people[i].age
        };
        if (person.id > deletePersonSelect) {
            person.id--;
        }
        //console.log(person);
        people.push(person);
    }
    people.splice(0, counter);
    id--;
    //console.log(people);
    showTable();
}

function deleteAll() {
    people.splice(0, people.length);
    id = people.length + 1;
    showTable();
}

function fontSizeIncrease() {
    document.body.style.fontSize = (bodyFontSize + 1) + "px";

    for (let i = 0; i < elements.length; i++) {
        elements[i].style.fontSize = (inputFontSize + 1) + "px";
    }
    bodyFontSize++;
    inputFontSize++;
}

function fontSizeDecrease() {
    document.body.style.fontSize = (bodyFontSize - 1) + "px";
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.fontSize = (inputFontSize + 1) + "px";
    }
    bodyFontSize--;
    inputFontSize--;
}

var isBorderColorChanged = false;

function themeChange() {
    document.body.classList.toggle('dark');
    let inputButton = document.getElementsByClassName("button");
    let inputText = document.getElementsByClassName("text");
    let th = document.getElementsByTagName("th");
    let td = document.getElementsByTagName("td");
    if (isBorderColorChanged == false) {
        for (let i = 0; i < inputButton.length; i++) {
            inputButton[i].style.borderColor = "#f5f6fa";
        }
        for (let i = 0; i < inputText.length; i++) {
            inputText[i].style.borderColor = "#7f8fa6";
        }
        for (let i = 0; i < th.length; i++) {
            th[i].style.borderColor = "#f5f6fa";
        }
        for (let i = 0; i < td.length; i++) {
            td[i].style.borderColor = "#f5f6fa";
            td[i].style.color = "#f5f6fa";
            td[i].style.backgroundColor = "#2f3640";
        }
        isBorderColorChanged = true;
    } else {
        for (let i = 0; i < inputButton.length; i++) {
            inputButton[i].style.borderColor = "#2f3640";
        }
        for (let i = 0; i < inputText.length; i++) {
            inputText[i].style.borderColor = "#718093";
        }
        for (let i = 0; i < th.length; i++) {
            th[i].style.borderColor = "#2f3640";
        }
        for (let i = 0; i < td.length; i++) {
            td[i].style.borderColor = "#2f3640";
            td[i].style.color = "#718093";
            td[i].style.backgroundColor = "#f5f6fa";
        }
        isBorderColorChanged = false;
    }

    console.log("themeChange");
}