function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function validateName(name) {
    return /^[a-zA-Z -]{2,}$/.test(String(name).trim());
}

const emailIsValid = validateEmail("gahjgkhqdfgk.fr");
console.log(emailIsValid);

console.log(validateName(" aa "))


// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeModalBtn = document.querySelector(".close");


const myForm = document.querySelector("#my-form");
myForm.addEventListener("submit", (e) => {
    e.preventDefault();
    // vérif prénom
    // le champs ne doit pas être vide (au moins 2 caractères, pas de chiffres)

    // vérif nom
    // le champs ne doit pas être vide (au moins 2 caractères, pas de chiffres)

    // vérif email
    // doit être formaté comme un email

    // vérif date de naissance
    // doit être inférieure à la date d'aujourd'hui moins 18 ans
    // doit être AUSSI supérieur à la date d'aujourd'hui moins 100 ans

    // vérif nombre de tournois 
    // doit être compris entre 0 et 10

    // - si nombre de tournois supérieur à 0 - au moins une ville cochée

    // vérif "accépter les condition" coché

});

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
    modalbg.style.display = "block";
}