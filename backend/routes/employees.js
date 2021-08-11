const express = require('express')
const router = express.Router()
const Employee_data = require('../models/employee')




//get all
router.get('/', async (request, response )=>{
    try{
        const employeeList = await Employee_data.find()
        response.json(employeeList)
    }catch (error){
        response.status(500).json({message:error.message})
    }
})
//get one
router.get('/:id', findEmployee, (request, response )=>{
    response.send(response.employee)
})


//create one
router.post('/', async(request, response )=>{
    const employee = new Employee_data({
        name: request.body.name,
        department: request.body.department,
        job_title: request.body.job_title,
        email_address: request.body.email_address,
        image: request.body.image
    })
    try{
        const newEmployee = await employee.save()
        response.status(201).json(newEmployee)
    }catch(error){
        response.status(400).json({ message: error.message})
    }
})

//update one
router.patch('/:id', findEmployee, async(request, response )=>{
    if(request.body.name != null){
        response.employee.name = request.body.name
    }
    if(request.body.department != null){
        response.employee.department = request.body.department
    }
    if(request.body.job_title != null){
        response.employee.job_title = request.body.job_title
    }
    if(request.body.email_address != null){
        response.employee.email_address = request.body.email_address
    }
    if(request.body.image != null){ 
        response.employee.image = request.body.image
    }
    try{
        const updatedSubscriber = await response.employee.save()
        response.json(updatedSubscriber)
    }catch(error){
        return response.status(400).json({message : error.message})
    }
})

//delete one
router.delete('/:id',findEmployee, async(request, response )=>{
    try{
        await response.employee.remove()
        response.json({message : "DELETED Subscriber"})
    }catch (error){
        response.status(500).json({message : error.message})
    }
})



//middleware function 
async function findEmployee(request, response, next){
    let employee;
    try{
        employee = await Employee_data.findById(request.params.id)
        if(employee == null){
            return response.status(404).json({message: "no sub found"})
        }
    }catch(error){
        return response.status(500).json({message: error.message})
    }
    response.employee = employee
    next()
}

module.exports = router