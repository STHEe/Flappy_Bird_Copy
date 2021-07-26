class Pipe {
  #pos_bottom_pipe;
  #pos_top_pipe;
  #pos;
  #size = 40;
  #gap;
  #window_height;
  #window_width;
  #velocidade = 1;

  constructor(
    gap, window_height, window_width
  ){
    this.#generateNewPipe(gap, window_height, window_width);
  }

  #generateNewPipe(gap, window_height, window_width){
    let top_pipe_bottom = Math.floor(Math.random() * (window_height / 2)) + (Math.floor(Math.random() * 60) + 10);
    let bottom_pipe_top = top_pipe_bottom + gap;

    this.#pos_top_pipe = new p5.Vector(0, top_pipe_bottom);
    this.#pos_bottom_pipe = new p5.Vector(0, bottom_pipe_top);
    this.#pos = new p5.Vector(window_width + this.#size, 0);
    this.#window_height = window_height;
    this.#window_width = window_width;
    this.#gap = gap;
  }

  show(){
    rect(this.#pos.x, 0, this.#size, this.#pos_top_pipe.y);
    rect(this.#pos.x, this.#pos_bottom_pipe.y, this.#size, (this.#window_height - (this.#pos_top_pipe.y + this.#gap)));
  }

  update(){
    this.#pos.x -= this.#velocidade;

    if ((this.#pos.x + this.#size) < 0){
      this.#generateNewPipe(this.#gap, this.#window_height, this.#window_width)
    }

  }

}