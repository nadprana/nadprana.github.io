class TerribleTherapistBot {
	constructor() {
		this.bill = 0
		this.impatience = 0

		this.grammar = tracery.createGrammar(therapistGrammar)
		this.grammar.addModifiers(baseEngModifiers)
	}

	respondTo(s) {
		this.bill += Math.floor(Math.random() * 500)
		this.impatience += 1

		if (s.toLowerCase().includes("pay")) {
			this.bill = 0
			this.impatience = 0

			return this.grammar.flatten("Thank you for choosing TerribleTherapistBot, where your needs come first. How else can I help you today?")
		}

		if (this.impatience > 7) return this.grammar.flatten("#excuse#... Anyway, I'd appreciate if you could pay your bill first.")
		
		
		if (s.toLowerCase().includes("sad") || s.toLowerCase().includes("depressed") || s.toLowerCase().includes("unhappy")) {
			return this.grammar.flatten("Well, you know what makes me feel better when I'm down? #randomThing#")
			
		}

		if (s.toLowerCase().includes("stressed") || s.toLowerCase().includes("anxious") || s.toLowerCase().includes("confused")) {
			return this.grammar.flatten("Really? Well, maybe you should try #terribleAdvice#")
			
		}

		if (s.toLowerCase().includes("happy") || s.toLowerCase().includes("great")) {
			return this.grammar.flatten("That's great. Another success story for TerribleTherapistBot.")
			
		}


		// Brew new coffee
		if (s.toLowerCase().includes("cry")) {

			var num = Math.floor(5 + Math.random()*5) 
			var count = 0
					
			let interval = setInterval(() => {
				count += 1
				if (count > num) {
					clearInterval(interval)
				} else {
					// console.log("post to chat")
					this.post(this.grammar.flatten("#cryingSound#"))
				}


				
			}, 200)
			

			return this.grammar.flatten("#cryingResponse#")

		}


		// return `'${s}' isn't a type of coffee`
		return `Oh... that's really interesting. You should reflect on why you feel that way.`
	}
}