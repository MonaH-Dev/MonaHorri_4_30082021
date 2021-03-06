//#region (prise en main avec Bruno)

// dans HTML : <button id="btn-test">Test</button>

/* création de bouton de test pour lancer editNav (=interrupteur) */
// const btnTest = document.querySelector("#btn-test");
// bntTest.addEventListener('click', atLeastOneChecked)
// /* ajout d'un écouteur d'évènement : */
// btnTest.addEventListener("click", function () {
//   const x = document.getElementById("myTopnav");
//   if (x.className === "topnav") {
//     x.className += "responsive"; /*-> au lancement de la fn, ajout de cette classe si class "topnav"*/
//   } else {
//     x.className = "topnav"; 
//   }
// }) 

function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

//#endregion

//#region FERMER LA MODAL 
// const modalCloseBtn = document.querySelector(".close")

// // Fonction interne
// modalCloseBtn.addEventListener("click", function(e){
//   modalbg.style.display = "none";
// })
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
let fistNameOK = false;

 //-- Vérification avec un Regexp
function validateName(name) { 
  return /^[a-zA-ZÀ-ú -]{2,45}$/.test(String(name).trim());
    // entre a et z (min ou maj) ac/ss accent, de 2 à 45 caractères
    // .test ???
    // .trim permet de supp les espaces
}

firstName.addEventListener('input', function(e){
  if (! validateName(e.target.value)) { //on pourrait remplacer e.target par fisrtName
    firstNameMsgError.style.display = "block";
    firstName.style.border = "2px solid lightcoral";
  } else {
    firstNameMsgError.style.display = "none" 
    firstName.style.border = "none";
    fistNameOK = true;
    }
  })

/*
  -- Vérification plus simple, sans devoir déclarer de constante
firstName.addEventListener('input', function(e){
if (e.target.value.length < 2) {
firstName.closest("div").querySelector(".msgError").style.display = "block";
} else {
  firstName.closest("div").querySelector(".msgError").style.display = "none" 
  }

  -- Vérification plus simple, juste avec le nbr de caractères
firstName.addEventListener('input', function(e){
  if (e.target.value.length < 2) {
    firstNameMsgError.style.display = "block";
    firstName.style.border = "2px solid lightcoral";
  } else {
    firstNameMsgError.style.display = "none" 
    firstName.style.border = "none";
    }
*/

// 2nd verif : le nom doit contenir au moins 2 caractères lettrés
const lastName = document.querySelector("#last");
let lastNameOK = false;

lastName.addEventListener('input', function(e){
  if (! validateName(e.target.value)) {
  lastName.closest("div").querySelector(".msgError").style.display = "block";
  lastName.style.border = "2px solid lightcoral";
  } else {
    lastName.closest("div").querySelector(".msgError").style.display = "none";
    lastName.style.border = "none"; 
    lastNameOK = true;
  }
})
/*
 -- vérif simple : le nom doit contenir au moins 2 caractères lettrés
lastName.addEventListener('input', function(e){
if (e.target.value.length < 2) {
lastName.closest("div").querySelector(".msgError").style.display = "block";
} else {
  lastName.closest("div").querySelector(".msgError").style.display = "none" 
  }
})
*/

// 3rd verif : l'entrée doit correspondre à un email
const email = document.querySelector("#email");
let emailOK = false;

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

email.addEventListener('input', function(e){
  if (!validateEmail(email.value)) {
  email.closest("div").querySelector(".msgError").style.display = "block";
  email.style.border = "2px solid lightcoral";
  } else {
    email.closest("div").querySelector(".msgError").style.display = "none";
    email.style.border = "none";
    emailOK = true;
    }
})

// 4ft verif : la date doit entre 18 et 100ans :
const bthDate = document.querySelector("#birthdate");
let bthDateOK = false;
// console.log(bthDate.value)

function testMajority(dateStr) {
  var dateMinus18 = (new Date().getFullYear() - 18) + "-" + (new Date().getMonth() + 1) + "-" + new Date().getDate();
  return new Date(dateStr) <= new Date(dateMinus18);
}
function test100y(dateStr) {
  var dateMinus100 = (new Date().getFullYear() - 100) + "-" + (new Date().getMonth() + 1) + "-" + new Date().getDate();
  return new Date(dateStr) >= new Date(dateMinus100);
}

bthDate.addEventListener('input', function(e){
if (! testMajority(e.target.value)
// || Number.isNaN(bthDate.value)) 
|| (! test100y(e.target.value)))
{
bthDate.closest("div").querySelector(".msgError").style.display = "block";
bthDate.style.border = "2px solid lightcoral";
  } else {
  bthDate.closest("div").querySelector(".msgError").style.display = "none";
  bthDate.style.border = "none"; 
  bthDateOK = true;
    }
})



// 5ft verif : vérifier qu'un nbre soit indiqué
const nbreVille = document.querySelector("#quantity");
let nbreVilleOK = false;

function valueIsNumber(value){
  return /^(0|[1-9][0-9]*)$/.test(value);
}

nbreVille.addEventListener('input', function(e){
  if (! valueIsNumber(e.target.value)) {
  nbreVille.closest("div").querySelector(".msgError").style.display = "block";
  nbreVille.style.border = "2px solid lightcoral";
  } else {
    nbreVille.closest("div").querySelector(".msgError").style.display = "none";
    nbreVille.style.border = "none"; 
    nbreVilleOK = true;
    }
})

// 6ft verif : si chiffre <0 indiqué à la précédente question,
// obligé à cocher au moins 1 case 
theForm.addEventListener("submit", function(e) {
  // console.log(e.target.location.value) // on peut aussi écrire theForm.element.location.value
  
  
  if (! (fistNameOK && lastNameOK && emailOK && bthDateOK && nbreVilleOK && cguOK)) {
    // ==> if (! (true)) ==> if false
    console.log("missing")
    // rajouter if nbre ville 
    return
  }
// console.log("toto");
  const cities = document.querySelector(".cities .msgError");
  if (e.target.location.value == "") {
    cities.style.display = "block";
  } else {
    cities.style.display = "none";
    }
  
  formValidated();
})

const rmctEcran = document.querySelector(".remerciement")

function formValidated () {
  rmctEcran.style.display = "block";
}

// nbreVille.addEventListener('change', function(e){
// if (! nbreVille.value == "0") { /* alert('Merci de sélectionner au moins une ville') */
//   LocationMsgError.style.display = "block";
// } else {
//   LocationMsgError.style.display = "none"; 
//   }
// })


// fait avec Brtuno ----------------------
// const choixMultiple = document.querySelectorAll(".locationData input")


// function atLeastOneChecked (radioName) {
//   const radioGroup = document.querySelectorAll(`input[name=${radioName}]`)
//   let atLeastOneIsChecked = false

//   radioGroup.forEach(function(radioElt) {
//     if (radioElt.checked) {
//       atLeastOneIsChecked = true
//     }
//   })
//   return atLeastOneIsChecked
// }
// fait avec Brtuno ----------------------


// pour faire des tests :
// const btnTest = document.querySelector("#btn-test");
// btnTest.addEventListener('click', function() {
//   atLeastOneChecked ("location")
// })

// nbreVille.addEventListener('change', function(e){
//   if (! nbreVille.value > 1) { 
//     choixMultiple.setAttribute("type","checkbox");
//   } else {
//     choixMultiple.setAttribute("type","radio");
//     }
//   })

// nbreVille.addEventListener('change', modifyInputType)

// function modifyInputType(e) {
//   choixMultiple.modifyInputType.checkbox;
// }


// 7th verif : les conditions d'utilisation doivent être cochées
const cgu = document.querySelector("#checkbox1");
let cguOK = false;

cgu.addEventListener('input', function(e){
  if (!cgu.checked) {
  cgu.closest("div").querySelector(".msgError").style.display = "block";
  } else {
    cgu.closest("div").querySelector(".msgError").style.display = "none";
    cguOK = true;
    }
})

// cgu.addEventListener('input', function(e){
//   if (cgu.checked) {
//   cgu.closest("div").querySelector(".msgError").style.display = "none";
//   cguOK = true;
//   } else {
//     cgu.closest("div").querySelector(".msgError").style.display = "block";
//     }
// })

// const formElt = document.querySelector("form");
// console.log(formElt.elements.location.value);

//#endregion

//#region FERMER LA MODAL (2) 
const modalCloseBtn = document.querySelectorAll(".close, #btn-close");

function closeModal(){
  modalbg.style.display = "none";
  rmctEcran.style.display = "none";
}

modalCloseBtn.forEach((elt) => elt.addEventListener("click", closeModal));
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
    // Scrolling to the top of the page :
    window.scrollTo(0, 0);
    // and disabling scrolling once modal is open :
    document.body.style.overflow = "hidden";
}

