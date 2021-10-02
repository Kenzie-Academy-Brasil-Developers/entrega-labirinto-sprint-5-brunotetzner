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
function victory(){
    allLabirinto.innerHTML = ' '
    const containerVictory = document.createElement('div')
    const containerVictoryBackground = document.createElement('div')
    const containerVictoryBackgroundTwo = document.createElement('div')
    const containerButton = document.createElement('div')
    const victoryText = document.createElement('p')
    const victoryTextTwo = document.createElement('p')
    const playAgain = document.createElement('button')

    containerVictory.classList.add('victoryContainer')
    containerVictoryBackground.classList.add('victoryContainer__Background')
    containerVictoryBackgroundTwo.classList.add('victoryContainer__Background')
    victoryText.classList.add('victoryContainer__Text')
    victoryTextTwo.classList.add('victoryContainer__Text')
    containerButton.classList.add('container-button')
    playAgain.classList.add('container-button__PlayAgain')

    
    containerVictory.appendChild(containerVictoryBackground)
    containerVictory.appendChild(containerVictoryBackgroundTwo)
    containerVictory.appendChild(playAgain)
    containerVictoryBackground.appendChild(victoryText)
    containerVictoryBackgroundTwo.appendChild(victoryTextTwo)


    allLabirinto.appendChild(containerVictory)

    victoryText.innerHTML = 'PARABÉNS guerreiro, você ganhou!' 
    victoryTextTwo.innerHTML = 'Frodo te espera em Gondor para a coroação do novo rei.'
    playAgain.innerHTML = 'Jogar Novamente'

}

//Jogador
let playerPosition = [9,0]
const player = document.createElement('div')
player.classList.add('Labirinto__player')
largada.appendChild(player)

let boxVertical = 0;
let boxHorizontal = 0;

document.addEventListener('keydown', (event) => {
    const keyName = event.key;
    if (keyName === 'ArrowDown' && map[playerPosition[0]+ 1][playerPosition[1]] === ' ') {
        playerPosition[0] += 1
        boxVertical += 21
        player.style.top = boxVertical + "px"
    }
    else if (keyName === 'ArrowUp' && map[playerPosition[0]- 1][playerPosition[1]] === ' ') {
        playerPosition[0] -= 1
        boxVertical -= 21
        player.style.top = boxVertical + "px";
    }

    else if (keyName === 'ArrowRight' && map[playerPosition[0]][playerPosition[1]+ 1] === ' ') {
        playerPosition[1] += 1
        boxHorizontal += 21

        player.style.left = boxHorizontal + "px";
    }
    else if (keyName === 'ArrowLeft' && map[playerPosition[0]][playerPosition[1]-1] === ' ') {
        
        playerPosition[1] -= 1
        boxHorizontal -= 21
        player.style.left = boxHorizontal + "px";
        
    }
    //Condição de vitória
    else if (keyName === 'ArrowRight' && mapAllItens[playerPosition[0]][playerPosition[1]+1] === 'F') {
        playerPosition[1] += 1
        boxHorizontal += 21
        player.style.left = boxHorizontal + "px";
        victory()
      //Criar um container no html
      //selecionar via dom
      //Criar um paragrafo e adicionar com filho do container
      //adicionar texto ao pragrafo
      //Mostrar na tela
    }
});


