const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

const mouse = {
  x: innerWidth / 2,
  y: innerHeight / 2
};

let numPerFrame = 2;
let particles = {};
let particleindex = 0;

//Utility Functions
function randomRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function countParticles(obj) {
  var total = 0;

  for (var property in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, property)) {
      total++;
    }
  }

  return total;
}

// Event Listeners
addEventListener("resize", () => {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
});

addEventListener("mousemove", event => {
  mouse.x = event.clientX;
  mouse.y = event.clientY;
});

addEventListener("mousemove", () => {
  //Particle Generator
  for (var i = 0; i < numPerFrame; i++) {
    new Particle(mouse.x, mouse.y, randomRange(200, 255));
  }
});

// Constructor Function
function Particle(x, y, col) {
  this.x = x;
  this.y = y;
  this.radius = 5;
  this.dx = Math.random() * 10 - 5;
  this.dy = Math.random() * 10 - 5;
  this.gravity = 0.3;
  this.col = col;
  this.opacity = 1;
  this.color = "hsla(" + this.col + ", 90%, 50%, " + this.opacity + ")";

  particleindex++;
  particles[particleindex] = this;
  this.id = particleindex;

  this.draw = () => {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.fillStyle = this.color;
    c.fill();
    c.closePath();
  };

  this.update = () => {
    this.draw();

    this.x += this.dx;
    this.y += this.dy;

    this.opacity -= 0.03;
    this.color = "hsla(" + this.col + ", 90%, 50%, " + this.opacity + ")";

    //Delete old particles
    if (this.opacity <= 0) {
      delete particles[this.id];
    }
  };
}

// Animation Loop
function animate() {
  requestAnimationFrame(animate);
  //Background
  c.fillStyle = "rgba(22,25,27, 0.3)";
  c.fillRect(0, 0, canvas.width, canvas.height);

  //Population counter
  c.fillStyle = "white";
  let totalParticles = countParticles(particles);
  c.font = "15px Arial";
  c.fillText("Population: " + totalParticles + "", 10, 30);

  //Draw & Update each particle
  for (var i in particles) {
    particles[i].update();
  }
}

animate();
