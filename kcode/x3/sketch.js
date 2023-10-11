let counter1 = 45
let counter2 = -45
function setup() {
  createCanvas(500, 500);
  background(100,250,120);
  rectMode(CENTER);
  noStroke();
  frameRate(100);
  angleMode(DEGREES)

}

function draw() {

  littleman();
  bigman();

  fill(3, 3);
  RotatingCircle();
  fill(160,50,20,10)
  push();
rect(0,0,40,40)
  rect(0,40,random(500),50,)
  rect(0,90,65,65)
  rect(0,155,random(430),80)
  rect(0,235,100,100)
  rect(0,335,random(380),120)
  rect(0,400,random(300),150)
pop();

function RotatingCircle() {
  let r = random(40);
  let rloop = random(10);
  for (let i = 0; i < r; i++) {
    fill(r+0, rloop+10, random(100));
    ellipse(random(width), random(height), r+10, r+10);

    push();
    fill(255);
          // orgin of moveX, moveY
          translate(250, 250);
          rotate(radians(counter2));
          scale(.75);
          fill(127)
          ellipse(300, 0, 100, 40, 5);
          ellipse(0, 300, 100, 40, 5);
          ellipse(200, 200, 100, 40, 5);
          ellipse(100, 100, 100, 40, 5);
          ellipse(-250, 0, 100, 40, 5);
          ellipse(-200, -100, 100, 40, 5);
          ellipse(-130, 100, 100, 40, 5);
          ellipse(-270, 250, 100, 40, 5);
          ellipse(0, 0, 100, 40, 5);
          ellipse(100, -200, 100, 40, 5);
          ellipse(250, -250, 100, 40, 5);
          ellipse(-180, -270, 100, 40, 5);
          ellipse(0, 0, 100, 40, 5);

          ellipse(300, 0, 40, 100, 5);
          ellipse(0, 300, 40, 100, 5);
          ellipse(200, 200, 40, 100, 5);
          ellipse(100, 100, 40, 100, 5);
          ellipse(-250, 0, 40, 100, 5);
          ellipse(-200, -100, 40, 100, 5);
          ellipse(-130, 100, 40, 100, 5);
          ellipse(-270, 250, 40, 100, 5);
          ellipse(0, 0, 40, 100, 5);
          ellipse(100, -200, 40, 100, 5);
          ellipse(250, -250, 40, 100, 5);
          ellipse(-180, -270, 40, 100, 5);
          ellipse(0, 0, 40, 100, 5);


           // pushing it over to the right and up
           // translate(25, -100);
           // rect(0, 0, 50, 100, 5);
         pop();
         counter1++;
         counter2--;
}




  }

}

function littleman() {
console.log("littleman");
push();
translate(100,200);
body();
arm(-55,0); // left arm
arm(55,0); // right arm
head();
rotate(85);
leg(70,0); //right leg
rotate(15)
leg(70,5); //left leg

pop();


}

function body() {
fill(0,255,255);


//rotate(45);
rect(0,0,60,80,0,0,20,20);

}
function arm(lx,ly) {
  fill(0,255,255);

  rect(lx,ly,80,20,10,10,15,15);

}
function head() {
  fill(0,255,255);

  //rotate(45);
  rect(0,-50,60,60,10,10,15,15);

}
function leg(lx,ly) {
// rotate(55);
rect(lx,ly,80,20,10,10,15,15);


}

function bigman() {
console.log("bigman");
push();
translate(300,100);
body2();
arm2(-55,0); // left arm
arm2(55,0); // right arm
head2();
rotate(85);
leg2(70,0); //right leg
rotate(20)
leg2(70,5); //left leg

pop();
}
function body2() {
fill(255,0,0);
//rotate(45);
rect(0,0,70,80,0,0,20,20);
}
function arm2(lx,ly) {
  fill(255,0,0);

  rect(lx,ly,80,30,10,10,15,15);
}
function head2() {
  fill(255,0,0);

  //rotate(45);
  rect(0,-50,70,70,10,10,15,15);
}
function leg2(lx,ly) {
// rotate(55);
rect(lx + 5,ly -5,90,30,10,10,15,15);

}
