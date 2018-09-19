const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

let numPerFrame = 80;
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

// Event Listener
addEventListener("resize", () => {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
});

// Particle Constructor
function Particle(x, y, col) {
  this.x = x;
  this.y = y;
  this.radius = 5;
  this.dx = Math.random() * 9 - 4;
  this.dy = Math.random() * 9 - 4;
  this.gravity = 0.02;
  this.opacity = 1;
  this.color = "hsla(" + col + ", 90%, 50%, 0.7)";

  particleindex++;
  particles[particleindex] = this;
  this.id = particleindex;
  this.life = 0;
  this.lifespan = Math.random() * 30 + 30;

  this.draw = () => {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.fillStyle = this.color;
    c.fill();
    c.closePath();
  };

  this.update = () => {
    this.draw();
    //Movement
    this.x += this.dx;
    this.y += this.dy;
    //Gravity
    this.dy += this.gravity;

    // this.life++;
    this.opacity -= Math.random() * 0.025;

    //Delete dead particles
    // if (this.life >= this.lifespan) {
    if (this.opacity <= 0) {
      delete particles[this.id];
    }
  };
}

// Rocket Constructor
function Rocket() {
  this.x = randomRange(200, innerWidth - 200);
  this.y = innerHeight;
  this.radius = 2;
  this.dx = randomRange(-3, 3);
  this.dy = randomRange(-20, -12);
  this.opacity = 1;
  this.color = "rgba(255, 255, 255," + this.opacity + ")";
  this.gravity = 0.2;
  this.ready = false;

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

    this.dy += this.gravity;

    if (this.dy >= 0) {
      this.ready = true;
      this.opacity = 0;
    }

    if (this.ready) {
      explosion(this.x, this.y);
      rocket = new Rocket();
    }
  };
}

function explosion(x, y) {
  // Particle Generator
  const col = parseInt(Math.random() * 255, 10);
  for (var i = 0; i < numPerFrame; i++) {
    new Particle(x, y, col);
  }
}

var rocket = new Rocket();

// Animation Loop
function animate() {
  requestAnimationFrame(animate);
  //Background
  c.fillStyle = "rgba(22,25,27, 0.6)";
  c.fillRect(0, 0, canvas.width, canvas.height);

  // Particle counter
  c.fillStyle = "white";
  let totalParticles = countParticles(particles);
  c.font = "15px Arial";
  c.fillText("Particles: " + totalParticles + "", 10, 30);

  rocket.update();

  //Draw & Update each particle
  for (var i in particles) {
    particles[i].update();
  }
}

animate();
