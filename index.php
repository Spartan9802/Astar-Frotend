<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="utf-8">
    <title>ProjetLPI</title>
    <script src="https://d3js.org/d3.v5.min.js"></script>
    <link rel="stylesheet" type="text/css" href="style.css">
    <style></style>
</head>
    <body>
        <div id="sidebar" class="column">
            <form id="searchForm" action="/" method="get">
                <h2>Calcul d'itinéraire</h2>
                <input required name="startCity" type="text" placeholder="Ville de départ...">
                <input required name="goalCity" type="text" placeholder="Ville de destination...">
                <input type="submit" value="Rechercher">
            </form>
            <div id="route_list">

            </div>
        </div>
        <div id="right" class="column">
            <div id="map" class="svg-container"></div>
        </div>

        <script src="map.js"></script>
        <script src="form.js"></script>
    </body>
</html>