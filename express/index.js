const express=require("express")
const path=require("path");




const app=express()

const dir=path.join(__dirname,'public')
app.use(express.static(dir))

app.set("view engine","ejs")
console.log(app.get("view engine"));
// console.log(path.join(__dirname,'views'))

app.get("/",(req,res)=>{
    // res.send("hello............")
    res.render("index",{
        title:"index"
    })

})

app.get("/home", (req,res)=>{
    // res.sendFile(`${dir}/home.html`)
    res.render("home",{
        title:"home"
    })
});

app.get("/input",(req,res)=>{
    res.send(`

        <input type="text" placeholder="enter ur name..." value="prashuk"/>`)
})



app.get("/download",(req,res)=>{
   res.download(`${dir}/index.html`)
})

app.listen(2000,function(){
    console.log("executed.......")
})

