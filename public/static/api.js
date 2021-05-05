import Cookie from './cookie.js'

export default class API {

    static url = "http://192.168.1.86:5000"

    static createHeaders() {
        const jwt = Cookie.getCookie('access_token_cookie')
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', `Bearer ${jwt}`);
        return headers
    }

    static getVilles() {
        return fetch(API.url + '/villes' )
            .then((resp) => resp.json())
            .catch(function(error) {
                console.log(error);
            });
    }

    static getAdmin() {
        const headers = API.createHeaders()
        return fetch(API.url + '/admin', {
            mode: 'cors',
            headers
        } )
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

    static login(username, password) {
        const body = JSON.stringify({username: username, password: password})
        return fetch(API.url + '/admin/login', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: body,
            })
            .then((resp) => resp.json())
            .catch(function(error) {
                console.log(error);
            });
    }


}