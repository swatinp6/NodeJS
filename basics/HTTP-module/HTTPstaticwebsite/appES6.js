import fs from 'fs'
import path from 'path'
import http from 'http'
let server=http.createServer((req,resp)=>{
    if(req.url==='index.html'){
        fs.readFile(path.join(process.cwd(),"HTTPstaticwebsite","index.html"),'utf-8',(err,data)=>{
            if(err) throw err
            resp.end(data)
        })
    }
    if(req.url==='about.html'){
            fs.readFile(path.join(process.cwd(),"HTTPstaticwebsite","about.html"),'utf-8',(err,data)=>{
                if(err) throw err
                resp.end(data)
            })
    }
    
})
server.listen(5500,'127.0.0.1',(err)=>{
    if(err) 
        throw err
    console.log("server running succesfully");
})