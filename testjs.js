

function checkAge() {
    let age = document.getElementById('age');
//let age = parseInt(ageInput, 10);
ageValue = age.value;

  console.log(ageValue);
  if (ageValue < 18) {
    document.getElementById('result').innerHTML = 'Vous êtes mineur.';
  } else if (ageValue >= 18 && ageValue <= 65) {
    document.getElementById('result').innerHTML = 'Vous êtes majeur.';
  } else {
    document.getElementById('result').innerHTML = 'Vous êtes senior.';
  }
}