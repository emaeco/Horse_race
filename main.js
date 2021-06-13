canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

car1_width = 120;
car1_height = 70;
car1_image = "https://media1.tenor.com/images/aefba09b3da305c6efbb618197cbc071/tenor.gif?itemid=5570551";
car1_x = 10;
car1_y = 10;

car2_width = 120;
car2_height = 70;
car2_image = "data:image/jpeg;base64,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KkRAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQERED//Z";
car2_x = 10;
car2_y = 100;

background_image = "https://image.freepik.com/free-vector/abstract-minimal-white-background_23-2148887988.jpg";

function add() {
	background_imgTag = new Image(); //defining a variable with a new image
	background_imgTag.onload = uploadBackground; // setting a function, onloading this variable
	background_imgTag.src = background_image;   // load image

	car1_imgTag = new Image(); //defining a variable with a new image
	car1_imgTag.onload = uploadcar1; // setting a function, onloading this variable
	car1_imgTag.src = car1_image;   // load image

	car2_imgTag = new Image(); //defining a variable with a new image
	car2_imgTag.onload = uploadcar2; // setting a function, onloading this variable
	car2_imgTag.src = car2_image;   // load image
}

function uploadBackground() {
	ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadcar1() {
	ctx.drawImage(car1_imgTag, car1_x, car1_y, car1_width, car1_height);
}
function uploadcar2() {
	ctx.drawImage(car2_imgTag, car2_x, car2_y, car2_width, car2_height);
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			car1_up();
			console.log("up arrow key");
		}
		if(keyPressed == '40')
		{
			car1_down();
			console.log("down arrow key");
		}
		if(keyPressed == '37')
		{
			car1_left();
			console.log("left arrow key");
		}
		if(keyPressed == '39')
		{
			car1_right();
			console.log("right arrow key");
		}
		if(keyPressed == '87')
		{
			car2_up();
			console.log("key W");
		}
		if(keyPressed == '83')
		{
			car2_down();
			console.log("key S");
		}
		if(keyPressed == '65')
		{
			car2_left();
			console.log("key A");
		}
		if(keyPressed == '68')
		{
			car2_right();
			console.log("key D");
		}

	if(car1_x > 700)
	{
		console.log("car1");
		document.getElementById('game_status').innerHTML = "Car 1 Won!!";
	}
	else if(car2_x > 700)
	{
		console.log("car2");
		document.getElementById('game_status').innerHTML = "Car 2 Won!!";
	}
}


function car1_up()
{
	if(car1_y >=0)
	{
		car1_y = car1_y - 10;
		console.log("When up arrow is pressed,  x = " + car1_x + " | y = " +car1_y);
		 uploadBackground();
		 uploadcar1();
		 uploadcar2();
	}
}
function car1_down()
{
	if(car1_y <=500)
	{
		car1_y =car1_y+ 10;
		console.log("When down arrow is pressed,  x = " + car1_x + " | y = " +car1_y);
		uploadBackground();
		 uploadcar1();
		 uploadcar2();
	}
}
function car1_left()
{
	if(car1_x >= 0)
	{
		car1_x =car1_x - 10;
		console.log("When left arrow is pressed,  x = " + car1_x + " | y = " +car1_y);
		uploadBackground();
		 uploadcar1();
		 uploadcar2();
	}
}
function car1_right()
{
	if(car1_x <= 700)
	{
		car1_x =car1_x + 10;
		console.log("When right arrow is pressed,  x = " + car1_x + " | y = " +car1_y);
		uploadBackground();
		uploadcar1();
		 uploadcar2();
   }
}
	
function car2_up()
{
	if(car2_y >=0)
	{
		car2_y = car2_y - 10;
		console.log("When up arrow is pressed,  x = " + car2_x + " | y = " +car2_y);
		 uploadBackground();
		 uploadcar1();
		 uploadcar2();
	}
}
function car2_down()
{
	if(car1_y <=500)
	{
		car2_y =car2_y+ 10;
		console.log("When down arrow is pressed,  x = " + car2_x + " | y = " +car2_y);
		uploadBackground();
		 uploadcar1();
		 uploadcar2();
	}
}
function car2_left()
{
	if(car2_x >= 0)
	{
		car2_x =car2_x - 10;
		console.log("When left arrow is pressed,  x = " + car2_x + " | y = " +car2_y);
		uploadBackground();
		 uploadcar1();
		 uploadcar2();
	}
}
function car2_right()
{
	if(car2_x <= 700)
	{
		car2_x =car2_x + 10;
		console.log("When right arrow is pressed,  x = " + car2_x + " | y = " +car2_y);
		uploadBackground();
		uploadcar1();
		 uploadcar2();
   }
}
