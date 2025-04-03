// JavaScript Document

var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");	
var fps = 1000/60;
var timer = setInterval(main, fps);

	
//----------------------------
	

var player1 = new GameObject();
player1.width = 25;
player1.height = 125;
player1.x = 35;
player1.y = 1024/2;
player1.vx = 0;
player1.vy = 5;
var ball = new GameObject();
ball.vx = 5;
ball.vy = 5;

function main()
{
	context.clearRect(0,0,canvas.width, canvas.height);	// clears the screen


	//Move the Player to the right
	if(w)
		{
			//console.log("Moving Right");
			player1.y += -2;
			
		}
		if(s)
		{
			//console.log("Moving Left");
			player1.y += 2;
		}
		
		//Update the Screen


	// collision detection for the top and bottom boundaries	
	if (player1.y > canvas.height - player1.height/2)
	{
		player1.y = canvas.height - player1.height/2;
	}
	if (player1.y < 0 + player1.height/2) 
	{
		player1.y = 0 + player1.height/2;
	}
	player1.drawRect();

		//----Movement Using the ball's move() function----
		ball.move();
		//---------------------------------------------------
		
		//--------------Bounce of Right----------------------
		if(ball.x > canvas.width - ball.width/2)
		{
			ball.x = canvas.width - ball.width/2;
			ball.vx = -ball.vx;	
			ball.color = "#0000FF";
		};
		
		if(ball.x < 0 + ball.width/2)
		{
			ball.x = 0 + ball.width/2;
			ball.vx = -ball.vx;	
			ball.color = "#ff0000";
		};
	
		if(ball.y < 0 + ball.height/2)
		{
			ball.y = 0 + ball.height/2;
			ball.vy = -ball.vy;	
			ball.color = "#800080";
		};
			
		if(ball.y > canvas.height - ball.height/2)
		{
			ball.y = canvas.height - ball.height/2;
			ball.vy = -ball.vy;	
			ball.color = "#00ffff";
		};
		//---------------------------------------------------
		
		ball.drawCircle();
}
