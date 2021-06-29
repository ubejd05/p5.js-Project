let circles = 50; // max 100, min 10
let wave = 3; //  min 0
let angle = 60;  // max 320, min 2
let size = 3;  // max 4, min 1
let speed = 3;  // max 20, min 0
let spiral = 100;  // min 1, nese statike pakufi, nese levizese max 500
// let rrethiVogelMes = 0;  //1 ose 0

// me  qit rrotullim statik edhe levizes
// me qit rbg ose joRBG

let myCanvas = document.getElementById("myCanvas")
// myCanvas.style.backgroundColor = "red";

function setup() {
   createCanvas(500, 400, WEBGL).parent("canvas");
   angleMode(DEGREES);
}

function draw() {
   background(30);

   rotateX(60);

   noFill();
   stroke(255);

   for (let i = 0; i < circles; i++) {

      let r = map(sin(frameCount), -1, 1, 0, 255);
      let g = map(i, 0, circles, 0, 255)
      let b = map(cos(frameCount), -1, 1, 255, 0)

      stroke(r,g,b)
      
      rotate(frameCount / spiral)  //nese e hekim "frameCount / " eshte statike


      beginShape();
      for (let j = 0; j <= 360; j += angle) {
         let rad = i * size;   //  + rrethiVogelMes
         let x = rad * cos(j);
         let y = rad * sin(j);
         let z = sin(frameCount * speed + i * wave) * 50;
         vertex(x, y, z);
      }
      endShape();
   }
}
