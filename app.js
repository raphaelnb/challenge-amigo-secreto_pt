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

    listar()
    
}
    
    const listar = () => {

        //let lista = amigos
        const lista = document.getElementById('listaAmigos')
        lista.innerHTML = ""
        
        for (let i = 0; i < amigos.length; i++) {
            
            const novoNomeLista = document.createElement("li")
            novoNomeLista.innerHTML = amigos[i]
            document.getElementById('listaAmigos').appendChild(novoNomeLista)
            //lista = []
            
        }
    }
    
       
       
      
        

    /*
     amigos.map(amigo => {
           let novoAmigoDaLista = document.createElement("li")
           novoAmigoDaLista.innerHTML = amigo
           document.getElementById('listaAmigos').appendChild(novoAmigoDaLista)
        })
           */