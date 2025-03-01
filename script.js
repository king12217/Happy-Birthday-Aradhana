function showFireworks() {
    let fireworksContainer = document.getElementById('fireworks-container');
    for (let i = 0; i < 10; i++) {
        let firework = document.createElement('div');
        firework.className = 'firework';
        firework.style.left = Math.random() * window.innerWidth + 'px';
        firework.style.top = Math.random() * window.innerHeight + 'px';
        fireworksContainer.appendChild(firework);
        setTimeout(() => firework.remove(), 1500);
    }
}
