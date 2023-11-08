/*
Hack it: Zombie Attack

The program creates a horde of zombies that cross the canvas. Read the code
and make the following enhancements

1. Split the code up into muliple files one for each constructor
2. Give each zombie a health property
3. Add a shovel! When the zombie is clicked on the head their health decreases
	* Add a 'clicked' method to the zombie to check if x and y coordinates, taken as arguments
	 are over the zombies head (you can use the dist function) and decrease health
	* In the horde constructor create a new method to check each zombies clicked method
	* also remove from the array any zombies whoes health is below 0.
	* call the method in horde from mousePressed();
4. When a zombie is killed make sure a new zombie is added to the horde.
5. Extension: Make it a game where the idea is to keep the zombies from the right of the screen
for as long as possible.
*/

//variable to store the zombie horde
var horde;

function setup() {
	createCanvas(800, 600);

	//create a new horde and add zombies
	horde = new Horde();
	horde.addZombies(7);

}

function draw() {
	background(77, 112, 107);
	this.horde.drawZombies();
for (let i = 0; i < horde.zombies.length-1; i++) {
  if (horde.zombies[i].health < 0) {
    horde.zombies.splice(i, 1);
	horde.addZombies(1)
  }
}
}

function mousePressed(){
	for(let i =0; i <horde.zombies.length;i++){
		horde.zombies[i].clicked(mouseX,mouseY)
	}
}