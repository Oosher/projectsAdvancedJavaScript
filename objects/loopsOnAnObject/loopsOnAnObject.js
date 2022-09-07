
const student ={};
student.fullname="Yoshi Abukshish";
student.birthdate ="22/3/2006";

student["city"] = "Jerusalem";

student["First name"] = "amnon";


console.log(student);

for(let i in student){
    console.log(student[i]);
}