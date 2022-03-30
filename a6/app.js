	
let simCount = 0

let noise = (new p5()).noise



	// <simulation type="DustSimulation" mode="gol" :dimensions="[40,30]" :tileSize="10" speed="100"/>

	// What if much bigger?
	// <simulation type="DustSimulation" mode="gol" :dimensions="[50,70]" :tileSize="10" speed="50"/>

	// <simulation type="DustSimulation" mode="gol" :dimensions="[40,30]" :tileSize="10" speed="100"/>
	// type information here
document.addEventListener("DOMContentLoaded", function(){
	new Vue({
		el : "#app",
		template: `<div id="app">
			A few rabbits settle on a nice field of grass. <br>
			These rabbits will die if not in range of plants to feed on but can quickly proliferate otherwise.<br>
			The plants grow and spread quickly. <br>
			Eventually, the populations of the two species stabilize -- this represents an ecosystem in equilibrium.
			<simulation type="EcosystemSimulation" mode="gol" :dimensions="[20,15]" :tileSize="26"/>
			An invasive species is introduced into the ecosystem. These beavers compete with the rabbits for plant food.<br>
			They are much more resilient and feed and reproduce much faster than their counterparts.<br>
			Eventually, they drive the rabbit species to extinction. <br>
			<simulation type="InvasiveSpeciesSimulation" mode="gol" :dimensions="[20,15]" :tileSize="26"/>
			Due to climate change, the plants have started to grow at a much slower rate.<br>
			A mutation in beavers creates 'black beavers' that can survive for much longer periods of time without food.<br>
			These black beavers are more likely to survive and reproduce than regular beavers, causing natural selection.
			 <br>
			<simulation type="EvolutionSimulation" mode="gol" :dimensions="[20,15]" :tileSize="26"/>
			
		</div>`,
		
	}) 
})



//==================================
// Grid utilities

// Create a grid of columns
function createGrid(w, h) {
	const grid = Array.from(new Array(w),()=>Array.from(new Array(h),()=>"-"));
	return grid
}

// Set a grid equal to a function
function setGrid(grid, fxn) {
	if (grid === undefined)
		console.warn("no grid!")
	if (fxn === undefined)
		console.warn("no function for setting the grid!")
	for (var i = 0; i < grid.length; i++) {
		for (var j = 0; j < grid[i].length; j++) {
			grid[i][j] = fxn(i,j)
		}
	}
}

// Copy a grid
function copyGrid(dest, src) {
	for (var i = 0; i < src.length; i++) {
		for (var j = 0; j < src[i].length; j++) {
			dest[i][j] = src[i][j]
		}
	}
}
