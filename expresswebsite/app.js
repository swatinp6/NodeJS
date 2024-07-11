import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import path from 'path'

//create express app
let app = express()

//load configuration env variable
dotenv.config({path:"./config/dev.env"})
let port = process.env.PORT
let hostname=process.env.HOST_NAME

//create root req api
//url: http://localhost:8080/
app.get("/",(req,resp)=>{
    resp.sendFile(path.join(process.cwd(),"web","index.html"),(err)=>{})
})


app.listen(port,hostname,(err)=>{
    if(err) 
        throw err 
    console.log(`Server Running on http://${hostname}:${port}/`)
})