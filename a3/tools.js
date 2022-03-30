
// Track the last mouse
let lastMouse = undefined
let mouse = new Vector(0,0)

// We can also store the last N points
let trailPoints = []
let trailPointMax = 70

// How big do you want the canvas?
let canvasSize = [600, 400]

// You can also track how long the user has been drawing
let lastPenDownTime = 0
let distanceTravelled = 0

let drawCount = 0



// Which mode and color do we start with?
// You may want to change these starting values
let tool = {
	color0: [230,86,70],
	color1: [320,100,50],
	size: 4,
	mode: "lollipop",

	clearCanvas(p) {
		p.blendMode(p.BLEND)
		p.background(0,0,10)
	},
}


let tools = {


	lollipop(p, size, color0, color1) {
		p.blendMode(p.BLEND)

		
		// How far have we gone?
		let d = mouse.getDistanceTo(lastMouse)

		if (Math.random() < .05)
		p.background(0, 0, 10, .06)

		// draw line between center and current mouse point
		p.strokeWeight(size/3)
		p.stroke(color0[0],color0[1],color0[2], Math.random())
		p.line(...trailPoints[0], ...mouse)


		// draw a bauble at the end of the line
		p.stroke(0,100,100,.4)
		p.strokeWeight(size/3)
		p.fill(color1)
		p.circle(...mouse, size*2)


		// draw a shiny thing in the middle of bauble
		p.noStroke()
		p.fill(100,100,100,.5)
		p.circle(...mouse, size/2)



		


	},

	sparkle(p, size, color0, color1) {
		p.blendMode(p.SCREEN)


		
		// Add a bit of a drop background to help it stand out
		p.noStroke()
		p.fill(0, 0, 100, .1)
		//p.circle(...mouse, 20*size*(1 + Math.random()))

		
		// Draw a bunch of splatters
		p.stroke(0,0,0,0.3)
		p.strokeWeight(1)
		let splatCount = 4
		for (var i = 0; i < splatCount; i++) {
			let r = (Math.random() + 1)*size*3
			let theta = Math.PI*2 * i/splatCount
			let splatSize = 2*Math.random()*(size + 1)
			
			p.fill([(color1[0]+(Math.random()-Math.random())*150)%360,color1[1]*(Math.random()/4+0.75),color1[2], Math.random()*0.7*100+30])
			
			p.square(mouse[0] + r*Math.cos(theta),
				mouse[1] + r*Math.sin(theta), 
				splatSize)

		}
	},

	glitch(p, size, color0, color1) {
		p.blendMode(p.SOFT_LIGHT)
		p.noFill()
		p.stroke(...color1, Math.random())
		
		p.beginShape()
		for (var i = 0; i < trailPoints.length; i++) {
			pct = i/trailPoints.length
			p.stroke([color0[0],color0[1],color0[2]])
			if (Math.random() > .5) p.stroke([color1[0],color1[1],color1[2]])
			// Get that position
			let pos = trailPoints[i]
			pos[0] -= Math.random()
			pos[1] += Math.random()
			p.curveVertex(...pos)
		}
		p.endShape()
	},


}