// Box.js
'use strict';

class Box {
	constructor(x, y, z, r) {
		this.pos = createVector(x, y, z);
		this.r = r;
	}

	generate() {
		var boxes = [];
		for (var x = -1; x < 2; x++) {
			for (var y = -1; y < 2; y++) {
				for (var z = -1; z < 2; z++) {
					let sum = abs(x) + abs(y) + abs(z);

					let newR = this.r/3;
					if (sum > 1) {
						let b = new Box(
							this.pos.x + x * newR,
							this.pos.y + y * newR,
							this.pos.z + z * newR,
							newR);
						boxes.push(b);
					}
				}
			}
		}
		return boxes;
	}

	show() {
		push();
		translate(this.pos.x, this.pos.y, this.pos.z);
		noStroke();
		box(this.r);
		pop();
	}
}