import fs from 'fs'
import path from 'path'
//console.log(path.join(process.cwd(),"India","Bangalore"));
fs.readFile(path.join(process.cwd(),"India","Bangalore","emp.txt"),'utf-8',(err,data)=>{
    if(err){
        throw err
    }
    else{
        console.log(data);
    }
})
