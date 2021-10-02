//#region (prise en main avec Bruno)

// dans HTML : <button id="btn-test">Test</button>

// /* création de bouton de test pour lancer editNav (=interrupteur) */
// const btnTest = document.querySelector("#btn-test");

// /* ajout d'un écouteur d'évènement : */
// btnTest.addEventListener("click", function () {
//   const x = document.getElementById("myTopnav");
//   if (x.className === "topnav") {
//     x.className += "responsive"; /*-> au lancement de la fn, ajout de cette classe si class "topnav"*/
//   } else {
//     x.className = "topnav"; 
//   }
// }) 

//#endregion

//#region FERMER LA MODAL 
const modalCloseBtn = document.querySelector(".close")

// Fonction interne
modalCloseBtn.addEventListener("click", function(e){
  modalbg.style.display = "none";
})
/*
OU
Fonction externe
modalCloseBtn.addEventListener("click", closeModal);
function closeModal(){
  modalbg.style.display = "none";
}
pour info, opérateur ternaire : 
function handleModal(open) {
  modalbg.style.display = open ? "block" : "none";
}

éviter d'écrire ainsi :
const btnCloseModal = document.getElementsByClassName("close") [0];
car créer une collection, un tableau */

//#endregion

//#region VÉRIFICATION DES DONNÉES ENTRÉES PAR LES UTILISATEURS

const theForm = document.querySelector("#theForm")
// Pour éviter que la page se recharge lors du clic "submit" : 
theForm.addEventListener("submit", (e) => {
  e.preventDefault();
})

// 1st verif : le prénom doit contenir au moins 2 caractères lettrés
const firstName = document.querySelector("#first");
const firstNameMsgError = document.querySelector(".firstNameData span")

 //-- Vérification avec un Regexp
function validateName(name) {
  return /^[a-zA-Z -]{2,}$/.test(String(name).trim());
}

firstName.addEventListener('input', function(e){
  if (! validateName(e.target.value)) {
    firstNameMsgError.style.display = "block";
    firstName.style.border = "2px solid lightcoral";
  } else {
    firstNameMsgError.style.display = "none" 
    firstName.style.border = "none";
    }
  })

/*
  -- Vérification plus simple, juste avec le nbr de caractères
firstName.addEventListener('input', function(e){
  if (e.target.value.length < 2) {
    firstNameMsgError.style.display = "block";
    firstName.style.border = "2px solid lightcoral";
  } else {
    firstNameMsgError.style.display = "none" 
    firstName.style.border = "none";
    }

  -- Vérification plus simple, sans devoir déclarer de constante
firstName.addEventListener('input', function(e){
if (e.target.value.length < 2) {
firstName.closest("div").querySelector(".msgError").style.display = "block";
} else {
  firstName.closest("div").querySelector(".msgError").style.display = "none" 
  }
*/

// 2nd verif : le nom doit contenir au moins 2 caractères lettrés
const lastName = document.querySelector("#last");

// 3rd verif : l'entrée doit correspondre à un email
const email = document.querySelector("#email");
// const emailIsValid = validateEmail();

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

email.addEventListener('input', function(e){
  if (e.target.value.length < 2) {
  email.closest("div").querySelector(".msgError").style.display = "block";
  email.style.border = "2px solid lightcoral";
  } else {
    email.closest("div").querySelector(".msgError").style.display = "none";
    email.style.border = "none";
    }
})





// 4ft verif : la date doit :
const bthDate = document.querySelector("#birthdate");
// - précédée celle d'aujourd'hui
// - âge : entre 18 et 100ans 
// - si moins de 18ans, indiqué msg d'alerte
console.log(bthDate.value)

function testMajority(dateStr) {
  const dateMinus18 = (new Date().getFullYear() - 18) + "-" + (new Date().getMonth() + 1) + "-" + new Date().getDate();
  return new Date(dateStr) <= new Date(dateMinus18);
}

bthDate.addEventListener('input', function(e){
if (testMajority(e.target.value)) {
  console.log(e.target.value)
}
})  


// 5ft verif : nbre de tournois entre 0 et 15
const nbreVille = document.querySelector("#quantity");

// 6ft verif : si chiffre <0 indiqué à la précédente question,
// obligé à cocher au moins 1 case 


// 7th verif : les conditions d'utilisation doivent être cochées
const formElt = document.querySelector("form");

console.log(formElt.elements.location.value);

//#endregion


// DOM Elements
const modalbg = document.querySelector(".bground"); /*-> récupérer le 1er élément par sa class ou autres*/
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
modalBtn[0].addEventListener("click", launchModal)
modalBtn[1].addEventListener("click", launchModal)

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}




