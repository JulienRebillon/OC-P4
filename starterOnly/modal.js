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
const modalClose = document.querySelectorAll(".close");
const formData = document.querySelectorAll(".formData");

const form = document.getElementById('form');
const first = document.getElementById('first');
const last = document.getElementById('last');
const email = document.getElementById('email');
const birthdate = document.getElementById('birthdate');
const quantity = document.getElementById('quantity');

const checkbox1 = document.getElementById('checkbox1');
const checkbox2 = document.getElementById('checkbox2');

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Close modal event
modalClose.forEach((btn) => btn.addEventListener("click", closeModal));
//modalClose.addEventListener("click", closeModal);

// Close modal form
function closeModal() {
  modalbg.style.display = "none";
}

// launch data format verification
//form.addEventListener("submit", (event) => { 
//  event.preventDefault(); //prevents default refresh of the page on sumbit

  // //verification
  // addEventListener("click", )

  // //verification prénom
  // const balisePrenom = document.getElementById('first');
  // const valeurPrenom = balisePrenom.value;
  // //const valeurPrenom = document.getElementById('first').value;
  // const errorPrenom = document.getElementById("#errorPrenom");

  // if (valeurPrenom === "") {
  //   console.log ('prénom vide');
  //   //insertion message d'erreur champ vide.
  //   errorPrenom.innerHTML = "<p>Le prénom n'est pas renseigné</p>";

  // } else { 
  //     if (valeurPrenom.length <= 2) {
  //       console.log ('prénom trop court');
  //       //insertion message d'erreur prénom.

  //     } else {
  //         console.log ('prénom correctement rempli');
  //         const prenomValide = true;

  //     }
  //   }

    // //Validation Prénom
    // let firstName = document.getElementById('first').value;
    // let firstError = document.getElementById('errorPrenom');
    // let prenomValide = false;    

    // if (firstName === '') {
    //   firstError.textcontent = 'Le prénom doit être renseigné';
    // } else if (firstName.length < 2) {
    //   firstError.textcontent = 'Le prénom est trop court';
    // } else {
    //   firstError.style.display = none;
    //   prenomValide = true;
    // }

    // //Validation Nom
    // let lastName = document.getElementById('last').value;
    // let lastError = document.getElementById('errorNom');
    // let nomValide = false;
    
    // if (lastName === '') {
    //   lastError.textcontent = 'Le nom doit être renseigné';      
    // } else if (lastName.length < 2) {
    //   lastError.textcontent = 'Le nom est trop court';
    // } else {
    //   lastError.style.display = none;
    //   nomValide = true;
    // }    

    // //Validation Email
    // let emailcontent = document.getElementById('email').value;
    // let emailError = document.getElementById('errorEmail');
    // let emailValide = false;
    
    // if (emailcontent === '') {
    //   emailError.textcontent = 'L adresse mail doit être renseignée';      
    // } else if (!emailContent.length < 2) {
    //   emailError.textcontent = 'L adresse mail n est pas valide';
    // } else {
    //   emailError.style.display = none;
    //   emailValide = true;
    // }    



    // //Validation nombre de tournois
    // let quantityNumber = document.getElementById('quantity').value;
    // let quantityError = document.getElementById('errorTournoi');
    // let tournoiValide = false;
    
    // if (quantityNumber === '') {
    //   lastError.textcontent = 'Le nombre doit être renseigné';      
    // } else if (quantityNumber.length > 3) {
    //   quantityError.textcontent = 'Le nombre renseigné est trop grand';
    // } else {
    //   quantityError.style.display = none;
    //   tournoiValide = true;
    // }   


    // //Validation choix d'un tournoi
    // let options = document.getElementsByName("location");
    // let selectedOption = false;

    // for (let i = 0; i <options.length; i++) {
    //   if (options[i].checked) {
    //     selectedOption = true;
    //     break;
    //   }
    // }

    // if (!selectedOption) {
    //   document.getElementById("errorLocation").style.display = "block";
    // } else {

    // }


    // //Validation Conditions
    // //let conditionsCHeck = document.getElementById("checkbox1");





    // //Validation finale et affichage des remerciements
    // const tyWindow = document.getElementById('thank-you');

    // if ( prenomValide && nomValide && emailValide && dateValide && tournoiValide && locationValide && conditionsValide) {
    //   tyWindow.style.z-index = "2";
    // } else {

    // }

form.addEventListener('submit', e => { //empeche le rafraichissement par défaut du navigateur

  e.preventDefault();
  validateInputs();

});

const validateInputs = () => { //on utilise trim pour enelver les espaces superflus
  const firstValue = first.value.trim();
  const lastValue = last.value.trim();
  const emailValue = email.value.trim();
  const birthdateValue = birthdate.value.trim();
  const quantityValue = quantity.value.trim();

const setError = (element, message) => {
  const textControl = element.parentElement; //on sélectionne l'élement parent
  const errorDisplay = inputControl.querySelector('.error')

  errorDisplay.innerText = '';
  textControl.classList.add('success');
  textControl.classList.remove('error'); //remove CSS attributes from previous attempts


  errorDisplay.innerText = message;
  textControlControl.classList.add('error'); //add the red border attribute to the input
}

  //input prénom
  if (firstValue === "") { //check si le champ est vide
    setError (first, 'Le prénom est requis'); //on lance la fonction qui définit l'InnerText pour l'élement first.
  } else {
    setSuccess(first);
  }

  // input nom
  if (lastValue === "") { //check si le champ est vide
    setError (last, 'Le nom est requis'); //on lance la fonction qui définit l'InnerText pour l'élement last.
  } else if (lastValue.length < 2) { //check number of characters
    setError (last, 'Le nom doit comporter au moins deux caractères')
  } else {
    setSuccess(last);
  }

  //input email
  if (emailValue === "") { //check si le champ est vide
    setError (email, 'L\'adresse mail n\'est pas renseignée'); //on lance la fonction qui définit l'InnerText pour l'élement email.
  } else if (!isValidEmail(emailValue)) { //check if email input is valid
    setError (email, 'Le L\'adresse n\'est pas valide')
  } else {
    setSuccess(email);
  }

  //function to see if emailValue check with the Regex
  function isValidEmail(email) {
    const emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g; // [^\s@] correspond à 
    return emailRegex.test(email);
  }

  //input birthdate
  if (birthdateValue === "") { //check si le champ est vide
    setError (birthdate, 'La date de naissance n\'est pas renseignée'); //on lance la fonction qui définit l'InnerText pour l'élement birthdate.
  } else if (!isValidBirthdate(birthdateValue)) { //check if birthdate input is valid
    setError (birthdate, 'La date de naissance n\'est pas valide')
  } else {
    setSuccess(birthdate);
  }

  //function to see if BirthdateValue check with the Regex
  function isValidBirthdate(birthdate) {
    const birthdateRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g; // [^\s@] correspond à 
    return birthdateRegex.test(birthdate);
  }



}





































  });