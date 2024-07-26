import jwt from 'jsonwebtoken';
import dotenv from 'dotenv'
let user={
    name:"Rahul",
    uid:"rahul12",
    password:"rahul@2024"
}
//let s_key="ABC-XYZ"
dotenv.config({path:'./config/dev.env'})
let s_key=process.env.SECRET_KEY
let token=jwt.sign(user,s_key)
console.log(token);
let user_1=jwt.verify(token,s_key)
console.log(user_1);
