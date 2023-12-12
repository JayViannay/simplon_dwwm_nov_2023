## Crud PHP/PDO/MySQL Atelier

### [ ] 1. Créer une base de données `crud` avec une table `article` qui contient les champs suivants:
- id (int, primary key, auto increment)
- title (varchar 255)
- content (text)
- image (varchar 255)

```sql
CREATE DATABASE crud;
USE crud;

CREATE TABLE article (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255),
    content TEXT,
    image VARCHAR(255)
);
```

Insérer quelques articles dans la table `article`:

```sql
INSERT INTO article (title, content, image) VALUES
('Article 1', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.', 'https://picsum.photos/200/300'),
('Article 2', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.', 'https://picsum.photos/200/300'),
('Article 3', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.', 'https://picsum.photos/200/300'),
('Article 4', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.', 'https://picsum.photos/200/300'),
('Article 5', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.', 'https://picsum.photos/200/300');
```

### [ ] 2. Connectez-vous à la base de données `crud` avec PHP et PDO dans le fichier `db_connect.php`

### [ ] 3. Dans le fichier `index.php`, récupérez tous les articles de la table `article` et affichez-les dans dans le code HTML déjà préparé.

### [ ] 4. Dans le fichier `show_one.php`, récupérez un article de la table `article` en fonction de l'id passé dans l'URL et affichez-le dans dans le code HTML déjà préparé.

### [ ] 5. Dans le fichier `create.php`, gérez le formulaire qui permet de créer un nouvel article dans la table `article`.

### [ ] 6. Dans le fichier `update.php`, gérez le formulaire qui permet de modifier un article dans la table `article`.

### [ ] 7. Dans le fichier `delete.php`, gérez la suppression d'un article dans la table `article`.

### [ ] 8. BONUS / Améliorations possibles : 

- Ajouter une redirection vers la page `errors.php` si l'id passé dans l'URL n'existe pas dans la table `article`.
- Ajouter des messages d'erreurs dans les formulaires de création et de modification d'article.
- Ajouter un champ `date` dans la table `article` et afficher la date de création de l'article dans la page `show_one.php`.