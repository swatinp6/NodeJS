const fs=require('fs')
fs.readFile("users.json","utf-8",(err,data)=>{
    let users=JSON.parse(data)
    
    //using filter
   let maleusers=users.filter((user)=>{
    return user.gender=='Male'
    })
    let femaleusers=users.filter((user)=>{
        return user.gender=='Female'
        })
        fs.writeFile("maleusers.json",JSON.stringify(maleusers),(err)=>{
            if (err)
                throw err
            console.log("male recorded added succesfully");
        })
        fs.writeFile("femaleusers.json",JSON.stringify(femaleusers),(err)=>{
            if (err)
                throw err
            console.log("female recorded added succesfully");
        })
    
})