
var context = document.getElementById('canvas').getContext('2d'),
    CLOCKWISE = 1,
    COUNTER_CLOCKWISE = 2;


function drawTwoArcs(sameDirection) {
   context.beginPath();
   context.arc(300, 170, 150, 0, Math.PI*2, false); // outer: CW
   context.arc(300, 170, 100, 0, Math.PI*2, !sameDirection); // innner

   context.fill();
   context.shadowColor = undefined;
   context.shadowOffsetX = 0;
   context.shadowOffsetY = 0;
   //context.stroke();
}

function draw(sameDirection) {
   context.clearRect(0, 0, context.canvas.width,
                           context.canvas.height);
  
   context.save();

   context.shadowColor = 'rgba(0, 0, 0, 0.8)';
   context.shadowOffsetX = 12;
   context.shadowOffsetY = 12;
   context.shadowBlur = 15;

   drawTwoArcs(sameDirection);

   context.restore();

}

context.fillStyle = 'rgba(100, 140, 230, 0.5)';
context.strokeStyle = 'red';

draw(false);
/*
context.beginPath();
context.rect(10,10,100,100);
context.stroke();

context.beginPath();
context.rect(50,50,100,100);
context.stroke();
*/
