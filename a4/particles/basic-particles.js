


class Bubbles {
	constructor(p) {
		// Do this on startup ONCE
		this.particles = []

		// Make a lot of particles
		let count = 14;
		for (var i = 0; i < count; i++) {
			// Create a random particle
			let pt = new Vector(Math.random()*p.width, Math.random()*p.height)
			
			// Add a velocity, 10 in ANY direction
			pt.velocity = Vector.polar(30, Math.random()*2*Math.PI)
			
			// Add an empty force
			pt.force = new Vector(0,0)

			// Add to my particles
			this.particles.push(pt)
		}
	}

	getClosest(pt, range) {
		// Get the closest particle to this point
		return Vector.getClosest(pt, this.particles, range)
	}


	
	update(p, time) {
		// Run this function every frame to move the particles

		let center = new Vector(p.width/2, p.height/2)
		let gravity = new Vector(0, sliders.bubbleWeight*120 - 10)

		// Calculate forces and move each particle
		this.particles.forEach((pt,index) => {
			// Recalculate forces
			pt.force.mult(0)
			
			// A little bit of a border foce to keep everyone on screen
			let borderForce = .09
			pt.force.addMultiples(center, borderForce, pt, -borderForce)
			
			//--------------------------------
			// Compute all  the forces

			// Add a gravity force
			pt.force.add(gravity)


			// Compute a "wiggle" force to move the particles 
			// in some amount, in some direction (a polar coordinate!)
			// based on their index and time
			// (ie, each particle has its own motion
			//    and it changes over time)
			
			let wiggleSpeedChange = .4
			let wiggleDir = 40*p.noise(index, time.t*wiggleSpeedChange)
			let wiggleAmt = 300
			pt.force.addPolar(wiggleAmt, wiggleDir)


			pt.velocity.mult(sliders.bubbleSpeed)

			//--------------------------------
			// Move the particles
		
			// Apply each particles force to its velocity
			pt.velocity.addMultiples(pt.force, time.dt)

			// Move each particle
			pt.addMultiples(pt.velocity, time.dt)
		})
	}

	draw(p, time) {
		// Draw each of the particles
		this.particles.forEach(pt => {
			p.push()

			// Translate to this particle's position
			p.translate(...pt)
			
			// then we can draw the particle at (0,0), rotated
			// p.rect(0, 0, 30, 10)
			let textSize = 30
			p.fill(100,100,100,0.3)
			p.strokeWeight(1)
			p.stroke(172,62,20)
			p.circle(-textSize/2, textSize/2, textSize)
			p.noStroke()
			p.circle(-textSize/3, textSize/3, textSize/4)

			p.pop()

		})
	}

	drawDebug(p, time) {
		this.particles.forEach(pt => {
		
			// // Draw forces
			pt.velocity.drawArrow({p, 
				center: pt,
				multiple:1, 
			})

			pt.force.drawArrow({p, 
				center: pt,
				multiple:.5, 
				color: [200, 100, 50]
			})

			
			p.circle(...pt, 10)
		})

	}
}