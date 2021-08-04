
function setup() {
  createCanvas(400,400);
}

function draw() 
{
  if (keyCode == DOWN_ARROW){
    background("red")
  }
  if (keyCode == LEFT_ARROW){
    background("green")
  }
  if(keyCode == UP_ARROW){
    background("blue")
  }
  if(keyCode == RIGHT_ARROW){
    background("yellow")
  }

}




