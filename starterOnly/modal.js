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

  //verification
  addEventListener("click", )

  //verification prénom
  const balisePrenom = document.getElementById('first');
  const valeurPrenom = balisePrenom.value;
  //const valeurPrenom = document.getElementById('first').value;
  if (valeurPrenom === "") {
    console.log ('prénom vide');
    //insertion message d'erreur champ vide.

  } else { 
      if (valeurPrenom.length <= 2) {
        console.log ('prénom trop court');
        //insertion message d'erreur prénom.
      } else {
          console.log ('prénom correctement rempli');
      }
    }



    const validationOk = 

  });