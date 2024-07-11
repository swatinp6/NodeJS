const fs=require('fs');
fs.readFile("users.json","utf-8",(err,data)=>{
    if(err)
        throw err
    console.log(typeof data);
    let users=JSON.parse(data)
    console.log(typeof data);
    let maleusers=[];
    let femaleusers=[]
    for(user of users){
        if(user.gender==="Male"){
            maleusers.push(user)
        }
        else{
            femaleusers.push(user)
        }

    }
    fs.writeFile("male.json",JSON.stringify(maleusers),(err)=>{
        if (err)
            throw err
        console.log("male recorded added succesfully");
    })
    fs.writeFile("female.json",JSON.stringify(femaleusers),(err)=>{
        if (err)
            throw err
        console.log("female recorded added succesfully");
    })
   
    
    
})