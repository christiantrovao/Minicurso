const botao = document.querySelector('button');

const imagem = document.querySelector('img');
const nomeDoPersonagem = document.querySelector('#nome');
const especie = document.querySelector('#especie');
const condicao = document.querySelector('#status');

const imagem1 = document.querySelector('#img1');
const nomeDoPersonagem1 = document.querySelector('#nome1');
const especie1 = document.querySelector('#especie1');
const condicao1 = document.querySelector('#status1');

const imagem2 = document.querySelector('#img2');
const nomeDoPersonagem2 = document.querySelector('#nome2');
const especie2 = document.querySelector('#especie2');
const condicao2 = document.querySelector('#status2');



gerarValorAleatorio = () => {
    return Math.floor(Math.random() *671);
}

pegarPersonagem = () => {
    let numeroAleatorio = gerarValorAleatorio();
    let numeroAleatorio1 = gerarValorAleatorio();
    let numeroAleatorio2 = gerarValorAleatorio();
    return fetch(`https://rickandmortyapi.com/api/character/[${numeroAleatorio},${numeroAleatorio1},${numeroAleatorio2}]`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            "Content-type": 'application/json'
        }
    })
    .then((response) => response.json())
    .then((data) => {
        imagem.src = data[0].image;
        imagem.alt = data[0].name;
        nomeDoPersonagem.innerHTML = data[0].name;
        especie.innerHTML = data[0].species;
        condicao.innerHTML = data[0].status;

        imagem1.src = data[1].image;
        imagem1.alt = data[1].name;
        nomeDoPersonagem1.innerHTML = data[1].name;
        especie1.innerHTML = data[1].species;
        condicao1.innerHTML = data[1].status;

        imagem2.src = data[2].image;
        imagem2.alt = data[2].name;
        nomeDoPersonagem2.innerHTML = data[2].name;
        especie2.innerHTML = data[2].species;
        condicao2.innerHTML = data[2].status;
        
    });
}

botao.onclick = pegarPersonagem;