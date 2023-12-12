<!-- On vérifie si un message d'erreur est passé dans l'URL -->
<?php if (isset($_GET['error'])) { ?>
    <!-- Si un message d'erreur est passé dans l'URL, on l'affiche -->
    <div class="alert alert-danger" role="alert">
        <?php echo $_GET['error']; ?>
    </div>
<?php } ?>