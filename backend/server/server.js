const express = require('express')
const morgan = require('morgan')
const memberRouter = require('../controller/router.js')
const bodyParser = require('body-parser')
const cors = require('cors')

//set app
let app = express()


app.use(cors());

//error handler
app.use(function (err, req, res, next) {
  console.error(err.message)
  res.status(404).send('Oh noooo')
})

app.use(morgan('dev'))
//body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


//set port
const PORT = 9000

app.listen(PORT, ()=>{
console.log(`Connected to FFL on port ${PORT}`)
})