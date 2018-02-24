
var yoff = 0.0;        // 2nd dimension of perlin noise

var myFont;

function haltCanvas(){
    
    noLoop();
}

function preload() {
  myFont = loadFont('fonts/Roboto-Black.ttf');
}

function setup() {
 
   img = loadImage("images/ocean-gutter2 edit 1 with url.png"); 
  
}

function draw() {

    clear();
     createCanvas(windowWidth+100, windowHeight);
 
    

  // We are going to draw a polygon out of the wave points
    
   fill(0);

  noStroke();
    
  beginShape(); 
  
  var xoff = 0;       // Option #1: 2D Noise
  // float xoff = yoff; // Option #2: 1D Noise
  
  // Iterate over horizontal pixels
  for (var x = 0; x <= width; x += 10) {
    // Calculate a y value according to noise, map to 
    var y = map(noise(xoff, yoff), 0, 1, height*.1,height*.8); // Option #1: 2D Noise
    // float y = map(noise(xoff), 0, 1, 200,300);    // Option #2: 1D Noise
    
    // Set the vertex
    vertex(x, y); 
    // Increment x dimension for noise
    xoff += 0.05;
  }
  // increment y dimension for noise
  yoff += 0.03;
  vertex(width, height);
  vertex(0, height);
  endShape(CLOSE);    
    
noStroke();
  // We are going to draw a polygon out of the wave points
    
   fill(0,255,0);
    
    
  beginShape(); 
  
  var xoff = 0;       // Option #1: 2D Noise
  // float xoff = yoff; // Option #2: 1D Noise
  
  // Iterate over horizontal pixels
  for (var x = 0; x <= width; x += 10) {
    // Calculate a y value according to noise, map to 
    var y = map(noise(xoff, yoff), 0, 1, height*.2,height*.8); // Option #1: 2D Noise
    // float y = map(noise(xoff), 0, 1, 200,300);    // Option #2: 1D Noise
    
    // Set the vertex
    vertex(x, y); 
    // Increment x dimension for noise
    xoff += 0.05;
  }
  // increment y dimension for noise
  yoff += 0.03;
  vertex(width, height);
  vertex(0, height);
  endShape(CLOSE);
   
     
    fill(0,255,0);
    stroke(0,0,0);
    strokeWeight(3);
    
  beginShape(); 
  
  var xoff = 0;       // Option #1: 2D Noise
  // float xoff = yoff; // Option #2: 1D Noise
  
  // Iterate over horizontal pixels
  for (var x = 0; x <= width; x += 10) {
    // Calculate a y value according to noise, map to 
    var y = map(noise(xoff, yoff), 0, 1, height*.1,height); // Option #1: 2D Noise
    // float y = map(noise(xoff), 0, 1, 200,300);    // Option #2: 1D Noise
    
    // Set the vertex
    vertex(x, y); 
    // Increment x dimension for noise
    xoff += 0.05;
  }
  // increment y dimension for noise
  yoff += 0.03;
  vertex(width, height);
  vertex(0, height);
  endShape(CLOSE);  

 

    
   
    
   
    
   
}
