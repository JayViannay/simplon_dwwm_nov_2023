<h1>Create Account</h1>
<form action="server/_handleForm.php" method="post">
    <!-- On inclut le fichier errors.php qui contient le code HTML pour afficher les messages d'erreur -->
    <?php include_once 'layouts/errors.php'; ?>
    <div class="mb-3">
        <label for="firstname" class="form-label">Firstname</label>
        <input type="text" name="firstname" class="form-control" id="firstname">
    </div>
    <div class="mb-3">
        <label for="lastname" class="form-label">Lastname</label>
        <input type="text" name="lastname" class="form-control" id="lastname">
    </div>
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
        // le formulaire d'inscription qui est soumis -->
        <button type="submit" name="register" class="btn btn-dark btn-sm">Create Account</button>
    </div>
</form>