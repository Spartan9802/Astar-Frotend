<?php include_once('../head.php') ?>
    <div id="app">
        <div class="content">
            <form id="loginForm" action="/" method="post">
                <h1>Formulaire de Connexion</h1>
                <label for="username">
                    Nom d'utilisateur (admin)
                    <input type="text" name="username" required>
                </label>

                <label for="password">
                    Mot de passe (admin)
                    <input type="password" name="password" required>
                </label>

                <input type="submit" value="Se Connecter">
            </form>
        </div>
    </div>
    <script src="static/login.js" type="module"></script>
<?php include_once('../footer.php') ?>