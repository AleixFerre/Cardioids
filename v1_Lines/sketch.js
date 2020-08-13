// Code by Aleix Ferré
// Sketch: https://editor.p5js.org/thecatalahd/sketches/BGdDwmS63
// Cardioid as envelope of a pencil of lines
// See wikipedia:
// https://en.wikipedia.org/wiki/Cardioid#Cardioid_as_envelope_of_a_pencil_of_lines

let steps = 200;
let r;
let increment;
let txtSize = 32;

// Personalizable values
let moving = true;
let multiplier = 2;
let maxMult = 5;

function setup() {
  createCanvas(windowWidth, windowHeight);
  r = min(width, height) / 2 - (txtSize * 3 - 10);
  increment = TWO_PI / steps;
}

function draw() {

  //steps = map(mouseX, 0, width, 10, 500);
  //increment = TWO_PI / steps;

  if (moving) {
    multiplier += 0.01;
    multiplier %= maxMult;
  } else {
    multiplier = 2;
  }

  background(0);

  textAlign(CENTER);
  textSize(txtSize);
  fill(255);
  noStroke();
  text("Cardioid Visualization #1", width / 2, txtSize);

  textSize(floor(txtSize / 2));
  text("Cardioid as envelope of a pencil of lines", width / 2, txtSize * 2);

  translate(width / 2, height / 2);
  //scale(-1, 1);

  noFill();
  stroke(255);
  strokeWeight(2);

  circle(0, 0, r * 2);

  strokeWeight(8);

  for (let i = 0; i < steps; i++) {
    let v = getPoint(i);
    point(v);
  }

  strokeWeight(1);

  for (let i = 0; i < steps; i++) {
    let v = getPoint(i);
    let v2 = getPoint(i * multiplier % steps);
    line(v.x, v.y, v2.x, v2.y);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  r = min(width, height) / 2 - (txtSize * 3 - 10);
}

function getPoint(i) {
  let v = createVector();

  v.x = r * cos(i * increment);
  v.y = r * sin(i * increment);

  return v;
}