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
client.connect().then(()=>{console.log('client connection for ffl')})

//get all members
router.get('/', (req, res)=>{
	
	let query ='SELECT member_id, first_name, last_name, highest_finish, lowest_finish, finishes FROM members ORDER by member_id'
	client.query(query)
	.then(result => {
		res.send(result.rows), console.log(result.rows)
	})
	.catch(error => res.send(error))
})


module.exports = router