document.addEventListener("DOMContentLoaded", function() {
  var links = document.querySelectorAll("nav ul li a");

  // Ajout d'un gestionnaire d'événement pour chaque lien de la barre de navigation
  links.forEach(function(link) {
    link.addEventListener("mouseenter", function() {
      this.classList.add("underline"); // Ajoute la classe "underline" au survol
    });

    link.addEventListener("mouseleave", function() {
      this.classList.remove("underline"); // Supprime la classe "underline" lorsque le curseur quitte l'élément
    });
  });
});
