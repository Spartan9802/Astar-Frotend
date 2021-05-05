import API from './api.js'
import Cookie from './cookie.js'
const form  = document.querySelector("#loginForm");



function error(message) {

    for (const el of document.querySelectorAll('div .error')) {
        el.remove()
    }

    const elError = document.createElement('div')
    elError.classList.add('error')
    elError.innerText = message
    form.append(elError)
}

form.addEventListener("submit", function(e){

    e.preventDefault();
    API.login(form.username.value, form.password.value)
        .then(function (data) {
            if (data.jwt) {
                Cookie.setCookie('access_token_cookie', data.jwt, 7)
                location.href = 'admin.php';
            } else {
                error(data.error)
            }
        })
        .catch(function(error) {
            console.log(error);
        });

});