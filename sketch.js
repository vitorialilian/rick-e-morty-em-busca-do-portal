let personagem;
let grama;
const tamanho = 64;

let andarX = 0;
let andarY = 0;

let botao;

//executando apenas uma vez ao iniciar o programa
function setup() {
  createCanvas(576, 576);
  personagem = loadImage('rick.png');
  grama = loadImage('grass.jpg');
}

//fica executando até que o programa se encerre
function draw() {
  background(228);
  
  if(andarX < 0) {
    andarX = 0
  } 
  
  if(andarY < 0) {
    andarY = 0
  }
  
  if(andarX > tamanho * 8) {
    andarX = tamanho * 8
  }
  
  if(andarY > tamanho * 8) {
    andarY = tamanho * 8
  }
  
  for(let x = 0; x < 9; x++){
     for(let y = 0; y < 9; y++) {
    image(grama, x * tamanho, y * tamanho, tamanho, tamanho);
    }
  }
  
  image(personagem, andarX, andarY, tamanho, tamanho);
  
  if(andarX === tamanho * 8 && andarY === tamanho * 8) {
    // criar retangulo
    rect(160, 160, 256, 256)
    // escrever o texto ganhou 
    textSize(35)
    text('Ganhou!', 200, 300)
    // criar um botão
    botao = createButton('Reiniciar')
    // resetar o jogo
    botao.mousePressed(reset)
    // parar o jogo (loop)
    noLoop()
  }
}

function reset(){
  andarX = 0
  andarY = 0
  botao.remove()
  loop()
}

//é chamada uma vez toda vez que uma tecla é pressionada
function keyPressed() {
  // DOWN_ARROW, UP_ARROW, RIGHT_ARROW, LEFT_ARROW
  if(keyIsDown(DOWN_ARROW)){
    andarY += 64
  }
  
  if(keyIsDown(UP_ARROW)){
    andarY -= 64
  }
  
  if(keyIsDown(RIGHT_ARROW)){
    andarX += 64
  }
  
  if(keyIsDown(LEFT_ARROW)){
    andarX -= 64
  }
}