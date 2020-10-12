// main.js
'use strict';

var canvas;
var date;
var dateOffset = new Date().getTimezoneOffset();

// constants
const HEIGHT = 600;
const hours = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve'];
const minutes = ["o'clock", 'oh-one', 'oh-two', 'oh-three', 'oh-four', 'oh-five', 'oh-six', 'oh-seven', 'oh-eight', 'oh-nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty', 'twenty-one', 'twenty-two', 'twenty-three', 'twenty-four', 'twenty-five', 'twenty-six', 'twenty-seven', 'twenty-eight', 'twenty-nine', 'thirty', 'thirty-one', 'thirty-two', 'thirty-three', 'thirty-four', 'thirty-five', 'thirty-six', 'thirty-seven', 'thirty-eight', 'thirty-nine', 'forty', 'forty-one', 'forty-two', 'forty-three', 'forty-four', 'forty-five', 'forty-six', 'forty-seven', 'forty-eight', 'forty-nine', 'fifty', 'fifty-one', 'fifty-two', 'fifty-three', 'fifty-four', 'fifty-five', 'fifty-six', 'fifty-seven', 'fifty-eight', 'fifty-nine'];
const seconds = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty', 'twenty-one', 'twenty-two', 'twenty-three', 'twenty-four', 'twenty-five', 'twenty-six', 'twenty-seven', 'twenty-eight', 'twenty-nine', 'thirty', 'thirty-one', 'thirty-two', 'thirty-three', 'thirty-four', 'thirty-five', 'thirty-six', 'thirty-seven', 'thirty-eight', 'thirty-nine', 'forty', 'forty-one', 'forty-two', 'forty-three', 'forty-four', 'forty-five', 'forty-six', 'forty-seven', 'forty-eight', 'forty-nine', 'fifty', 'fifty-one', 'fifty-two', 'fifty-three', 'fifty-four', 'fifty-five', 'fifty-six', 'fifty-seven', 'fifty-eight', 'fifty-nine'];

function setup() {
	canvas = createCanvas(Math.max(HEIGHT, Math.floor(windowHeight*0.75)), Math.max(HEIGHT, Math.floor(windowHeight*0.75)));
	canvas.parent('sketch');
	noStroke();
	textSize(width/(200/3));
	textFont('Montserrat');
	angleMode(DEGREES);
}

function windowResized() {
  resizeCanvas(Math.max(HEIGHT, Math.floor(windowHeight*0.75)), Math.max(HEIGHT, Math.floor(windowHeight*0.75)));
	noStroke();
	textSize(width/(200/3));
	textFont('Montserrat');
	angleMode(DEGREES);
}

function draw() {
  background(22);
	translate(width/2, height/2);
	drawLabels();
	drawClock();
}

function drawClock() {
	date = new Date().getTime()
	let hoursPos = ((((date/1000/60 - dateOffset)/60) % 12) - 1) * -30;
	let minutesPos = ((date/1000/60 - dateOffset) % 60) * -6;
	let secondsPos = ((date/1000) % 60) * -6;
	drawHours(hoursPos);
	drawMinutes(minutesPos);
	drawSeconds(secondsPos);
}

function drawLabels() {
	push();
	textStyle(BOLD);
	textAlign(CENTER, CENTER);
	fill('#ff0000');
	text('it is', width/20, 0);
	textAlign(RIGHT, CENTER);
	text('and', width/3.6, 0)
	text('seconds', width/2.2, 0);
	stroke('#ff0000');
	line(0, width/100, width/2, width/100);
	pop();
}

function drawHours(rotation) {
	push();
	textAlign(RIGHT, CENTER);
	rotate(rotation);
	fill('#f3f3f3');
	
	for(let item of hours) {
		text(item, width/7.85, 0);
		rotate(30);
	}
	pop();
}

function drawMinutes(rotation) {
	push();
	textAlign(LEFT, CENTER);
	rotate(rotation);
	fill('#f3f3f3');
	
	for(let item of minutes) {
		text(item, width/7.27, 0);
		rotate(6);
	}
	pop();
}

function drawSeconds(rotation) {
	push();
	textAlign(LEFT, CENTER);
	rotate(rotation);
	fill('#f3f3f3');
	
	for(let item of seconds) {
		text(item, width/3.5, 0);
		rotate(6);
	}
	pop();
}