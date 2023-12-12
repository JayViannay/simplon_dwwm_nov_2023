<?php
require_once 'db_connect.php';
$articles = [];
// TODO: Récupérer tous les articles de la table `article` et les stocker dans la variable $articles
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <title>Crud - List All</title>
</head>
<body>
    <?php require_once 'navbar.php'; ?>
    <div class="container">
        <h1>ATELIER CRUD</h1>
        <h2>List All</h2>
        <!-- TODO: Afficher tous les articles de la variable $articles, utiliser la card pour chaque article -->
        <section id="listAll">
            <div class="row">
            <?php foreach ($articles as $article) { ?>
                <div class="col-lg-3 col-sm-12">
                    <div class="card">
                        <img src="<?php echo 'https://placehold.co/600x400'; ?>" class="card-img-top" alt="une description">
                        <div class="card-body">
                            <h5 class="card-title"><?php echo 'Card Title'; ?></h5>
                            <p class="card-text"><?php echo 'Card Long Text'; ?></p>
                            <a href="show_one.php?id=<?php ?>" class="btn btn-primary">See more</a>
                        </div>
                    </div>
                </div>
            <?php } ?>
            </div>
        </section>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
</body>
</html>