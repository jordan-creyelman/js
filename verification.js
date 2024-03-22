document.getElementById('myForm').addEventListener('submit', function(event) {
  var password = document.getElementById('password').value;
  var confirmPassword = document.getElementById('confirmPassword').value;
  

  if (password.length < 8) {
    document.getElementById('message_password').innerText = "Le mot de passe doit contenir au moins 8 caractères.";
    event.preventDefault(); // Empêche l'envoi du formulaire si le mot de passe est trop court
  } else {
    document.getElementById('message_password').innerText = ""; // Efface le message d'erreur s'il y en a un
  }

  if (confirmPassword.length < 8) {
    document.getElementById('message_confirmation').innerText = "Le mot de passe de confirmation doit contenir au moins 8 caractères.";
    event.preventDefault();// Empêche l'envoi du formulaire si le mot de passe est trop court
  } else {
    document.getElementById('message_confirmation').innerText = ""; // Efface le message d'erreur s'il y en a un
  }
  if (password !=confirmPassword){
    document.getElementById("password_identique").innerHTML = "mot de passe et confirmation de passe doivent etre identique";
    event.preventDefault();
  }
 
});
