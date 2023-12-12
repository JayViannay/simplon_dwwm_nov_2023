<?php
require_once 'db_connect.php';
// TODO: Gérer la soumission du formulaire (GET)
// TODO: Insérer l'article dans la base de données
// TODO: Rediriger l'utilisateur vers la page show_one.php?id=XX
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <title>Crud - Create One</title>
</head>
<body>
    <?php require_once 'navbar.php'; ?>
    <div class="container">
        <h1>ATELIER CRUD</h1>
        <h2>Create One</h2>
        <section id="createOne">
            <form>
                <div class="mb-3">
                    <label for="title" class="form-label">Title</label>
                    <input type="text" name="title" class="form-control" id="title">
                </div>
                <div class="mb-3">
                    <label for="image" class="form-label">Image URL</label>
                    <input type="text" name="image" class="form-control" id="image">
                </div>
                <div class="mb-3">
                    <label for="content" class="form-label">Content</label>
                    <textarea type="text" name="content" class="form-control" id="content"></textarea>
                </div>
                <div class="mb-3">
                    <button type="submit" name="create_article" class="btn btn-dark btn-sm">Create Article</button>
                </div>
            </form>
        </section>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
</body>
</html>