// Create a variable canvas
var canvas = new fabric.Canvas('myCanvas')

block_y=1;
block_x=1;

block_image_width = 350;
block_image_height = 480;

var block_image_object= "";

// Complete the function new_image() to add new image
function new_image(get_image)
{
	fabric.Image.fromURL(get_image, function(Img) {
		block_image_object = Img;
	
		block_image_object.scaleToWidth(150);
		block_image_object.scaleToHeight(140);
		block_image_object.set({
				top:block_y,
				left:block_x
			});
			canvas.add(block_image_object);
		
		});
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);
if(keyPressed == '89')
{
	block_x = 10;
	new_image('iron_man.png');
	console.log("Yellow - Iron Man");
}

if(keyPressed == '82')
{
	block_x = 310;
	new_image('spider_man.png');
	console.log("Red - Spider Man");
}

if(keyPressed == '66')
{
	block_x = 560;
	new_image('black_panther.png');
	console.log("Black - Black Panther");
}

if(keyPressed == '87')
{
	block_x = 880;
	new_image('captain_america.png');
	console.log("White - Captain America");
}

if(keyPressed == '71')
{
	block_x = 1040;
	new_image('hulk.png');
	console.log("Green - Hulk");
}
}

