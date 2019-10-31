// main.js
'use strict';

var canvas;
var a = 0;
var b = 0;
var sponge = [];

function setup() {
	canvas = createCanvas(400, 400, WEBGL);
	canvas.parent('sketch');

	let b = new Box(0, 0, 0, 200);
	sponge.push(b);
}

function draw() {
	background(51);
	ambientLight(150);
	normalMaterial();
	scale(0.5);

	//translate(width/2, height/2);
	rotateX(a);
	rotateY(b);

	sponge.forEach(function(b) {
		b.show();
	})

	a += 0.01;
	b += 0.005;
}

function mousePressed() {
	let next = [];
	sponge.forEach(function(b) {
		next = next.concat(b.generate());
	});
	sponge = next;
}