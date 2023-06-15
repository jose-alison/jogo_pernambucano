let grama
let personagem

const tamanho = 64
const largura = 576
const altura = 576

let x = 0
let y = 0

let r = random(-50, 50);

let restart 

function setup() {
  
    createCanvas(altura, largura);
  
    personagem = loadImage('img/person.png');
  
    grama = loadImage('img/grama.jpg');

    bandeira = loadImage('img/bandeira.png');
 
}

function draw() {
    
    if (x < 0) {
      x = 0
    }
    
    if (y < 0) {
      y = 0
    }
    
    if (x > tamanho * 8) {
      x = tamanho * 8
    }
    
    if (y > tamanho * 8) {
      y = tamanho * 8
    }
  
  
    background(180, 120, 85);

    montarCenario()
  
      
    //text(`x: ${x} y: ${y}`, 500, 500)
  
    if (x === tamanho * 8 && y === tamanho * 8) {
  
        termino()
    
        restart.mousePressed(reset)
    
        noLoop()
    }
  
}

/**
*function mensInicial() {
*    rect((largura/2)-128, (altura/2)-128, 256, 128, 20)
*    textAlign(CENTER);
*    text(`Ajude o pernambucano\na chegar em Pernambuco.`, largura/2, altura/2 - tamanho*1.2)
*    montarCenario()
*    
*}
**/

function montarCenario() {
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++){
         image(grama, tamanho * i, tamanho * j, tamanho, tamanho); 
        }    
    }
    
    image(bandeira, largura-tamanho-5, altura-tamanho-5, tamanho, tamanho)
    
    image(personagem, x, y, tamanho, tamanho);
}

function termino() {
    rect((largura/2)-128, (altura/2)-128, 256, 128)
    textSize(30)
    text(`Você ganhou!`, (largura/2)-tamanho*1.5, (altura/2)-tamanho*1.5)
    textSize(25)
    text('Bem vind@\na Pernambuco!', (largura/2)-tamanho*1.5, (altura/2)-tamanho)
}


function reset() {
    x = 0
    y = 0
  
    restart.remove()
    textSize(18)
  
    loop()
}

function keyPressed() {
    if (keyIsDown(RIGHT_ARROW)) {
          x += tamanho;
    }
  
    if (keyIsDown(DOWN_ARROW)) {
          y += tamanho;
    }
  
    if (keyIsDown(LEFT_ARROW)) {
          x -= tamanho;
    }
  
    if (keyIsDown(UP_ARROW)) {
        y -= tamanho;
    }
}