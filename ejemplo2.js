var canvas = document.querySelector("canvas");
var c = canvas.getContext("2d");

canvas.height = 300;
canvas.width = 300;

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
  this.x = randomRange(0, canvas.width);
  this.y = randomRange(0, canvas.height);
  this.dx = randomRange(-2, 2);
  this.dy = randomRange(-2, 2);
  this.color = randomColor(colors);
  this.size = 10;

  this.draw = function() {
    //Rectangle
    c.rect(this.x, this.y, this.size, this.size);
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

  for (var i = 0; i < 10; i++) {
    Squares.push(new Square());
  }
}

// Animation Loop
function animate() {
  requestAnimationFrame(animate);
  //Clearing the Canvas (background)
  c.fillStyle = "black";
  c.fillRect(0, 0, canvas.width, canvas.height);

  // Loop
  for (var i = 0; i < Squares.length; i++) {
    Squares[i].update();
  }
  console.log("it works!");
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
