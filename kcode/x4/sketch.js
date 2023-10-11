let backr = 255
let backg = 255
let backb= 255
let count = 8;
let loX = new Array(count);
let loY = new Array(count);
let speedX = new Array(count);
let speedY = new Array(count);
let sizeW = new Array(count);
let sizeH = new Array(count);
let colors1 = new Array(count);
let colors2 = new Array(count);
let colors3 = new Array(count);

let opacity = new Array(count);
let stroke = new Array(count);
let newspeedX = new Array(count);
let newspeedY = new Array(count);
let newcolors = new Array(count);
let newloX = new Array(count);
let newloY = new Array(count);
let newsizeW = new Array(count);
let newsizeH = new Array(count);
function setup() {
  createCanvas(200, 400);
  frameRate(30)
  for (let i=0; i < loX.length; i++) {
    loX[i] = width/2;
    loY[i] = height/2;
    speedX[i] = random(0, 10);
    speedY[i] = random(0, 10);
    sizeW[i] = random(50, 80);
    sizeH[i] = random(50, 80);
    colors1[i] = int(random(0, 255));
    colors2[i] = int(random(0, 255));
    colors3[i] = int(random(0, 255));
    opacity[i] = random(0,100);
    stroke[i] = random(0,4);
    ///////////
  for (let y=0; y < newloX.length; y++) {
    newspeedX[y] = random(0, 10);
    newspeedY[y] = random(0, 10);
    newcolors[y] = int(random(0, 255));
    newloX[y] = width/2
    newloY[y] = height/2
    newsizeW[y] = random(10,100);
    newsizeH[y] = random(10, 100);

  }
 }
}
function draw() {
background(random(backr), 0 , random(backb));
fill(255);

rect(15, 15, 170, 365);

for (let i = 0; i < loX.length; i++) {

  loX[i] += speedX[i];
  loY[i] += speedY[i];

  fill(colors1[i],colors2[i],colors3[i],opacity[i]);
  strokeWeight(stroke[i]);
  ellipse(loX[i], loY[i], sizeW[i], sizeW[i], stroke[i]);




  if (loX[i] < 20+sizeW[i]/2 || loX[i] > (width-30)-sizeW[i]/3 ) {
    speedX[i] = -speedX[i];
  }
  if (loY[i] < 20+sizeW[i]/2 || loY[i] > (height-30)-sizeW[i]/3) {
    speedY[i] = -speedY[i];
  }
}


for (let y = 0; y < newloX.length; y++) {

  newloX[y] += newspeedX[y];
  newloY[y] += newspeedY[y];

  fill(colors1[y],colors2[y],colors3[y],opacity[y]);
  strokeWeight(stroke[y]);
  rect(newloX[y], newloY[y], newsizeW[y], newsizeW[y],10);




  if (newloX[y] < 8+sizeW[y]/2 || newloX[y] > (width-25)-sizeW[y]/2 ) {
    newspeedX[y] = -newspeedX[y];
  }
  if (newloY[y] < 0+sizeW[y]/2 || newloY[y] > (height-25)-sizeW[y]/2) {
    newspeedY[y] = -newspeedY[y];
  }
}





}
