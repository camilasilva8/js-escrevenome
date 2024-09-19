function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background(220);
  }function setup() {
    createCanvas(700, 700);
    background("red")
  }
  
  function draw() {
    stroke("blue");
    fill("black");
    
    
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 20, 35);
    }
  }