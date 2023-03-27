const http=require("http");
const fs=require("fs");
const server=http.createServer((req,res)=>{
    // res.end("hello i am abc");
const apidata=fs.readFileSync("api1.json","utf-8");

const obj2=JSON.parse(apidata);
    if (req.url=="/"){
        res.end("this is home page")
    }
    else if(req.url==="/about"){
        res.end("this is my about page")
    }
    // else if(req.url==="/apidata"){
    //     res.end(fs.readFileSync("api1.json","utf-8"));
    // }
   
    else if(req.url==="/apidata")
    {
        res.end(obj2[0].name);
    }
    else{
        res.end("404 error occured!!!!!!!!!!!!")
    }

})
server.listen(4000,function(){
    console.log("server executed");
})