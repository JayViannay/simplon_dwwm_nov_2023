console.log('assets/js/destinations.js chargé ✅');
console.log('Tableau des destinations : ', destinations);

// Récupération de l'id de la destination dans l'URL
let params = new URLSearchParams(window.location.search);
// console.log(params);

// Conversion de la valeur de l'id en nombre entier
let destination = parseInt(params.get('destination'));
// Debug
console.log("Destination Param : ", destination);

// Appel de la fonction getDestination TODO: à compléter
// getDestination(destinations, destination);