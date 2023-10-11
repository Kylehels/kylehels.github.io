

let currentkey = '1';

let bgc ;

let bkcount;


function setup() {
    createCanvas(600, 600);
    background(255);
    smooth();
    bgc = color(255);
    bkcount = 20;
}

function draw() {
    // triggering the clear_print function
    if( keyIsPressed) {
    clear_print();
}
// triggering the newkeychoice
if(mouseIsPressed) {
  drawChoice();
}


}


function drawChoice() {
  // the key mapping if statemens that you can change to do anything you want.
  // just make sure each key option has the a stroke or fill and then what type of
  // graphic function


 // key global variable contains whatever key was last pressed
 let currentkey = key;

switch(currentkey) {
case '1':
  console.log("1");  // black line
 // let k = color(0);

  drawline(color(0), mouseX, mouseY, pmouseX, pmouseY);
  break;
case '2':
  console.log("2");  // fat red line
  drawFatLine(color(255,0,0), mouseX, mouseY, pmouseX, pmouseY);
  break;
case '3':
  console.log("3");  // fat blue line
  drawFatLine(color(0,25,250), mouseX, mouseY, pmouseX, pmouseY);
  break;
case '4':
  console.log("4");  // fat cyan line
  drawFatLine(color(0,255,255), mouseX, mouseY, pmouseX, pmouseY);
  break;
case '5':
  console.log("5");  // erase with bg color
  eraser(bgc,mouseX, mouseY,25);
   break;
case '6':
    console.log("6");  // project brush
    kyleBrush(bkcount, mouseX, mouseY, pmouseX, pmouseY);

    if (bkcount > 255 ) {

        bkcount = 70;
    } else {
        bkcount+=3;
    }


    break;
  case '7':
        console.log("7");  // project brush
        kyleBrush2(bkcount, mouseX, mouseY, pmouseX, pmouseY);

        if (bkcount > 255 ) {

            bkcount = 70;
        } else {
            bkcount+=3;
        }


        break;
      case '8':
              console.log("7");  // project brush
              kyleBrush3(bkcount, mouseX, mouseY, pmouseX, pmouseY);

              if (bkcount > 255 ) {

                  bkcount = 70;
              } else {
                  bkcount+=3;
              }


              break;


default:             // Default executes if the case labels
  console.log("None");   // don't match the switch parameter
  break;
}

}

function drawline( k,  lx, ly,  px, py) {
 // strokeWeight(1);
  stroke(k);
  line(lx, ly, px, py);
  console.log(mouseX);
  console.log(pmouseX);
}

function drawFatLine( k,  lx, ly,  px, py) {
  strokeWeight(10);
  stroke(k);
  line(lx, ly, px, py);
}

function kyleBrush(bcount, lx, ly,  px, py) {

  strokeWeight(random(80,1));
  stroke(bkcount,200,200);
  //image(b,lx,ly, 30,30);
  line(lx, ly, px, py);
}
function kyleBrush2(bcount, lx, ly,  px, py) {

  strokeWeight(random(8,1));
  stroke(0,200,bkcount);
  //image(b,lx,ly, 30,30);
  circle(lx, ly, px, py);
}
function kyleBrush3(bcount, lx, ly,  px, py) {

  strokeWeight(random(50,1));
  stroke(255,bkcount,0);
  //image(b,lx,ly, 30,30);
  rect(lx, ly, px, py);
}



function eraser( k, lx, ly, sz) {
  stroke(k);
  ellipse(lx, ly, sz,sz);
}


function clear_print() {

// these 2 options let you choose between clearing the background
// and saveing the current image as a file.
  if (key == 'x' || key == 'X') {
     background(255);
  } else if (key == 'p' || key == 'P') {
      saveFrames('image-0', 'png', 1, 1);
      key = '';  // resets the key so it does not make more than one image.
  }

}
