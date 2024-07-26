import express from 'express'
import fs from 'fs'
let router=express.Router()
router.post("/create",(req,resp)=>{

})
router.get("/read",(req,resp)=>{
    let employees=getEmployees();
    resp.status(200).json(employees)
})
router.put("/update/:id",(req,resp)=>{

})
router.delete("/delete/:id",(req,resp)=>{})
