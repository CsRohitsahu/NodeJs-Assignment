// Q 5=> deleting nodejs_arcitecture file
const fs=require("fs");
fs.unlink('nodejs_arcitecture.txt',err=>{
    if(err) console.log("error occured in deleting file");
    else console.log("file deleted succesfully");
})
