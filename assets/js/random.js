// Fonction pour rediriger vers un projet aléatoire
document.getElementById('random-project').addEventListener('click', function(event) {
    event.preventDefault(); // Empêche l'action par défaut du lien
    // Liste des URLs des projets
    const projets = [
        "/projets/projet_1.html",
        "/projets/projet_2.html",
        "/projets/projet_3.html",
        "/projets/projet_4.html",
        "/projets/projet_5.html",
        "/projets/projet_6.html",
        "/projets/projet_7.html",
        "/projets/projet_8.html"
    ];

    // Choisir une URL de manière aléatoire
    const randomIndex = Math.floor(Math.random() * projets.length);
    const randomProjectUrl = projets[randomIndex];

    // Rediriger vers le projet sélectionné
    window.location.href = randomProjectUrl;
});
