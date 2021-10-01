//Array que determina a forma do labirinto
/* 'W' = parede
' ' =   caminho
'S' = saída
'F' = 'chegada' */
const map = [
    "WWWWWWWWWWWWWWWWWWWWW",
    "W   W     W     W W W",
    "W W W WWW WWWWW W W W",
    "W W W   W     W W   W",
    "W WWWWWWW W WWW W W W",
    "W         W     W W W",
    "W WWW WWWWW WWWWW W W",
    "W W   W   W W     W W",
    "W WWWWW W W W WWW W F",
    "S     W W W W W W WWW",
    "WWWWW W W W W W W W W",
    "W     W W W   W W W W",
    "W WWWWWWW WWWWW W W W",
    "W       W       W   W",
    "WWWWWWWWWWWWWWWWWWWWW",
];
//1-criar o labirindo
//A- Criar um loop que percorre o array
//B- Criar um loop dentro do loop 
//c- Criar divs para cada caracter
//sendo uma classe para cada tipo
//D- Criar a estilização

//2-O JOGADOR 
//A- criar o bloco que representa o jogador 
//B- Adicionar o jogador como filho da div S
//C- 
//Section que contém o labirinto 
const allLabirinto = document.getElementById('labirinto')
const largada = document.createElement('div') // div da largada
const chegada = document.createElement('div') //div da chegada

//---------Criando Divs----------
let mapLine
let mapAllItens = []
for (let i = 0; i < map.length; i++) {
    mapLine = map[i].split('')
    mapAllItens.push(mapLine)
    for (let j = 0; j < mapLine.length; j++) {
        const parede = document.createElement('div')
        if (mapLine[j] === 'W') {

            parede.classList.add('Labirinto__Parede')
            allLabirinto.appendChild(parede)
        }
        else if (mapLine[j] === ' ') {
            parede.classList.add('Labirinto__Passagem')
            allLabirinto.appendChild(parede)
        }
        else if (mapLine[j] === 'S') {

            largada.classList.add('Labirinto__Start')
            allLabirinto.appendChild(largada)
        }
        else if (mapLine[j] === 'F') {

            chegada.classList.add('Labirinto__Finish')
            allLabirinto.appendChild(chegada)
        }
    }
}

/*-----------------------------------------------------------*/
//Jogador
//Usar o array como base para a entrega
//começar pela posição do jogador 
//Comparar com o array cada movimento e quardar o valor em uma variavel
/* inicio
[0][9]
se clicar em ArrowRigth,if([1][9] === ' '
*/
let x = 0;
let y = 9

const player = document.createElement('div')
player.classList.add('Labirinto__player')
largada.appendChild(player)

let boxVertical = 0;
let boxHorizontal = 0;

document.addEventListener('keydown', (event) => {
    const keyName = event.key;
    if (keyName === 'ArrowDown' && mapAllItens[x][y += 1] == ' ') {
        console.log(x)
        console.log(y)
        boxVertical += 21
        player.style.top = boxVertical + "px"
    }
    else if (keyName === 'ArrowUp' && mapAllItens[x][y -= 1] == ' ') {
        console.log(x)
        console.log(y)
        boxVertical -= 21
        player.style.top = boxVertical + "px";
    }
    else if (keyName === 'ArrowRight' && mapAllItens[x += 1][y] == ' ') {
        console.log(x)
        console.log(y)
        boxHorizontal += 21
        player.style.left = boxHorizontal + "px";
    }
    else if (keyName === 'ArrowLeft' && mapAllItens[x -= 1][y] == ' ') {
        boxHorizontal -= 21
        console.log(x)
        console.log(y)
        player.style.left = boxHorizontal + "px";
    }
});

console.log(mapAllItens)