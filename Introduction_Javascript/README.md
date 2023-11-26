# Introduction à JavaScript

##### Qu'est-ce que JavaScript?
JavaScript est un langage de programmation interprété, orienté objet et à typage dynamique. 
Il est principalement utilisé pour rendre les pages web interactives et dynamiques. Contrairement aux langages de programmation côté serveur comme PHP, JavaScript est exécuté côté client, directement dans le navigateur web de l'utilisateur. Cela permet de manipuler le contenu des pages web en temps réel, d'interagir avec l'utilisateur et d'améliorer l'expérience utilisateur.

##### Où est-ce utilisé ? (côté client, serveur, applications web, etc.)
- <strong>Côté Client</strong> : JavaScript est principalement utilisé côté client pour rendre les pages web interactives. Il peut être directement intégré dans le code HTML d'une page et exécuté par le navigateur du client.
- <strong>Côté Serveur</strong> : Avec l'avènement de plateformes comme Node.js, JavaScript peut également être utilisé côté serveur pour construire des applications web complètes. Cela offre la possibilité d'utiliser le même langage des deux côtés, simplifiant ainsi le développement.
- <strong>Applications Web</strong> : JavaScript est largement utilisé dans le développement d'applications web modernes, permettant la création d'interfaces utilisateur riches et dynamiques.

### Les Fondamentaux

##### Syntaxe de base : déclarations de variables, commentaires.

JavaScript utilise une syntaxe simple et flexible. La déclaration de variables se fait avec les mots-clés `let`, ou `const`. <br>
Les commentaires, essentiels pour documenter le code, peuvent être ajoutés en utilisant // pour les commentaires sur une ligne et /* ... */ pour les commentaires sur plusieurs lignes.

###### Exemple :
```javascript
// Ceci est un commentaire sur une ligne

/*
   Ceci est un commentaire
   sur plusieurs lignes
*/

let maVariable = 10; // Déclaration d'une variable
```

##### Types de données : nombres, chaînes de caractères, booléens.

JavaScript prend en charge plusieurs types de données, tels que les nombres, les chaînes de caractères et les booléens.

###### Exemple :

```javascript
let nombre = 42; // Nombre entier
let pi = 3.14; // Nombre décimal
let texte = "Bonjour, monde !"; // Chaîne de caractères
let estVrai = true; // Booléen
```

##### Opérateurs arithmétiques et logiques.

JavaScript offre un ensemble d'opérateurs pour effectuer des opérations arithmétiques (addition, soustraction, multiplication, division, etc.) et des opérations logiques (ET, OU, SUPPERIEUR, INFERIEUR).

###### Exemple :

```javascript
let resultatAddition = 5 + 3; // Addition
let estSuperieur = 10 > 5; // Opérateur de comparaison
let estVraiETFaux = true && false; // Opérateur logique ET
let estVraiOUFaux = true || false; // Opérateur logique OU
```

##### Les Structures de Contrôle
Les instructions conditionnelles (if, else).
Les instructions conditionnelles permettent d'exécuter des blocs de code en fonction d'une condition donnée. Si la condition est vraie, un bloc de code est exécuté ; sinon, un autre bloc peut être exécuté (avec else).

###### Exemple :

```javascript
let age = 18;

if (age >= 18) {
    console.log("Vous êtes majeur.");
} else {
    console.log("Vous êtes mineur.");
}
```

##### Les boucles (for, while).
Les boucles permettent d'exécuter un bloc de code plusieurs fois. La boucle for est utilisée lorsque le nombre d'itérations est connu à l'avance, tandis que la boucle while est utilisée lorsque la condition de sortie peut changer au cours de l'exécution.

###### Exemple de boucle for :

```javascript
for (let i = 0; i < 5; i++) {
    console.log(i);
}
```

###### Exemple de boucle while :

```javascript
let i = 0;

while (i < 5) {
    console.log(i);
    i++;
}
```

##### Fonctions en JavaScript

- <strong>Déclaration et appel de fonctions </strong>:
Les fonctions sont des blocs de code réutilisables. Elles peuvent être déclarées à l'aide du mot-clé function et appelées lorsque nécessaire.

###### Exemple :

```javascript
// Déclaration de fonction
function direBonjour() {
    console.log("Bonjour !");
}

// Appel de fonction
direBonjour();
```

- <strong>Paramètres et valeurs de retour</strong> :
Les fonctions peuvent accepter des paramètres, qui sont des valeurs que la fonction utilise lors de son exécution. De plus, une fonction peut renvoyer une valeur en utilisant le mot-clé return.

###### Exemple :

```javascript
// Fonction avec paramètres et valeur de retour
function additionner(a, b) {
    return a + b;
}

let resultat = additionner(3, 4);
console.log(resultat); // Affiche 7
```