const express = require('express')
const router = express.Router()
const { Client } = require('pg')
const bodyParser = require('body-parser')
let app = express()

//body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



//set up pg module
const connectionString = 
'postgresql://aluko17:@localhost:5432/ffl'

const client = new Client({ connectionString })
client.connect().then(()=>{console.log('client connection')})

//get all items
router.get('/', (req, res, next)=>{
	
	let query ='SELECT id, name FROM ffl ORDER BY id'
	client.query(query)
	.then(result => {
		res.send(result.rows)
	})
	.catch(error => res.send(error))
})


module.exports = router