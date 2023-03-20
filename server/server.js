const http=require("http");
const server=http.createServer((req,res)=>{
    // res.end("hello i am abc");

    if (req.url=="/"){
        res.end("this is home page")
    }
    else if(req.url==="/about"){
        res.end("this is my about page")
    }

})
server.listen(3000,function(){
    console.log("server executed");
})