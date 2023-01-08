

async function getRandObj(){
    try{
        const response = await fetch("http://localhost:3000/randobj")
        const randObj = await response.json();
        console.log(randObj);
    }
    catch(error){
        console.log(error);
    }
}



getRandObj();


async function crateNewObj(obj){

    try{
        const response = await fetch("http://localhost:3000/randobj",{method:"POST",
                                headers:{"Content-Type":"application/json"},
                                body:JSON.stringify(obj),}
                    )
                    console.log(await response.json());
    }catch(error){
        console.log(error);
    }
}

crateNewObj({dis:"sdsad"});