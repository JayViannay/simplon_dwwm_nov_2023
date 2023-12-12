
### Introduction à la Manipulation du DOM avec JavaScript

🚀 Aujourd'hui, nous allons explorer une facette essentielle du développement web : le DOM, ou Document Object Model, en compagnie de JavaScript.

##### Qu'est-ce que le DOM ?
Le DOM est comme l'ossature d'une page web. C'est une représentation hiérarchique des éléments de la page qui permet à JavaScript d'interagir dynamiquement avec le contenu. En d'autres termes, le DOM permet à votre code JavaScript de lire, changer, et manipuler la structure et le style d'une page web en temps réel.

##### Fonctionnalités Principales du DOM
- Sélectionner des Éléments : Vous pouvez sélectionner des éléments du DOM en utilisant des méthodes comme `getElementById`, `getElementsByClassName`, ou `querySelector`.

- Manipuler le Contenu : Changez le contenu d'un élément avec `innerHTML`, ou modifiez les attributs avec `setAttribute`.
  
- Modifier le Style : Dynamiquement, changez le style d'un élément en utilisant `style.property` (par exemple, `element.style.color`).
  
- Ajouter/Supprimer des Éléments : Créez de nouveaux éléments avec `createElement`, ajoutez-les à la page avec `appendChild`, ou retirez des éléments avec `removeChild`.
  
- Gérer les Événements : Réagir aux interactions de l'utilisateur, comme un clic de souris, en utilisant `addEventListener`.
  
### Exemples Pratiques
- Sélection d'Éléments :
```javascript
// Sélectionne un élément par son ID
let monElement = document.getElementById('monId');

// Sélectionne tous les éléments avec une classe spécifique
let elements = document.getElementsByClassName('maClasse');

// Sélectionne le premier élément correspondant à un sélecteur CSS
let premierElement = document.querySelector('.premier');
```
- Manipulation du Contenu :
```javascript   
// Change le contenu d'un élément
monElement.innerHTML = 'Nouveau Contenu';

// Modifie un attribut
monElement.setAttribute('src', 'nouveau-src.jpg');
```
- Modifier le Style :
```javascript
// Change la couleur du texte
monElement.style.color = 'red';

// Modifie la taille de la police
monElement.style.fontSize = '18px';
```
- Ajouter/Supprimer des Éléments :
```javascript
// Crée un nouvel élément
let nouvelElement = document.createElement('div');

// Ajoute l'élément à la page
document.body.appendChild(nouvelElement);

// Supprime un élément
document.body.removeChild(monElement);
```
- Gérer les Événements :
```javascript
// Ajoute un gestionnaire de clic
monElement.addEventListener('click', function() {
    alert('Clic effectué !');
});
```

### Exercices Pratiques : Manipulation du DOM
Maintenant que vous avez une idée de ce qu'est le DOM et de ce qu'il peut faire, il est temps de mettre vos connaissances en pratique ! Voici quelques exercices pour vous aider à vous familiariser avec la manipulation du DOM avec JavaScript.

Pour cela, vous pouvez utiliser le fichier `index.html` fourni dans ce dossier. Vous pouvez également créer votre propre fichier HTML et l'utiliser à la place. Pendant que vous travaillez sur ces exercices, n'hésitez pas à consulter la documentation sur le DOM pour vous aider : 
- Document Object Model (DOM) | MDN : https://developer.mozilla.org/fr/docs/Web/API/Document_Object_Model

Vous devez compléter les exercices dans l'ordre et dans un fichier javascript séparé nommé `script.js`.

Commençons ! 🚀

###### Exercice 1: Modifier le Texte
Sélectionnez un élément de votre choix et changez son texte.

###### Exercice 2: Styler Dynamiquement
Lorsqu'un utilisateur clique sur un bouton, changez la couleur du texte d'un paragraphe.

###### Exercice 3: Ajouter des Éléments
Créez un formulaire avec JavaScript et ajoutez-le à la page.

###### Exercice 4: Supprimer un Élément
Supprimez un élément lorsque l'utilisateur double-clique dessus.

###### Exercice 5: Gérer les Événements
Créez une liste d'éléments. Lorsqu'un élément est survolé, changez son fond en une couleur différente.

Amusez-vous bien en pratiquant ces exercices ! N'oubliez pas, la manipulation du DOM deviendra rapidement une seconde nature pour vous. 🚀💻✨