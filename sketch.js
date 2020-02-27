let positionX;
let speedX;
let toggle = true;

let x = Math.floor(Math.random() * 255);
let y = Math.floor(Math.random() * 255);
let z = Math.floor(Math.random() * 255);

function preload() {
  donald = loadImage('./images/donald.png');
  donaldthumb = loadImage('./images/donaldthumb.png');
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
  // for(let i = 0; i < 255; i = i + 1) {
    background(x, y, z);
    // background(i, i, i);
  // }
  if(toggle !== true) {
    image(donaldthumb, positionX, positionY, 100, 100);
  }
  else {
    image(donald, positionX, positionY, 100, 100);
  }
  fill(120, 80, 90);
  noStroke();


  positionX = positionX + speedX;
  positionY = positionY + speedY;

  if(positionX >= 600 || positionX <= 0) {
    speedX = speedX * -1;
  }

  if(positionY >= 400 || positionY <= 0) {
    speedY = speedY * -1;
  }

  // fill(255);
}

function keyPressed() {
  toggle = !toggle;
  for(let i = 0; i <= 253; i+=1) {
    background(i, i/2, i/3);
  }
}
