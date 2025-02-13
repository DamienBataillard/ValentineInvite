function startHeartAnimationAndRedirect() {
    let duration = 1500; // 1.5s avant la redirection
    let interval = 200; // Créer un cœur toutes les 200ms

    let count = 0;
    let maxHearts = duration / interval; // Nombre de cœurs avant redirection

    let heartInterval = setInterval(() => {
        spawnHeart();
        count++;

        if (count >= maxHearts) {
            clearInterval(heartInterval);
            setTimeout(() => {
                window.location.href = "valentine.html";
            }, 500); // Petite attente avant redirection pour un effet fluide
        }
    }, interval);
}

function spawnHeart() {
    let heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "💖";

    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;

    heart.style.left = `${x}px`;
    heart.style.top = `${y}px`;

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 2000); // Supprime les cœurs après animation
}
