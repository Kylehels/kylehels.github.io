let monoSynth;
let lastsec;
let lastmin;


let seconds;
let minutes;
let hours;
let days;

let hour12;

function setup() {
  createCanvas(500, 500);
  noStroke();

  lastsec = second();
  lastmin = minute();
  // monoSynth = new p5.MonoSynth();
}

function draw() {


  if (hour() > 12) {
    hour12 = hour() - 12;
  } else {
   	hour12 = hour();
  }

  if (hour() > 12){

     background(0);
     // rect(0, 0, width, height);
     // fill(255, 0 + (seconds * 4.5), 0 + (minutes * 4.5));
   } else{
     background(255);
     noStroke();
  }
  seconds = map(second(), 0, 59, 0, width,);
  minutes = map(minute(), 0, 59, 0, width);
  hours = map(hour12, 0, 23, 0, width);
  days = map(day(), 0, 24, 0, width);


  fill(255,0,0);
  rect(0, 0, seconds, 250,0,180,180,0);
  fill(255,0,255);
  rect(0, 250, minutes, 150,0,180,180,0);
  fill(255,127,255);
  rect(0, 400, hours, 75,0,180,180,0);
  fill(127,127,255);
  rect(0, 475, days, 25,0,180,180,0);

  if ( seconds != lastsec ) {
    lastsec = seconds;
    console.log("second chime" );
    playSynthSec();
    // playOscillator();
    playSynthMin();
  }


  if ( minutes != lastmin ) {
    lastmin = minutes;
    console.log("minute chime" );
    playSynthMin();
    // playOscillator();
  }
}

  function setupSound() {

    userStartAudio();
  }

  function playSynthSec() {
    let note = random([180,180,100]);
  // note velocity (volume, from 0 to 1)
  let velocity = 0.5 ; random(100,200);
  // time from now (in seconds)
  let time = 1.9;
  // note duration (in seconds)
  let dur = 1/6;
  // monoSynth.play(note, velocity, time, dur);
}
  function playSynthMin(){
    // note velocity (volume, from 0 to 1)
let velocity = 0.5 ; random(100,200);
// time from now (in seconds)
let time = 1.9;
// note duration (in seconds)
let dur = 1/4;


// monoSynth.play(300, .8, 4.5, dur);

  }
