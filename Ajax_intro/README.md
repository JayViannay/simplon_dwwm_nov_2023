## Introduction Ajax

### Objectifs
- [ ] Comprendre le fonctionnement d'une requête Ajax
- [ ] Savoir mettre en place une requête Ajax en JavaScript natif

### Qu'est-ce qu'une requête Ajax ?
Ajax est une technique de développement web qui permet de mettre à jour une page web sans avoir à la recharger. Cela permet d'améliorer l'expérience utilisateur et de rendre les applications web plus rapides et plus interactives.

### Comment fonctionne une requête Ajax ?
Une requête Ajax est une requête HTTP qui est envoyée en arrière-plan. Cela signifie que l'utilisateur n'a pas besoin de recharger la page pour envoyer une requête au serveur. Le serveur renvoie ensuite une réponse au format JSON ou XML. Le JavaScript peut ensuite être utilisé pour mettre à jour la page web.

### Mise en place d'une requête Ajax en JavaScript natif
Pour mettre en place une requête Ajax en JS, nous utiliseront l'objet XMLHttpRequest. Cet objet permet d'envoyer des requêtes HTTP en JavaScript. Il est disponible dans tous les navigateurs modernes.

Pour créer une requête Ajax, nous pouvons utiliser la méthode native `fetch`.

```javascript
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(json => console.log(json))
```

### Exercices
- [ ] Créer une requête Ajax qui récupère les données des Post de l'API JSONPlaceholder (https://jsonplaceholder.typicode.com/posts)
- [ ] Afficher les données dans la console : 
  - [ ] Afficher le title de chaque Post
  - [ ] Afficher le body de chaque Post
- [ ] Afficher les données dans le HTML : 
  - [ ] Créer une liste HTML dans le fichier index.html
  - [ ] Pour chaque utilisateur, créer un élément de liste
  - [ ] Afficher le nom de chaque utilisateur dans l'élément de liste
  - [ ] Ajouter l'élément de liste à la liste HTML