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
player1.y = 1024/2.6;
player1.vx = 5;
player1.vy = 5;

function main()
{
	context.clearRect(0,0,canvas.width, canvas.height);	// clears the screen
	player1.drawRect(); // draws the player paddle

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
		player1.drawRect();

}
