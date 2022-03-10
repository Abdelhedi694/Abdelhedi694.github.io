const username = document.querySelector("#username")
const password = document.querySelector("#password")
const button = document.querySelector("#btn")
let secret = document.querySelector(".secret")

button.addEventListener("click", ()=>{
    logCheck(username.value, password.value)
})

function logCheck(user, pass){

    let identifiant = {
        username : user,
        password : pass
    }

    let requete = {

        method : "POST",
        headers:{"Content-type":"application/json"},
        body: JSON.stringify(identifiant)
    }

    let url = "https://boiling-plains-67445.herokuapp.com/api/login_check"

    fetch(url, requete)
        .then(response=>response.json())
        .then(tokenData=>getMessageApi(tokenData.token))

}

function getMessageApi(token){
    let url = "https://boiling-plains-67445.herokuapp.com/api/sandwich"

    let requete = {
        method : "GET",
        headers:{
            "Content-type":"application/json",
            "Authorization":`Bearer ${token}`

        }

    }
    fetch(url, requete)
        .then(response=>response.json())
        .then(message=>secret.innerHTML = message)


}