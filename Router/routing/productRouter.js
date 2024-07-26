import express from 'express'
let router=express.Router();
/*url:http://localhost:8080/product/update
method:PUT
Access:Public
Required fields:None
*/
router.put("/update",(req,resp)=>{
    resp.send("Product router -Get request")
})
/*url:http://localhost:8080/product/delete
method:DELETE
Access:Public
Required fields:None
*/
router.delete("/delete",(req,resp)=>{
    resp.send("Product router-POST request")
})
export default router;