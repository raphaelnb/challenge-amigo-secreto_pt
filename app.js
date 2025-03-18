//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = []


const adicionarAmigo = () => {
    // recebe o valor do input
    let novoAmigo = document.getElementById('amigo').value
    console.log(novoAmigo)

    // verifica se o input está vazio
    novoAmigo == ""
        ?   alert("Por favor, insira um nome.")
        :   amigos.push(novoAmigo); 
            document.getElementById('amigo').value = ""; 
            console.log(amigos);
}