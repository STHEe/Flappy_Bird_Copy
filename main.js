const w_height = 400;
const w_width = 500;

// const b = new Bird(20, w_height / 2, 20, w_width, w_height);
const pipes = [
  new Pipe(60, w_height, w_width)
]

function setup() {
  createCanvas(w_width, w_height);
}

function draw() {
  // responsavel por calcular e colocar os canos em uma distancia a cada frame, quando atinge o numero maximo ele para
  if (frameCount % 150 == 0 && pipes.length < 4)
    pipes.push(new Pipe(60, w_height, w_width));

  background(200);

  pipes.map(p => {
    p.update();
    p.show();
  });
}

function keyPressed(){
  // if (keyCode === 32)
  //   b.jump();

  if (key === 'p') {
    noLoop();
  }
  if (key === 'o') {
    loop();
  }
}
