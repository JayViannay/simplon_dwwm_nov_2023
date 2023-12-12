<?php
// Le fonction session_start() permet de démarrer une session ou de la reprendre si elle existe déjà.
// Elle permet de créer un cookie de session sur le navigateur de l'utilisateur, ce cookie contient un 
// identifiant unique qui permet de récupérer les variables de session sur le serveur.
// La fonction session_start() doit être appelée avant tout code HTML et php sur la page.
session_start();

// Pour se connecter à la base de données, on utilise l'extension PDO de PHP
// PDO signifie PHP Data Objects, c'est une extension qui permet d'accéder à une base de données
// PDO permet d'accéder à plusieurs types de bases de données (MySQL, PostgreSQL, Oracle, etc.), d'utiliser des requêtes préparées, 
// ce qui permet de se protéger des injections SQL
// Documentation de PDO : https://www.php.net/manual/fr/book.pdo.php
// Documentation des requêtes préparées : https://www.php.net/manual/fr/pdo.prepared-statements.php

// 1. On se connecte à la base de données
// On initialise la variable $db à null
$db = null;
// On essaie de se connecter à la base de données avec try/catch
// try/catch nous permet ici de gérer les erreurs qui peuvent survenir lors de la connexion à la base de données
// Documentation de try/catch : https://www.php.net/manual/fr/language.exceptions.php
// try correspond à la partie "essayer"
// catch correspond à la partie "attraper" pour gérer les erreurs
try {
    // On se connecte à la base de données avec PDO en utilisant les informations 
    // de connexion qui vous sont propres (hôte, nom de la base de données, nom d'utilisateur, mot de passe)
    $db = new PDO('mysql:host=localhost:8889;dbname=simplon_db', 'root', 'root');
    // On définit le mode d'erreur de PDO sur Exception (mode d'erreur le plus élevé)
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    // On définit le mode de récupération des données sur FETCH_ASSOC (fetch = chercher, assoc = associatif)
    // Cela permet de récupérer les données sous forme de tableau associatif
    $db->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
} catch (PDOException $e) {
    // On attrape les exceptions PDOException et on affiche le message d'erreur si une exception est lancée lors de la connexion à la base de données
    echo 'Erreur de connexion : ' . $e->getMessage();
}

// Si le formulaire d'inscription est soumis (si la méthode HTTP POST est utilisée et que le champ register est défini dans le formulaire)
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['register'])) {
    // On vérifie que tous les champs du formulaire sont remplis
    if (empty($_POST['firstname']) || empty($_POST['lastname']) || empty($_POST['email']) || empty($_POST['password'])) {
        // Si un champ n'est pas rempli, on redirige vers la page d'accueil avec un message d'erreur
        header('Location: /index.php?error=All fields are required');
        exit;
    }
    // On appelle la fonction htmlspecialchars() pour convertir les caractères spéciaux en entités HTML
    // Cela permet d'éviter les problèmes d'exécution de code HTML indésirable (XSS)
    // Documentation de htmlspecialchars : https://www.php.net/manual/fr/function.htmlspecialchars.php
    $firstname = htmlspecialchars($_POST['firstname']);
    $lastname = htmlspecialchars($_POST['lastname']);
    $email = htmlspecialchars($_POST['email']);
    $password = htmlspecialchars($_POST['password']);
    // On appelle la fonction password_hash() pour hasher le mot de passe (native) md5() ou sha1() sont déconseillés 
    $password = password_hash($_POST['password'], PASSWORD_DEFAULT);

    // On prépare la requête d'insertion dans la base de données
    $sql = "INSERT INTO student (firstname, lastname, email, password) VALUES (:firstname, :lastname, :email, :password)";
    // On prépare la requête à l'aide de la méthode prepare() de PDO
    $stmt = $pdo->prepare($sql);
    // On exécute la requête en passant les valeurs des variables à la méthode execute()
    $stmt->execute([
        ':firstname' => $firstname,
        ':lastname' => $lastname,
        ':email' => $email,
        ':password' => $password
    ]);
    // On redirige vers la page de connexion avec un message de succès
    header('Location: /login.php');
}
// Si le formulaire de connexion est soumis (si la méthode HTTP POST est utilisée et que le champ login est défini dans le formulaire)
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['login'])) {
    // On vérifie que tous les champs du formulaire sont remplis
    if (empty($_POST['email']) || empty($_POST['password'])) {
        // Si un champ n'est pas rempli, on redirige vers la page de connexion avec un message d'erreur
        header('Location: /login.php?error=All fields are required');
        exit;
    }
    // On appelle la fonction htmlspecialchars() pour convertir les caractères spéciaux en entités HTML
    // Cela permet d'éviter les problèmes d'exécution de code HTML indésirable (XSS)
    // Documentation de htmlspecialchars : https://www.php.net/manual/fr/function.htmlspecialchars.php
    $email = htmlspecialchars($_POST['email']);
    $password = htmlspecialchars($_POST['password']);

    // On prépare la requête de sélection dans la base de données pour récupérer l'utilisateur qui correspond à l'email saisi
    $sql = "SELECT * FROM student WHERE email = :email";
    // On prépare la requête à l'aide de la méthode prepare() de PDO
    $stmt = $pdo->prepare($sql);
    // On exécute la requête en passant les valeurs des variables à la méthode execute()
    $stmt->execute([
        ':email' => $email
    ]);
    // On récupère l'utilisateur qui correspond à l'email saisi
    $user = $stmt->fetch(PDO::FETCH_ASSOC);

    // On vérifie si l'utilisateur existe, si l'utilisateur existe, on vérifie si le mot de passe saisi 
    // correspond au mot de passe hashé dans la base de données
    // password_verify() permet de vérifier qu'un mot de passe correspond à un hachage (native)
    // Documentation de password_verify : https://www.php.net/manual/fr/function.password-verify.php
    if ($user) {
        if (password_verify($password, $user['password'])) {
            // Si le mot de passe correspond, on démarre une session et on enregistre l'utilisateur dans la session
            $_SESSION['user'] = $user;
            // On redirige vers la page du profil utilisateur
            header('Location: /profile.php');
        } else {
            // Si le mot de passe ne correspond pas, on redirige vers la page de connexion avec un message d'erreur
            header('Location: /login.php?error=Wrong password');
        }
    } else {
        // Si l'utilisateur n'existe pas, on redirige vers la page de connexion avec un message d'erreur
        header('Location: /login.php?error=Wrong email / User does not exist');
    }
}