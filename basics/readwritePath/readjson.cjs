const fs=require('fs')
fs.readFile('users.json','utf-8',(err,users)=>{
    if(err)
        throw err
    console.log( typeof users);
    let users_data=JSON.parse(users)
    console.log(typeof users_data);
    for(user of users_data){
        console.log(user.name);
        //console.log(typeof(user));
    }
})