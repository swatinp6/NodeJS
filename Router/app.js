/*>npm init -y
>npm i express nodemon morgan*/
import express from 'express'
import userRouter from './routing/userRouter.js'
import productRouter from './routing/productRouter.js'
import morgan  from 'morgan'

let app=express()
app.use(morgan('tiny'))
app.use("/user",userRouter)
app.use("product",productRouter)
app.listen(5500,'127.0.0.1',(err)=>{
    if(err) throw err
    console.log("server is running");
})