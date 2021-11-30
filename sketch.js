let heightOffset = 15,
  maxWidth = 6,
  turbineWidth = 15,
  heliceHeight,
  heliceWidth = 3,
  angle = 0,
  speed = 1.25,
  slider, p

function setup() {
  createCanvas(400, 400);
  heliceHeight = height/4;
  p = createP(speed + ' speed');
  slider = createSlider(0, 200, speed, 0.01);  
  frameRate(60)
}

function draw() {
  strokeWeight(0.5)  
  speed = slider.value();
  p.elt.innerText = speed + ' speed'
  //59.6 
  background(100);
  translate(width / 2, height / 2)
  
  //base
  rect(maxWidth / -2, 0, maxWidth, height / 2)
  
  //center turbine
  circle(0, 0, turbineWidth)
  push();
  angleMode(DEGREES)
  rotate(angle)
  let spaceFromCenter = turbineWidth / 5
  let x = cos(-90) * turbineWidth - heliceWidth / 2
  let y = sin(-90) * turbineWidth / 2 + spaceFromCenter

  //one
  rect(x, y, heliceWidth, -heliceHeight)
  
  //two
  rotate(360 / 3)
  rect(x, y, heliceWidth, -heliceHeight)

  //three
  rotate(360 / 3)
  rect(x, y, heliceWidth, -heliceHeight)
  pop();
  
  angle += speed
}

const guides = () => {
  line(0, -height, 0, height)
  rotate(360 / 3)
  line(0, -height, 0, 0)
  rotate(360 / 3)
  line(0, -height, 0, 0)
}