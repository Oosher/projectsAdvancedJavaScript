




async function getFromApi (){


    try{

    const response = await fetch("http://localhost:4747/hi")

    const data = await response.text();


    console.log(data);
    }catch(err){


        console.log( err);
    }





}






getFromApi();