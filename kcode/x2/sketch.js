
let tCounter = 0;
let f;
let value = 0;
let gSize = 80;
let b;
let b2;
function setup() {
createCanvas(400, 400);

  fill(0, 255, 0);
  //draw out text
  // text("No one cared who I was...", 100, 100);
noStroke();
b = loadImage("images/kakashi1.jpeg")
b2 = loadImage("images/obito1.png")
}

function draw() {
  background(255-value);



  fill(value);
  ellipse(width/2, height/2, 200, 100);
  ellipse(width/2, height/2, 100, 200);
  // // fill(0, 255, 255)
  // rect(width/5, height/5, 50, 50)

  if (!mouseIsPressed) {
   noTint();
   image(b, 0, 300, width/4, height/4);
   image(b2, 300, 300, width/4, height/4);
 } else {
   // tint(255, 126); // Apply transparency without changing color
   let checkCounter = 0;

   for ( let i = 0; i < height; i+= gSize) {

     // add extra count to make it offset in the next row
     checkCounter++;

     for ( let j = 0; j < width; j+=(gSize) ) {

          // mod operator  %
       if ( (checkCounter % 2) == 0 ) {
         image(b2, j, i, gSize, gSize);
       } else {

         image(b, j, i, gSize, gSize);
       }
       checkCounter++;
     }
   }
 }
 fill(255,50,0)
 text("No one cared who I was...", tCounter, 10);

 // this is an example of 'and' logic
 if ( key == 'c' || key == 'C' )  {
   fill(255, 50, 0);
   text("Until I put on a mask ", 10, tCounter);
 }
 tCounter ++;
 if (tCounter > width + 10) {
   tCounter = -50;
 }


}

function keyPressed() {

  if ( key == 'b' || key == 'B' ) {
    // example of toggle logic
    if (value == 0) {
      value = 255;
    } else {
      value = 0;
    }
  }
}
function mouseMoved() {
  value = value + 0.5;
  if (value > 255) {
    value = 0;
  }
}



// let gSize = 50;
// let b;
// let b2;
//
// function setup() {
//   createCanvas(800, 800);
//
//   background(0);
//   noStroke();
//   // Load in 2 different images of your own and name them below
//   // Images must be in the same directory as your .js file to load correctly
//   b = loadImage("images/appa.jpeg");
//   b2 = loadImage("images/momo.jpeg");
// }
//
// function draw() {
//
//   if (!mouseIsPressed) {
//     noTint();
//     image(b, 0, 0, width/2, height/2);
//     image(b2, width/2, height/2, width/2, height/2);
//   } else {
//     // tint(255, 126); // Apply transparency without changing color
//     let checkCounter = 0;
//
//     for ( let i = 0; i < height; i+= gSize) {
//
//       // add extra count to make it offset in the next row
//       checkCounter++;
//
//       for ( let j = 0; j < width; j+=(gSize) ) {
//
//            // mod operator  %
//         if ( (checkCounter % 2) == 0 ) {
//           image(b2, j, i, gSize, gSize);
//         } else {
//
//           image(b, j, i, gSize, gSize);
//         }
//         checkCounter++;
//       }
//     }
//   }
// }
