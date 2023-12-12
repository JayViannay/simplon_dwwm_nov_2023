console.log('assets/js/contact-form.js chargé ✅');

// Ecoute de l'événement submit sur le formulaire de contact
document.getElementById('contact-form').addEventListener('submit', function (event) {
    // Important : Empêcher le comportement par défaut du navigateur
    // Debug
    console.log('Formulaire soumis');
    // Récupération des valeurs des champs du formulaire dans des variables
    let name = "TODO: à compléter";
    let email = "TODO: à compléter"
    let message = "TODO: à compléter"
    // Debug
    console.log(name, email, message);
    // Création d'un objet avec les valeurs des champs du formulaire
    let infoContact = {
        name: name,
        email: email,
        message: message
    }
    // Debug
    console.log(infoContact);
    // Appel de la fonction sendMail avec l'objet infoContact 
    // (les informations soumises du formulaire) en paramètre
    sendMail(infoContact);
});