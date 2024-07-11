import fs from 'fs'
let datat=fs.readFile('data.txt','utf-8',(err,data)=>{
    if(err){
        throw err;
    }
    else{
        console.log(data);
    }

})
