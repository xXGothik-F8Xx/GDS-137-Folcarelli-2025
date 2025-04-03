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
}
