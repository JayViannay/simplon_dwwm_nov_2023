console.log('assets/js/main.js chargé ✅');

// Gestion du menu burger
document.getElementById('bg-menu').addEventListener('click', event => {
    console.log('click burger menu');
    document.getElementById('nav-mobile').classList.toggle('displaying-menu');
});