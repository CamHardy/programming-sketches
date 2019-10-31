// Food.js
'use strict';

class Food {
	constructor() {
		this.x = floor(random(width - 1) / grid);
		this.y = floor(random(height - 1) / grid);
	}

	show() {
		fill(255, 127, 63);
		rect(this.x * grid, this.y * grid, grid, grid);
	}
}