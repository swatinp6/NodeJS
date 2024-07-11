import express from 'express'
import path from 'path'
let app=express()
app.get("/",(req,resp)=>{
    resp.send("Hello!!!Good Morning")

})
app.get("/index.html",(req,resp)=>{
    resp.sendFile(path.join(process.cwd(),'index.html'),(err)=>{
        if(err) throw err
    })
})
app.get("/about.html",(req,resp)=>{
    resp.sendFile(path.join(process.cwd(),'about.html'),(err)=>{
        if(err) throw err
    })
})

app.listen(5500,'127.0.0.1',(err)=>{
    if(err)
        throw err
    console.log("express server running successfully");

})