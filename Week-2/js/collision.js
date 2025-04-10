//Declare my variables

var canvas;
var context;
var timer;
var ball;
//1000 ms or 1 second / FPS
var interval = 1000/60;
var player1;

//This is used to stop the player1 from moving through obstacles.
var prevX;
var prevY;
	//Set Up the Canvas
	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	
	
	//Instantiate the Player
	player11 = new GameObject();
	player11.width = 25;
	player11.height = 125;
	player11.x = 35;
	player11.y = 1024/2.6;
	player11.vx = 5;
	player11.vy = 5;

	ball = new GameObject();
	
	lBlock1 = new GameObject(canvas.width - 750, canvas.height/2+75, 100, 100,"#00ff00");
	lBlock2 = new GameObject(canvas.width - 550, canvas.height/2+75, 100, 100,"#00ff00");
	rBlock1 = new GameObject((canvas.width-350), canvas.height/2, 100, 100, "orange");
	rBlock2 = new GameObject((canvas.width-50), canvas.height/2, 100, 100, "blue");

	//Set the Animation Timer
	timer = setInterval(animate, interval);

function animate()
{
	//Erase the Screen
	context.clearRect(0,0,canvas.width, canvas.height);	
	
	
	//Move the Player to the up
	if(w)
	{
		//console.log("Moving Right");
		player1.x += -2;
	}
	
	if(s)
	{
		//console.log("Moving down");
		player1.x += 2;
	}
	
	
	//Check Collisions
	
	//Demonstrates Accuracy of Bounding Box Collision
	if(lBlock1.hitTestObject(player1))
	{
		//change color
		lBlock1.color = "yellow";
	}
	else
	{
		lBlock1.color = "#00ff00";
	}
	
	//Shows Bounding Boxes
	if(lBlock2.hitTestObject(player1))
	{
		//draw bounding boxes
		context.strokeRect(lBlock2.x- lBlock2.width/2, lBlock2.y - lBlock2.height/2, lBlock2.width, lBlock2.height)
		context.strokeRect(player1.x- player1.width/2, player1.y - player1.height/2, player1.width, player1.height)
	}
	
	//Demonstrates how often collisions take place
	if(rBlock1.hitTestObject(player1))
	{
		//console.log("colliding");
	}
	
	//Impede movement
	if(rBlock2.hitTestObject(player1))
	{
		player1.x = prevX;
		//console.log("colliding");
	}
	else
	{
		prevX = player1.x;
	}

	//ball's location
	this.x = canvas.width/2;
	this.y = canvas.height/2;
	
	//ball's dimensions
	this.width = 100;
	this.height = 100;
	
	//ball's velocity or speed on each axis
	this.vx = 0;
	this.vy = 0;
	
	//ball's color
	this.color = "#008000";
	
	//This draws the ball to the screen
	this.draw = function()
	{
		context.save();
			context.fillStyle = this.color;
			context.translate(this.x, this.y);
			context.beginPath();
			context.arc(0,0,this.width/2,0,360*Math.PI/180,true)
			context.closePath();
			context.fill();
		context.restore();
		
	}	
	
	//This changes the ball's position
	this.move = function()
	{
		this.x += this.vx;
		this.y += this.vy;
	}
	
	//Update the Screen
	player1.drawRect();
	lBlock1.drawCircle();
	lBlock2.drawCircle();
	rBlock1.drawRect();
	rBlock2.drawRect();

}

