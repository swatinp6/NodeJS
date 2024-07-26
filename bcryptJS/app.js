import bcrypt from 'bcrypt'
let user={
    name:'Sai',
    email:'Sai@gmail.com',
    cc:'12341234123411',
    password:'ILoveMongos'
}
console.log(user)
let salt = bcrypt.genSaltSync(10)
let new_cc = bcrypt.hashSync(user.cc,salt)
let new_password=bcrypt.hashSync(user.password,salt)
user={...user,cc:new_cc,password:new_password}
console.log(user)
console.log(user.password)
let flag = bcrypt.compareSync("ILoveMongos",user.password)
if(flag){
    console.log("Login Success")
}
else{
    console.log("Login Failed")
}