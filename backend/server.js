
require('dotenv').config()
const Employee_data = require('./models/employee')


const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')

app.use(cors())

mongoose.connect(process.env.ATLAS_URL,{ useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection;
db.on('error', (error)=> console.error(error));
db.once('open', ()=> console.log('CONNECTED to database'));

app.use(express.json())


//routes

const mainRouter = require('./routes/employees')
app.use('/employees', mainRouter)

