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
form.addEventListener("submit", (event) => { 
  event.preventDefault(); //prevents default refresh of the page on sumbit

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

    //Validation Prénom
    let firstName = document.getElementById('first').value;
    let firstError = document.getElementById('errorPrenom');
    let prenomValide = false;    

    if (firstName === '') {
      firstError.textcontent = 'Le prénom doit être renseigné';
    } else if (firstName.length < 2) {
      firstError.textcontent = 'Le prénom est trop court';
    } else {
      firstError.style.display = none;
      prenomValide = true;
    }

    //Validation Nom
    let lastName = document.getElementById('last').value;
    let lastError = document.getElementById('errorNom');
    let nomValide = false;
    
    if (lastName === '') {
      lastError.textcontent = 'Le nom doit être renseigné';      
    } else if (lastName.length < 2) {
      lastError.textcontent = 'Le nom est trop court';
    } else {
      lastError.style.display = none;
      nomValide = true;
    }    

    //Validation Email
    let emailcontent = document.getElementById('email').value;
    let emailError = document.getElementById('errorEmail');
    let emailValide = false;
    
    if (emailcontent === '') {
      emailError.textcontent = 'L adresse mail doit être renseignée';      
    } else if (emailContent.length < 2) {
      emailError.textcontent = 'L adresse mail n est pas valide';
    } else {
      emailError.style.display = none;
      emailValide = true;
    }    



    //Validation nombre de tournois
    let quantityNumber = document.getElementById('quantity').value;
    let quantityError = document.getElementById('errorTournoi');
    let tournoiValide = false;
    
    if (quantityNumber === '') {
      lastError.textcontent = 'Le nombre doit être renseigné';      
    } else if (quantityNumber.length > 3) {
      quantityError.textcontent = 'Le nombre renseigné est trop grand';
    } else {
      quantityError.style.display = none;
      tournoiValide = true;
    }   


    


    //Validation finale et affichage des remerciements
    const tyWindow = document.getElementById('thank-you');

    if ( prenomValide && nomValide && emailValide && dateValide && tournoiValide && locationValide && conditionsValide) {
      tyWindow.style.z-index = 2;
    } else {

    }



  });