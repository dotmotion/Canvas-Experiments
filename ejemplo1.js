var canvas = document.querySelector("canvas");
var c = canvas.getContext("2d");

canvas.height = 400;
canvas.width = 400;

c.fillStyle = "black";
c.fillRect(0, 0, canvas.width, canvas.height);

var x = canvas.width / 2,
  y = canvas.height / 2,
  dx = 1,
  dy = 1;

// Animation Loop
function animate() {
  requestAnimationFrame(animate);

  c.fillStyle = "white";
  c.fillRect(x, y, 20, 20);

  x += dx;
  y += dy;
}

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
