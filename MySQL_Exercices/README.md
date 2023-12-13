## Introduction Base de Données MySQL

### 1. Installation de MySQL ✅
### 2. Création de la base de données 

- Dans votre terminal, connectez-vous à votre serveur MySQL (Rappel : `mysql -u root -p` pour les utilisateurs Linux, mdp initialisé lors de l'installation, accès direct au terminal mysql pour les utilisateurs Windows depuis WampServer, pas de mdp par défault, `/Applications/MAMP/Library/bin/mysql -u root -p` pour les utilisateurs Mac, mdp par défault : root)

- Créez une base de données nommée `simplon_db` avec la commande `CREATE DATABASE simplon_db;`

- Sélectionnez la base de données avec la commande `USE simplon_db;`

### 3. Création de table
- Créez une table nommée `apprenant` avec la commande `CREATE TABLE apprenant (id INT PRIMARY KEY AUTO_INCREMENT, firstname VARCHAR(255), lastname VARCHAR(255), age INT, ville VARCHAR(255));`

- Créez une table nommée `formation` avec la commande `CREATE TABLE formation (id INT PRIMARY KEY AUTO_INCREMENT, name VARCHAR(255), description TEXT, date_start DATE, date_end DATE);` 

- Créez une table nommée `apprenant_formation` avec la commande `CREATE TABLE apprenant_formation (id INT PRIMARY KEY AUTO_INCREMENT, id_apprenant INT, id_formation INT, FOREIGN KEY (id_apprenant) REFERENCES apprenant(id), FOREIGN KEY (id_formation) REFERENCES formation(id));`

- Créez une table nommée `competence` avec les champs : id, name VARCHAR(255), description TEXT

### 4. Vérification de la création des tables
- Exécutez la commande `SHOW TABLES;` pour vérifier que les tables ont bien été créées.
- Exécutez la commande `DESCRIBE apprenant;` pour vérifier que les champs de la table `apprenant` ont bien été créés.
- Exécutez la commande `DESCRIBE formation;` pour vérifier que les champs de la table `formation` ont bien été créés.
- Exécutez la commande `DESCRIBE apprenant_formation;` pour vérifier que les champs de la table `apprenant_formation` ont bien été créés.
- Exécutez la commande `DESCRIBE competence;` pour vérifier que les champs de la table `competence` ont bien été créés.

### 5. Insertion de données
- Insérez des données dans la table `apprenant` avec la commande `INSERT INTO apprenant (firstname, lastname, age, ville) VALUES ('John', 'Doe', 25, 'Paris'), ('Jane', 'Doe', 23, 'Lyon'), ('Jean', 'Dupont', 30, 'Marseille'), ('Jeanne', 'Dupont', 28, 'Lille');`

- Insérez des données dans la table `formation` avec la commande `INSERT INTO formation (name, description, date_start, date_end) VALUES ('Fullstack JS', 'Formation Fullstack JS', '2020-01-01', '2020-06-30'), ('Data IA', 'Formation Data IA', '2020-01-01', '2020-06-30');`

- Insérez des données dans la table `apprenant_formation` avec la commande `INSERT INTO apprenant_formation (id_apprenant, id_formation) VALUES (1, 1), (2, 1), (3, 1), (4, 1), (1, 2), (2, 2), (3, 2);`

- Insérez des données la table `competence` par exemple : ('HTML', 'HyperText Markup Language'), ('CSS', 'Cascading Style Sheets'), ...

### 6. Vérification de l'insertion des données
- Vérifiez que les données ont bien été insérées avec la commande `SELECT * FROM apprenant;`
- Vérifiez que les données ont bien été insérées avec la commande `SELECT * FROM formation;`
- Vérifiez que les données ont bien été insérées avec la commande `SELECT * FROM apprenant_formation;`

### 7. Suppression de données
- Supprimez une ligne de la table `competence` avec la commande `DELETE FROM competence WHERE id = 1;`

- Vérifiez que la ligne a bien été supprimée avec la commande `SELECT * FROM competence;`

### 8. Modification de données
- Modifiez une ligne de la table `competence` avec la commande `UPDATE competence SET name = 'HTML5', description = 'HyperText Markup Language 5' WHERE id = 1;`

- Vérifiez que la ligne a bien été modifiée avec la commande `SELECT * FROM competence WHERE id = 1;`
  
### 9. Sélection de données
- Affichez tous les apprenants avec la commande `SELECT * FROM apprenant;`

- Affichez tous les apprenants de la ville de Paris avec la commande `SELECT * FROM apprenant WHERE ville = 'Paris';`

- Affichez tous les apprenants dont le nom de famille est 'Doe' avec la commande `SELECT * FROM apprenant WHERE lastname = 'Doe';`

- Affichez tous les apprenants dont le nom de famille est 'Doe' et qui ont entre 20 et 30 ans avec la commande `SELECT * FROM apprenant WHERE lastname = 'Doe' AND age BETWEEN 20 AND 30;`

- Affichez tous les apprenants dont le nom de famille est 'Doe' ou qui ont entre 20 et 30 ans avec la commande `SELECT * FROM apprenant WHERE lastname = 'Doe' OR age BETWEEN 20 AND 30;`

- Affichez tous les apprenants dont le nom de famille est 'Doe' ou qui ont entre 20 et 30 ans et qui habitent à Paris avec la commande `SELECT * FROM apprenant WHERE (lastname = 'Doe' OR age BETWEEN 20 AND 30) AND ville = 'Paris';`

### 10. - Exercez-vous aux commandes SQL en reproduisant les commandes et les requêtes ci-dessus dans une nouvelle base de données nommée `simplon_db_2` et les tables staff et formation (choisissez les champs que vous souhaitez). Bon chance ! :tada: :muscle: