console.log('assets/js/destinations-service.js chargé ✅');

/**
 * Affichage des informations de la destination dans la page destinations.html
 * @param {Array} destinations
 * @param {Number} destinationId
 * Permet de récupérer les informations de la destination depuis son ID dans un tableau de destinations
 * Affiche les informations de la destination dans la page destinations.html ou 
 * redirige vers une page d'erreur 404 si l'id de la destination n'existe pas
 */
function getDestination(destinations, destinationId) {
    // TODO:
    // Initialisation des variables result et error
    // Boucle sur le tableau des destinations pour trouver la destination correspondante à l'id
        // Debug
        // console.log(destinations[i].id);
        // si l'id de la destination correspond à destinationId
            // on stocke la destination dans la variable result
    // fin de la boucle
    // Si la variable result est vide (undefined)
    // cela signifie que l'id de la destination n'existe pas
        // on stocke le code erreur 404 dans la variable error
        // on redirige vers la page d'erreur en passant le code erreur dans l'URL 
        // en paramètre à la clé error
        // Indice : window.location.href = "error.html?error=" + error;
    // Si la variable error est égale à false
        // cela signifie que l'id de la destination existe
        // on affiche les informations de la destination dans la page destinations.html
        // Affichage du nom de la destination dans le titre de la page
        // Affichage du contenu supplémentaire de la destination dans la page
    // Debug du résultat de la recherche si la destination existe
}

/**
 * Affichage des destinations dans la page d'accueil
 * @param {Array} destinations 
 */
function getDestinations(destinations) {
    // TODO:
    // Initialisation de la variable linkToDestination pour créer un lien vers la page destinations.html
    // Elle contient le début du lien vers la page destinations.html et doit être concaténée avec l'id de la destination
    let linkToDestination = "destinations.html?destination=";
    // Création d'une boucle pour afficher les destinations dans la page à partir du tableau destinations
    // et de la constante destinationContainer
    for (let i = 0; i < destinations.length; i++) {
        // Debug
        console.log(destinations[i].name);
        console.log(destinations[i].location);
        console.log(destinations[i].id);
        // Création d'un élément HTML avec la classe destination
        // et stockage dans la variable destinationContainer
        // Indice : document.createElement('div');
        // Ajout du contenu HTML dans la variable destinationContainer
        // Indice : destinationContainer.innerHTML = `...`;
        // Ajout de destinationContainer dans la page HTML
        // Indice : document.getElementById('list-destination').appendChild(destinationContainer);
    }
}