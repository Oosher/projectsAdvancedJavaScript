

const singUpForm = document.querySelector("#signUpForm");

const fname = document.querySelector("#first-name");

const lname = document.querySelector("#last-name");

const email = document.querySelector("#email");

singUpForm.addEventListener("submit",()=>{

sendData(fname,lname,email);

});


async function sendData (fname,lname,email){


    try{

        const response = await fetch("http://localhost:3000/",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({fname:fname.value,lname:lname.value,email:email.value}),

        });

    }catch(error){

        console.log(error);

    }

}