
class Face {
	// Create a branching system  Each branch can hold other branches
	constructor(aof) {
		
		this.aof = aof
		this.center = new Vector()

		
	}


	update(p, t, dt) {
		
	}	

	draw(p) {
		let t = p.millis()*.001

		p.push()
		// Move the fish around a bit
		p.translate(0, -200*p.noise(.2*t + this.id))
		p.rotate(1*p.noise(.3*t + this.id) - .5)


		let w = this.aof.get("width")*50 + 30
		let h = this.aof.get("height")*50 + 30
		let hue = this.aof.get("hue")*360
		let eyeDistance = this.aof.get("eyeDistance")*20
		let mouthCurve = this.aof.get("mouthCurve")*15
		let eyebrowTilt = this.aof.get("eyebrowTilt")*16

		p.strokeWeight(1.5)
		p.stroke(hue, 100, 40);
		p.fill(hue, 60, 70)
		p.ellipse(0, -100, w, -h)

		// EYES
		p.noStroke()
		p.fill(hue, 100, 20)
		p.circle(-w/10 - eyeDistance, -100, w/10)
		p.circle(+w/10 + eyeDistance, -100, w/10)

		p.fill(hue, 100, 100)
		p.circle(-w/10 + 1.5 - eyeDistance, -101, w/40)
		p.circle(+w/10 + 1.5 + eyeDistance, -101, w/40)

		// BLUSH
		p.fill(hue, 100, 40)
		p.ellipse(-w/5 - eyeDistance, -90, 3+w/10, 1+h/15)
		p.ellipse(+w/5 + eyeDistance, -90, 3+w/10, 1+h/15)

		// EYEBROWS
		p.noFill();
		p.stroke(hue, 100, 0);
		p.strokeWeight(2);
		p.line(-w/5 - eyeDistance, -102 - eyebrowTilt, -w/15 - eyeDistance, -110)
		p.line(w/5 + eyeDistance, -102 - eyebrowTilt, w/15 + eyeDistance, -110)

		// MOUTH
		p.beginShape();
		p.fill(0, 100, 0)
		p.curveVertex(-w/4, -80);
		p.curveVertex(-w/4, -80);
		p.curveVertex(0, -87.5+mouthCurve);
		p.curveVertex(+w/4, -80);
		p.curveVertex(+w/4, -80);
		p.endShape()


		
		p.pop()

	}
}






// Optional background: drawn once per population
Face.drawBackground = function(p) {
	p.background(190, 80, 90)
}

// Static properties for this class
Face.landmarks = {
	"minty": [0.24,0.86,0.47,0.81,0.44,0.31],
	"bert": [0.80,0.00,0.00,0.55,0.93,0.94],
	"rhonda": [0.98,0.39,0.15,0.89,0.74,0.44],
	"toby": [0.79,0.82,0.05,0.33,0.01,0.52],
	"hank": [0.03,0.24,0.65,0.18,0.15,0.11]
}
Face.labels = ["width", "height", "hue", "eyeDistance", "mouthCurve", "eyebrowTilt"]

