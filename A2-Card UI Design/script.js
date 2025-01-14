// Find element by ID
var c = document.getElementById("card1");

// Create gradient
var ctx = c.getContext("2d");
var grd = ctx.createLinearGradient(0, 0, 220, 0);
grd.addColorStop(0, "red");
grd.addColorStop(1, "white");

// Fill with gradient
ctx.fillStyle = grd;
ctx.fillRect(10, 20, 3000, 80);