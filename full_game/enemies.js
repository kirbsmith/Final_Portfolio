class Enemy {
  constructor(){
    this.frameX = 0;
    this.frameY = 0;
    this.fps = 20;
    this.frameInterval = 2000/this.fps;
    this.frameTimer = 0;
    this.markedForDeletion = false;
  }
  update(deltaTime){
    //movement
    this.x -= this.speedX + this.game.speed;
    this.y += this.speedY;
    if (this.frameTimer > this.frameInterval){
      this.frameTimer = 0;
      if (this.frameX < this.maxFrame) this.frameX++;
      else this.frameX = 0;
    } else {
      this.frameTimer += deltaTime;
    }
    //check if off screen
    if (this.x + this.width < 0) this.markedForDeletion = true;
  }
  draw(context){
    if (this.game.debug) context.strokeRect(this.x, this.y, this.width, this.height);
    context.drawImage(this.image, this.frameX * this.width, this.frameY, this.width, this.height, this.x, this.y, this.width, this.height)
  }
}

 export class FlyingEnemy extends Enemy {
  constructor(game){
    super();
    this.game = game;
    this.frameY = 0;
    this.width = 64;
    this.height = 64;
    this.hitX = 10;
    this.x = this.game.width + Math.random() * this.game.width * 0.5;
    this.y = Math.random() * this.game.height * 0.5;
    this.speedX = Math.random() + 1;
    this.speedY = 0;
    this.maxFrame = 3;
    this.image = enemy_fly;
    this.angle = 0;
    this.va = Math.random() * 0.1 + 0.1;
  }
  update(deltaTime){
    super.update(deltaTime);
    this.angle += this.va;
    this.y += Math.sin(this.angle);
  }
}

export class GroundEnemy extends Enemy {
  constructor(game){
    super();
    this.game = game;
    this.frameY = 1;
    this.maxFrame = 7;
    this.width = 280;
    this.height = 186;
    this.hitX = 140;
    this.x = this.game.width;
    this.y = this.game.height - this.height - this.game.groundMargin;
    this.image = enemy_ground;
    this.speedX = Math.random() * 2 + 5;
    this.speedY = 0
  }
}

export class ClimbingEnemy extends Enemy {
    constructor(game){
      super();
      this.game = game;
      this.width = 266;
      this.height = 176;
      this.hitX = 50;
      this.x = this.game.width;
      this.y = Math.random() * this.game.height * 0.5;
      this.image = enemy_spider;
      this.speedX = 0;
      this.speedY = Math.random() > 0.5 ? 1 : -1;
      this.maxFrame = 2;
    }
    update(deltaTime){
      super.update(deltaTime);
      if (this.y > this.game.height - this.height - this.game.groundMargin) this.speedY *= -1;
      if (this.y < -this.height) this.markedForDeletion = true;
    }
    draw(context){
      super.draw(context);
      context.beginPath();
      context.moveTo(this.x + this.width/2, 0);
      context.lineTo(this.x + this.width/2, this.y + 50);
      context.stroke();
    }
}
