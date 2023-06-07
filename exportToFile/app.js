

const os = require ("os") ;



const fs = require("fs/promises");
const { log, error } = require("console");
const path = require("path");


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


/* 
    fs.mkdir("./newFold2",(err,path)=>{

        if (err) {

            console.log(err);
            
        }else{  for (let i = 1; i < 4; i++) {

            fs.writeFile(`./newFold2/newText${i}.txt`,`text ${i}`,{flag:"w"},(err)=>{
            console.log(err);
        })
        
    }}


     }); */









/*      fs.unlink(__dirname+"newFold2/newText1.txt",(err)=>{

        if(err){
            console.log(err);
        }
        else{

            console.log("succsess");

        }
     }) */


       /*  fs.readdir("./newFold2",(err,files)=>{

            if (err) {

            console.log(err.message);
                
            }
            else{
                
                console.log(files);


            }
        })
 */




        const  PATH1 = __dirname;


        const path2 = "app.js"


        const fullPath = path.join(PATH1,path2);



        

        console.log(fullPath);





/* 

        async function  removeFilesAndFolder (dir) {


                try{

                    const files = await fs.readdir(dir)

                    console.log(await files);

                    for (let i = 0; i < files.length; i++) {
                        
                        await fs.unlink( path.join(dir,files[i]) )
                        
                    }

                    await fs.rmdir(dir)

                }

                catch(err){
                    console.log(err);
                }



        }












        removeFilesAndFolder("./newFold2") */












        const users=["simon","tusef","tusef232","tu233sef","tuse23f","tus232ef","tus211ef","t123usef","t123usef","tu123sef"]



        

    
        async function createUserList (users,dir){


        try{

            await fs.readdir(dir)

            for (let i = 0; i < users.length; i++) {

                fs.writeFile(dir+"/"+users[i]+".txt",users[i])
                
            }

        }catch(err){


            await  fs.mkdir(dir)

            for (let i = 0; i < users.length; i++) {
            
                await  fs.writeFile( dir+"/"+users[i]+".txt",users[i])
                
            }


            
        }

    }



createUserList(users,"./newFold2")