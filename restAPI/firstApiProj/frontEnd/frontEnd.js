


let response = fetch("http://localhost:3000/students");

response.then((value)=>{

    return value.text;

}).then((students)=>{

    console.log(students);

}).catch((status)=>{

    console.log(status);

});