### Premiers pas avec Git et Github

#### 1. Créer un compte Github ✅
#### 2. Personnaliser son profil et son compte ✅
#### 3. Installer Git sur son ordinateur ✅

#### 4. Héberger un projet sur Github

Il existe plusieurs façons d'héberger un projet sur Github. <br>
Nous allons voir ici 2 façons de faire.

##### 4.1. Cas 1 : J'ai déjà un projet sur mon ordinateur et je veux l'héberger sur Github :

Mise en pratique : <br>

- Sur Github, créez un nouveau dépôt (repository) en cliquant sur le bouton vert "New" en haut à droite de la page. <br>
- Donnez un nom à votre dépôt et cliquez sur "Create repository".<br>
- Ne cochez aucune case.<br>
- Cliquez sur le bouton vert "Create repository".<br>

Vous arrivez sur la page de votre dépôt. <br>
Vous pouvez voir que Github vous propose plusieurs façons de mettre d'héberger votre code. <br>
Nous allons voir ici la méthode "…or push an existing repository from the command line". <br>
Vous pouvez laisser la fenêtre ouverte, nous allons revenir dessus plus tard. <br>

- Ouvrez un terminal et placez-vous dans le dossier du projet que vous souhaitez héberger sur Github.<br>
- Ajoutez un fichier README.md à votre projet, si vous ne l'avez pas encore créé. (Vous pouvez le faire directement dans Visual Studio Code).<br>
- Depuis votre terminal et toujours à la racine du projet, Initialisez le dépôt Git en executant la commande suivante : `git init`<br>
- Faites un `git status`, vous devriez voir les dossiers/fichiers qui ne sont pas encore suivis par Git s'afficher en rouge.<br>
- Ajoutez tous les fichiers/dossiers à l'index de Git en executant la commande suivante : `git add .`<br>
- Faites un `git status`, vous devriez voir les dossiers/fichiers qui sont suivis par Git s'afficher en vert.<br>
- Faites un premier commit en executant la commande suivante : `git commit -m "Mon premier commit"`<br>
- Faites un `git status`, vous devriez voir le message suivant s'afficher : "nothing to commit, working tree clean".<br>
- Revenez sur la page de votre dépôt sur Github.<br>
- Copiez les commandes qui vous est proposée dans la fenêtre "…or push an existing repository from the command line".<br>
- Revenez dans votre terminal et collez les commandes.<br>
- Faites un `git status`, vous devriez voir le message suivant s'afficher : "nothing to commit, working tree clean".<br>
- Revenez sur la page de votre dépôt sur Github et rechargez la page.<br>
- Vous devriez voir votre projet s'afficher.<br>

##### 4.2. Cas 2 : Je veux créer un nouveau projet sur Github et le cloner sur mon ordinateur :

Mise en pratique : <br>

La seconde méthode est plus simple que la première. <br>
Elle consiste à créer un nouveau projet sur Github et à le cloner sur son ordinateur. <br>
C'est la méthode que nous allons voir ici. <br>

- Sur Github, créez un nouveau dépôt (repository) en cliquant sur le bouton vert "New" en haut à droite de la page. <br>
- Donnez un nom à votre dépôt et cliquez sur "Create repository".<br>
- Cochez la case "Initialize this repository with a README".<br>
- Cliquez sur le bouton vert "Create repository".<br>
- Vous arrivez sur la page de votre dépôt. <br>
- Cliquez sur le bouton vert "Code" et copiez l'URL qui vous est proposée.<br>
- Ouvrez un terminal et placez-vous dans le dossier de travail où vous souhaitez cloner votre projet. Il n'est pas nécessaire de créer un dossier, mettez vou ssimplement là ou vous voulez placer le dossier de votre projet <br>
- Clonez le projet en executant la commande suivante : `git clone URL` (remplacez URL par l'URL que vous avez copiée).<br>
- Rentrez dans le dossier du projet en executant la commande suivante : `cd nom_du_projet` (remplacez nom_du_projet par un autre nom de projet si vous le souhaitez).<br>
- Exécutez la commande suivante : `git status`, vous devriez voir le message suivant s'afficher : "nothing to commit, working tree clean".<br>
- Ouvrez le dossier du projet dans Visual Studio Code.<br>
- Créez vos fichiers et dossiers.<br>
- Faites un `git status`, vous devriez voir les dossiers/fichiers qui ne sont pas encore suivis par Git s'afficher en rouge.<br>
- Ajoutez tous les fichiers/dossiers à l'index de Git en executant la commande suivante : `git add .`<br>
- Faites un `git status`, vous devriez voir les dossiers/fichiers qui sont suivis par Git s'afficher en vert.<br>
- Faites un premier commit en executant la commande suivante : `git commit -m "Mon premier commit"`<br>
- Faites un `git status`, vous devriez voir le message suivant s'afficher : "nothing to commit, working tree clean".<br>
- Faites un `git push`<br>
- Revenez sur la page de votre dépôt sur Github et rechargez la page.<br>
- Vous devriez voir votre projet s'afficher.<br>

Remarques : <br>
Les dossiers vides ne sont pas suivis par Git. Même si vous les ajoutez à l'index, ils ne seront pas pris en compte lors du commit. <br>
Pour contourner ce problème, vous pouvez créer un fichier nommé ".gitkeep" dans le dossier vide que vous souhaitez ajouter à l'index git de votre projet. <br>
Le fichier ".gitkeep" peut être vide, il ne sert qu'à indiquer à Git de suivre le dossier. <br>
