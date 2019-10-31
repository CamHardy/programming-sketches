// main.js
'use strict';

var canvas;
var snake;
var food;
var grid = 20;

function setup() {
	canvas = createCanvas(601, 601);
	canvas.parent('sketch');
	frameRate(10);

	snake = new Snake();
	food = new Food();
}

function draw() {
	background(51);

	food.show();
	snake.update();
	snake.show();

	if (snake.eat(food)) {
		food = new Food();
	}
}

function keyPressed() {
	if (keyCode === UP_ARROW && snake.ySpeed != 1) {
		snake.setDir(0, -1);
	}
	else if (keyCode === DOWN_ARROW && snake.ySpeed != -1) {
		snake.setDir(0, 1);
	}
	else if(keyCode === LEFT_ARROW && snake.xSpeed != 1) {
		snake.setDir(-1, 0);
	}
	else if(keyCode === RIGHT_ARROW && snake.xSpeed != -1) {
		snake.setDir(1, 0);
	}
}