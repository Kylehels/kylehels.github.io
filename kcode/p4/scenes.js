
let loy= 0;

function intro()  {


    this.setup = function() {


      background('BLUE');
      textAlign(CENTER);
      textSize(29);
    }


    this.enter = function()  {



      loy = 100;
      background("red");

    }


    this.draw = function()
    {
        background(mouseX);
        textAlign(CENTER);

        if (loy > 400){
          loy = 40
        } else {
          loy++;
        }


        push();
        textSize(loy/10);
        translate(width/2,loy);
        fill(255,0,0);
        text("Left to right... to see the light, click to break the window", 0, 100);

        if (loy > 255) {
          loy = 0;
        } else {
          loy++;
        }

        pop();
        translate(width/2,height/2);
        fill(0,120,255);
          text("Press 2 for the next scene and 3 for the 3rd scene, or click to continue", 0, 100);
          fill(0,255,125);
            text("Press 1 to restart", 0, 150);



    }

    // this.keyPressed = function() {
    //
    //
    // }

    this.mousePressed = function()
    {
        if (snd1.isPlaying()) {

            snd1.pause(); // .play() will resume from .pause() position

        } else {
            snd1.play();

        }



        this.sceneManager.showNextScene();
    }
}

///////////////////////  2  ////////////////////////

function scene2()  {

  let loy= 255;

    this.setup = function()  {





    }

    this.enter = function()  {
        let loy= 255;
    }




    this.draw = function() {

      background(0,250,0);
      textAlign(CENTER);
      textSize(29);
      var r = sin(frameCount * 0.1);

        push();
fill(random(0,255));
          square(width / 2, height / 2, map(r, 0, 5, 10, 700));
        //
        translate(width/2,height/2);
        fill(random(0,255));
        // text("Wiggle the mouse to get their attention...", 0, 100);
        // text("Click the mouse or hit 'H' to go back.", 0, 150);




        if (loy < 0) {
          loy = 255;
        } else {
          loy--;
        }
        //
        pop();


    }

    this.mousePressed = function()
    {
        if (snd2.isPlaying()) {

            snd2.pause();

        } else {
            snd2.play();

        }



        this.sceneManager.showNextScene();
    }




}







////////////////////////////// 3 /////////////////

function scene3() {

  let loy= 255;

    this.setup = function()  {





    }

    this.enter = function()  {
        let loy= 255;

    }




    this.draw = function() {
      background(0,0,255);
      textAlign(CENTER);
      textSize(29);
      var r = sin(frameCount * 0.1);

        push();
fill(random(0,255));
          square(width / 2, height / 2, map(r, 0, 5, 10, 700));

        translate(width/2,height/2);
        fill(random(0,255));





        if (loy < 0) {
          loy = 255;
        } else {
          loy--;
        }
        
        pop();

    }

    this.mousePressed = function()  {

      mgr.showScene( scene2 );
    }





}




function theend() {

  this.setup = function()  {
      console.log("we are setting up on the result scene");
  }

  this.enter = function() {
     console.log("we are entering the result scene");

  }

 this.draw = function() {
   background(255,0,0);
   text("the result",width/2,height/2);

 }


}
