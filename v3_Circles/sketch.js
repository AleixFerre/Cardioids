// Code by Aleix Ferré
// Sketch: https://editor.p5js.org/thecatalahd/sketches/OnL1_2gwr
// Cardioid as envelope of a pencil of circles
// See wikipedia:
// https://en.wikipedia.org/wiki/Cardioid#Cardioid_as_envelope_of_a_pencil_of_circles

let steps = 50;
let increment;
let r;

let actualSteps = 0;
let txtSize = 32;

// Personalizable values
let showSteps = true;

function setup() {
  createCanvas(windowWidth, windowHeight);
  increment = TWO_PI / steps;

  r = abs(min(width, height) / 10);
  frameRate(10);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  r = abs(min(width, height) / 10);
}

function draw() {
  background(0);

  textAlign(CENTER);
  textSize(txtSize);
  fill(255);
  noStroke();
  text("Cardioid Visualization #3", width / 2, txtSize);

  textSize(floor(txtSize / 2));
  text("Cardioid as envelope of a pencil of circles", width / 2, txtSize * 2);

  translate(width / 2, height / 2);

  noFill();
  stroke(0, 0, 255);
  strokeWeight(2);

  if (showSteps) {
    circle(0, 0, r * 2);

    strokeWeight(3);
    stroke(255);

    for (let i = 0; i < steps; i++) {
      let v = getPoint(i * increment);
      point(v);
    }
  } else {
    actualSteps = steps;
  }

  strokeWeight(1);
  stroke(255);

  let center = createVector();
  let other = createVector();
  let radius = 0;

  for (let i = 0; i < actualSteps; i++) {
    center = getPoint(i * increment);
    other = getPoint(i * 2 * increment);
    radius = dist(center.x, center.y, other.x, other.y);
    circle(center.x, center.y, radius * 2);
  }


  if (showSteps) {
    stroke(255, 0, 0);
    line(center.x, center.y, other.x, other.y);

    actualSteps++;
    if (actualSteps > steps) {
      actualSteps = 0;
    }
  }

}


function getPoint(angle) {
  let v = createVector();
  v.x = r * cos(angle);
  v.y = r * sin(angle);
  return v;
}