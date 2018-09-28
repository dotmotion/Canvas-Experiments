var canvas = document.querySelector("canvas");
var c = canvas.getContext("2d");

canvas.height = 400;
canvas.width = 400;

var colors = ["#FF6138", "#FFFF9D", "#BEEB9F", "#79BD8F", "#00A388"];

//Utility Functions
function randomRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomColor(colors) {
  return colors[Math.floor(Math.random() * colors.length)];
}

c.fillStyle = "black";
c.fillRect(0, 0, canvas.width, canvas.height);

// Constructor
function Square() {
  this.x = 0;
  this.y = 0;
  this.dx = 0;
  this.dy = 0;
  this.color = "white";

  this.draw = function() {
    //Rectangle
    c.rect(this.x, this.y, 5, 5);
    c.fillStyle = this.color;
    c.fill();
  };

  this.update = function() {
    // Move
    this.y += this.dy;
    this.x += this.dx;
    // Draw on new position
    this.draw();
  };
}

// Array Generator
var Squares;
function generate() {
  Squares = [];

  for (var i = 0; i < 100; i++) {
    Squares.push(new Square());
  }
}

// Animation Loop
function animate() {
  requestAnimationFrame(animate);
  //Clearing the Canvas (background)
  c.fillStyle = "";
  c.fillRect(x, y, width, height);

  //Loop
  for (var i = 0; i < Shapes.length; i++) {
    Squares.update();
  }
}

generate();
animate();

// CheatSheet

// Fill & Border Color  <--

// c.fillStyle = "color";
// c.fill();

// c.strokeStyle = "color";
// c.stroke();

// Rectangle <--

// c.fillStyle = "color";
// c.rect(x, y, width, height);

// Circle / Arc <--

// c.beginPath();
// c.arc(x, y, radius, startAngle, endAngle, anticlockwise);
// c.fillStyle = "color";
// c.fill();
// c.closePath();
