// Fichier de données
console.log('data/data.js chargé ✅');

// On rassemble les données dans un tableau pour les utiliser dans plusieurs fichiers et dynamiser le site
// Les données sont stockées dans des variables en constante pour éviter qu'elles soient modifiées par erreur
// Il est toujours possible d'ajuster leur contenu si besoin, en modifiant directement ce fichier

// La liste des destinations proposées par l'agence (Page "Destinations" & "Accueil" section "#destinations") :
const destinations = [
    {
        id : 1, name : 'Nébuleuse de l\'Aurore', location : 'Localisation : Au cœur de la galaxie, cette nébuleuse offre un spectacle visuel époustouflant avec des lumières chatoyantes et des formations nuageuses éblouissantes. Un voyage parfait pour les amateurs de photographie stellaire.', img : 'assets/images/destinations/nebuleuse.jpeg'
    },
    {
        id : 2, name : 'Planète Xyron-9, Le Jardin des Étoiles', location : 'Localisation : Une planète luxuriante avec des forêts bioluminescentes et des jardins extraterrestres. Xyron-9 est réputée pour ses espèces végétales uniques et ses vues panoramiques exceptionnelles.', img : 'assets/images/destinations/xyron.png'
    },
    {
        id : 3, name : 'Station Orbitalis, La Cité Flottante', location : 'Localisation : Une station spatiale avancée qui orbite autour d\'une étoile lointaine. Explorez des plates-formes commerciales, des quartiers résidentiels avec vue sur l\'espace, et découvrez la vie urbaine dans l\'apesanteur.', img : 'assets/images/destinations/cite.jpeg'
    },
    {
        id : 4, name : 'Lune d\'Éclipse, Le Sanctuaire des Mystères', location : 'Localisation : Une lune mystérieuse où d\'anciens artefacts extraterrestres ont été découverts. Les ruines antiques, les cavernes lumineuses et les phénomènes énergétiques énigmatiques en font une destination captivante pour les amateurs d\'histoire intergalactique.', img : 'assets/images/destinations/lune.avif'
    },
    {
        id : 5, name : 'Asteria Prime, La Perle des Planètes', location : 'Localisation : Une planète joyau aux vastes océans de cristaux liquides. Les plages scintillantes, les villes côtières futuristes et la biodiversité unique font d\'Asteria Prime une destination idéale pour les passionnés de planètes exotiques.', img : 'assets/images/destinations/asteria.webp'
    },
    {
        id : 6, name : 'Trou de Ver de Luminara, Le Portail Cosmique', location : 'Localisation : Un trou de ver rare qui offre un passage vers des régions inexplorées de l\'univers. Les voyageurs peuvent traverser ce portail cosmique pour atteindre des constellations lointaines et des galaxies peu connues.', img : 'assets/images/destinations/ver.jpeg'
    }
];

// La liste des membres de l'équipe de l'agence (Page d'accueil, section "#about") :
const team = [
    {
        id : 1, name : 'Star-Lord', job : 'Capitaine', img : 'assets/images/team/star.png'
    },
    {
        id : 2, name : 'Gamora', job : 'Spécialiste des cultures extraterrestres', img : 'assets/images/team/gamora.png'
    },
    {
        id : 3, name : 'Drax', job : 'Expert en navigation stellaire', img : 'assets/images/team/drax.png'
    },
    {
        id : 4, name : 'Rocket', job : 'Spécialiste des civilisations extraterrestres', img : 'assets/images/team/rocket.png'
    },
    {
        id : 5, name : 'Groot', job : 'Expert en navigation stellaire', img : 'assets/images/team/groot.png'
    }
];