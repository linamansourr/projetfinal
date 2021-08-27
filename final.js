


const items = document.querySelectorAll("img");
const nbSlide = items.length;
const suivant = document.querySelector(".droite_visit");
const precedent = document.querySelector(".gauche_visit");
let count = 0;

function slideSuivante() {
    items[count].classList.remove("active");

    if (count < nbSlide - 1) {
        count++;
    } else {
        count = 0;
    }

    items[count].classList.add("active");
    console.log(count);
}
suivant.addEventListener("click", slideSuivante);

function slidePrecedente() {
    items[count].classList.remove("active");

    if (count > 0) {
        count--;
    } else if (count < nbSlide) {
        count = nbSlide - 1;
    }

    items[count].classList.add("active");
    // console.log(count);
}
precedent.addEventListener("click", slidePrecedente);

//formulaire contact

let name1 = document.getElementById("name");
let email1 = document.getElementById("email");
let phonenumber = document.getElementById("phone");
let phoneRegEx = new RegExp(/^[0-9]g/);
let message1 = document.getElementById("message");

name1.addEventListener("change", function () {
    if (name1.value.length < 3) {
        alert("the name must be at least 3 characters");
        name1.setAttribute("class", "from-control is-invalid");
    }
});

email1.addEventListener("change", function () {
    if (!email.value.includes("@")) {
        alert("this field should be a valid email");
        email.setAttribute("class", "form-control is-invalid");
    }
});

phonenumber.addEventListener("change", function () {
    if (!phoneRegEx.value.length < 8) {
        alert("the phone number should contain 8 digits");
        phonenumber.setAttribute("class", "form-control is-invalid");
    }
    if (!phoneRegEx.test(phonenumber.value)) {
        alert("the phone numbershould contain only numbers");
    }
});