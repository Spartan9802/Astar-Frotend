import API from './api.js'

const tbody  = document.querySelector("#cities-list tbody");

API.getAdmin()
    .then(function (data) {

        for (const ville of data.villes) {
            const tr = document.createElement('tr')
            for (const value of Object.values(ville)) {
                const td = document.createElement('td')
                if (typeof value === "object") {
                    td.innerText = Object.values(value).length
                } else {
                    td.innerText = value
                }

                tr.append(td)
            }
            tbody.append(tr)
        }


    })
    .catch(function(error) {
        console.log(error);
    });
