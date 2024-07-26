/* npm init -y
npm i chalk mongoose express morgan chalk cors nodemon */


import express from 'express'
import product from '../model/product.js'

let router=express.Router()
router.get("/",(req,resp)=>{
    resp.send("Product-root request")
})
router.get("/read",async(req,resp)=>{
        try{
             let  products=await product.find()
             return resp.status(400).json(products)
        }
        catch(err){
            return resp.json({"msg":err.message})
        }
})
/*router.put()
router.post()
router.delete()
*/

export default router;

