var horde;
var isMouseOverZombie;
var spadeCursor;

function preload() {
  spadeCursor = loadImage("resources/spade.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  //create a new horde and add zombies
  horde = new Horde();
  horde.addZombies(7);
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
function draw() {
  background(77, 112, 107);
  this.horde.drawZombies();
  isMouseOverZombie = false;
  for (let i = 0; i < horde.zombies.length - 1; i++) {
    if (horde.zombies[i].health < 0) {
      horde.zombies.splice(i, 1);
      horde.addZombies(1);
    }

    if (horde.zombies[i].mouseOver()) {
      isMouseOverZombie = true;
    }
  }

  if (isMouseOverZombie) {
    image(spadeCursor, mouseX - 10, mouseY - 30, 50, 50);
    noCursor();
  } else {
    cursor(ARROW);
  }
}

function mousePressed() {
  for (let i = 0; i < horde.zombies.length; i++) {
    horde.zombies[i].clicked(mouseX, mouseY);
  }
}
