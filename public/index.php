<?php include_once('../head.php') ?>
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

        <script src="static/map.js" type="module"></script>
        <script src="static/form.js" type="module"></script>
<?php include_once('../footer.php') ?>