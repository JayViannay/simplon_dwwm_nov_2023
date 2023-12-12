<?php
// Le fonction session_start() permet de démarrer une session ou de la reprendre si elle existe déjà.
// Elle permet de créer un cookie de session sur le navigateur de l'utilisateur, ce cookie contient un 
// identifiant unique qui permet de récupérer les variables de session sur le serveur.
// La fonction session_start() doit être appelée avant tout code HTML et php sur la page.
session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <title>Profile</title>
</head>
<body>
    <!-- On inclut le header qui contient la barre de navigation sur toutes les pages -->
    <!-- On utilise la fonction include_once() pour inclure le fichier une seule fois -->
    <!-- PHP nous permet ici de réutiliser du code et de ne pas avoir à le réécrire sur chaque page -->
    <?php include_once 'layouts/header.php'; ?>

    <!-- On vérifie si un utilisateur est connecté ou non grâce aux informations de la session -->
    <?php if (isset($_SESSION['user'])) { ?>
        <!-- Si un utilisateur est connecté, on affiche un message de bienvenue et un bouton de déconnexion -->
        <section id="profile">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h1>Profile</h1>
                        <p>You are logged in as <?php echo $_SESSION['user']['firstname']; ?></p>
                        <a href="logout.php" class="btn btn-dark btn-sm">Logout</a>
                    </div>
                </div>
            </div>
        </section>
    <!-- Si aucun utilisateur n'est connecté, on redirige vers la page de connexion -->
    <?php } else { header('Location: /login.php'); } ?>
    
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
</body>
</html>