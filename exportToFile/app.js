

const os = require ("os") ;



const fs = require("fs");
const { log } = require("console");


const totaMemory = os.totalmem();



console.log(totaMemory/1073741824);


console.log(os.freemem()/1073741824);

console.log(os.freemem()/totaMemory*100 + "%");


console.log(os.version(),"+",os.type(),"+",os.hostname(),"+",os.arch(),"+",os.release());



/* fs.mkdir("./somsom",(err,path)=>{


    console.log(err,pa);

}) */



/* fs.rmdir("./somsom",(err)=>{

    console.log(err);
}) */


/* fs.writeFile("./somsom/newText.txt","bruhhhhhhhhhhhhhhhhhhhhhh",{flag:"a"},(err)=>{
    console.log(err);
}) */



fs.mkdir("./newFold2",(err,path)=>{

    if (err) {

        console.log(err);
        
    }else{  for (let i = 1; i < 4; i++) {

        fs.writeFile(`./newFold2/newText${i}.txt`,`text ${i}`,{flag:"w"},(err)=>{
        console.log(err);
    })
    
}}

  

});



