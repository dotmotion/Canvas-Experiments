var canvas = document.querySelector("canvas");
var c = canvas.getContext("2d");

canvas.height = 300;
canvas.width = 300;

var x = 0,
  y = 0,
  dx = 3,
  dy = 1,
  col = 0;

// Animation Loop
function animate() {
  requestAnimationFrame(animate);
  c.fillStyle = "rgba(0,0,0,0.09)";
  c.fillRect(0, 0, canvas.width, canvas.height);

  c.fillStyle = "hsl(" + col + ", 50%, 50%)";
  c.fillRect(x, y, 20, 20);

  y += dy;
  x += dx;

  if (y + 20 >= 300 || y <= 0) {
    dy *= -1;
    col += 100;
  }
  if (x + 20 >= 300 || x <= 0) {
    dx *= -1;
    col += 100;
  }
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

// Circle / arc <--

// c.beginPath();
// c.arc(x, y, radius, startAngle, endAngle, anticlockwise);
// c.fillStyle = "color";
// c.fill();
// c.closePath();
