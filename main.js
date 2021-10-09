
canvas= new fabric.Canvas("myCanvas")

ball_x=10;
ball_y=10;

hole_x=800
hole_y=400

ball_object=""
hole_object=""

block_width = 75;
block_height = 75;

function load_img(){
	fabric.Image.fromURL("golf-h.png", function (Img) {

        hole_object = Img;
        hole_object.scaleToWidth(100)
        hole_object.scaleToHeight(100)
        hole_object.set({
            top: hole_y, left: hole_x
        });
        canvas.add(hole_object)
    })
}

function new_image()
{
	fabric.Image.fromURL("ball.png", function (Img) {

        ball_object = Img;
        ball_object.scaleToWidth(block_width)
        ball_object.scaleToHeight(block_height)
        ball_object.set({
            top: ball_y, left: ball_x
        });
        canvas.add(ball_object)
    })
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if (ball_x==825 && ball_y==425){

		canvas.remove(ball_object);
		document.getElementById("myCanvas").style.borderColor="red"

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
		if(ball_y>0){

			ball_y=ball_y-5;
			console.log(ball_x,ball_y)
			canvas.remove(ball_object)
			new_image()

		}
	}

	function down()
	{
		if(ball_y<500){

			ball_y=ball_y+5;
			console.log(ball_x,ball_y)
			canvas.remove(ball_object)
			new_image()

		}
	}

	function left()
	{
		if(ball_x>10){

			ball_x=ball_x-5;
			console.log(ball_x,ball_y)
			canvas.remove(ball_object)
			new_image()

		}
	}

	function right()
	{
		if(ball_x<900){

			ball_x=ball_x+5;
			console.log(ball_x,ball_y)
			canvas.remove(ball_object)
			new_image()

		}
	}
	
}

