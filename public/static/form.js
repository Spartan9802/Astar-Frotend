import API from './api.js'

const form  = document.querySelector("#searchForm");
const startCity = form.elements["startCity"];
const endCity = form.elements["goalCity"];
const el = document.getElementById('route_list')

function createRouteList(data) {
    el.innerHTML = null;
    const elList = document.createElement('ul');

    for (const [key, value] of Object.entries(data.paths)) {
        const elLi = document.createElement('li')
        elLi.innerText = key + ' ' + value
        elList.append(elLi)
    }
    const elLi = document.createElement('li')
    elLi.innerText = data.minWeight
    elList.append(elLi)
    el.append(elList)

}

function drawnRoute(data) {
    document.resetLine()
    const paths = Object.keys(data.paths)
    for (let i = 1; i < paths.length; i++) {
        const loc1 = document.getVilleCoord(paths[i-1])
        const loc2 = document.getVilleCoord(paths[i])
        document.drawnLine(loc1, loc2)
    }
}


function error(error) {
    el.innerHTML = null;
    const elError = document.createElement('div');
    elError.classList.add('error');
    elError.innerText = error;
    el.append(elError)
}


form.addEventListener("submit", function(e){

    e.preventDefault();

    if ( startCity.value && endCity.value ) {
        API.getTrajet(startCity.value, endCity.value)
            .then(function (data) {
                if (data.error) {
                    error(data.error)
                    return
                }

                createRouteList(data)
                drawnRoute(data)

            })
            .catch(function(error) {
                console.log(error);
            });


    }

});