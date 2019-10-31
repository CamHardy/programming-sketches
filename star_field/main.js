// main.js
'use strict';

const STAR_COUNT = 400;

var stars = [];
var speed = 0;
var maxSpeed = 0;
var visible_stars;
var discoMode = false;

var canvas;

function setup() {
	canvas = createCanvas(600, 600);
	canvas.parent('sketch');
	colorMode(HSB);

	for (var i = 0; i < STAR_COUNT; i++) {
		stars[i] = new Star();
	}

	canvas.mouseClicked(function() {
		discoMode = !discoMode;
	});
}

function draw() {
	background(0);
	translate(width/2, height/2);

	maxSpeed = map(mouseX, 0, width, 0, width/30, true);
	speed = min(speed + sq(sq(maxSpeed * 0.1)), maxSpeed);
	visible_stars = map(mouseY, 0, height, 50, STAR_COUNT, true);

	for (var i = 0; i < visible_stars; i++) {
		stars[i].update();
		stars[i].show();
	}
}