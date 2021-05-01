

export default class API {

    static url = "http://127.0.0.1:5000"

    static getVilles() {
        return fetch(API.url + '/villes' )
            .then((resp) => resp.json())
            .catch(function(error) {
                console.log(error);
            });
    }

    static getVille(name) {
        return fetch(API.url + '/' + name )
            .then((resp) => resp.json())
            .catch(function(error) {
                console.log(error);
            });
    }

    static getTrajet(start, end) {
       return fetch(API.url + '/trajet/' + start + '/' + end)
            .then((resp) => resp.json())
            .catch(function(error) {
                console.log(error);
            });
    }

    static addVille(name, longitude, latitude, voisins={}) {

    }

    static removeVille() {

    }

    static updateVille() {

    }


}