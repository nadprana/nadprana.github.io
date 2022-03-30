


// Do setup
document.addEventListener("DOMContentLoaded", function(){
	new Vue({
		el: "#app",
		template: `<div id="app">
			<chat-widget :messages="messages" />


			Your bill: {{bot.bill}} USD

			<div id="controls">
				<div>
					<input ref="input" v-model="currentInput" @keyup="sayKey" @keyup.enter="enterInput">

					<button @click="enterInput">💬</button>
				</div>
				<div>
					<button @click="handleInput('cry')">cry</button>
					<button @click="handleInput('pay')">pay</button>
				</div>


			</div>

			{{currentInput}}
		</div>`,

		watch: {
			// currentInput() {
			// 	console.log('Input is now', this.currentInput)
			// },

			messages() {
				// console.log("messages", this.messages)
			}
		},

		methods: {
			sayKey() {
				console.log("KEY")
			},

			postToChat(text, owner, isSelf) {
				this.messages.push({
					text: text,
					isSelf: isSelf,
					owner: owner,
				})
			},

			enterInput() {
				let text = this.currentInput
				this.currentInput = ""


				this.handleInput(text)

			},

			handleInput(text) {
				// Does bot things
				this.postToChat(text, "😐", true)

				// Add to the messages in chat

				// Bot does something
				let output = this.bot.respondTo(text)

				setTimeout(() => {
					this.postToChat(output, "👨🏻‍🦳")

				}, Math.random()*100 + 400)

			}
		},

		mounted() {

			console.log("Vue app is all set up....")
			setInterval(() => {
				// this.currentInput = randomMessage()

			}, 1000)

			this.bot.post = (text) =>  {
				// this is now the vue object
				this.postToChat(text, "😐", true)
			}

			this.postToChat("Hello there, I am TerribleTherapistBot. Why don't you tell me how you feel?", "👨🏻‍🦳")

		},


		data() {
			return {
				// Store the bot
				bot: new TerribleTherapistBot(),

				// And the message
				messages: [],

				// And the current thing in the input
				currentInput: ""
			}
		}
	})
})
