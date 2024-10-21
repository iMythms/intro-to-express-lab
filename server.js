// importing express
const express = require('express')
const app = express()

// Greet the user
app.use('/greetings/:name', (req, res) => {
	//
})

app.listen(3000, () => {
	console.log('Listening to port 3000')
})
