import express from 'express'
let router=express.Router();
/*url:http://localhost:8080/user/read
method:GET
Access:Public
Required fields:None
*/
router.get("/read",(req,resp)=>{
    resp.send("user router -Get request")
})
/*url:http://localhost:8080/user/create
method:Post
Access:Public
Required fields:None
*/
router.post("/create",(req,resp)=>{
    resp.send("user router-POST request")
})
export default router;