// Snow Animation
function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.style.left = Math.random() * 100 + 'vw'; // Position horizontale aléatoire
    snowflake.style.animationDuration = Math.random() * 3 + 2 + 's'; // Durée aléatoire de l'animation
    snowflake.style.opacity = Math.random(); // Opacité aléatoire
    snowflake.style.fontSize = Math.random() * 10 + 10 + 'px'; // Taille aléatoire
    snowflake.innerHTML = '❄';

    // Ajoute le flocon à la page
    document.body.appendChild(snowflake);

    // Supprime le flocon après la fin de l'animation
    setTimeout(() => {
        snowflake.remove();
    }, 5000); // 5 secondes avant suppression
}

// Crée des flocons à intervalles réguliers
setInterval(createSnowflake, 100);

// Ajoute les styles pour les flocons
const styleSheet = document.createElement('style');
styleSheet.textContent = `
    .snowflake {
        position: fixed;
        top: 0;
        color: #fff;
        pointer-events: none; /* Éviter les interactions avec les flocons */
        animation: fall linear forwards;
        z-index: 1000;
    }

    @keyframes fall {
        0% {
            transform: translateY(-10vh) rotate(0deg);
        }
        100% {
            transform: translateY(100vh) rotate(360deg);
        }
    }
`;
document.head.appendChild(styleSheet);
