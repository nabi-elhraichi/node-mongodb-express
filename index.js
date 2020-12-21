const fs = require("fs");

fs.writeFile("myfile.txt","this is a test file","utf8",()=>{
    console.log("file has been created succefully");
});