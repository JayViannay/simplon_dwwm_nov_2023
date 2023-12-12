<?php
// Le fonction session_start() permet de démarrer une session ou de la reprendre si elle existe déjà.
// Elle permet de créer un cookie de session sur le navigateur de l'utilisateur, ce cookie contient un 
// identifiant unique qui permet de récupérer les variables de session sur le serveur.
// La fonction session_start() doit être appelée avant tout code HTML et php sur la page.
// Même si on n'utilise pas de variables de session pour la deconnexion, 
// il faut appeler la fonction session_start() afin de récupérer la session pour pouvoir la détruire.
session_start();

// Pour la déconnexion, on détruit la session et on redirige vers la page d'accueil
session_destroy();
header('Location: /');