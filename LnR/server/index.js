const express = require("express")
const mongoose = require('mongoose')
const cors = require("cors")
const EmployeeModel = require('./models/Employee')

const app = express()
app.use(express.json())
app.use(cors)

mongoose.connect("mongodb+srv://Revanth:12345@cluster0.gmkqvno.mongodb.net/?retryWrites=true&w=majority");

app.post('/register', (req, res) => {
    EmployeeModel.create(req.body)
    .then(employees => res.json(employees))
    .catch(err => res.json(err))
})
app.listen(3002, ()=>{
    console.log("server is running")
})