const http=require('http')
let server=http.createServer((req,resp)=>{
    resp.end("<h1>Hello Good Morning!!!!!....Preeti</h1>")
})
//server.listen(port number,hostname,(callback)=>{})
    server.listen(5500,'127.0.0.1',(err)=>{
        if(err) 
            throw err
        console.log("server is running");
    })