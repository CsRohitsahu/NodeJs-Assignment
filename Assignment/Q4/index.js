// Q4 => appending and printing content of file
const fs=require("fs");
let appendData="compared to other server-side languages, Node js has distinct advantages. Its asynchronous model and non-blocking I/O operation improve the scalability and performance of web applications built on other frameworks. Node js can easily handle multiple client requests without requiring multiple threads, consuming less memory and resources. Additionally, it is highly scalable and provides high performance. Node js is also flexible with multiple frameworks and makes the development process easier.";

fs.appendFile('nodejs_arcitecture.txt',appendData,(err)=>{
    if(err) console.log("error occured in appending file");
    else console.log("file appended succesfully");
})
fs.readFile('nodejs_arcitecture.txt',(err,content)=>{
    if(err) console.log("error occured in reading file");
    else console.log(content.toString());
})