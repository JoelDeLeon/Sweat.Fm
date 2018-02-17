var sphereSize;

function setup() {
   sphereSize = 150; 
}

function draw() {
     createCanvas(windowWidth/2,windowHeight/2,  WEBGL);
    stroke(0,255,0);
    noFill();
    sphere(sphereSize);
}