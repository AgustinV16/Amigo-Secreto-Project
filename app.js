// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []

function agregarAmigo () {
    let amigo = document.getElementById('amigo').value

    if (amigo === "") {
        return alert("Por favor digite un nombre")
    } else {
        amigos.push(amigo)
        document.getElementById('amigo').value = ""
    }

    listaDeAmigos()

    return amigos
}

function listaDeAmigos () {
    let ulAm = document.getElementById("listaAmigos")
    ulAm.innerHTML = amigos.map((amigo) => {
        return `<li>${amigo}</li>`
    }).join("")
}


function sortearAmigo() {
    let rand = Math.floor(Math.random() * amigos.length)
    let amSec = amigos[rand]

    let ulRes = document.getElementById('resultado')
    ulRes.innerHTML = amSec
}