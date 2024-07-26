import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import chalk from 'chalk'
import mongoose from 'mongoose'
import productRouter from './routing/productRouter.js'

let app=express()

app.use(morgan('dev'))
dotenv.config({path:'./config/dev.config'})
let port = process.env.PORT 
let host=process.env.HOST_NAME
let db_url=process.env.MONGO_LOCAL_URL
app.get("/",(req,resp)=>{
    resp.send("Server -Root Req")
})
app.use("/product",productRouter)

mongoose.connect(db_url)
.then(()=>{
    console.log("Mongo Db Connection Successfull!")
    app.listen(port,host,(err)=>{
        console.log(chalk.green(`Server is Running http://${host}:${port}/`))
        })
    })
.catch((err)=>{
    process.exit(1);
})