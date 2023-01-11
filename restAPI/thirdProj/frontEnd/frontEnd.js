

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


async function apiRequest(url,method,headers,body){

    try{
        const response = await fetch(`http://localhost:3000/${url}`,{method:method,
                                headers:headers,
                                body:body,}
                    )
                    console.log(await response.json());
    }catch(error){
        console.log(error);
    }
}

apiRequest("randobj","POST",{"Content-Type":"application/json"},JSON.stringify({yosef:"shmuelov"}));



/* async function getRandObjByName(name){
    try{
        const response = await fetch(`http://localhost:3000/randobj/${name}`)
        const randObjName = await response.json();
        console.log(randObjName);
    }
    catch(error){
        console.log(error);
    }
} */



apiRequest("randobj/AMNON","get");




/* async function deleteObj(objName){

    try{
        const response = await fetch(`http://localhost:3000/randobj/${objName}`,{
            method:"DELETE",})
                    console.log(await response.json());
    }catch(error){
        console.log(error);
    }
}

deleteObj("dis"); */



apiRequest("randobj/dis","DELETE");


apiRequest("randobj/yosef","PUT",{"Content-Type":"application/json"},JSON.stringify({AMNON:"LEHI"}));