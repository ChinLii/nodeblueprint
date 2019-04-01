/*
    DOING: Importing part
    node_modules for using in this file
*/
require('./db/models')
require('./config/mongoose')
const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const router = require('./routes/routes')
/*
    DOING: Configuration part
    define variable 
*/
const app = express()
const { port, env } = require('./config/vars')

/*
    DOING: Define middleware which is going to use in this project
*/
app.use(bodyParser()) // using for geting info from html forms 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(morgan(env))

/*
    DOING: Define api router
*/
app.use('/api', router)

app.listen(port, function(){
    console.log(`The server started on port ${port} in environment ${env}`)
})
