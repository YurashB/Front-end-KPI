const form = document.getElementById('form');
const formInfo = document.getElementById("form-info");
const familyName = document.getElementById('family-name');
const birthday = document.getElementById('birthday');
const address = document.getElementById('address');
const email = document.getElementById('email');
const faculty = document.getElementById('faculty');


function changeColor(element) {
    element.style.borderColor = randomColor();
}

form.addEventListener('submit', e => {
    e.preventDefault();

    if (isDataValid()) {
        printInfo(formInfo);
    }
});

function isDataValid() {
    return familyNameValidator(familyName)
        & birthdayValidator()
        & addressValidator()
        & emailValidator()
        & facultyValidator()
}

function familyNameValidator(element) {
    let inputText = element.value.trim();
    let regex = /^([A-ZА-ЯЄЇІ][a-zа-яєїі]+ [A-ZА-ЯЄЇІ]\.[A-ZА-ЯЄЇІ]\.)$/;
    console.log(inputText + "|" + regex.test(inputText))

    if (inputText === "" && inputText.trim().length === 0) {
        setError(element, "Пуста строка")
    } else if (!regex.test(inputText)) {
        setError(element, "Некоректне ПІБ, Приклад Юраш Б.В.")
    } else {
        removeError(element);
        return true;
    }

    return false;
}

function birthdayValidator() {
    let today = new Date();
    let inputDate = new Date(birthday.value);

    if (birthday.value === "") {
        setError(birthday, "Виберіть дату")
    } else if (inputDate >= today) {
        setError(birthday, "Обрано майбутню дату");
    } else {
        removeError(birthday);
        return true;
    }

    return false;
}

function addressValidator() {
    let regex = /^(м. [A-ZА-ЯЄЇІ][a-zа-яєїі]+)$/;
    if (address.value === "") {
        setError(address, "Адреса не може бути путою")
    } else if (!regex.test(address.value)) {
        setError(address, "Некоректна адреса, приклад: м.Київ")
    } else {
        removeError(address);
        return true;
    }
}

function emailValidator() {
    let regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    let inputEmail = email.value;

    if (!regex.test(String(inputEmail).toLowerCase())) {
        setError(email, "Має бути форматом: example@mail.com");
    } else {
        removeError(email);
        return true;
    }

    return false;
}

function facultyValidator() {
    if (faculty.value === "") {
        setError(faculty, "Оберіть факультет")
    } else {
        removeError(faculty);
        return true;
    }
}

function setError(element, message) {
    let inputControl = element.parentElement;
    let errorDisplay = inputControl.querySelector(".error");
    errorDisplay.innerText = message;
}

function removeError(element) {
    let inputControl = element.parentElement;
    let errorDisplay = inputControl.querySelector(".error");
    errorDisplay.innerText = "";
}

function printInfo(element) {
    element.innerHTML = "";
    let formData = {};
    formData["ПІБ"] = familyName.value;
    formData["ДР"] = birthday.value;
    formData["Адреса"] = address.value;
    formData["Email"] = email.value;
    formData["Факультет"] = faculty.value;

    element.innerHTML = "<h3>Дані форми</h3>"
    for (let data in formData) {
         element.innerHTML += `<p><b>${data}: </b>${formData[data]}</p>`
    }
}

function randomColor() {
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    return "rgb(" + x + "," + y + "," + z + ")";
}


