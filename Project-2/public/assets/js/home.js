console.log('assets/js/home.js chargé ✅');
console.log('Tableau des destinations : ', destinations);
console.log('Tableau des membres de l\'équipe : ', team);

// TODO: Affichage des destinations dans la section #destinations de la page d'accueil
// Appel de la fonction getDestinations
// getDestinations(destinations);

// Affichage des membres de l'équipe dans la section #about de la page d'accueil
// Appel de la fonction getTeam
getTeam(team);

// Animation des scroll vers les différentes sections de la page d'accueil
ScrollReveal().reveal('#home');
ScrollReveal().reveal('#about', { delay: 300 });
ScrollReveal().reveal('#destinations', { delay: 500 });
ScrollReveal().reveal('#contact', { delay: 700 });

// Gestion du scroll vers le haut de la page
window.scrollTo({
    top: 0,
    behavior: 'smooth'
});

// Gestion du scroll du Call To Action (CTA) de la section #home de la page d'accueil
document.getElementById('home-cta').addEventListener('click', event => {
    document.getElementById('about').scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
});

// Gestion du scroll du Call To Action (CTA) de la section #about de la page d'accueil
document.getElementById('cta-about').addEventListener('click', event => {
    document.getElementById('destinations').scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
});

// Gestion du bouton de retour en haut de page
document.getElementById('up').addEventListener('click', event => {
    document.getElementById('home-section').scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
});
