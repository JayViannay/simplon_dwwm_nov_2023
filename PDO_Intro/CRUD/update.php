<?php
require_once 'db_connect.php';
// TODO: Récupérer l'id de l'article à modifier depuis l'URL
// TODO: Afficher les données de l'article dans le formulaire
// TODO: Gérer la soumission du formulaire (GET)
// TODO: Modifier l'article dans la base de données
// TODO: Rediriger l'utilisateur vers la page show_one.php?id=XX
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <title>Crud - Update One</title>
</head>
<body>
    <?php require_once 'navbar.php'; ?>
    <div class="container">
        <h1>ATELIER CRUD</h1>
        <h2>Update One</h2>
        <section id="updateOne">
            <form>
                <div class="mb-3">
                    <label for="title" class="form-label">Title</label>
                    <input type="text" name="title" class="form-control" id="title" value=<?php // TODO: ?>>
                </div>
                <div class="mb-3">
                    <label for="image" class="form-label">Image URL</label>
                    <input type="text" name="image" class="form-control" id="image" value=<?php // TODO: ?>>
                </div>
                <div class="mb-3">
                    <label for="content" class="form-label">Content</label>
                    <textarea type="text" name="content" class="form-control" id="content"><?php // TODO: ?></textarea>
                </div>
                <div class="mb-3">
                    <button type="submit" name="update_article" class="btn btn-dark btn-sm">Update Article</button>
                </div>
            </form>
        </section>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
</body>
</html>