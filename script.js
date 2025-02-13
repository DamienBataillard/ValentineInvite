function spawnHearts() {
    for (let i = 0; i < 10; i++) { // Génère 10 cœurs par clic
        let heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "💖";

        // Position aléatoire sur l'écran
        let x = Math.random() * window.innerWidth;
        let y = Math.random() * window.innerHeight;

        heart.style.left = `${x}px`;
        heart.style.top = `${y}px`;

        document.body.appendChild(heart);

        // Supprimer le cœur après l'animation
        setTimeout(() => {
            heart.remove();
        }, 2000);
    }
}
