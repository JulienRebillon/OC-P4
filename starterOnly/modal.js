function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const content = document.querySelectorAll(".content");
const modalClose = document.querySelectorAll(".close");
const formData = document.querySelectorAll(".formData");
const thanks = document.getElementById('thank-you');

const form = document.getElementById('form');
const first = document.getElementById('first');
const last = document.getElementById('last');
const email = document.getElementById('email');

const quantity = document.getElementById('quantity');
const radioButtons = document.getElementsByName('location');
const error__location = document.getElementById('error__location');
const checkbox1 = document.getElementById('checkbox1');
const errorCheckbox1 = document.getElementById('error__checkbox1');
const checkbox2 = document.getElementById('checkbox2');
const formSubmit = document.getElementById('form-submit');
const submit = document.getElementById('submit');

//validation de chaque champ
let firstValidate = false;
let lastValidate = false;
let emailValidate = false;
let birthdateValidate = false;
let quantityValidate = false;
let locationValidate = false;
let checkbox1Validate = false;



// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));


// launch modal form
function launchModal() {
  modalbg.style.display = "block";
  
}



// Close modal form
function closeModal() {
  const popup = document.getElementById('myPopup');
  console.log("closeModal lancée");
  popup.style.display = "none";
  
}

// Open Thanks
function openThanks() {
  thanks.style.display = "block";
}



form.addEventListener('submit', e => { //empeche le rafraichissement par défaut du navigateur

  e.preventDefault();
  validateInputs();

});


//Ajout et ruppression class error
const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = message;
  inputControl.classList.add('error');
  inputControl.classList.remove('success');
}

const setSuccess = element => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = '';
  inputControl.classList.add('success');
  inputControl.classList.remove('error');
};


//définition des regex
const isValidFirst = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/;
const isValidLast = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/;
const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const isValidQuantity = /[0-9]{1,2}/;



const validateInputs = () => { //on utilise trim pour enlever les espaces superflus
  const firstValue = first.value.trim();
  const lastValue = last.value.trim();
  const emailValue = email.value.trim();
  //const birthdateValue = birthdate.value.trim();
  const quantityValue = quantity.value.trim();

  // Prénom
  if (firstValue.length < 2) {
    setError(first, 'Vous devez rentrer au moins deux caractères');
  } else if (!isValidFirst.test(firstValue)) {
    setError(first, 'Le prénom n\'est pas valide');
  } else {
    setSuccess(first);
    firstValidate = true;
  }

  // Nom
  if (lastValue.length < 2) {
    setError(last, 'Vous devez rentrer au moins deux caractères');
  } else if (!isValidLast.test(lastValue)) {
    setError(last, 'Le nom n\'est pas valide');
  } else {
    setSuccess(last);
    lastValidate = true;
  }

  // Email
  if (emailValue.length === 0) {
    setError(email, 'L\'adresse email n\'est pas renseignée');
  } else if (!isValidEmail.test(emailValue)) {
    setError(email, 'L\'adresse email n\'est pas valide');
  } else {
    setSuccess(email);
    //setError(email, ''); //reset du message d'erreur
    emailValidate = true;
  }



  // Date de naissance

 
  let birthdateInput = document.getElementById('birthdate');
  let enteredDate = birthdateInput.value.replace(/\D/g, ''); // Remove non-numeric characters;
  let regexDate = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$|^\d{8}$/;

  if (!regexDate.test(enteredDate)) {
    setError(birthdate, 'La date n\'est pas valide');
  } else {
    setSuccess(birthdate);
    birthdateValidate = true;
  }



   // Nombre de tournois
  if (quantityValue.length === "") {
    setError(quantity, 'Vous devez rentrer un nombre');
  } else if (!isValidQuantity.test(quantityValue)) {
    setError(quantity, 'Le nombre renseigné n\'est pas valide');
  } else {
    setSuccess(quantity);
    quantityValidate = true;
  }
  
  //Location
  for (var i = 0; i < 6; i++) {
    if (radioButtons[i].checked) {
      locationValidate = true;
      break;
    } 
  }

  if (!locationValidate) {
    setError(error__location, 'Vous devez sélectionner un lieu');
  } else {
    setError(error__location, ''); //reset message d'erreur
  }
 
  



  // Conditions d'utilisation
  if ( checkbox1.checked) {
    checkbox1Validate = true;
    setError(checkbox1, '');
  } else {
    setError(checkbox1, 'Vous devez accepter les conditions d\'utilisation');
    //errorCheckbox1.style.display = "block";
  }




  //validation de tous les champs
  if ( firstValidate === true && lastValidate === true 
    && emailValidate === true && birthdateValidate === true 
    && quantityValidate === true && locationValidate === true 
    && checkbox1Validate === true) {
    openThanks();
  } else {
    console.log('erreur validation');
  }


};

