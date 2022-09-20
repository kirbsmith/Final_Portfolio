class Particle {
  constructor(game){
    this.game = game;
    this.markedForDeletion = false;
  }
  update(){
    this.x -= this.speedX + this.game.speed;
    this.y -= this.speedY;
    this.size *= 0.95;
    if (this.size < 0.5) this.markedForDeletion = true;
  }
}

export class Dust extends Particle {
  constructor(game, x, y){
    super(game);
    this.size = Math.random() * 10 + 10;
    this.x = x;
    this.y = y;
    this.speedX = Math.random();
    this.speedY = Math.random();
    this.color = 'rgba(120,120,120,0.4)';
  }
  draw(context){
    context.beginPath();
    context.arc(this.x, this.y, this.size, 0, Math.PI*2);
    context.fillStyle = this.color;
    context.fill();
  }
}

export class Splash extends Particle {
  constructor(game, x, y){
    super(game);
    this.size = Math.random() * 40 + 12;
    this.x = x;
    this.y = y;
    this.speedX = Math.random() * 6 - 3;
    this.speedY = Math.random() * 2 + 2;
    this.gravity = 0;
    this.image = fire;
  }
  update(){
    super.update();
    this.gravity += 0.1;
    this.y += this.gravity;
  }
  draw(context){
    context.drawImage(this.image, this.x + this.game.player.width/2, this.y + this.game.player.height - 10, this.size, this.size);
  }
}

export class Fire extends Particle {
  constructor(game, x, y){
    super(game);
    this.image = fire;
    this.size = Math.random() * 40 + 10;
    this.x = x;
    this.y = y;
    this.speedX = 1;
    this.speedY = 1;
    this.angle = 0;
    this.va = Math.random * 0.2 - 0.1;
  }
  update(){
    super.update();
    this.angle += this.va;
  }
  draw(context){
    context.save();
    context.translate(this.x, this.y);
    context.rotate(this.angle);
    context.drawImage(this.image, -this.size * 0.5, -this.size * 0.25, this.size, this.size);
    context.restore();
  }
}
