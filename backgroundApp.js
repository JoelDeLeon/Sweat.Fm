
var sketch =  function(p) {
var yoff = 0.0;        // 2nd dimension of perlin noise

var myFont;

function haltCanvas(){
    
    p.noLoop();
}

function startCanvas(){
    p.loop();
}

p.preload = function(){
  p.myFont = p.loadFont('fonts/Roboto-Black.ttf');
}

p.setup = function(){
 
   p.img = p.loadImage("images/ocean-gutter2 edit 1 with url.png"); 
   

}

p.draw = function(){

    p.clear();
     p.createCanvas(p.windowWidth+100, p.windowHeight+100);
 
    

  // We are going to draw a polygon out of the wave points
    

p.stroke(0,0,0); 
 p.fill('rgba(0,255,0,1)');

    p.strokeWeight(30);
    
    
  p.beginShape(); 
  
  var xoff = 0;       // Option #1: 2D Noise
  // float xoff = yoff; // Option #2: 1D Noise
  
  // Iterate over horizontal pixels
  for (var x = 0; x <= p.width; x += 10) {
    // Calculate a y value according to noise, map to 
    var y = p.map(p.noise(xoff, yoff), 0, 1, -30,p.height*.65); // Option #1: 2D Noise
    // float y = map(noise(xoff), 0, 1, 200,300);    // Option #2: 1D Noise
    
    // Set the vertex
    p.vertex(x, y); 
    // Increment x dimension for noise
    xoff += 0.05;
  }
  // increment y dimension for noise
    
  if (p.width<700){
        yoff += 0.018;
    }
    else if(p.width<900){
        yoff += 0.025;
    }
    else if(p.width<1100){
        yoff += 0.03;
    }
    else if(p.width<1250){
        yoff += 0.034;
    }
    else{
        yoff += 0.042;
    }
  
  p.vertex(p.width, p.height);
  p.vertex(0, p.height);
  p.endShape(p.CLOSE);    
    

  // We are going to draw a polygon out of the wave points
    
  
//p.fill('rgba(0,204,0,0.5)');    
    p.stroke(0,255,0);
    p.fill('rgba(0,0,0,1)');
    p.strokeWeight(3);
    
    
  p.beginShape(); 
  
  var xoff = 0;       // Option #1: 2D Noise
  // float xoff = yoff; // Option #2: 1D Noise
  
  // Iterate over horizontal pixels
  for (var x = 0; x <= p.width; x += 10) {
    // Calculate a y value according to noise, map to 
    var y = p.map(p.noise(xoff, yoff), 0, 1, 0,p.height*.7); // Option #1: 2D Noise
    // float y = map(noise(xoff), 0, 1, 200,300);    // Option #2: 1D Noise
    
    // Set the vertex
    p.vertex(x, y); 
    // Increment x dimension for noise
    xoff += 0.05;
  }
  // increment y dimension for noise
 
  
  p.vertex(p.width,p.height);
  p.vertex(0, p.height);
  p.endShape(p.CLOSE);
   
    
//p.fill('rgba(0,255,0,0.5)');
    
    p.stroke(0,0,0);
    p.fill('rgba(0,255,0,1)');
    p.strokeWeight(10);
    
  p.beginShape(); 
  
  var xoff = 0;       // Option #1: 2D Noise
  // float xoff = yoff; // Option #2: 1D Noise
 
     
  // Iterate over horizontal pixels
  for (var x = 0; x <= p.width; x += 10) {
    // Calculate a y value according to noise, map to 
    var y = p.map(p.noise(xoff, yoff), 0, 1, -70,p.height*.9); // Option #1: 2D Noise
    // float y = map(noise(xoff), 0, 1, 200,300);    // Option #2: 1D Noise
    
    // Set the vertex
    p.vertex(x, y); 
    // Increment x dimension for noise
    xoff += 0.05;
  }
  // increment y dimension for noise

   
  
  p.vertex(p.width, p.height);
  p.vertex(0, p.height);
  p.endShape(p.CLOSE);  

 

    
   
    
   
    
   
}
};



new p5(sketch, 'backgroundAppContainer');
