console.log("À vous de jouer ! 💻🔍✨");
// Place à notre premier Dojo (ou Kata) pour mettre les concepts d'algorithme en pratique !

// Dojo #1 : Combien de personnes ont aimé cette publication ?

// Objectif : Écrire un algorithme pour calculer le nombre total de personnes ayant aimé une publication sur les réseaux sociaux.

// Instructions :
/* 
Écrire une fonction "likes" qui prend en paramètre un tableau de personnes et qui retourne : 
    - Si le tableau est vide, "Be the first to like this publication!".
    - Si le tableau contient une seule personne, "[name] liked this publication."
    - Si le tableau contient deux personnes, "[name_1] and [name_2] liked this publication."
    - Si le tableau contient plus de deux personnes, "[name_1], [name_2] and [number] others liked this publication."
*/

// Décomposition du Problème :

// Divisez le problème en étapes simples. 
// Quelles sont les tâches nécessaires pour résoudre ce problème ?

// Pour vous aider, voici quelques notions qui pourraient vous être utiles :
// - les conditions (if, else if, else)
// - les tableaux (array)
// - les fonctions (function)
// - parcourez un tableau (forEach)
// - les variables (let)

// Écrivez un algorithme en pseudo-code étape par étape pour résoudre le problème. Pensez à utiliser des boucles, des conditions, et des variables.
// Pseudo-Code ------------------------------------------------------------------------------------------------- :
/* Ecrire votre pseudo-code ici
fonction likes [tableau de personnes] {
    si tableau de personnes est vide {
        retourner "Be the first to like this publication!"
    } sinon si tableau de personnes contient une seule personne {
        retourner "[name] liked this publication."
    } sinon si tableau de personnes contient deux personnes {
        retourner "[name_1] and [name_2] liked this publication."
    } sinon si tableau de personnes contient plus de deux personnes {
        retourner "[name_1], [name_2] and [number] others liked this publication."
    }
}
*/



// Code ---------------------------------------------------------------------------------------------------------:
function likes(names) {
    // Ecrire votre code ici
}

// Test et Optimisation :

// Testez votre algorithme avec les cas suivants :
//console.log(likes([])) // "Be the first to like this publication!"
//console.log(likes(["Peter"])) // "Peter liked this publication."
//console.log(likes(["Jacob", "Alex"])) // "Jacob and Alex liked this publication."
//console.log(likes(["Max", "John", "Mark"])) // "Max, John and Mark liked this publication."
//console.log(likes(["Alex", "Jacob", "Mark", "Max"])) // "Alex, Jacob and 2 others liked this publication."

// Optimisez votre algorithme pour qu'il soit le plus concis possible.

// Rappel : 
// Il existe plusieurs façons de résoudre un problème. Ne vous limitez pas à une seule solution.