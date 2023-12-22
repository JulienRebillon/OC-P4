const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = message;
  inputControl.classList.add('error');
  inputControl.classList.remove('success');
};

function validateDate() {
  var birthdateInput = document.getElementById('birthdate');
  var enteredDate = birthdateInput.value;

  // Check if the entered date is valid (you can customize this validation)
  var isValidDate = isValidDateFunction(enteredDate);

  if (!isValidDate) {
    setError(birthdateInput, "La date de naissance renseignée n'est pas valide.");
  } else {
    // Clear any previous errors
    setError(birthdateInput, ""); // Passing an empty string to clear the error
    // You can proceed with form submission or other actions here
  }
}

// Custom function to validate the date (you can customize this validation)
function isValidDateFunction(dateString) {
  // This is a simple example, you might want to use a more robust date validation library
  var regex = /^\d{4}-\d{2}-\d{2}$/;
  return regex.test(dateString);
}