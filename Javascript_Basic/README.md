### Javascript Basic

#### 1. Portée des Variables

En JavaScript, la portée d'une variable est déterminée par l'endroit où elle est déclarée. Si une variable est déclarée à l'extérieur d'une fonction, elle est dite globale. Si une variable est déclarée à l'intérieur d'une fonction, elle est dite locale.

Pour déclarer une variable, JavaScript utilise plusieurs mots-clés : `var`, `let`, et `const`. `var` est la façon traditionnelle/ancienne de déclarer une variable en JavaScript. `let` et `const` sont des mots-clés introduits depuis ES6.

`var` et `let` sont similaires, mais `let` a une portée de bloc plus stricte que `var`. `const` est similaire à `let`, mais la valeur d'une variable déclarée avec `const` ne peut pas être modifiée.

> ☝️ Important : `var` est obsolète et ne doit plus être utilisé. Utilisez `let` et `const` à la place.

```javascript
// Déclaration d'une variable globale
let maVariable = 'Ma variable';
const maVariable = 'Ma variable';

// Déclaration d'une variable locale
function maFonction() {
    let maVariable = 'Ma variable';
    const maVariable = 'Ma variable';
}
```

#### 2. Types de Données

En JavaScript, il existe plusieurs types de données : `string`, `number`, `boolean`, `object`, et `array`.

```javascript
// String
let maVariable = 'Ma variable';
// Number
let maVariable = 10;
// Boolean
let maVariable = true;
// Object
let maVariable = {
    propriete1: 'Valeur 1',
    propriete2: 'Valeur 2'
};
// Array
let maVariable = ['Valeur 1', 'Valeur 2'];
```

#### 3. Parcourir un Tableau

En programmation, un tableau est une structure de données qui contient une collection d'éléments. Chaque élément est identifié par un index. Le premier élément d'un tableau a un index de 0, le deuxième élément a un index de 1, et ainsi de suite.

Il existe plusieurs façons de parcourir un tableau en JavaScript. La façon la plus simple est d'utiliser une boucle `for`.

En programmation, nous sommes souvent amenés à gérer des listes de données. Par exemple, une liste de noms, une liste de produits, une liste de commandes, etc. Les tableaux sont un excellent moyen de stocker et de gérer ces listes de données.
Les boucles sont un excellent moyen de parcourir ces tableaux et d'effectuer des opérations sur chaque élément.

```javascript
// Crée un tableau
let monTableau = ['Valeur 1', 'Valeur 2', 'Valeur 3'];

// Parcours le tableau
for (let i = 0; i < monTableau.length; i++) {
    // Affiche chaque élément
    console.log(monTableau[i]);
}
```

#### 4. Fonctions

Une fonction est un bloc de code qui effectue une tâche spécifique. Une fonction peut prendre des paramètres en entrée et renvoyer une valeur en sortie.
Elle est définie par le mot-clé `function`, suivi du nom de la fonction, suivi des paramètres entre parenthèses, suivi du corps de la fonction entre accolades.

Les fonctions sont utiles pour réutiliser du code. Au lieu d'écrire le même code encore et encore, vous pouvez le placer dans une fonction et l'appeler chaque fois que vous en avez besoin.

```javascript
// Définit une fonction
function maFonction(parametre1, parametre2) {
    // Fait quelque chose
    return 'Résultat';
}
```

#### 5. Objets

En JavaScript, un objet est une collection de propriétés. Chaque propriété est composée d'une clé et d'une valeur. Une clé est toujours une chaîne de caractères, tandis qu'une valeur peut être de n'importe quel type de données.


```javascript
// Crée un objet
let monObjet = {
    propriete1: 'Valeur 1',
    propriete2: 'Valeur 2'
};

// Accède à une propriété
monObjet.propriete1;
```

#### 6. Manipulation du DOM

Le DOM (Document Object Model) est une interface de programmation qui permet aux programmes informatiques et aux scripts d'accéder et de mettre à jour le contenu, la structure et le style d'un document HTML.

En JavaScript, le DOM est accessible via l'objet `document`. Cet objet représente le document HTML lui-même. Il contient des méthodes qui permettent de manipuler le contenu, la structure et le style du document.

```javascript
// Sélectionne un élément par son ID
let monElement = document.getElementById('monId');

// Sélectionne tous les éléments avec une classe spécifique
let elements = document.getElementsByClassName('maClasse');

// Sélectionne le premier élément correspondant à un sélecteur CSS
let premierElement = document.querySelector('.premier');

// Change le contenu d'un élément
monElement.innerHTML = 'Nouveau Contenu';

// Modifie un attribut
monElement.setAttribute('src', 'nouveau-src.jpg');

// Change la couleur du texte
monElement.style.color = 'red';

// Modifie la taille de la police
monElement.style.fontSize = '18px';

// Crée un nouvel élément
let nouvelElement = document.createElement('div');

// Ajoute l'élément à la page
document.body.appendChild(nouvelElement);

// Supprime un élément
document.body.removeChild(monElement);

// Ajoute un gestionnaire de clic
monElement.addEventListener('click', function() {
    alert('Clic effectué !');
});
```