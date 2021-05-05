<?php
    include_once(dirname(__DIR__,1).'/vendor/autoload.php');
    use ReallySimpleJWT\Token;

    $secretKey  = 'A@6?NAcYLa?!Y#os5aSCxXHB49r';

    if (isset($_COOKIE["access_token_cookie"])) {
        $token = $_COOKIE["access_token_cookie"];
        $result = Token::validate($token, $secretKey);
        if (!$result) {
            header('Location: /login.php', TRUE, 302);
            exit;
        }
    } else {
        header('Location: /login.php', TRUE, 302);
        exit;
    }

?>

<?php include_once('../head.php') ?>
    <div id="app">
        <div class="content">
            <table id="cities-list">
                <thead>
                    <th>Nom</th>
                    <th>Latitude</th>
                    <th>Longitude</th>
                    <th>Voisins</th>
                    <th>Actions</th>
                </thead>
                <tbody>

                </tbody>
            </table>
        </div>
    </div>
    <script src="static/admin.js" type="module"></script>
<?php include_once('../footer.php') ?>