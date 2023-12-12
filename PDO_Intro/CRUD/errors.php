<?php
$errors = [
    '404' => 'Page not found',
    '500' => 'Internal server error',
];
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <title>Crud - Error</title>
</head>
<body>
    <?php require_once 'navbar.php'; ?>
    <div class="container">
        <h1>ATELIER CRUD</h1>
        <h2>Error <?php echo $_GET['error']; ?></h2>
        <section id="error">
            <p>Message : <?php echo $errors[$_GET['error']]; ?></p>
            <a href="/">Return</a>
        </section>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
</body>
</html>