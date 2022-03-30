

class EvolutionSimulation {
	// Some number of grids
	constructor(mode, dimensions, tileSize) {
		this.idNumber = simCount++
		// Mode can control various factors about the simulation
		this.dimensions = dimensions
		this.mode = mode
		this.tileSize = tileSize

		this.selectedCell = [3, 4]

		
		// Your simulation can have multiple layers, 
		// for example, it might have a 
		//  - a layer of sheep emoji, and a noise field of grass layers and a layer of wind vectors
		//  - a single layer of true/false for Game of Life

		this.objects = createGrid(...dimensions)
		this.height = createGrid(...dimensions)

		// Set up the grid with its initial values
		this.initialize()
	}


	initialize() {
		// A random place to sample noise from 
		let seedValue = Math.random()*1000
		console.log("init!")

		setGrid(this.height, (x,y) => {
			// What's the water for this grid?
			let scale = .2
			return noise(x*scale,y*scale + 100, seedValue + 100)
		})


		setGrid(this.objects, (x,y) => {
			if (Math.random() < .05)
				return "🦫"

			if (Math.random() < .3)
				return "🌱"

				
		})
	}



	// When we update the simulation, 
	// we want write our next moves into a temporary "next-step" grid
	// And then once all the updates are done, 
	// copy that back into the original grid 

	step() {
		
		// Create a temporary grid to store the next positions
		//let tempGrid = createGrid(...this.dimensions)
		
		setGrid(this.objects, (x,y) => {
			let obj = this.objects[x][y]
			if (obj == "🌱") {
				let neighbors = this.getNearestNeighborPositions(x, y)
				let isNextToBeaver = false
				let isNextToMutatedBeaver = false
				let chanceOfBeaverSpawning = 0.3
				let chanceOfMutation = 0.07
				// If next to beaver, there is a chance of replacing the leaf with a beaver or mutated beaver
				neighbors.forEach(n => {
					if (this.objects[n[0]][n[1]] == "🦫") isNextToBeaver = true
					if (this.objects[n[0]][n[1]] == "🦡") isNextToMutatedBeaver = true
				})
				
				if (isNextToMutatedBeaver && Math.random() < chanceOfBeaverSpawning/2) {
					return "🦡"
				}
				else if (isNextToBeaver && Math.random() < chanceOfBeaverSpawning) {
					if (Math.random() < chanceOfMutation) {
						return "🦡"
					} else {
						return "🦫"
					}
				} else {
					return "🌱"
				}

			}

			if (obj == "🦫") {
				let neighbors = this.getNearestNeighborPositions(x, y)
				let isNextToLeaf = false
				let chanceOfSurvival = 0.7
				// If not next to any leaves, there is a chance of the beaver dying 
				neighbors.forEach(n => {
					if (this.objects[n[0]][n[1]] == "🌱") isNextToLeaf = true
				})

			
				if (isNextToLeaf || (Math.random() < chanceOfSurvival)) {
					return "🦫"
				} else {
					return undefined
				}

			}

			if (obj == "🦡") {
				let neighbors = this.getNearestNeighborPositions(x, y)
				let isNextToLeaf = false
				let chanceOfSurvival = 0.8
				// If not next to any leaves, there is a chance of the beaver dying 
				neighbors.forEach(n => {
					if (this.objects[n[0]][n[1]] == "🌱") isNextToLeaf = true
				})

				if (isNextToLeaf || (Math.random() < chanceOfSurvival)) {
					return "🦡"
				} else {
					return undefined
				}

			}


			if (obj == undefined) {
				let neighbors = this.getEightNeighborPositions(x, y)
				let isNextToLeaf = false
				let isNextToMutatedBeaver = false
				let chanceOfLeafSpawning = 0.04
				let chanceOfBeaverSpawning = 0.007
				
				// If next to leaf or mutated beaver, there is a chance of spawning a new leaf or mutated beaver
				neighbors.forEach(n => {
					if (this.objects[n[0]][n[1]] == "🌱") isNextToLeaf = true
					if (this.objects[n[0]][n[1]] == "🦡") isNextToMutatedBeaver = true
				})
				
				if (isNextToLeaf && Math.random() < chanceOfLeafSpawning) return "🌱"
				if (isNextToMutatedBeaver && Math.random() < chanceOfBeaverSpawning) return "🦡"

			}


		})

		//copyGrid(this.values, tempGrid)
	}



	draw(p) {
		p.background(196, 100, 80)
		// Draw each cell
		let w = this.dimensions[0]
		let h = this.dimensions[1]

		for (var i = 0; i < w; i++) {
			for (var j = 0; j < h; j++) {
				this.drawCell(p, i, j)
			}
		}
		

		// Draw debug information about the currently selected cell
		// A useful place to put debug information!
		if (this.debugMode) {

			p.stroke(100, 100, 50, 1)
			p.strokeWeight(4)
			p.noFill()
			this.drawSquare(p, ...this.selectedCell)
			let neighbors = this.getNearestNeighborPositions(...this.selectedCell, true)
			neighbors.forEach((cell,index) => {
				p.noStroke()
				p.fill(index*20, 100, 50, .4)
				this.drawSquare(p, ...cell)
			})
			neighbors = this.getCornerNeighborPositions(...this.selectedCell, true)
			neighbors.forEach((cell,index) => {
				p.noStroke()
				p.fill(index*20 + 100, 100, 50, .4)
				this.drawSquare(p, ...cell)
			})

			let count = this.getLiveNeighborCount(...this.selectedCell)
			p.stroke(100)
			p.fill(0)
			p.text(count, this.selectedCell[0]*this.tileSize,this.selectedCell[1]*this.tileSize)
		}
	}

	

	// Draw a cell.  Add emoji or color it
	drawCell(p, x, y) {

		let h = this.height[x][y]
		let hue = h*100
		p.noStroke()
		p.fill(hue, 100*h, 50)
		this.drawSquare(p, x, y)


		let w = this.tileSize
		let px = (x + .5)*w
		let py = (y + .5)*w

		

		p.textSize(w*.7)
		let object = this.objects[x][y]
		p.text(object, px - w*.4, py + w*.3)

		// Write debug text
		if (this.debugMode) {
			p.textSize(10)
			p.fill(0)
			p.stroke(100)
			p.text(h.toFixed(2), px - w/2, py)
		}
		
	}

	//=====================================================
	// Mouse interactions

	select(x, y) {
		// console.log("Select", x, y)
		this.selectedCell = [x, y]
	}

	click(x, y) {
		console.log("Click", x, y)
		
	}

	drag(x, y) {
		this.values[x][y] = 1
	}



	//=====================================================
	// Utility functions

	toggleDebugInfo() {
		this.debugMode = !this.debugMode
	}

	// Handy utility to draw a single grid 
	drawSquare(p, col, row) {
		let w = this.tileSize
		let x = (col + .5)*w
		let y = (row + .5)*w
		p.rect(x - w/2, y - w/2, w, w)
	}

	// Handy utility to draw text 
	drawText(p, col, row, text) {
		let w = this.tileSize
		let x = (col + .5)*w
		let y = (row + .5)*w
		p.text(text, x - w/2, y - w*.1)
	}

	// Is this cell selected?
	isSelected(x, y) {
		return (this.selectedCell && this.selectedCell[0] == x && this.selectedCell[1] === y)
	}

	//------------------------------------------------
	// Neighbor positions
	getEightNeighborPositions(x1, y1, wrap=true) {
		return [...this.getNearestNeighborPositions(x1, y1, wrap),
		...this.getCornerNeighborPositions(x1, y1, wrap)]
	}

	getNearestNeighborPositions(x1, y1, wrap=true) {
		let w = this.dimensions[0]
		let h = this.dimensions[1]
		let x0 = x1 - 1
		let x2 = x1 + 1
		let y0 = y1 - 1
		let y2 = y1 + 1
		if (wrap)  {
			x0 = (x0 + w)%w
			x2 = (x2 + w)%w
			y0 = (y0 + h)%h
			y2 = (y2 + h)%h
		}
		
		return [[x1,y0],[x2,y1],[x1,y2],[x0,y1]]
	}
	getCornerNeighborPositions(x1, y1, wrap=true) {
		let w = this.dimensions[0]
		let h = this.dimensions[1]
		let x0 = x1 - 1
		let x2 = x1 + 1
		let y0 = y1 - 1
		let y2 = y1 + 1
		if (wrap)  {
			x0 = (x0 + w)%w
			x2 = (x2 + w)%w
			y0 = (y0 + h)%h
			y2 = (y2 + h)%h
		}
		
		return [[x0,y0],[x0,y2],[x2,y2],[x2,y0]]
	}


}