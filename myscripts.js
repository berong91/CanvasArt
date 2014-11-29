var canvas;
var ctx;
var smokeIndex = 0;

function getPosition(event){
	var x = event.x;
	var y = event.y;
	x -= canvas.offsetLeft;
	y -= canvas.offsetTop;
	
	document.getElementById("x").innerHTML  =  x;
	document.getElementById("y").innerHTML  =  y;
}

function drawInterval(){
	setInterval(function(){draw()}, 100);
}

function draw() {
	canvas = document.getElementById("myShape");
	canvas.addEventListener("mousemove", getPosition, false);
	ctx = canvas.getContext("2d");
	// Always call first
	
	//
	clearCanvas();
	drawBackground();
	drawHouseBox();
	drawRoof();	
	drawDetails();
	drawSmoke();
	
	// Always call last
	drawBorder();
}

function drawBackground(){
	ctx.beginPath();
	ctx.rect(0, 0, 300, 300);
	ctx.closePath();
	ctx.fillStyle = "cyan";
	ctx.fill();

	// Draw quadratic curve for a hill
	ctx.beginPath();
	ctx.moveTo(0,150);
	ctx.quadraticCurveTo(100,100,300,200);
	ctx.lineTo(300,300);
	ctx.lineTo(0,300);
	ctx.lineTo(0,150);
	ctx.closePath();
	ctx.lineWidth = 3;
	ctx.strokeStyle = "black";
	ctx.stroke();
	ctx.fillStyle  = "green";
	ctx.fill();
}
			
function drawHouseBox(){
	// Draw a box object as a house
	ctx.beginPath();
	ctx.strokeStyle = "black";
	ctx.lineWidth = 3;
	ctx.moveTo(30, 150);
	ctx.lineTo(30,270);
	ctx.lineTo(130,270);
	ctx.lineTo(130,150);
	ctx.stroke();				
	ctx.closePath();
	ctx.fillStyle  = "brown";
	ctx.fill();
	
	ctx.beginPath();
	ctx.strokeStyle = "black";
	ctx.lineWidth = 3;
	ctx.moveTo(132, 150);
	ctx.lineTo(260, 130);
	ctx.lineTo(260, 250);
	ctx.lineTo(132, 270);
	ctx.stroke();				
	ctx.closePath();
	ctx.fillStyle  = "brown";
	ctx.fill();
}
	
function drawRoof(){
	// Draw a roof
	ctx.beginPath();
	ctx.strokeStyle = "black";
	ctx.lineWidth = 3;
	ctx.moveTo(78, 80);
	ctx.lineTo(13,150);
	ctx.lineTo(140,150);
	ctx.lineTo(78,80);
	ctx.stroke();
	ctx.closePath();
	ctx.fillStyle  = "yellow";
	ctx.fill();
	
	ctx.beginPath();
	ctx.strokeStyle = "black";
	ctx.lineWidth = 3;
	ctx.moveTo(78, 80);
	ctx.lineTo(228,60);
	ctx.lineTo(280,130);
	ctx.lineTo(142	,150);
	ctx.lineTo(78, 80);
	ctx.stroke();
	ctx.closePath();
	ctx.fillStyle  = "yellow";
	ctx.fill();
}

function drawDetails(){
	// Draw house's details
	// Draw front door
	ctx.beginPath();
	ctx.strokeStyle = "black";
	ctx.lineWidth = 3;
	ctx.moveTo(55, 270);
	ctx.lineTo(105,270);
	ctx.lineTo(105,215);
	ctx.arc(80, 215, 25, 0,1*Math.PI, true);
	ctx.lineTo(55,270);
	ctx.stroke();
	ctx.closePath();
	ctx.fillStyle  = "#CCFF33";
	ctx.fill();	
	
	// Draw chimney
	ctx.beginPath();
	ctx.strokeStyle = "black";
	ctx.lineWidth = 3;
	ctx.moveTo(220, 100); 
	ctx.lineTo(244, 95); 
	ctx.lineTo(255, 107);
	ctx.lineTo(232, 111);
	ctx.lineTo(220, 100);
	ctx.stroke();
	ctx.closePath();
	ctx.fillStyle  = "brown";
	ctx.fill();	
	
	ctx.beginPath();
	ctx.lineWidth = 3;
	ctx.moveTo(230, 108);
	ctx.lineTo(230, 50);
	ctx.lineTo(245, 48);
	ctx.lineTo(245, 105);
	ctx.strokeStyle = "black";
	ctx.stroke();
	ctx.closePath();
	ctx.fillStyle  = "#666633";
	ctx.fill();	
	
	// Draw windows
	ctx.beginPath();
	ctx.lineWidth = 2;
	ctx.moveTo(150, 180);
	ctx.lineTo(180, 175);
	ctx.lineTo(184, 195);
	ctx.lineTo(154, 200);
	ctx.lineTo(150, 180);
	ctx.strokeStyle = "black";
	ctx.stroke();
	ctx.closePath();
	ctx.fillStyle  = "#FFFF99";
	ctx.fill();
	
	ctx.beginPath();
	ctx.lineWidth = 2;
	ctx.moveTo(215, 170);
	ctx.lineTo(245, 165);
	ctx.lineTo(249, 185);
	ctx.lineTo(219, 190);
	ctx.lineTo(215, 170);
	ctx.strokeStyle = "black";
	ctx.stroke();
	ctx.closePath();
	ctx.fillStyle  = "#FFFF99";
	ctx.fill();
	
	// Draw clock
	ctx.beginPath();
	ctx.lineWidth = 3;
	ctx.arc(75, 130, 10, 0,  Math.PI * 2, true);
	ctx.strokeStyle = "black";
	ctx.stroke();
	ctx.closePath();
	ctx.fillStyle  = "#	99CCFF";
	ctx.fill();
	
	ctx.beginPath();
	ctx.lineWidth = 2;
	ctx.moveTo(75, 130);
	ctx.lineTo(75, 120);
	ctx.stroke();
	ctx.closePath();
	
	ctx.beginPath();
	ctx.lineWidth = 1;
	ctx.moveTo(75, 130);
	ctx.lineTo(83, 130);
	ctx.stroke();
	ctx.closePath();
}

function drawSmoke(){
	if (smokeIndex ==10)
		smokeIndex = 0;
	else
		smokeIndex = smokeIndex + 1;
		
	ctx.beginPath();
	ctx.arc(236, 35 - smokeIndex*2,  5 + smokeIndex/2, Math.PI * 0.7 , Math.PI * 1.4);
	ctx.arc(237, 33 - smokeIndex*2,  5 + smokeIndex/2, Math.PI * 1.4 , Math.PI * 1.8);
	ctx.arc(240, 33 - smokeIndex*2,  5 + smokeIndex/2, Math.PI * 1.8, Math.PI * 2);
	ctx.arc(240, 33 - smokeIndex*2,  5 + smokeIndex/2, Math.PI * 2 , Math.PI * 0.6);
	ctx.arc(236, 35 - smokeIndex*2,  5 + smokeIndex/2, Math.PI * 0.4 , Math.PI * 2);
	ctx.closePath();
	
	if (smokeIndex < 5){
		ctx.lineWidth = 1;
		ctx.strokeStyle = "black";
		ctx.stroke();
	}else {
		ctx.lineWidth = 0;
	}
		

	if (smokeIndex/2 < 0)
		ctx.fillStyle  = "#A0A0A0 ";
	else if (smokeIndex/2 < 2)
		ctx.fillStyle  = "#C8C8C8";
	else if (smokeIndex/2 < 3)
		ctx.fillStyle  = "#E0E0E0 ";
	else if (smokeIndex/2 < 4)
		ctx.fillStyle  = "#40E0D0";
	else
		ctx.fillStyle  = "#00FFCC ";
	ctx.fill();
}

function  drawBorder(){
	// Draw border
	ctx.beginPath();
	var gradient=ctx.createLinearGradient(0,0,170,0);
	gradient.addColorStop("0","magenta");
	gradient.addColorStop("0.5","blue");
	gradient.addColorStop("1.0","red");
	
	ctx.lineWidth = 10;
	ctx.strokeStyle  = gradient;
	ctx.strokeRect(0,0,300,300);
	ctx.fill();
	ctx.closePath();
}

function clearCanvas(){
	ctx.save();
	// Use the identity matrix while clearing the canvas
	ctx.setTransform(1, 0, 0, 1, 0, 0);
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	// Restore the transform
	ctx.restore();
}