
var context = document.getElementById('canvas').getContext('2d');

context.clearRect(0, 0, context.canvas.width,
                           context.canvas.height);
  
   
context.shadowColor = 'red';
context.shadowOffsetX = 12;
context.shadowOffsetY = 12;
context.shadowBlur = 15;


context.fillStyle = 'rgba(100, 140, 230, 0.5)';
context.strokeStyle = 'red';

context.beginPath();
context.rect(10,10,100,100);
context.stroke();


context.beginPath();
context.rect(120,120,100,100);
context.fill();

context.beginPath();
context.rect(240,240,100,100);
context.fill();
context.stroke();

context.shadowOffsetX = -12;
context.shadowOffsetY = -12;
context.beginPath();
context.rect(360,120,100,100);
context.fill();

