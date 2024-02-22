function setup() {
  createCanvas(400, 400);
  x = 100
  y = 100
  dx = 1
  dy = 1
  size = 85
  ds = 0.25
}

function draw() {
  background(220);
  circle(x,y,size)
  size = size + ds
  if (size > 95) {
    ds = -0.25
  }
  if (size < 75) {
    ds = .25
  }
  if (x > 300 | x < 100) {
    dx = - dx
  }
  if (y > 300 | y < 100) {
    dy = - dy
  }
  x = x + dx
  y = y + dy
}