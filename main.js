const controle = document.querySelectorAll("[data-controle]")
//pecas é um objeto com cinco itens com cada declarações cada
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}
const estatisticas = document.querySelectorAll("[data-estatistica]")
//forEach: elemento(o que foi clicado) e índice do array (no caso retorna os botões + e -)
//target: onde o clique aconteceu, loho, no botão
//textContent: o conteúdo textual, no caso + ou - (dataset-controle)
//parentNode: permite que saiba qual o pai do fillho botão, logo, tem como saber o pai específico controle: braço, perna, etc

controle.forEach((elemento) => {
    elemento.addEventListener("click", (event) => {
    adicionaSubtrai(event.target.textContent, event.target.parentNode)
    atualizaEstatisticas(event.target.dataset.peca)
    })
})


function adicionaSubtrai(sinal, paiIdeal){
    const peca = paiIdeal.querySelector("[data-contador]")
    if (sinal === "-"){
        peca.value = parseInt(peca.value) - 1
    }else{
        peca.value = parseInt(peca.value) + 1
    }
}

//há o data-estatisticas="força, poder,velocidade..."
//há o data-pecas="pernas, bracos, foguetes..."
//console.log(pecas[peca]): imprime o objeto selecionado, com energia, forca, poder...
//console.log(elemento.dataset.estatisticas): imprime o que é (força,poder,energia...)
//console.log(elemento.textContent): imprime o que contém no dataset como texto

function atualizaEstatisticas(peca){
    console.log(pecas[peca])
    estatisticas.forEach ((elemento) =>{
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
    })
}

function trocaRobo(alterar){
    const imagemRobo = document.querySelector('#robotron')
    imagemRobo.src=`img/robo-${alterar}.png.png`
}