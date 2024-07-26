import express from 'express'
import fs from 'fs'
let router=express.Router();
router.get("/read",(req,resp)=>{

})
router.post("/create",(req,resp)=>{

})
router.delete("/delete/:id",async(req,resp)=>{
    let eid=req.params.eid
    console.log(eid);
   let employees=await getEmployees();
    let flag=employees.find((emp)=>{
        return emp.id == eid;
    })
    if(!flag){
        return resp.status().json({"msg":"Employee not existed"})
    }
    let remaining_emp=employees.filter((emp)=>{
        return emp.eid!=eid;
    })
    saveEmployees(remaining_emp)
    return resp.json({"msg":"Deleted successfully"})
})
let saveEmployees=(employees)=>{
    FileSystem.writeFileSync('data.json',JSON.stringify(employees))
}
let getEmployees=()=>{

}
export default router;