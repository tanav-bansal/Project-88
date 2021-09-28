canvas = new fabric.Canvas("myCanvas");
ctx = canvas.getContext("2d");

ball_x = 0;
ball_y = 0;
hole_x = 800
hole_y = 400


block_image_width = 5;
block_image_height = 5;

function load_img(){
	fabric.Image.fromURL("golf-h.png" , function(Img){
	hole_obj = Img;
	hole_obj.scaleToWidth(50);
	hole_obj.scaleToHeight(50);
	hole_obj.set({
		top:hole_y,
		left:hole_x
	})
    canvas.add(hole_obj);
	})
	new_image();
}

function new_image()
{
	fabric.Image.fromURL("ball.png" , function(Img){
		ball_obj = Img;
		ball_obj.scaleToWidth(50);
		ball_obj.scaleToHeight(50);
		ball_obj.set({
			top:ball_y,
			left:ball_x
		})
		canvas.add(ball_obj);
		})
		new_image();
}
game_won = "hurraaaayyy!!!!! you just won the match!!!"

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	/* Check the coordinates of the ball and hole images to finish the game. 
	And id coordinates matches them remove ball image, 
	display "GAME OVER!!!" 
	and make canvas border 'red'. */
	if((ball_x==ball_x) && (ball_y==hole_y)){
		canvas.remove(ball_obj);
		document.getElementById("gwd").innerHTML = game_won;
		document.getElementById("myCanvas").style.borderColor = "red";
	}
	
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		if(ball_y >= 0)
		{
         ball_y -= block_image_height
		 console.log("Up Key Pressed -  "+ "x = " + ball_x + "y = " + ball_y )
		 canvas.remove(ball_obj)
		 new_image()
		}
	}

	function down()
	{
		 // Write a code to move ball downward.
		 if(ball_y <= 420)
		{
         ball_y += block_image_height
		 console.log("Down Key Pressed -  "+ "x = " + ball_x + "y = " + ball_y )
		 canvas.remove(ball_obj);
		 new_image()
		}
	}

	function left()
	{
		if(ball_x >= 5)
		{
         ball_x -= block_image_width
		 console.log("left Key Pressed -  "+ "x = " + ball_x + "y = " + ball_y )
		 canvas.remove(ball_obj)
		 new_image()
		}
	}

	function right()
	{
		if(ball_x <=1050)
		{
			// Write a code to move ball right side.
			ball_x += block_image_width
		 console.log("right Key Pressed -  "+ "x = " + ball_x + "y = " + ball_y )
		 canvas.remove(ball_obj)
		 new_image()
		}
	}
	
}

