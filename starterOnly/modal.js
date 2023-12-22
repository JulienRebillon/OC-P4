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
//const birthdate = document.getElementById('birthdate');
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

// Close modal event

// modalClose.forEach(function(element) {
//   element.addEventListener("click",closeModal);
// });
//modalClose.forEach((btn) => btn.addEventListener("click", closeModal));
//modalClose.addEventListener("click", closeModal);


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

// form.addEventListener('submit', e => { //empeche le rafraichissement par défaut du navigateur

//   e.preventDefault();
//   validateInputs();

// });

// const validateInputs = () => { //on utilise trim pour enlever les espaces superflus
//   const firstValue = first.value.trim();
//   const lastValue = last.value.trim();
//   const emailValue = email.value.trim();
//   const birthdateValue = birthdate.value.trim();
//   const quantityValue = quantity.value.trim();
   

// const setError = (element, message) => {
//   const formData = element.parentElement; //on sélectionne l'élement parent
//   //const errorDisplay = inputControl.querySelector('.error');

//   errorDisplay.innerText = '';
//   // formData.classList.add('success');
//   formData.classList.remove('error'); //remove CSS attributes from previous attempts


//   errorDisplay.innerText = message;
//   textControlControl.classList.add('error'); //add the red border attribute to the input
// }

//   //input prénom
//   if (firstValue === "") { //check si le champ est vide
//     setError (first, 'Le prénom est requis'); //on lance la fonction qui définit l'InnerText pour l'élement first.
//   } else if (firstValue.length < 2) { //check number of characters
//     setError (first, 'Le prénom doit comporter au moins deux caractères');
//   } else if (!isValidFirst(first)) {
//     setError(first, 'Le prénom n\'est pas valide');
//   } else {
//     setSuccess(first);
//   }

//    //function to see if firstValue check with the Regex
//    function isValidFirst(first) {
//     const firstRegex = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/;  
//     return firstRegex.test(first);
//   }



//   // input nom
//   if (lastValue === "") { //check si le champ est vide
//     setError (last, 'Le nom est requis'); //on lance la fonction qui définit l'InnerText pour l'élement last.
//   } else if (lastValue.length < 4) { //check number of characters
//     setError (last, 'Le nom doit comporter au moins deux caractères');
//   } else if (!isValidLast(last)) {
//     setError(last, 'Le nom n\'est pas valide');
//   } else {
//     setSuccess(last);
//   }

//   //function to see if lastValue check with the Regex
//   function isValidLast(last) {
//     const lastRegex = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/;  
//     return lastRegex.test(last);
//   }




//   //input email
//   if (emailValue === "") { //check si le champ est vide
//     setError (email, 'L\'adresse mail n\'est pas renseignée'); //on lance la fonction qui définit l'InnerText pour l'élement email.
//   } else if (!isValidEmail(emailValue)) { //check if email input is valid
//     setError (email, 'Le L\'adresse n\'est pas valide');
//   } else {
//     setSuccess(email);
//   }

//   //function to see if emailValue check with the Regex
//   function isValidEmail(email) {
//     const emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g; // [^\s@] correspond à 
//     return emailRegex.test(email);
//   }




//   //input birthdate
//   if (birthdateValue === "") { //check si le champ est vide
//     setError (birthdate, 'La date de naissance n\'est pas renseignée'); //on lance la fonction qui définit l'InnerText pour l'élement birthdate.
//   } else if (!isValidBirthdate(birthdateValue)) { //check if birthdate input is valid
//     setError (birthdate, 'La date de naissance n\'est pas valide');
//   } else {
//     setSuccess(birthdate);
//   }

//   //function to see if BirthdateValue check with the Regex
//   function isValidBirthdate(birthdate) {
//     const birthdateRegex = /^(((0[1-9]|[12][0-9]|3[01])[- /.](0[13578]|1[02])|(0[1-9]|[12][0-9]|30)[- /.](0[469]|11)|(0[1-9]|1\d|2[0-8])[- /.]02)[- /.]\d{4}|29[- /.]02[- /.](\d{2}(0[48]|[2468][048]|[13579][26])|([02468][048]|[1359][26])00))$/;
//     return birthdateRegex.test(birthdate);
//   }



//   //Input quantity
//   if (quantityValue === "") { //check si le champ est vide
//     setError (quantity, 'Vous devez renseigner un nombre'); //on lance la fonction qui définit l'InnerText pour l'élement birthdate.
//   } else if (!isValidQuantity(quantityValue)) { //check if birthdate input is valid
//     setError (quantity, 'Le nombre renseigné n\'est pas valide');
//   } else {
//     setSuccess(quantity);
//   }

//   //function to see if quantityValue check with the Regex
//   function isValidQuantity(quantity) {
//     const quantityRegex = /[0-9]{1,2}/; //0 à 99 visites valides.
//     return quantityRegex.test(quantity);
//   }


//   //Input Location
//   function location() {
  
//     for (let i = 0; i < 6; i++) {

//       if (radioButtons[i].checked) {
//         // return radioButtons[i].value;
//         console.log('bouton radio activé' );
//       } else {
//         // setError (location, 'Vous devez sélectionner une location');
//         console.log('echec bouton loc')
//       }

//     }
//   }








//   //input checkbox1
//   if (checkbox1.checked) {
//     setSuccess(checkbox1);
//   } else {
//     setError (checkbox1, 'Vous devez accepter les conditions d\'utilisation');
//   }


form.addEventListener('submit', e => { //empeche le rafraichissement par défaut du navigateur

  e.preventDefault();
  validateInputs();

});

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
const isValidEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
//regex date, permet / - et . comme séparateurs
//const isValidBirthdate = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
//const isValidBirthdate = /^(((0[1-9]|[12]\d|3[01])\/(0[13578]|1[02])\/((19|[2-9]\d)\d{2}))|((0[1-9]|[12]\d|30)\/(0[13456789]|1[012])\/((19|[2-9]\d)\d{2}))|((0[1-9]|1\d|2[0-8])\/02\/((19|[2-9]\d)\d{2}))|(29\/02\/((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|(([1][26]|[2468][048]|[3579][26])00))))$/gm;
//const isValidBirthdate = /^\d{2}\/\d{2}\/\d{4}$/;
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
  if (emailValue.length === "") {
    setError(email, 'L\'adresse email n\'est pas renseignée');
  } else if (!isValidEmail.test(emailValue)) {
    setError(email, 'L\'adresse email n\'est pas valide');
  } else {
    setSuccess(email);
    //setError(email, ''); //reset du message d'erreur
    emailValidate = true;
  }



  // Date de naissance

  // console.log(birthdateValue);
  // if (birthdateValue.length === "") {
  //   setError(birthdate, 'La date de naissance n\'est pas renseignée');
  // } else if (!isValidBirthdate.test(birthdateValue)) {
  //   setError(birthdate, 'La date de naissance renseignée n\'est pas valide');
  // } else {
  //   setSuccess(birthdate);
  //   //setError(birthdate, '');
  //   birthdateValidate = true;
  // }
  let birthdateInput = document.getElementById('birthdate');
  let enteredDate = birthdateInput.value.replace(/\D/g, ''); // Remove non-numeric characters;
  let regexDate = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$|^\d{8}$/;

  if (!regexDate.test(enteredDate)) {
    setError(birthdate, 'La date n\'est pas valide');
  } else {
    setSuccess(birthdate);
    birthdateValidate = true;
  }


  // function validateDate() {
  //   var birthdateInput = document.getElementById('birthdate');
  //   var enteredDate = birthdateInput.value;
  
  //   // Check if the entered date is valid (you can customize this validation)
  //   var isValidDate = isValidDateFunction(enteredDate);
  
  //   if (!isValidDate) {
  //     setError(birthdate, "La date de naissance renseignée n'est pas valide.");
  //   } else {
  //     // Clear any previous errors
  //     setSuccess(birthdate); // Passing an empty string to clear the error
  //     // You can proceed with form submission or other actions here
  //     birthdateValidate = true;
  //   }
  // }
  
  // // Custom function to validate the date (you can customize this validation)
  // function isValidDateFunction(dateString) {
  //   // This is a simple example, you might want to use a more robust date validation library
  //   var regex = /^\d{2}-\d{2}-\d{4}$/;
  //   return regex.test(dateString);
  // }





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

//regex for names




// /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/

//characters supported:
// abcdefghijklmnopqrstwxyz
// ABCDEFGHIJKLMNOPQRSTUVWXYZ
// áéíóúäëïöüÄ'
// 陳大文
// łŁőŐűŰZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųū
// ÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁ
// ŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ.-
// ñÑâê都道府県Федерации
// আবাসযোগ্য জমির걸쳐 있는