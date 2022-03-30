let fingerTrails = [[[],[],[],[],[]], [[],[],[],[],[]]]

masks.noseFace = function(p) {
	
	let t = p.millis()*.001
	let ribbonHue = 360 * SLIDER.ribbonHue
	let ribbonOpacity = 1 * SLIDER.ribbonOpacity
	let ribbonWidth = 1 + 3 * SLIDER.ribbonWidth
	
	p.clear()
	p.background(0,0,0)

	// Draw the eye on either side
	face.sideOrder.forEach((side) => {
		// Draw the eye lines
		side.eyeRings.forEach((eyeRing,eyeIndex) => {
			if (eyeIndex === 4) {
				p.fill(0)
				p.noStroke()
				drawContour(p, eyeRing, true)
			}

			let h = (40 + 70*eyeIndex + t*80)%360
			
			drawNeonContour(p, eyeRing, [h, 100, 50], 5, true)
		})


	})

	p.noFill()
	drawNeonContour(p, face.centerLine.slice(4,14), [150, 100, 50], 9, false)
	drawNeonContour(p, face.centerLine.slice(20), [150, 100, 50], 3.5, false)

	// FOREHEAD BAUBLES

	p.noStroke()
	p.fill(250, 100, 100)
	forehead = new Vector(face.forehead[0],face.forehead[1]+10)
	forehead.draw(p, 15*face.scale)
	foreheadLeft = new Vector(forehead[0]-30,forehead[1]+10)
	foreheadLeft.draw(p, 10*face.scale)
	foreheadRight = new Vector(forehead[0]+30,forehead[1]+10)
	foreheadRight.draw(p, 10*face.scale)


	p.fill(300, 0, 0, .5)
	forehead.draw(p, 12*face.scale)
	forehead.draw(p, 9*face.scale)
	foreheadLeft.draw(p, 8*face.scale)
	foreheadLeft.draw(p, 6*face.scale)
	foreheadRight.draw(p, 8*face.scale)
	foreheadRight.draw(p, 6*face.scale)



	hand.forEach((h,handIndex) => {

		// Leave a trail? Make an 8-point trail
		let trail = fingerTrails[handIndex][1]
		if (!app.paused)
			addToTrail(trail, h.fingers[1][3], 12)
		
		p.stroke(ribbonHue, 100, 50, ribbonOpacity)
		p.strokeWeight(ribbonWidth)
		p.noFill()
		drawRibbon(p, trail, (pct, side) => {
		
			return 10*pct
		}, true)


		h.fingers.forEach((finger,fingerIndex) => {
			let fingerHue = (fingerIndex*20 + 150 + t*100) %360


			// Draw each bone of the finger
			for (var i = 0; i < finger.length - 1; i++) {
				let lightness = (fingerHue + i*10)%100
				p.fill(0, 100, lightness)
				p.noStroke()

				// What angle is this finger bone?
				let joint0 = finger[i]
				let joint1 = finger[i + 1]
				let radius0 = getFingerSize(fingerIndex, i)
				let radius1 = getFingerSize(fingerIndex, i)
				let boneAngle = joint0.angleTo(joint1) 

				
				p.beginShape(p.TRIANGLE_MESH)
				joint1.polarOffsetVertex(p, radius1, boneAngle - Math.PI/2)
				joint1.polarOffsetVertex(p, radius1, boneAngle + Math.PI/2)
				p.endShape()

				p.fill(fingerHue, 100, lightness)
				p.beginShape(p.TRIANGLE_MESH)
				joint0.polarOffsetVertex(p, radius0*.3, boneAngle + Math.PI/2)
				joint0.polarOffsetVertex(p, radius0*.7, boneAngle - Math.PI/2)
				joint1.polarOffsetVertex(p, radius1*.7, boneAngle - Math.PI/2)
				joint1.polarOffsetVertex(p, radius1*.3, boneAngle + Math.PI/2)
				p.endShape()


				// p.fill(fingerHue, 100, lightness)
				// joint1.draw(p, radius1)
				// p.fill(fingerHue, 100, 100)
				// joint1.draw(p, radius1*.8)
			}
		})

		
	})

}


function getFingerSize(fingerIndex, index) {
	let fingerTaper = SLIDER.fingerTaper * .3
	let r = 1 + .3*Math.sin(1*fingerIndex - .5)
	// Make the thumb bigger
	if (fingerIndex == 0)
		r *= 1.6
	r *= 12
	// Taper the fingers a bit
	r *= (1 - fingerTaper*index)
	return r
}