// importing express
const express = require('express')
const app = express()

// Home
app.use('./', (req, res) => {
	res.send('<h1>Home Page</h1>')
})

/* 
Exercise 1:
Greet the user
*/
app.use('/greetings/:name', (req, res) => {
	const name = req.params.name
	res.send(`Hello there, ${name}!`)
})

/* 
Exercise 2:
Rolling the Dice
*/

app.listen(3000, () => {
	console.log('Listening to port 3000')
})
