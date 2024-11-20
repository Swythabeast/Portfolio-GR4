// Masquer le menu au chargement de la page
document.addEventListener('DOMContentLoaded', function() {
    var dropdown = document.querySelector('.dropdown-content');
    dropdown.style.display = 'none';  // Assurer que le menu est fermé
});

// Lorsque le bouton est cliqué, alterner l'affichage du menu
document.getElementById('random-project').addEventListener('click', function(event) {
    event.preventDefault();  // Empêcher le comportement par défaut du lien
    var dropdown = document.querySelector('.dropdown-content');

    // Toggle l'affichage du menu déroulant
    if (dropdown.style.display === 'block') {
        dropdown.style.display = 'none';  // Masquer
    } else {
        dropdown.style.display = 'block';  // Afficher
    }
});
