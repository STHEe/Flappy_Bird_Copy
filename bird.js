class Bird {
  #pos;
  #tamanho;
  #gravidade = 0.3;
  #forcaPulo = 10;
  #aceleracao = new p5.Vector(0, 0, 0);
  #window_height;
  #window_width;
  dead = false;

  constructor(
    x, y, tamanho, window_height, window_width
  ){
    this.#pos = new p5.Vector(x, y, 0);
    this.#tamanho = tamanho;
    this.#window_height = window_height;
    this.#window_width = window_width;
  }

  show () {
    ellipse(this.#pos.x, this.#pos.y, this.#tamanho, this.#tamanho);
  }

  update(){
    this.#aceleracao.y += this.#gravidade;
    this.#pos.y += this.#aceleracao.y;

    if (this.#pos.y >= this.#window_height){
      this.#pos.y = this.#window_height;
      this.dead = true;
    }
    else if (this.#pos.y <= 0){
      this.#pos.y = 0;
    }
  }

  jump () {
    this.#aceleracao.y -= this.#forcaPulo;
    this.#pos.y -= this.#aceleracao.y;
  }
}