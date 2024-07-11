const http=require('http')
const fs=require('fs')

let server=http.createServer((req,resp)=>{
    console.log(req.url);
    if(req.url==="index.html"){
        resp.end(data)
    }
    
    fs.readFile("index.html","utf-8",(err,data)=>{
        if(err)
            throw err
        resp.end(data)
    })
    fs.readFile("about.html","utf-8",(err,data)=>{
        if(err)
            throw err
        resp.end(data)
    })
    
    //resp.end("Hello Good Morning")
})
server.listen(5500,'127.0.0.1',(err)=>{
    if(err)
        throw err
    console.log("server running successfully!");

})