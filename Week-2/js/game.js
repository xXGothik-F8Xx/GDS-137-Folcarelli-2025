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
let p1Wins = 0;

var player2 = new GameObject();
player2.color = "blue";
player2.width = 25;
player2.height = 125;
player2.x = 990;
player2.y = 1024/2;
player2.vx = 0;
player2.vy = 5;
let p2Wins = 0;

var img = document.getElementById("ric");

var ball = new GameObject();

ball.vx = 5;
ball.vy = 5;
ball.width = 50;
ball.height = 50;

function main()
{
	context.clearRect(0,0,canvas.width, canvas.height);	// clears the screen

	//Border between players 1 and 2
	context.save();
	context.strokeStyle = "green";
	context.beginPath();
	context.moveTo(canvas.width/2, 0);
	context.lineTo(canvas.width/2, 800);
	context.closePath();
	context.lineWidth = 10;
	context.stroke();
	context.restore();

	// Text for the scoreboard //
	context.font = `32px sans-serif`;
	context.textAlign = "center";
	context.fillStyle = "black";
	context.fillText("Player 1   Player 2", canvas.width/2, 50)

	// Player 1 score
	context.font = '24px sans-serif';
	context.textAlign = "left";
	context.fillStyle = "#000000";
	context.fillText(`${p1Wins}`, 485, 75);
	
	// Player 2 score
	context.font = '24px sans-serif';
	context.textAlign = "left";
	context.fillStyle = "#000000";
	context.fillText(`${p2Wins}`, 525, 75);

	//Move the Players up and down
	if(w)
		{
			//console.log("Moving Up");
			player1.y += -10;
			
		};
		if(s)
		{
			//console.log("Moving Down");
			player1.y += 10;
		};
		if(up)
		{
			player2.y += -10;
		};
		if(down)
		{
			player2.y += 10;
		};


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

		//----Movement Using the ball's move() function---//
		ball.move();
		//------------------------------------------------//
		
		//----------------------- Bounce --------------------//
		
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
		//--------------------------------------------------//

		//----------------Collision for players and ball----------//
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
			//------------Win and Loss conditions------------//
		if (ball.x < 0)
			{
				ball.x = canvas.width/2;  // This is the Defeat condition
				p2Wins += 1;
			};
		if (ball.x >= 1024)
			{
				ball.x = canvas.width/2; // This is the Victory condition
				p1Wins += 1;
			};

			//------------------------------------------------//
			context.drawImage(img, ball.x - ball.width/2, ball.y - ball.width/2, ball.width, ball.height);
}
