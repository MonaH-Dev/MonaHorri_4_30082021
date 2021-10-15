//#region DOM ELEMENTS
const modalbg = document.querySelector(".bground"); /*-> récupérer le 1er élément par sa class ou autres*/
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const rmctEcran = document.querySelector(".remerciement")
//#endregion

//#region Pour éviter que la page se recharge lors du clic "submit"
const theForm = document.querySelector("#theForm")
// Pour éviter que la page se recharge lors du clic "submit" : 
theForm.addEventListener("submit", (e) => {
  e.preventDefault();
})
//#endregion

//#region FUNCTIONS
function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// Function for dates
function testMajority(dateStr) {
  var dateMinus18 = (new Date().getFullYear() - 18) + "-" + (new Date().getMonth() + 1) + "-" + new Date().getDate();
  return new Date(dateStr) <= new Date(dateMinus18);
}
function test100y(dateStr) {
  var dateMinus100 = (new Date().getFullYear() - 100) + "-" + (new Date().getMonth() + 1) + "-" + new Date().getDate();
  return new Date(dateStr) >= new Date(dateMinus100);
}

// Validation du formulaire
function formValidated () {
  rmctEcran.style.display = "block";
}

//#endregion

//#region REGEXP TOOLS

// Validation Nom & Prénom
function validateName(name) { 
  return /^[a-zA-ZÀ-ú -]{2,45}$/.test(String(name).trim());
    // entre a et z (min ou maj) ac/ss accent, de 2 à 45 caractères
    // .test permet de tester la Regexp
    // .trim permet de supp les espaces
}

// Validation Email
function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

// Validation Number
function valueIsNumber(value){
  return /^(0|[1-9][0-9]*)$/.test(value);
}

//#endregion

//#region OPEN & CLOSE MODAL

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
modalBtn[0].addEventListener("click", launchModal)
modalBtn[1].addEventListener("click", launchModal)

// close modal event
const modalCloseBtn = document.querySelectorAll(".close, #btn-close");
modalCloseBtn.forEach((elt) => elt.addEventListener("click", closeModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
    // Scrolling to the top of the page :
    window.scrollTo(0, 0);
    // and disabling scrolling once modal is open :
    document.body.style.overflow = "hidden";
}

// hide modal form
function closeModal(){
  modalbg.style.display = "none";
  rmctEcran.style.display = "none";
}
//#endregion

//#region NAMES verification
//First Name verication
const firstName = document.querySelector("#first");
const firstNameMsgError = document.querySelector(".firstNameData span")
let fistNameOK = false;

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

// Last Name verification
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
//#endregion

//#region EMAIL verification
const email = document.querySelector("#email");
let emailOK = false;

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
//#endregion

//#region BIRTHDAY verification
const bthDate = document.querySelector("#birthdate");
let bthDateOK = false;

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
//#endregion

//#region NUMBER verification
const nbreVille = document.querySelector("#quantity");
let nbreVilleOK = false;

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
//#endregion

//#region CGU verification
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

//#endregion

//#region SUBMIT - LAST verification
theForm.addEventListener("submit", function(e) {
  // console.log(e.target.location.value)
  // on peut aussi écrire theForm.element.location.value

  let citiesOK = false;

  const cities = document.querySelector(".cities .msgError");
  if (e.target.location.value == "") {
    cities.style.display = "block";
  } else {
    cities.style.display = "none"
    citiesOK = true;
    }
  
  if (! (fistNameOK && lastNameOK && emailOK && bthDateOK && nbreVilleOK && citiesOK && cguOK)) {
    // ==> if (! (true)) ==> if false
    console.log("missing")
    // rajouter if nbre ville
    
    if (!cguOK) {
      cgu.closest("div").querySelector(".msgError").style.display = "block";
    }
    return
  }
// console.log("toto");

  
  formValidated();
})

//#endregion

//#region XXXXXXXX
//#endregion