/* W = paredes
" " = Entradas
S = inicio
F = fim (mostrar mensgame de vitória ao cheagr lá)
*/

/*Cada celula deve ser uma div
cada linha uma div ou section
posicionar com flex

*/
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
const allLabirinto = document.getElementById('labirinto')

let mapLine 

for(let i =0; i<map.length;i++){
    mapLine = map[i].split('')
    for(let j =0; j<mapLine.length;j++){
        const parede = document.createElement('div')
        if(mapLine[j] === 'W'){
            
            parede.classList.add('Labirinto__Parede')
            allLabirinto.appendChild(parede)  
        }
       else if(mapLine[j] === ' '){
             parede.classList.add('Labirinto__Passagem')
            allLabirinto.appendChild(parede)  
        }
        else if(mapLine[j] === 'S'){
             parede.classList.add('Labirinto__Start')
            allLabirinto.appendChild(parede)  
        }
        else if(mapLine[j] === 'F'){
            parede.classList.add('Labirinto__Finish')
           allLabirinto.appendChild(parede)  
       }

    }
    
}

