
const fs = require('fs');

let data = "Hello, this is some text I want to write to a file.";

// Write data to a file named 'example.txt'
fs.writeFile('example.txt', data, 'utf8', (err) => {
    if (err) {
        console.error("An error occurred:", err);
        return;
    }
    console.log("File was written successfully");
});

console.log("This message is displayed after initiating the writeFile operation");

fs.readFile('example.txt','utf8',function(err,data){
    if(err){
        console.log("Error in file read: "+err);
        return;
    }else{
        console.log("File data: "+data);
    }
});

console.log("This message is displayed after initiating the readFile operation");

data ="Hello, this is some text I want to write to a file. Ashish was here.";

function expOperation(){
    console.log("expensive OP");
    let sum=0;
    for(let i=0;i<120000000000;i++){
        sum+=i;
    }
    console.log("expensive op complete");
}

fs.writeFile('example.txt', data, 'utf8', (err) => {
    if (err) {
        console.error("An error occurred:", err);
        return;
    }
    console.log("File was written successfully again");
});

expOperation();

console.log("End of file");

fs.readFile('example.txt','utf8',(err,data) =>{
    if(err){
        console.log("Error in file read: "+err);
        return;
    }else{
        console.log("File data: "+data);
    }
});