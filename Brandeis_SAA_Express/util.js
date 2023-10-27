customReadFile=(file,res)=>{
    fs.readFile(`./${file}`,(errors,data)=>{
        if(errors){
            console.log("Error reading the file...");
        }
        res.end(data);
    });
};