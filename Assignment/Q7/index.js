const http=require("http")

const server =http.createServer((req,res)=>{
    if(req.url=="/") {
        res.write("<h1>I am happy to learn coding from Pw skills</h1>"); 
        res.end();
}
 
    else res.end("onceu opa a ime")
   
});
server.listen(3000)
console.log("server star");