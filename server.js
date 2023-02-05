const express= require ('express')
const mongoose = require('mongoose')
const UserRouter=require('./ROUTES/UserRouter')
const dotenv=require('dotenv')
dotenv.config()

const app=express()
app.use(express.json())
app.use ('/api/users',UserRouter)




mongoose.set('strictQuery',true)
mongoose.connect(process.env.MONGO_URI,err=>err?console.log(err):console.log('DB IS CONNCTED'))


const Port=process.env.Port
app.listen(Port,err=>err?console.log(err):console.log(`server is runnig on ${Port}`))