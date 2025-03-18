//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = []

const adicionarAmigo = () => {
    // Lê o valor no campo input
    let novoAmigo = document.getElementById('amigo').value
    console.log(novoAmigo)

    // Verifica a entrada e adiciona ao array de amigos
    novoAmigo == ""
    ? alert("Por favor, insira um nome.")
    : amigos.push(novoAmigo)
    console.log(amigos)
    document.getElementById('amigo').value = ""

    // função para renderizar a lista de amigos.
    listar()
}
    
const listar = () => {
    
    const lista = document.getElementById('listaAmigos')
    lista.innerHTML = "" // zera a lista para evitar nomes repetidos
        
    // adiciona cada amigo na lista
    for (let i = 0; i < amigos.length; i++) {
        const novoNomeLista = document.createElement("li")
        novoNomeLista.innerHTML = amigos[i]
        document.getElementById('listaAmigos').appendChild(novoNomeLista)    
        }
}

const sortearAmigo = () => {
    // index aleatório entre 0 e o tamalho do array de amigos
    let numero = Math.floor(Math.random() * amigos.length)

    const amigoSorteado = document.getElementById('resultado')
    
    // Renderiza o amigo sorteado
    amigos.length != 0
    ? amigoSorteado.innerHTML = amigos[numero]
    : alert('Nenhum amigo na lista. Adicione-os primeiro')
}