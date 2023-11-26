### Adopter de bonnes pratiques de travail avec Git et Github

#### 1. Créer un dépôt Github ✅

#### 2. Cloner un dépôt Github ✅

#### 3. Créer une branche :

Pour l'instant, le projet dans lequel tu travailles est sur la branche `main`. <br>
C'est la branche principale de ton projet. <br>
Ce n'est pas une bonne pratique de travailler directement sur la branche `main`. <br>
Il est préférable de créer une branche pour chaque nouvelle fonctionnalité que tu veux ajouter à ton projet. <br>

### Mise en pratique : <br>

- Ouvre le dossier de ton projet dans Visual Studio Code.
- Ouvre un terminal à la racine du projet.
- Crée une nouvelle branche en executant la commande suivante : `git checkout -b nom_de_la_branche` (remplacez nom_de_la_branche par le nom de la branche que tu souhaites créer). Par exemple : `git checkout -b ajout_formulaire_contact`.
- Fais un `git status`, tu devrais voir le message suivant s'afficher : "nothing to commit, working tree clean".
- Fais un `git branch`, tu devrais voir la branche que vous venez de créer s'afficher en vert.
- Fais un `git log`, tu devrais voir les commits que vous avez fait sur la branche `main` s'afficher.
- Tu peux maintenant travailler sur ton projet en toute sécurité sur cette nouvelle branche sans risquer de modifier la branche `main`.
  
#### 4. Faire un commit :

Maintenant que tu as créé un nouvelle branche et avancé sur ta nouvelle fonctionnalité, il est temps de faire un commit. <br>
Un commit est une sauvegarde de ton travail. <br>
Il est préférable de faire un commit à chaque fois que tu as terminé une tâche. <br>
Par exemple, si tu as créé un formulaire de contact, tu peux faire un commit à chaque fois que tu as terminé une partie du formulaire. <br>
Cela te permettra de revenir à un état antérieur de ton projet si tu as fait une erreur. <br>

### Mise en pratique : <br>

- Ouvre le dossier de ton projet dans Visual Studio Code.
- Ouvre un terminal à la racine du projet.
- Fais un `git status`, tu devrais voir les dossiers/fichiers qui ne sont pas encore suivis/en cours de modification par Git s'afficher en rouge.
- Fais un `git add <NOM_DE_FICHIER|DOSSIER>` pour ajouter les fichiers/dossiers que tu as modifié/ajouté à l'index de Git. Fais bien attention à ne pas ajouter les fichiers/dossiers que tu ne veux pas ajouter à l'index de Git.
- Fais un `git status`, tu devrais voir les dossiers/fichiers qui sont suivis par Git s'afficher en vert.
- Fais un `git commit -m "Mon message de commit"` pour faire un commit de ton travail. Remplace "Mon message de commit" par un message qui décrit le travail que tu as fait. Par exemple : `git commit -m "Ajout du formulaire de contact"`.
- Fais un `git status`, tu devrais voir le message suivant s'afficher : "nothing to commit, working tree clean".
- Fais un `git log`, tu devrais voir le commit que tu viens de faire s'afficher.
- Tu peux maintenant continuer à travailler sur ton projet et faire un nouveau commit à chaque fois que tu as terminé une tâche.

#### 5. Pousser mes derniers commit sur Github :

Maintenant que tu as fait un/plusieurs commit(s), il est temps de les pousser sur Github. <br>
Cela permettra de sauvegarder ton travail sur Github et de pouvoir le récupérer sur un autre ordinateur si tu en as besoin. <br>
Cela signifie aussi que pour l'instant, tout ce que tu as fait en local sur ton ordinateur n'est pas encore sur Github. <br>
Il faut donc pousser tes derniers commit sur Github. <br>

### Mise en pratique : <br>

- Ouvre le dossier de ton projet dans Visual Studio Code.
- Ouvre un terminal à la racine du projet.
- Fais un `git status`, tu devrais voir le message suivant s'afficher : "nothing to commit, working tree clean". 
  (<em>Si ce n'est pas le cas: reviens à l'étape 4 et fais un commit de ton travail</em>).
- Fais un `git push origin nom_de_ta_branche_actuelle` pour pousser tes derniers commit sur Github. Remplace nom_de_la_branche_actuelle par le nom de la branche sur laquelle tu travaille en ce moment (pour vérifier `git branch`). Par exemple : `git push origin ajout_formulaire_contact`.
- Ton code est maintenant sur Github. Tu peux vérifier en allant sur ton dépôt Github.
- Si tu veux maintenant mergé ta branche avec la branche `main`, continue à lire la suite. Sinon, tu peux continuer à travailler sur ta fonctionnalité actuelle.

#### 6. Merger ma branche avec la branche `main` :

Maintenant que tu as terminé ta fonctionnalité, il est temps de merger ta branche avec la branche `main`. <br>
C'est à dire que tu vas ajouter ton travail à la branche `main`. <br>
Ici encore, il y a plusieurs façons de faire et également des bonnes pratiques à respecter, même quand tu travailles seul sur un projet. <br>
Je vais te guider dans une de ces façons de faire. Tu es libre d'essayer d'explorer d'autres façons de faire ! <br>


### Mise en pratique : <br>

- Ouvre le dossier de ton projet dans Visual Studio Code.
- Ouvre un terminal à la racine du projet.
- Place toi sur ta branche de travail en executant la commande suivante : `git checkout nom_de_ta_branche`. Remplace nom_de_ta_branche par le nom de la branche sur laquelle tu travaille en ce moment (pour vérifier `git branch`). Par exemple : `git checkout ajout_formulaire_contact`.
- Fais un `git status`, tu devrais voir le message suivant s'afficher : "nothing to commit, working tree clean". Si ce n'est pas le cas, fais un commit de ton travail.
- Pour sécuriser ton travail avant de mergé avec la branche `main`, tu peux faire un `git branch backup_nom_de_ta_branche_actuelle` ce qui permettra de créer une copie de ta branche actuelle au cas où tu ferais une erreur lors du merge.
- Ensuite, execute la commande suivante : `git merge main`. Cela va merger ta branche actuelle avec la branche `main`. Si tu as des conflits, tu devras les résoudre avant de pouvoir continuer.
- Fais un `git status`, tu devrais voir le message suivant s'afficher : "nothing to commit, working tree clean". Si ce n'est pas le cas, fais un commit de ton travail.
- Teste ton projet pour vérifier que tout fonctionne correctement.
- Si tout fonctionne correctement, tu peux maintenant pousser ta branche sur Github en executant la commande suivante : `git push origin nom_de_ta_branche_actuelle`. Remplace nom_de_la_branche_actuelle par le nom de la branche sur laquelle tu travailles en ce moment (pour vérifier `git branch`). Par exemple : `git push origin ajout_formulaire_contact`.
- Ton code mergé avec la branche `main` est maintenant sur Github. Tu peux vérifier en allant sur ton dépôt Github, ton projet / nom_de_ta_branche_actuelle.
- Si tout fonctionne jusque là, reviens dans ton terminal : tu peux maintenant mettre à jour ta branche `main` en te déplacant sur la branche `main`, éxecute la commande suivante : `git checkout main` puis merge ton travail avec la branche `main` en executant la commande suivante : `git merge nom_de_ta_branche_de_travaille_a_ajouter_sur_main`. 
- Vérifie à nouveau que tout fonctionne correctement.

Si tu rencontre des problèmes, n'hésite pas à me contacter sur Discord/en Direct. <br>

#### 7. Supprimer une branche :

Maintenant que tu as mergé ta branche avec la branche `main`, tu peux supprimer ta branche. <br>
Cela permettra de garder ton projet propre et de ne pas avoir trop de branches. <br>
Je parle notamment des branches qui apparaissent sur Github. En effet, si tu ne supprimes pas tes branches, elles resteront sur Github et en résultera une longue liste de branches obsolètes. <br>
Cela peut être déroutant pour les autres développeurs qui travaillent sur ton projet, ou pour toi-même si tu dois revenir sur ton projet après plusieurs mois. <br>
La bonne pratique est donc de supprimer les branches qui ne sont plus utiles. <br>

### Mise en pratique : <br>

- Ouvre Github dans ton navigateur, puis rend toi sur ton dépôt.
- Clique sur le bouton `Branches` qui se trouve à côté du bouton `Code`.
- Clique sur le bouton `Delete branch` qui se trouve à côté de la branche que tu souhaites supprimer.   
- Clique sur le bouton `Delete branch` pour confirmer la suppression de la branche.
- Ta branche est maintenant supprimée de Github. Tu peux vérifier en allant sur ton dépôt Github.

Astuces : <br>
Les branches distantes (sur Github) que tu viens de supprimer sont toujours présentes en local sur ton ordinateur. <br>
Si tu souhaites aussi les supprimer en local tu peux éxecuter la commande suivante : `git branch -d nom_de_ta_branche`. Remplace nom_de_ta_branche par le nom de la branche que tu souhaites supprimer. Par exemple : `git branch -d ajout_formulaire_contact`. <br>
Supprimer ses branches en local n'est pas une obligation, surtout si tu as besoin de revenir sur une branche pour récupérer du code pendant cette phase d'apprentissage, mais c'est une bonne pratique en général. <br>

Pour supprimer une branche locale, tu peux utiliser la commande suivante : `git branch -D nom_de_ta_branche`. Remplace nom_de_ta_branche par le nom de la branche que tu souhaites supprimer. Par exemple : `git branch -D ajout_formulaire_contact`. <br>