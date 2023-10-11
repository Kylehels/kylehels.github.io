function setup() {
  createCanvas(400, 400);


  noStroke();
}
  function draw() {
    let counter = 0;
    background(117);
    stroke(40);
    line(0,0,400,400)

    fill(255,255,0,120);
    rect(0, counter, width - random(50), 10);
    fill(255,0,255,120);
    rect(counter, 0, 10, height - random(50));

  if (counter > height) {
    background(0);
    counter = 0;
  } else {
    counter+=20;
  }


  let a = 0.0;
  let inc = TWO_PI/25.0;
  console.log(" The inc = " + inc);
  stroke(0, 255, 255);
  // for (let r=0; r < height; r+=20) {
  // fill(0);
  // rect(0, r, width, 10);
  // fill(255);
  // rect(r, 0, 10, height);



  for (let i=0; i < width; i+=2) {
    line(i, 5, i, random(150) + sin(a)*70.0);
    console.log(" The angle = " + a + "The sin = " + sin(a));
    a = a + inc;
  }
  for (let i = 0; i < 400; i += 20) {
    for (let j = 0; j < 400; j += 20) {
      // rand = random(255);
      fill(random(255), random(255) , random(255));
      ellipse( i+5, j+5, 8, 8 );
      //console.log(gridName + ", now has a fill value of " + rand);
      stroke(255)
    }
  }
  fill(random(255), random(255), random(255));
  circle(200,200,random(100),random(100))
}
