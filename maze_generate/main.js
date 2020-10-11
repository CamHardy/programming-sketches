// main.js
'use strict';

var canvas;
const WIDTH = 601;
const HEIGHT = 601;
const CELL_SIZE = 20;
const NUM_COLS = Math.floor(WIDTH / CELL_SIZE);
const NUM_ROWS = Math.floor(HEIGHT / CELL_SIZE);
var grid = [];
var stack = [];
var current_cell;
var dfs = true;

var palette = {
	background: '#8DB448', 
	wall: '#366800', 
	visited: '#FDAE48', 
	onStack: '#E6BA25',
	highlighted: '#C52813'
};

function setup() {
	canvas = createCanvas(WIDTH, HEIGHT);
	canvas.parent('sketch');
	frameRate(20);
	init();
}

function init() {
	let subtitle = document.querySelector(".subtitle");
	subtitle.innerText = (dfs ? "Depth" : "Breadth") + "-first traversal";
	grid = [];
	stack = [];

	for (var j = 0; j < NUM_ROWS; j++) {
		for (var i = 0; i < NUM_COLS; i++) {
			grid.push(new Cell(i, j));
		}
	}

	current_cell = grid[0];
	current_cell.visited = true;
}

function draw() {
	background(palette.background);

	current_cell.highlighted = true;
	grid.forEach((cell) => {
		cell.show();
	});

	let next_cell = current_cell.pickNeighbor();
	if (next_cell) {
		next_cell.visited = true;
		removeWalls(current_cell, next_cell);
		stack.push(current_cell);
		current_cell.onStack = true;
		current_cell = next_cell;
	}
	else if (stack.length > 0) {
		current_cell = dfs ? stack.pop() : stack.shift();
		current_cell.onStack = false;
	}
}

function keyPressed() {
	dfs = !dfs;
	clear();
	init();
}

function mousePressed() {
	clear();
	init();
}

function removeWalls(a, b) {
	let diffX = a.x - b.x;
	let diffY = a.y - b.y;

	if (diffX == 1) {
		a.walls[3] = false;
		b.walls[1] = false;
	}
	else if (diffX == -1) {
		a.walls[1] = false;
		b.walls[3] = false;
	}
	if (diffY == 1) {
		a.walls[0] = false;
		b.walls[2] = false;
	}
	else if (diffY == -1) {
		a.walls[2] = false;
		b.walls[0] = false;
	}

}
