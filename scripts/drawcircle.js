//get a reference to the canvas
var ctx = $('#canvas')[0].getContext("2d");

//draw a circle
ctx.beginPath();
ctx.arc(75, 75, 10, 0, Math.PI*2, true); 
ctx.closePath();
ctx.fill();
