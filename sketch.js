let positionX;
let speedX;
let dvdImage;

let x = Math.floor(Math.random() * 255);
let y = Math.floor(Math.random() * 255);
let z = Math.floor(Math.random() * 255);

function preload() {
  donald = loadImage('./images/donald.png');
}

function setup() {
  createCanvas(600, 400);
  background(x, y, z);
  positionX = 300;
  positionY = 200;
  speedX = 8;
  speedY = 8;
  // noCursor();
}

function draw() {
  background(x, y, z);

  fill(120, 80, 90);
  noStroke();
  image(donald, positionX, positionY, 100, 100);

  positionX = positionX + speedX;
  positionY = positionY + speedY;

  if(positionX >= 600 || positionX <= 0) {
    speedX = speedX * -1;
  }

  if(positionY >= 400 || positionY <= 0) {
    speedY = speedY * -1;
  }

  fill(255);
  // textSize(32);
  // text(speedX, 300, 100);
  // ellipse(mouseX, mouseY, 70, 70);
}
