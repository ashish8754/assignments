const fs= require('fs');

fs.readFile('input.txt','utf8',(err,data) =>{
    if(err){
        console.log("Error in reading file: "+err);
        return;
    }

    let cleanedData=data.replace(/\s+/g,' ');

    fs.writeFile('input.txt',cleanedData,'utf8',(err)=>{
        if(err){
            console.log("error in writing file: "+err);
            return; 
        }
        console.log("Data cleaned and written to file");
        fs.readFile('input.txt','utf8',(err,data) =>{
            console.log("Cleaned Data: "+data);
        });
    });

});


