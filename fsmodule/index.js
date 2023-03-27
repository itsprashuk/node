const fs=require("fs");
fs.writeFile("prashuk.txt","data inserted in this file",()=>{
    console.log("data successfully added");
})
console.log("hii");

const abc=fs.writeFileSync("hello.txt","hello i am abc");
console.log(abc);
console.log("data.inserted");

fs.readFile("hello.txt","utf-8",(err,data)=>{
console.log(data);
})

fs.appendFile("hello.txt"," am i audible",(err)=>{
    console.log(err);
})
fs.rename("hello.txt","h.txt",(err)=>{
    console.log(err);
})
