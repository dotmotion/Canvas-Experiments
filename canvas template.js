const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

const colors = ["#FF6138", "#FFFF9D", "#BEEB9F", "#79BD8F", "#00A388"];

//Utility Functions
function randomRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomColor(colors) {
  return colors[Math.floor(Math.random() * colors.length)];
}

// Constructor
function Shape() {
  //Properties
  //this.something = something;
  //
  this.draw = function() {
    //Rectangle
    c.rect(x, y, width, height);
    c.fillStyle = "";
    c.fill();

    //Circle / Arc
    c.beginPath();
    c.arc(x, y, radius, startAngle, endAngle, anticlockwise);
    c.fillStyle = "";
    c.fill();
    c.closePath();
  };

  this.update = function() {
    this.draw();
  };
}

// Array Generator
var Shapes;
function generate() {
  Shapes = [];

  for (var i = 0; i < 100; i++) {
    Shapes.push(new Shape());
  }
}

// Animation Loop
function animate() {
  requestAnimationFrame(animate);
  //Clearing the Canvas (transparent)
  c.clearRect(x, y, width, height);
  //Clearing the Canvas (background)
  c.fillStyle = "";
  c.fillRect;

  //Loop
  for (var i = 0; i < Shapes.length; i++) {
    Shapes.update();
  }
}

generate();
animate();
