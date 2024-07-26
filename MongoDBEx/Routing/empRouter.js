import express from "express";
import EmployeeModel from './Model/Employee.js'
let router=express.Router();

//URL:localhost:8080/emp/
//Method:GET
router.get("/",(req,resp)=>{

    resp.status(200).json({"msg":"Employee Root Request"})
})

//URL:localhost:8080/emp/read
//GET:GET
router.get("/read",  async(req,resp)=>{
    try{
        let employees= await EmployeeModel.find();
        return resp.status(200).json(employees);
    }
    catch(err){
        return resp.status(401).json({"msg":err.message})
    }
   
})
/*
    Usage: create new employee
    
*/
router.post("/create",async  (req,resp)=>{
    try{
        let emp=req.body;
        let employee= await EmployeeModel.findOne({eid:emp.eid})
        c
        if(employee){
            return resp.status(401).json("msg":"emp alredy exists")
        }
    }
})
export default router;