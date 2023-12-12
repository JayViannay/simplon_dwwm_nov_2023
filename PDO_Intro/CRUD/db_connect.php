<?php
// Connexion à la base de données
// TODO: Modifier les paramètres de connexion
// MAMP: host=localhost:8889, dbname=crud, user=root, pass=root
// WAMP: host=localhost, dbname=crud, user=root, pass=''
// LAMP: host=localhost, dbname=crud, user=root, pass='ton_mot_de_passe'
$db = null;

try {
    $db = new PDO('mysql:host=localhost:8889;dbname=crud', 'root', 'root');
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $db->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
} catch (PDOException $e) {
    echo 'Erreur de connexion : ' . $e->getMessage();
}