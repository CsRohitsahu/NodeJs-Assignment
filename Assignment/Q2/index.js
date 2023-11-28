//Q.2=> creating and writing to a file named nodejs_architecture.txt

 const fs=require("fs");
let content="NOde.js  is a platform that utilizes javascript and is primarily employed for developing web application that highly focused a input/output operations, including but no limited to chat applications and multimedia streaming websites. The platfor is constructed using Google chrome's V8 engine. A web application is  a type of software that executes on a server and is displayed bu a lcient's browser that obtains all the applications's require over the internet "
fs.writeFile('nodejs_arcitecture.txt',content,(err)=>{
if(err) console.log("error occured in creating and writing file");
else console.log("written and created file succesfully");
}) 