// Cell.js
'use strict';

class Cell {
	constructor(x, y) {
	this.x = x;
	this.y = y;
	this.walls = [true, true, true, true]; // clockwise from the top
	this.visited = false;
	this.onStack = false;
	this.highlighted = false;
	}

	show() {
		let sceneX = this.x * CELL_SIZE;
		let sceneY = this.y * CELL_SIZE;

		let p0 = {x: sceneX, y: sceneY};
		let p1 = {x: sceneX + CELL_SIZE, y: sceneY};
		let p2 = {x: sceneX + CELL_SIZE, y: sceneY + CELL_SIZE};
		let p3 = {x: sceneX, y: sceneY + CELL_SIZE};

		if (this.visited) {
			noStroke();
			fill(this.onStack ? palette.onStack : palette.visited);
			if (this.highlighted) {
				fill(palette.highlighted);
				this.highlighted = false;
			}
			rect(this.x * CELL_SIZE, this.y * CELL_SIZE, CELL_SIZE, CELL_SIZE);
		}

		stroke(palette.wall);
		if (this.walls[0]) line(p0.x, p0.y, p1.x, p1.y);
		if (this.walls[1]) line(p1.x, p1.y, p2.x, p2.y);
		if (this.walls[2]) line(p2.x, p2.y, p3.x, p3.y);
		if (this.walls[3]) line(p3.x, p3.y, p0.x, p0.y);
	}

	pickNeighbor() {
		let neighbors = [];

		let top	= grid[index(this.x, this.y - 1)];
		let right = grid[index(this.x + 1, this.y)];
		let bottom = grid[index(this.x, this.y + 1)];
		let left = grid[index(this.x - 1, this.y)];

		if (top && !top.visited) neighbors.push(top);
		if (right && !right.visited) neighbors.push(right);
		if (bottom && !bottom.visited) neighbors.push(bottom);
		if (left && !left.visited) neighbors.push(left);

		return neighbors.length > 0 ? neighbors[floor(random(0, neighbors.length))] : undefined;
	}
}

function index(x, y) {
	return x >= 0 && y >= 0 && x < NUM_COLS && y < NUM_ROWS ? x + y * NUM_COLS : -1;
}