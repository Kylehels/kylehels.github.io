// this class describes the properties of a single particle.
let rotateArr = new Array(100);
let count = 8;
let counter1 = 90
let counter2 = 90
// frameRate(10);

class SickBrah {
  cx;
  cy;
  csc;
  ck;

  constructor(lx,ly,lsc,lk){
    this.cx = lx;
    this.cy = ly;
    this.csc = lsc;
    this.ck = lk;


    this.x = random(0,width);
    this.y = random(0,height);
    this.r = random(1,15);
    this.xSpeed = random(0,7);
    this.ySpeed = random(0,7);
  }
  rotateme(lx,ly){
    push();
    translate(this.cx, this.cy);
    scale(0.5);
    translate(900,10);
    rotate(radians(counter2));
    scale(1.5);
    fill(0,90,255);
    this.createParticle();
    this.moveParticle();
    this.joinParticles(particles);


    pop();
  }




// creation of a particle.
  createParticle() {
    noStroke();
    fill('rgba(255,20,20,10)');

    rect(this.x,this.y,this.r);
    rotate(0);


  }

// setting the particle in motion.
  moveParticle() {
    if(this.x < 0 || this.x > width)
      this.xSpeed*=-1;
    if(this.y < 0 || this.y > height)
      this.ySpeed*=-1;
    this.x+=this.xSpeed;
    this.y+=this.ySpeed;
  }

// this function creates the connections(lines)
// between particles which are less than a certain distance apart
  joinParticles(particles) {
    particles.forEach(element =>{
      let dis = dist(this.x,this.y,element.x,element.y);
      if(dis<150) {
        stroke('rgba(255,0,255,10)');
        line(this.x,this.y,element.x,element.y);
        rotate(0);
      }
    });
  }
}
class SuhDude {
  cx;
  cy;
  csc;
  ck;

  constructor(lx,ly,lsc,lk){
    this.cx = lx;
    this.cy = ly;
    this.csc = lsc;
    this.ck = lk;


    this.x = random(0,width);
    this.y = random(0,height);
    this.r = random(1,15);
    this.xSpeed = random(0,7);
    this.ySpeed = random(0,7);
  }
  rotateme(lx,ly){
    push();
    translate(this.cx, this.cy);
    scale(this.csc);
    translate(450,100);
    rotate(radians(counter2));
    scale(.5);
    fill(0,90,255);
    this.createParticle();
    this.moveParticle();
    this.joinParticles(particles);


    pop();
  }




// creates particles
  createParticle() {
    noStroke();
    fill('rgba(20,255,0,10)');

    circle(this.x,this.y,this.r);
    rotate(0);


  }

// creates motion for particles
  moveParticle() {
    if(this.x < 0 || this.x > width)
      this.xSpeed*=-1;
    if(this.y < 0 || this.y > height)
      this.ySpeed*=-1;
    this.x+=this.xSpeed;
    this.y+=this.ySpeed;
  }

// creates lines between particles
// lines between particles have to be less than a certain distance
  joinParticles(particles) {
    particles.forEach(element =>{
      let dis = dist(this.x,this.y,element.x,element.y);
      if(dis<150) {
        stroke('rgba(20,20,255,10)');
        line(this.x,this.y,element.x,element.y);
        rotate(0);
      }
    });
  }
}

let particles = [];




function setup() {
  createCanvas(720, 600);
  for(let i = 0;i<width/10;i++){
    particles.push(new SickBrah());
    frameRate(20);
      // rotateArr[i] = new SickBrah(random(40),random(50),random(.25,1.5), color(0,255,255));
  }
  for (let i = 0; i < rotateArr.length; i++) {

    // rotateArr[i] = new SickBrah(random(40),random(50),random(.25,1.5), color(0,255,255));
    rotateArr[i] = new SuhDude(random(40),random(50),random(.25,1.5), color(0,255,255));

  }
  // for(let i = 0;i<width/10;i++){
  //   particles.push(new SuhDude());
  //     // particles.push(new SickBrah());
  //
  //     // rotateArr[i] = new SickBrah(random(40),random(50),random(.25,1.5), color(0,255,255));
  // }

}

function draw() {
  background('#0f0f2f');
  if(frameCount > 200){

  for(let i = 0;i<particles.length;i++) {

    particles[i].createParticle();
    particles[i].moveParticle();
    particles[i].joinParticles(particles.slice(i));

    stroke[i] = random(0,4);

  }
}
  for (let i = 0; i < rotateArr.length; i++) {
    rotateArr[i].rotateme();
  }
}
