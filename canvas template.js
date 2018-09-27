var canvas = document.querySelector("canvas");
var c = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

var colors = ["#FF6138", "#FFFF9D", "#BEEB9F", "#79BD8F", "#00A388"];

// Constructor
function Shape() {
  //
  //Properties
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
    //things to do each frame
  };
}

// Animation Loop
function animate() {
  requestAnimationFrame(animate);
  //Clearing the Canvas (transparent)
  c.clearRect(x, y, width, height);

  //Clearing the Canvas (background)
  c.fillStyle = "";
  c.fillRect(x, y, width, height);

  //Loop
  for (var i = 0; i < Shapes.length; i++) {
    Shapes.update();
  }
}

// Array Generator
var Shapes;
function generate() {
  Shapes = [];

  for (var i = 0; i < 100; i++) {
    Shapes.push(new Shape());
  }
}

//Utility Functions
function randomRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomColor(colors) {
  return colors[Math.floor(Math.random() * colors.length)];
}

generate();
animate();

//        EXAMPLE 1

function Square() {
  this.x = 50;
  this.y = 50;
  this.dx = 1;
  this.dy = 1;
  this.color = "black";

  this.draw = () => {
    //Rectangle
    c.rect(this.x, this.y, 20, 20);
    c.fillStyle = this.color;
    c.fill();
  };

  this.update = () => {
    // Move
    this.y += this.dy;
    this.x += this.dx;
    // Draw on new position
    this.draw();
  };
}

//         Example 2

function Square() {
  this.x = randomRange(0, "width");
  this.y = randomRange(0, "height");
  this.dx = 1;
  this.dy = 1;
  this.color = randomColor(colors);

  this.draw = () => {
    //Rectangle
    c.rect(this.x, this.y, 20, 20);
    c.fillStyle = this.color;
    c.fill();
  };

  this.update = () => {
    // Move
    this.y += this.dy;
    this.x += this.dx;
    // Draw on new position
    this.draw();
  };
}
var Squares; // Squares[1, 2, 3, 4, ...]
function generate() {
  Squares = [];

  for (var i = 0; i < 100; i++) {
    Squares.push(new Shape());
  }
}

//      Canvas methods
//Working with the Canvas
var canvas = document.querySelector("canvas");
var c = canvas.getContext("2d");

//Clearing the Canvas
c.clearRect(x, y, width, height);

//Fill & Border Color
c.fillStyle("color");
c.fill();

c.strokeStyle("color");
c.stroke();

//Rectangle
c.rect(x, y, width, height);

//Circle / Arc
c.arc(x, y, radius, startAngle, endAngle, anticlockwise);
