// Star.js
'use strict';

class Star {
	constructor() {
		this.x = random(-width, width);
		this.y = random(-height, height);
		this.z = random(width);
		this.prevZ = this.z;

		this.hue = random(0, 360);
	}

	update() {
		this.z -= speed;
		this.prevZ = this.z + sq(maxSpeed) / 2;

		if (this.z < 1) {
			this.x = random(-width, width);
			this.y = random(-height, height);
			this.z = width + random(0, width / 2);
			this.prevZ = this.z;
		}
	}

	show() {
		let sceneX = map(this.x / this.z, 0, 1, 0, width / 2);
		let sceneY = map(this.y / this.z, 0, 1, 0, height / 2);

		let r = map(this.z, 0, 1.5 * width, 4, 0, true);
		let alpha = map(this.z, 0, width, 1.5, 0, true);

		let c;
		discoMode ? c = color(this.hue, 255, 255, alpha) : c = color(0, 0, 255, alpha);

		let prevX = map(this.x / this.prevZ, 0, 1, 0, width / 2);
		let prevY = map(this.y / this.prevZ, 0, 1, 0, height / 2);
		this.prevZ = this.z;

		fill(c);
		stroke(c);
		ellipse(sceneX, sceneY, r, r);
		line(sceneX, sceneY, prevX, prevY);
	}
}