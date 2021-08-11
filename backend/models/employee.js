const mongoose = require('mongoose')

const employeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    hire_date: {
        type: String,
        required: true,
        default: Date.now
    },
    department: {
        type: String,
        required: true,
    },
    job_title:{
        type: String,
        required: true,
    },
    email_address:{
        type: String,
        required: true,
    },
    image:{
        type: String
    }

})

module.exports = mongoose.model('Employee', employeeSchema)