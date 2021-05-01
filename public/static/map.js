import API from './api.js'

const w = 600;
const h = 600;

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1)
}

const svg = d3.select("div#map").append("svg").style("background-color","#c9e8fd")
    .attr("viewBox", "0 0 " + w + " " + h)
    .classed("svg-content", true);

const projection = d3.geoMercator().translate([w/2, h/2]).scale(2200).center([2.454071, 46.279229]);
const path = d3.geoPath().projection(projection);


// load data
const depmap = d3.json("./static/data.json");
const cities = await API.getVilles();

Promise.all([depmap, cities]).then(function(values) {

    function parseCities() {
        const arr = []
        for (const [k, v] of Object.entries(values[1])) {
            arr.push({city: k, Latitude: v.Latitude, Longitude:v.Longitude})
        }
        values[1] = arr
    }
    parseCities()

    document.getVilleCoord = function (villename) {
        for (const ville of values[1]) {
            if (ville.city === villename.toLowerCase()) {
                return [ville.Longitude, ville.Latitude]
            }
        }
    }


    // draw map
    svg.selectAll("path")
        .data(values[0].features)
        .enter()
        .append("path")
        .attr("class","continent")
        .attr("d", path);

    // draw points
    svg.selectAll("circle")
        .data(values[1])
        .enter()
        .append("circle")
        .attr("class","circles")
        .attr("cx", function(d) {return projection([d.Longitude, d.Latitude])[0];})
        .attr("cy", function(d) {return projection([d.Longitude, d.Latitude])[1];})
        .attr("r", "3px");


    // add labels
    svg.selectAll("text")
        .data(values[1])
        .enter()
        .append("text")
        .text(function(d) {
            return d.city.capitalize();
        })
        .attr("x", function(d) {return projection([d.Longitude, d.Latitude])[0] + 5;})
        .attr("y", function(d) {return projection([d.Longitude, d.Latitude])[1] + 15;})
        .attr("class","labels");

    navigator.geolocation.getCurrentPosition(function(position) {

        // draw points
        svg
            .append("circle")
            .attr("cx", function(d) {return projection([position.coords.longitude, position.coords.latitude])[0];})
            .attr("cy", function(d) {return projection([position.coords.longitude, position.coords.latitude])[1];})
            .attr("r", "3px")
            .attr("fill", "red");
        svg
            .append("text")
            .text(function(d) {
                return "Vous êtes ici";
            })
            .attr("x", function(d) {return projection([position.coords.longitude, position.coords.latitude])[0] + 5;})
            .attr("y", function(d) {return projection([position.coords.longitude, position.coords.latitude])[1] - 5;})
            .attr("class","labels");
    });

    document.resetLine = function () {
        svg.selectAll('line').remove()
    }

    document.drawnLine = function (loc1, loc2) {

        svg
            .append("line")
            .attr("x1", projection(loc1)[0])
            .attr("y1", projection(loc1)[1])
            .attr("x2", projection(loc2)[0])
            .attr("y2", projection(loc2)[1])
            .attr("stroke-width", 3)
            .attr("stroke", "black");


    };


});