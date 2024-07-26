import express from "express";
import EmployeeModel from '../models/employee.js'
let router=express.Router();

router.get("/",(req,resp)=>{

    resp.status(200).json({"msg":"Employee Root Request"})
})

//URL:localhost:8080/emp/read
//GET:GET
router.get("/read", async (req,resp)=>{
    try{
        let employees= await EmployeeModel.find();
        return resp.status(200).json(employees);
    }
    catch(err){
        return resp.status(401).json({"error message":err.message})
    }
   
})
/*
    Usage: create new employee
    URL:http://127.0.0.1:8080/emp/create
    Method:POST
    Req Fields:eid,ename,esal
*/
router.post("/create",async (req,resp)=>{
    console.log("Done Brunch!")
    try{ 
        let emp = req.body;
        let Employee=await EmployeeModel.findOne({eid:emp.eid})
        console.log(Employee)
        if(Employee){
            return resp.status(401).json({"msg":"Employee already exits"})
        }
        Employee=new EmployeeModel(emp)
        console.log(Employee)
        await Employee.save();
        return resp.status(200).json({"msg":"Employee created Successufully"})

    }catch(err){
        return resp.status(401).json({"error message":err.message})
    }
})

router.put("/update/:eid",async(resp,req)=>{

    try{
        let emp_id=req.params.eid;
        let emp=req.body;
        let Employee=await EmployeeModel.findOne({eid:emp_id})
        if(!Employee){
            return resp.status(401).json({"msg":"Employee does'nt exists"})
        }
        await EmployeeModel.findByIdAndUpdate(emp_id,{$set:{emp:ename,esal:emp.esal}})
        return resp.status(200).json({"msg":"updated successfully"})
    }
    catch(err){
        return resp.status(401).json({"error message":err.message})
    }
})
export default router;