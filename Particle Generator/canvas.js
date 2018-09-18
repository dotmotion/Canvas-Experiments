const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

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

// Event Listener
addEventListener("resize", () => {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
});

// Constructor Function
function Particle() {
  this.x = canvas.width / 2;
  this.y = canvas.height / 2;
  this.radius = 5;
  this.dx = Math.random() * 10 - 5;
  this.dy = Math.random() * 10 - 5;
  // this.gravity = 0.3;
  this.color = "hsla(" + parseInt(Math.random() * 255, 10) + ", 90%, 50%, 0.7)";

  particleindex++;
  particles[particleindex] = this;
  this.id = particleindex;
  this.life = 0;
  this.lifespan = Math.random() * 30 + 50;

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

    //re-Randomize speeds
    if (Math.random() < 0.1) {
      this.dx = Math.random() * 10 - 5;
      this.dy = Math.random() * 10 - 5;
    }

    //Gravity
    // this.dy += this.gravity;
    this.life++;

    //Delete old particles
    if (this.life >= this.lifespan) {
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

  //Particle Generator
  for (var i = 0; i < numPerFrame; i++) {
    new Particle();
  }

  //Draw & Update each particle
  for (var i in particles) {
    particles[i].update();
  }
}

animate();
