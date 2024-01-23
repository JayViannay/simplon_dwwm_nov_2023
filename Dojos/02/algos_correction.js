// ALGO 1 : 
// Écris une fonction thirdAngle qui, étant donné deux angles d'un triangle, renverra la valeur du troisième. 
// (Rappel : la somme des valeurs des trois angles dans un triangle est toujours 180°)
//     Ex: 
//     thirdAngle(90, 30) doit retourner 60
//     thirdAngle(20, 80) doit retourner 80 

function thirdAngle(angleA, angleB) {
    let angleC = 180 - (angleA + angleB);
    return angleC;
}

// ALGO 2 
// Écris une fonction isLeap qui peut déterminer si une année est une année bissextile. Elle doit renvoyer true si c'est le cas, et false sinon.
// Rappel : Une année bissextile vérifie une de ces règles :
// Elle est divisible par 4, sans être divisible par 100
// Elle est divisible par 400
// Ex : 2004, 2016 et 2020 sont des années bissextiles
// Rappel : Pour vérifier si un nombre est divisible par un autre, tu peux utiliser l'opérateur "modulo" (%) 

// Définition de la fonction theaterSieges qui ne prend pas d'arguments.
function theaterSieges() {
    // Initialisation d'un tableau vide pour stocker les sièges de la salle.
    let tab = [];

    // Boucle externe pour parcourir chaque colonne de sièges (26 colonnes au total).
    for (let i = 1; i <= 26; i++) {
        // Initialisation d'un tableau vide pour stocker les positions des sièges dans une rangée.
        let tab2 = [];

        // Boucle interne pour parcourir chaque siège dans une rangée (100 sièges au total).
        for (let j = 1; j <= 100; j++) {
            // Formatage de la position du siège dans une rangée (par exemple, "1-1", "1-2", ..., "26-100").
            tab2.push(i + "-" + j);
        }

        // Ajout du tableau de rangée (tab2) à la liste des sièges (tab).
        tab.push(tab2);
    }

    // Retourne le tableau contenant toutes les rangées de sièges.
    return tab;
}

// ALGO 3 
// Un employé de théâtre souhaite obtenir la liste de tous les sièges de sa salle principale.
// Dans la salle les places sont réparties comme suit :
// Il y a 26 colonnes de sièges, numérotées de "1" » à "26".
// Chaque colonne contient 100 sièges, numérotés de "1" à "100".
// Complète la fonction theaterSieges pour qu'elle renvoie un tableau
// où chaque sous-tableau répertorie les positions des sièges dans une rangée.
// exemple du résultat final :
//     [
//     ["1-1", "1-2", "1-3", ..., "1-100"],
//     ["2-1", "2-2", "2-3", ..., "2-100"],
//     ...
//     ["26-1", "26-2", "26-3", ..., "26-100"]
//     ]
//     function theaterSieges() {
//         // Your code here !
//     }

function theaterSieges() {
    let tab = [];
    for (let i = 1; i <= 26; i++) {
        let tab2 = [];
        for (let j = 1; j <= 100; j++) {
            tab2.push(i + "-" + j);
        }
        tab.push(tab2);
    }
    return tab;
}

// ALGO 4
// Notre équipe de football participe à un tournoi dans lequel elle a joué 10 matchs.
// Les résultats du match sont notés "3:0" : le premier chiffre est le nombre de buts de notre équipe ; le second est celui de l'autre équipe.
// Pour connaître le score de notre équipe, nous suivons ces règles :
// Victoire : 3pts
// Nul : 1pt
// Défaite : 0pt
// Étant donné un tableau avec les résultats des matchs, écris une fonction qui renverra notre score.
// Pour exemple, si ta fonction recevait le tableau ci-dessous en paramètre, tu devrais obtenir 13 points.
// ["1:0", "2:0", "3:0", "4:4", "2:2", "3:3", "1:4", "2:3", "2:4", "3:3"]
function getPoints(results) {
    let score = 0;
    for (let i = 0; i < results.length; i++) {
        let result = results[i];
        let tab = result.split(":");
        let score1 = parseInt(tab[0]);
        let score2 = parseInt(tab[1]);
        if (score1 > score2) {
            score += 3;
        } else if (score1 === score2) {
            score += 1;
        }
    }
    return score;
}

// ALGO 5 
// Écris une fonction avec deux paramètres. Ces paramètres sont des tableaux contenant des nombres stockés sous forme de chaînes de caractères.
//     Ta fonction doit renvoyer un tableau, où chaque élément est la somme des éléments des deux arguments correspondants (c'est-à-dire : le premier élément du tableau résultat est égal au premier élément du premier paramètre plus le premier élément du deuxième paramètre) .
//     Remarque : Si un élément est vide, il doit compter pour 0.
//     Ex: 
//     sumArr( ["1", "2", "3"], ["2", "4", "1"] ) should return ["3", "6", "4"]
//     sumArr( ["2", "7", "3"], ["2", "4", "9"] ) should return ["4", "11", "12"]
//     sumArr( ["2", "7", "3", "8", "2"], ["2", "4", "9"] ) should return ["4", "11", "12", "8", "2"]
function sumArr(arrayA, arrayB) {
    let tab = [];
    for (let i = 0; i < arrayA.length; i++) {
        let nb1 = parseInt(arrayA[i]);
        let nb2 = parseInt(arrayB[i]);
        if (isNaN(nb1)) {
            nb1 = 0;
        }
        if (isNaN(nb2)) {
            nb2 = 0;
        }
        tab.push(nb1 + nb2);
    }
    return tab;
}

// TESTS :  
console.log("TESTS :");

console.log("Algo 1 :");
// console.log(thirdAngle(90, 30), "doit retourner 60");
// console.log(thirdAngle(20, 80), "doit retourner 80");

console.log("Algo 2 :");
// console.log(isLeap(2004), "doit retourner true");
// console.log(isLeap(2016), "doit retourner true");
// console.log(isLeap(2100), "doit retourner false");

console.log("Algo 3 :");
// console.log(theaterSieges(), "doit retourner un tableau avec tous les sièges");

console.log("Algo 4 :");
// console.log(getPoints(["1:0", "2:0", "3:0", "4:4", "2:2", "3:3", "1:4", "2:3", "2:4", "3:3"]), "doit retourner 13");
// console.log(getPoints(["1:0", "2:0", "3:0", "4:4", "2:2", "3:3", "1:4", "2:3", "2:4", "3:3", "1:0", "2:0", "3:0", "4:4", "2:2", "3:3", "1:4", "2:3", "2:4", "3:3"]), "doit retourner 26");

console.log("Algo 5 :");
// console.log(sumArr(["1", "2", "3"], ["2", "4", "1"]), "doit retourner [3, 6, 4]");
// console.log(sumArr(["2", "7", "3"], ["2", "4", "9"]), "doit retourner [4, 11, 12]");
// console.log(sumArr(["2", "7", "3", "8", "2"], ["2", "4", "9"]), "doit retourner [4, 11, 12, 8, 2]");
// console.log(sumArr(["2", "7", "3", "8", "2"], ["2", "4", "9", "1", "2"]), "doit retourner [4, 11, 12, 9, 4]");
