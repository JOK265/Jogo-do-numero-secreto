let listaDeNumerosSorteados = [];
function mudarTags(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

let numeroMaximo = 100;

let tentativas = 1;

function mensagemInicial() {
    mudarTags('h1', 'Jogo da Adivinhação');
    mudarTags('p', `Diga um número de 1 a ${numeroMaximo}:`);    
}

mensagemInicial();

function gerarNumeroAleatorio(max) {
    let numeroEscolhido = Math.ceil(Math.random() * max);
    let quantidadeElementosLista = listaDeNumerosSorteados.length;

    if (quantidadeElementosLista == numeroMaximo){
        listaDeNumerosSorteados = [];
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio(numeroMaximo);
    } else{
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

let numeroAleatorio = gerarNumeroAleatorio(numeroMaximo);

console.log(numeroAleatorio);

function verificarChute(){
    let chute = document.querySelector('input').value;
    if (chute == numeroAleatorio){
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativa = `Parabéns! Você acertou o número secreto (${numeroAleatorio}) com ${tentativas} ${palavraTentativa}`;
        mudarTags('p', mensagemTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        if (numeroAleatorio > chute){
            mudarTags('p', `Você errou :( O número secreto é maior que ${chute}.`);
        } else{
            mudarTags('p', `Você errou :( O número secreto é menor que ${chute}.`);
        }
        tentativas++;
        limparCampo();
    }
}

function iniciarNovoJogo(){
    numeroAleatorio = gerarNumeroAleatorio(10);
    console.log(numeroAleatorio);
    limparCampo();
    tentativas = 1;
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}