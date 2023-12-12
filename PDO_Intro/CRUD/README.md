## CRUD

CRUD est un acronyme pour Create, Read, Update, Delete. Il s'agit des 4 opérations de base que l'on peut effectuer sur une base de données.

### Create

Pour créer une nouvelle entrée dans une table, on utilise la requête SQL suivante:

```sql
INSERT INTO table (colonne1, colonne2, colonne3) VALUES (valeur1, valeur2, valeur3);
```

### Read

Pour lire une entrée dans une table, on utilise la requête SQL suivante:

```sql
SELECT colonne1, colonne2, colonne3 FROM table WHERE colonne1 = valeur1;
```

### Update

Pour mettre à jour une entrée dans une table, on utilise la requête SQL suivante:

```sql
UPDATE table SET colonne1 = valeur1, colonne2 = valeur2, colonne3 = valeur3 WHERE colonne1 = valeur1;
```

### Delete

Pour supprimer une entrée dans une table, on utilise la requête SQL suivante:

```sql
DELETE FROM table WHERE colonne1 = valeur1;
```

## Composants d'accès aux données

Les composants d'accès aux données sont des composants qui permettent de manipuler les données dans une base de données. Ils sont généralement fournis par le SGBD (Système de Gestion de Base de Données) que l'on utilise.

### PDO

PDO est un composant d'accès aux données qui permet de manipuler les données dans une base de données. Il est fourni par PHP.


## Connexion à une base de données avec PDO

Pour se connecter à une base de données avec PDO, on utilise la classe PDO. On lui passe en paramètre le DSN (Data Source Name) de la base de données, le nom d'utilisateur et le mot de passe.

```php
$pdo = new PDO('mysql:host=localhost;dbname=nom_de_la_base_de_donnees', 'nom_utilisateur', 'mot_de_passe');
```

## Exécution d'une requête SQL avec PDO

Pour exécuter une requête SQL avec PDO, on utilise la méthode query() de l'objet PDO. On lui passe en paramètre la requête SQL à exécuter.

```php
$pdo->query('SELECT * FROM table');
```

## Récupération des résultats d'une requête SQL avec PDO

Pour récupérer les résultats d'une requête SQL avec PDO, on utilise la méthode fetch() de l'objet PDOStatement retourné par la méthode query() de l'objet PDO.

```php
$pdoStatement = $pdo->query('SELECT * FROM table');
$pdoStatement->fetch();
```

## Récupération des résultats d'une requête SQL avec PDO sous forme de tableau

Pour récupérer les résultats d'une requête SQL avec PDO sous forme de tableau, on utilise la méthode fetchAll() de l'objet PDOStatement retourné par la méthode query() de l'objet PDO.

```php
$pdoStatement = $pdo->query('SELECT * FROM table');
$pdoStatement->fetchAll();
```

## Récupération des résultats d'une requête SQL avec PDO sous forme d'objet

Pour récupérer les résultats d'une requête SQL avec PDO sous forme d'objet, on utilise la méthode fetchObject() de l'objet PDOStatement retourné par la méthode query() de l'objet PDO.

```php
$pdoStatement = $pdo->query('SELECT * FROM table');
$pdoStatement->fetchObject();
```

## Récupération des résultats d'une requête SQL avec PDO sous forme de tableau d'objets

Pour récupérer les résultats d'une requête SQL avec PDO sous forme de tableau d'objets, on utilise la méthode fetchAll() de l'objet PDOStatement retourné par la méthode query() de l'objet PDO.

```php
$pdoStatement = $pdo->query('SELECT * FROM table');
$pdoStatement->fetchAll(PDO::FETCH_OBJ);
```

Selon le mode de récupération des résultats, on peut accéder aux données de différentes manières.

### Accès aux données avec fetch()

```php
$pdoStatement = $pdo->query('SELECT * FROM table');
$row = $pdoStatement->fetch();
echo $row['colonne1'];
echo $row['colonne2'];
echo $row['colonne3'];
```

### Accès aux données avec fetchAll()

```php
$pdoStatement = $pdo->query('SELECT * FROM table');
$rows = $pdoStatement->fetchAll();
foreach ($rows as $row) {
    echo $row['colonne1'];
    echo $row['colonne2'];
    echo $row['colonne3'];
}
```

### Accès aux données avec fetchObject()

```php
$pdoStatement = $pdo->query('SELECT * FROM table');
$row = $pdoStatement->fetchObject();
echo $row->colonne1;
echo $row->colonne2;
echo $row->colonne3;
```

### Accès aux données avec fetchAll() et PDO::FETCH_OBJ

```php
$pdoStatement = $pdo->query('SELECT * FROM table');
$rows = $pdoStatement->fetchAll(PDO::FETCH_OBJ);
foreach ($rows as $row) {
    echo $row->colonne1;
    echo $row->colonne2;
    echo $row->colonne3;
}
```

### Accès aux données avec fetchAll() et PDO::FETCH_ASSOC

```php
$pdoStatement = $pdo->query('SELECT * FROM table');
$rows = $pdoStatement->fetchAll(PDO::FETCH_ASSOC);
foreach ($rows as $row) {
    echo $row['colonne1'];
    echo $row['colonne2'];
    echo $row['colonne3'];
}
```

## Exécution d'une requête SQL préparée avec PDO

Pour exécuter une requête SQL préparée avec PDO, on utilise la méthode prepare() de l'objet PDO. On lui passe en paramètre la requête SQL à exécuter.

```php
$pdoStatement = $pdo->prepare('SELECT * FROM table WHERE colonne1 = :valeur1');
```

## Exécution d'une requête SQL préparée avec PDO et passage de paramètres

Pour exécuter une requête SQL préparée avec PDO et passer des paramètres, on utilise la méthode bindValue() de l'objet PDOStatement retourné par la méthode prepare() de l'objet PDO. On lui passe en paramètre le nom du paramètre et sa valeur.

```php
$pdoStatement = $pdo->prepare('SELECT * FROM table WHERE colonne1 = :valeur1');
$pdoStatement->bindValue(':valeur1', 'valeur1');
```

## Exécution d'une requête SQL préparée avec PDO et exécution

Pour exécuter une requête SQL préparée avec PDO et l'exécuter, on utilise la méthode execute() de l'objet PDOStatement retourné par la méthode prepare() de l'objet PDO.

```php
$pdoStatement = $pdo->prepare('SELECT * FROM table WHERE colonne1 = :valeur1');
$pdoStatement->bindValue(':valeur1', 'valeur1');
$pdoStatement->execute();
```

### Exercices PDO/CRUD MySQL Atelier `exercices.md`