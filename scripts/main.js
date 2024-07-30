var current_img;

function preload() {
  street_img = loadImage("assets/IMG_7629.jpeg");
}

document.addEventListener(`DOMContentLoaded`, function() {
  //select audio
  x = document.getElementById("streetAudio");
  
  //play audio
  playAudio(x);
});

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  //image(current_img, 0, 0);
  canvas.position(0,0);
  canvas.style('z-index','-1');

  image(street_img, 0, -200);

  //disply footer
  document.querySelector(".footer").style.display = 'flex';

  //change font color
  document.querySelector(".text-container").style.color = "white";

var pressCount = 0;

document.getElementById("about-btn").addEventListener("click", function() {
  pressCount = pressCount + 1;
  //Hide About button

  if (pressCount % 2 == 0) {
    document.getElementById("about-btn").innerHTML = 'About'

    //Hide footer text
    document.getElementById("footer-text").style.display = "none";
  } else {
    document.getElementById("about-btn").innerHTML = "Hide";
    
    //Display footer text
    document.getElementById("footer-text").style.display = "flex";
  }
  //Display Hide button
});
}

function draw() {
  frameRate(25);
  let x1 = random(width);
  let y1 = random(height);
  let x2 = round(x1 + random(-10, 10));
  let y2 = round(y1 + random(-10, 10));

  set(x2, y2, get(x1, y1, 50, 50)); // x,y,obj
  updatePixels();
}

function playAudio(x) { 
  x.play(); 
} 

function pauseAudio(x) { 
  x.pause(); 
} 
