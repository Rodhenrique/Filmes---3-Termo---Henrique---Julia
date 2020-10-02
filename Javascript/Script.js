window.onload = function Consumir() {
    const url = 'http://localhost:5000/api/Filmes';
    fetch(url, {
            method: 'get', //método  http para tipo de acesso //delete //post // put,
        })
        .then(function(response) {
            response.text()
                .then(function(result) {
                    let respostaJson = JSON.parse(result);
                    var container = document.getElementsByClassName('texto');
                    container[0].innerHTML = null;
                    respostaJson.map((f) => {
                        let item = document.createElement('p');
                        item.innerHTML = f.titulo;
                        container[0].appendChild(item);
                    })
                })
        })
        .catch(function(err) {
            console.error(err); //retornar um erro 
        });
}

function Login() {
    const url = 'http://localhost:5000/api/Login';
    let user = {
        Email: 'saulo@email.com',
        Senha: '123'
    };
    fetch(url, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(user)
        })
        .then(function(response) {
            response.text()
                .then(function(result) {
                    let respostaJson = JSON.parse(result);
                    console.log(respostaJson);
                })
        })
        .catch(function(err) {
            console.error(err); //retornar um erro 
        });
}