<!-- form register qui est géré  -->
<form action="server/_handleForm.php" method="post">
    <!-- On inclut le fichier errors.php qui contient le code HTML pour afficher les messages d'erreur -->
    <?php include_once 'layouts/errors.php'; ?>
    <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input type="email" name="email" class="form-control" id="email" placeholder="name@example.com">
    </div>
    <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input type="password" name="password" class="form-control" id="password">
    </div>
    <div class="mb-3">
        <!-- On nomme le bouton "login" pour indiquer au serveur que c'est 
        // le formulaire d'authentification qui est soumis -->
        <button type="submit" name="login" class="btn btn-dark btn-sm">Login</button>
    </div>
</form>