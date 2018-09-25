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

// Event Listeners
addEventListener("resize", () => {
  canvas.width = innerWidth;
  canvas.height = innerHeight;

  //init()
});

// Constructor Function
function Circle(x, y) {
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.color = color;

  this.draw = function() {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.fillStyle = this.color;
    c.fill();
    c.closePath();
  };

  this.update = function() {
    this.draw();
  };
}

// Array Generator
let Circles;
function init() {
  Circles = [];

  for (let i = 0; i < 400; i++) {
    Circles.push(new Circle(x, y));
  }
}

// Animation Loop
function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, canvas.width, canvas.height);

  Circles.forEach(Circle => {
    Circle.update();
  });
}

init();
animate();
