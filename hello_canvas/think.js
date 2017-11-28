var canvas = document.getElementById('canvas'),
    context = canvas.getContext('2d');
   
context.font = '38pt Arial';
context.fillStyle = 'red';
context.strokeStyle = 'yellow';

context.fillText("Hello Canvas", canvas.width/2 - 150,
                                 canvas.height/2 + 15);

context.strokeText("Hello Canvas", canvas.width/2 - 150,
                                   canvas.height/2 + 15 );
