//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = []

const adicionarAmigo = () => {
    let novoAmigo = document.getElementById('amigo').value
    console.log(novoAmigo)

    novoAmigo == ""
    ? alert("Por favor, insira um nome.")
    : amigos.push(novoAmigo)
    console.log(amigos)
    document.getElementById('amigo').value = ""

}