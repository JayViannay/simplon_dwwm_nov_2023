### Exercice 1: Bonjour, Toi !
Objectif : Affiche "Bonjour, Toi !" dans la console.

```javascript
// ### Exercice 1 : Bonjour, Toi !
console.log("Bonjour, Toi !");
```
Conseil de débogging : Assurez-vous que la syntaxe est correcte et que la console affiche le message.

### Exercice 2: Calcul Mental
Objectif : Calcule et affiche la somme de 7 et 3.

```javascript
// ### Exercice 2 : Calcul Mental
let resultat = 7 + 3;
console.log(resultat);
```
Conseil de débogging : Vérifiez que le résultat affiché est correct.

### Exercice 3: Message Personnalisé
Objectif : Demande le prénom de l'utilisateur et affiche "Bienvenue, [prénom] !".

```javascript
// ### Exercice 3 : Message Personnalisé
let prenom = prompt("Quel est ton prénom ?");
console.log("Bienvenue, " + prenom + " !");
```
Conseil de débogging : Vérifiez que le message d'accueil inclut le prénom de l'utilisateur.

### Exercice 4: Compte à Rebours
Objectif : Affiche un compte à rebours de 5 à 1 dans la console.

```javascript
// ### Exercice 4 : Compte à Rebours
for (let i = 5; i > 0; i--) {
    console.log(i);
}
```
Conseil de débogging : Vérifiez que les nombres sont affichés dans l'ordre décroissant.

### Exercice 5: Pair ou Impair ?
Objectif : Demande un nombre à l'utilisateur et affiche s'il est pair ou impair.

```javascript
// ### Exercice 5 : Pair ou Impair ?
let nombre = prompt("Choisis un nombre :");
if (nombre % 2 === 0) {
    console.log("C'est un nombre pair !");
} else {
    console.log("C'est un nombre impair !");
}
```
Conseil de débogging : Assurez-vous que le résultat indique correctement si le nombre est pair ou impair.

### Exercice 6: Table de Multiplication
Objectif : Demande un nombre à l'utilisateur et affiche sa table de multiplication de 1 à 10.

```javascript
// ### Exercice 6 : Table de Multiplication
let nombre = prompt("Choisis un nombre :");
for (let i = 1; i <= 10; i++) {
    let resultat = nombre * i;
    console.log(nombre + " x " + i + " = " + resultat);
}
```
Conseil de débogging : Vérifiez que la table de multiplication est correcte.

### Exercice 7: Mot de Passe
Objectif : Demande un mot de passe à l'utilisateur. Si le mot de passe est "1234", affiche "Accès Autorisé", sinon affiche "Accès Refusé".

```javascript
// ### Exercice 7 : Mot de Passe
let motDePasse = prompt("Entrez votre mot de passe :");
if (motDePasse === "1234") {
    console.log("Accès Autorisé !");
} else {
    console.log("Accès Refusé !");
}
```
Conseil de débogging : Vérifiez que l'accès est autorisé uniquement avec le bon mot de passe.

### Exercice 8: Calcul de la Moyenne
Objectif : Demande à l'utilisateur de saisir plusieurs nombres séparés par des virgules. Calcule et affiche leur moyenne.

```javascript
// ### Exercice 8 : Calcul de la Moyenne
let nombres = prompt("Saisis plusieurs nombres séparés par des virgules :");
let tableauNombres = nombres.split(",").map(Number);
let somme = 0;

for (let i = 0; i < tableauNombres.length; i++) {
    somme += tableauNombres[i];
}

let moyenne = somme / tableauNombres.length;
console.log("La moyenne est : " + moyenne);
```
Conseil de débogging : Assurez-vous que la moyenne est correctement calculée.

### Exercice 9: Mot Inversé
Objectif : Demande à l'utilisateur de saisir un mot et affiche le mot inversé.

```javascript
// ### Exercice 9 : Mot Inversé
let mot = prompt("Saisis un mot :");
let motInverse = "";

for (let i = mot.length - 1; i >= 0; i--) {
    motInverse += mot[i];
}

console.log("Le mot inversé est : " + motInverse);
```
Conseil de débogging : Vérifiez que le mot est correctement inversé.

### Exercice 10: Jeu du Pendu
Objectif : Crée un jeu simple du pendu. L'utilisateur doit deviner un mot en saisissant des lettres.

```javascript
// ### Exercice 10 : Jeu du Pendu
let motADeviner = "javascript";
let motCache = "_".repeat(motADeviner.length);
let tentative = 0;

while (motCache !== motADeviner) {
    let lettre = prompt("Mot à deviner : " + motCache + "\nTentative " + (tentative + 1) + " : Saisis une lettre");
    
    for (let i = 0; i < motADeviner.length; i++) {
        if (motADeviner[i] === lettre) {
            motCache = motCache.substr(0, i) + lettre + motCache.substr(i + 1);
        }
    }

    tentative++;
}
console.log("Bravo ! Tu as deviné le mot en " + tentative + " tentatives : " + motADeviner);
```
Conseil de débogging : Assurez-vous que le mot est correctement deviné.

### Exercice 11: Tri à Bulles
Objectif : Trie un tableau de nombres en utilisant l'algorithme de tri à bulles.

```javascript
// ### Exercice 11 : Tri à Bulles
let nombres = [4, 2, 8, 1, 6, 7];
let n = nombres.length;

for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
        if (nombres[j] > nombres[j + 1]) {
            // Échange les éléments si ils sont dans le mauvais ordre
            let temp = nombres[j];
            nombres[j] = nombres[j + 1];
            nombres[j + 1] = temp;
        }
    }
}

console.log("Tableau trié : " + nombres);
```
Conseil de débogging : Vérifiez que le tableau est correctement trié.

### Exercice 12: Générateur de Mot de Passe
Objectif : Crée un générateur de mot de passe aléatoire. L'utilisateur peut spécifier la longueur du mot de passe.

```javascript
// ### Exercice 12 : Générateur de Mot de Passe
let longueurMotDePasse = prompt("Choisis la longueur de ton mot de passe :");
let caracteresPossibles = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
let motDePasse = "";

for (let i = 0; i < longueurMotDePasse; i++) {
    let caractereAleatoire = caracteresPossibles[Math.floor(Math.random() * caracteresPossibles.length)];
    motDePasse += caractereAleatoire;
}

console.log("Mot de passe généré : " + motDePasse);
```
Conseil de débogging : Vérifiez que le mot de passe est généré avec la longueur correcte.

### Exercice 13: Vérification de Palindrome
Objectif : Demande à l'utilisateur de saisir une phrase et vérifie si c'est un palindrome.

```javascript
// ### Exercice 13 : Vérification de Palindrome
let phrase = prompt("Saisis une phrase :").toLowerCase().replace(/[^a-z0-9]/g, '');
let estPalindrome = true;

for (let i = 0; i < phrase.length / 2; i++) {
    if (phrase[i] !== phrase[phrase.length - 1 - i]) {
        estPalindrome = false;
        break;
    }
}

if (estPalindrome) {
    console.log("C'est un palindrome !");
} else {
    console.log("Ce n'est pas un palindrome.");
}
```
Conseil de débogging : Assurez-vous que la vérification de palindrome fonctionne correctement.

### Exercice 14: Calculatrice Simple
Objectif : Crée une calculatrice qui peut effectuer des opérations basiques (+, -, *, /).

```javascript
// ### Exercice 14 : Calculatrice Simple
let nombre1 = parseFloat(prompt("Saisis le premier nombre :"));
let operateur = prompt("Saisis l'opérateur (+, -, *, /) :");
let nombre2 = parseFloat(prompt("Saisis le deuxième nombre :"));
let resultat;

switch (operateur) {
    case "+":
        resultat = nombre1 + nombre2;
        break;
    case "-":
        resultat = nombre1 - nombre2;
        break;
    case "*":
        resultat = nombre1 * nombre2;
        break;
    case "/":
        resultat = nombre1 / nombre2;
        break;
    default:
        console.log("Opérateur invalide !");
}

if (resultat !== undefined) {
    console.log("Résultat : " + resultat);
}
```
Conseil de débogging : Assurez-vous que la calculatrice effectue les opérations correctement.
