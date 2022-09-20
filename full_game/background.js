class Layer {
  constructor(game, width, height, speedModifier, image){
    this.game = game;
    this.width = width;
    this.height = height;
    this.speedModifier = speedModifier;
    this.image = image;
    this.x = 0;
    this.y = 0;
  }
  update(){
    if (this.x < -this.width) this.x = 0;
    else this.x -= this.game.speed * this.speedModifier;
  }
  draw(context){
    context.drawImage(this.image, this.x, this.y, this.width, this.height);
    context.drawImage(this.image, this.x + this.width, this.y, this.width, this.height);
  }
}

export class Background {
  constructor(game){
    this.game = game;
    this.width = 500*1.8;
    this.height = 282*1.8;
    this.layer3image = layer3;
    this.layer2image = layer2;
    this.shopImage = shop;
    this.layer1image = layer1;
    this.layer1 = new Layer(this.game, this.width, this.height, 0.2, this.layer1image);
    this.layer2 = new Layer(this.game, this.width, this.height, 0.4, this.layer2image);
    this.layer3 = new Layer(this.game, this.width, this.height, 0.7, this.layer3image);
    this.backgroundLayers = [this.layer1, this.layer2, this.layer3];
  }
  update(){
    this.backgroundLayers.forEach(layer => {
      layer.update();
    })
  }
  draw(context){
    this.backgroundLayers.forEach(layer => {
      layer.draw(context)
    })
  }
}
// 
// export class House extends Background {
//   constructor(game){
//     this.game = game;
//     this.width = 118;
//     this.height = 98;
//     this.image = shop;
//     this.shop = new Layer(this.game, this.width, this.height, 0.5, this.image);
//     this.backgroundLayers.splice(2, 0, this.shop);
//   }
//   update(){
//     this.backgroundLayers.forEach(layer => {
//       layer.update();
//     })
//   }
//   draw(context){
//
//   }
// }
