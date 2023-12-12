console.log('assets/js/services/team-service.js chargé ✅');

/**
 * Affichage des membres de l'équipe dans la page d'accueil
 * @param {Array} team 
 */
function getTeam(team) {
    // Création d'une boucle pour afficher les membres de l'équipe dans la page à partir du tableau team
    for (let i = 0; i < team.length; i++) {
        // Debug
        console.log(team[i].name);
        console.log(team[i].job);
        console.log(team[i].img);
    
        // Création d'un élément HTML pour chaque membre de l'équipe
        let teamContainer = document.createElement('div');
        // Ajout de la classe card-team à chaque élément HTML créé
        teamContainer.classList.add('card-team');
        // Ajout du contenu HTML dans chaque élément HTML créé avec le contenu du tableau team
        teamContainer.innerHTML = `
            <div class="card-team">
                <div class="card-team-avatar"></div>
                <div class="card-team-content">
                    <h3>${team[i].name}</h3>
                    <p>${team[i].job}</p>
                </div>
            </div>
        `;
        // Ajout de chaque élément HTML créé dans la section #about de la page d'accueil
        document.getElementById('about-team').appendChild(teamContainer);
    }
}