var canvas = document.getElementById('canvas'),
    context = canvas.getContext('2d'),
    image = new Image(),
    gradient = context.createLinearGradient(0, 0,
                  canvas.width, canvas.height),
    text = 'Canvas',
    pattern; 


function drawGradientText() {
   context.fillStyle = gradient;
   context.fillText(text, 65, 200);
   context.strokeText(text, 65, 200);
}

function drawPatternText() {
   context.fillStyle = pattern;
   context.fillText(text, 65, 450);
   context.strokeText(text, 65, 450);
}


image.onload = function (e) {
   pattern = context.createPattern(image, 'repeat'); 
   drawPatternText();
};
 
image.src = "bg.jpg";


context.font = '256px Arial';
context.strokeStyle = 'black';


context.shadowColor   = 'rgba(100, 100, 150, 0.8)';
context.shadowOffsetX = 5;
context.shadowOffsetY = 5;
context.shadowBlur    = 10;

gradient.addColorStop(0,    'blue');
gradient.addColorStop(0.15, 'blue');
gradient.addColorStop(0.35,  'white');
gradient.addColorStop(0.6, 'yellow');
gradient.addColorStop(0.85, 'red');
gradient.addColorStop(1.0,  'red');

drawGradientText();


