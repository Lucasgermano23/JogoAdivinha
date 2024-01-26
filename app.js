var lista = [];
var numRandom = random()
var tentativas = 1;



function exibir(tag, texto){
    var campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.1})
}


function exibirInicial(){
    exibir('h1', 'Desafio');
    exibir('p', 'Escolha um número entre 1 e 10');
}
exibirInicial();

function chutar(){
    var input = document.querySelector('input').value
    if(input == numRandom){
        exibir('h1', 'Acertou!');
        var tentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        var mensagemTentativa = `Você acertou o número secreto com ${tentativas} ${tentativa}!`;
        exibir('p', mensagemTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled')
    }else if(input > numRandom){
        exibir('p', 'O número secreto é menor')
    }else{
        exibir('p', 'O número secreto é maior!')
    }
    tentativas++
    limpar();
}


function random(){
    var min = 0;
    var max = 10;

    var numberRandom = parseInt(min + Math.random() * max + 1);
    var tamanhoVetor = lista.length;

    if(tamanhoVetor == max){
        lista = []
    }


    if(lista.includes(numberRandom)){
        return random();
    }else{
        lista.push(numberRandom);
        console.log(numberRandom)
        return numberRandom;
    }


}

function limpar(){
    input = document.querySelector('input')
    input.value = '';
}   

function reiniciar(){
    numRandom = random();
    limpar();
    tentativas = 1;
    exibirInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true)
}