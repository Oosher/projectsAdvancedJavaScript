
let varReq = "students/4"

let response = fetch(`http://localhost:3000/${varReq}`);

response.then((value)=>{

    return value.text();

})
.then((students)=>{

    console.log(JSON.parse(students));

})
.catch((status)=>{

    console.log(status);

});