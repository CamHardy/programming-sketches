// Snake.js
'use strict'

class Snake {
	constructor() {
		this.init();
	}

	init() {
		this.age = 0;
		this.tail = [];
		this.x = floor(width / grid / 2);
		this.y = floor(height / grid / 2);
		this.setDir(1, 0);
	}

	update() {
		this.tail.shift();
		this.x = this.x + this.xSpeed;
		this.y = this.y + this.ySpeed;

		// don't hit the walls!
		if (this.x < 0 || this.y < 0 || this.x >= floor(width / grid) || this.y >= floor(height / grid)) {
			this.init();
		}

		// don't eat your tail!
		this.tail.forEach(function(e) {
			if (this.x == e.x && this.y == e.y) {
				this.init();
			}
		}, this);

		this.tail.push({x: this.x, y: this.y});
	}

	show() {
		fill(255);
		this.tail.forEach(function(e) {
			rect(e.x * grid, e.y * grid, grid, grid);
		});
	}

	eat(food) {
		let distance = dist(this.x, this.y, food.x, food.y);
		if (distance < 1) {
			this.age++;
			this.tail.push({x: this.x, y: this.y})
			return true
		}
		return false;
	}

	setDir(x, y) {
		this.xSpeed = x;
		this.ySpeed = y;
	}
}