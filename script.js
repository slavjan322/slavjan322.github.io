// 1. Відкриття конверту
function openInvitation() {
    const envelope = document.querySelector('.envelope');
    envelope.classList.add('open');
    
    setTimeout(() => {
        document.getElementById('envelope-overlay').style.opacity = '0';
        document.getElementById('envelope-overlay').style.transform = 'translateY(-100vh)';
        
        // Ініціалізація анімацій прокрутки AOS
        AOS.init({ duration: 1000, once: true });
        
        // Автоматичний запуск музики за бажанням
        // document.getElementById('bg-music').play();
    }, 1200);
}

// 2. Таймер зворотного відліку
const weddingDate = new Date(2026, 7, 23, 15, 0, 0).getTime(); // 23 серпня 2026

setInterval(function() {
    const now = new Date().getTime();
    const diff = weddingDate - now;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
}, 1000);

// 3. Перемикач світлої/темної теми
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    const icon = themeToggle.querySelector('i');
    if(document.body.classList.contains('dark-theme')) {
        icon.className = 'fas fa-sun';
    } else {
        icon.className = 'fas fa-moon';
    }
});

// 4. Керування фоновою музикою
const musicToggle = document.getElementById('music-toggle');
const bgMusic = document.getElementById('bg-music');

musicToggle.addEventListener('click', () => {
    if (bgMusic.paused) {
        bgMusic.play();
        musicToggle.style.animation = 'pulse 1s infinite';
    } else {
        bgMusic.pause();
        musicToggle.style.animation = 'none';
    }
});

// 5. Ефект падаючих пелюсток (Анімація)
function createPetal() {
    const container = document.getElementById('particles-container');
    if (!container) return;
    
    const petal = document.createElement('div');
    petal.classList.add('petal');
    
    petal.style.left = Math.random() * 100 + 'vw';
    petal.style.width = Math.random() * 15 + 10 + 'px';
    petal.style.height = Math.random() * 15 + 10 + 'px';
    petal.style.animationDuration = Math.random() * 3 + 4 + 's';
    petal.style.opacity = Math.random() * 0.7 + 0.3;
    
    container.appendChild(petal);
    
    setTimeout(() => {
        petal.remove();
    }, 6000);
}
setInterval(createPetal, 300);
