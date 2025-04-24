// JavaScript Document

var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");	
var fps = 1000/60;
var timer = setInterval(main, fps);

	
//----------------------------
	

var player1 = new GameObject();
player1.color = "red";
player1.width = 25;
player1.height = 125;
player1.x = 35;
player1.y = 1024/2;
player1.vx = 0;
player1.vy = 5;


var player2 = new GameObject();
player2.color = "blue";
player2.width = 25;
player2.height = 125;
player2.x = 990;
player2.y = 1024/2;
player2.vx = 0;
player2.vy = 5;

var ball = new GameObject();
ball.color =
ball.vx = 5;
ball.vy = 5;
ball.width = 25;
ball.height = 25;

function main()
{
	context.clearRect(0,0,canvas.width, canvas.height);	// clears the screen


	//Move the Player to the right
	if(w)
		{
			//console.log("Moving Up");
			player1.y += -2;
			
		};
		if(s)
		{
			//console.log("Moving Down");
			player1.y += 2;
		};
		if(up)
		{
			player2.y += -2;
		}
		if(down)
		{
			player2.y += 2;
		}
		//Update the Screen


	// Player 1 collision detection for the top and bottom boundaries	
	if (player1.y > canvas.height - player1.height/2)
	{
		player1.y = canvas.height - player1.height/2;
	};
	if (player1.y < 0 + player1.height/2) 
	{
		player1.y = 0 + player1.height/2;
	};

	// Player 2 collision detection for the top and bottom boundaries
	if (player2.y > canvas.height - player2.height/2)
		{
			player2.y = canvas.height - player2.height/2;
		};
		if (player2.y < 0 + player2.height/2) 
		{
			player2.y = 0 + player2.height/2;
		};
	player1.drawRect();
	player2.drawRect();

		//----Movement Using the ball's move() function----
		ball.move();
		//---------------------------------------------------
		
		//----------------------- Bounce --------------------
		
		if(ball.y < 0)
		{
			ball.y = 0 + ball.width/2;
			ball.vy = -ball.vy;
		};

		if(ball.y > canvas.height - ball.height/2)
		{
			ball.y = canvas.height - ball.height/2;
			ball.vy = -ball.vy;	
		};

		if(ball.hitTestObject(player1))
		{
			ball.vx = -ball.vx;
			ball.x = player1.right() + ball.width * .5;
			
			if(ball.y > player1.y + player1.height/6)
			{
				ball.vy = 5;
			};

			if(ball.y < player1.y - player1.height/6)
				{
					ball.vy = -5;
				};
		};

		if(ball.hitTestObject(player2))
			{
				ball.vx = -ball.vx;
				ball.x = player2.left() - ball.width * .5;
				
				if(ball.y > player2.y + player2.height/6)
				{
					ball.vy = 5;
				};
	
				if(ball.y < player2.y - player2.height/6)
					{
						ball.vy = -5;
					};
			};

		if (ball.x < 0)
			{
				ball.x = canvas.width/2;  // This is the lose condition
			};
		if (ball.x >= 1024)
			{
				ball.x = canvas.width/2;
			}
		
		//---------------------------------------------------
		ball.drawCircle();
};