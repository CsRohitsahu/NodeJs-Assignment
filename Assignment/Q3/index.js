// Q.3=>reading content of file
const fs=require("fs");
fs.readFile('nodejs_arcitecture.txt',(err,content)=>{
    if(err) console.log("error occured in reading file");
    else console.log("content of file is \n ",content.toString());
})