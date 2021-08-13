
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

//department filter
app.get('/search/department/:department', findDept, (request, response) =>{
  
  response.send(response.deptList)
})

async function findDept(request, response, next){

  let deptList;
  try{
      deptList = await Employee_data.find({department : request.params.department})
      if(deptList == undefined){
          return response.status(404).json({message: "no departments found"})
      }
  }catch(error){
      return response.status(500).json({message: error.message})
  }
  response.deptList = deptList
  next()
}

app.listen(3000, ()=>console.log("Server START"))