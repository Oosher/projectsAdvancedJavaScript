
function Student(fullname,id,birthDate){
    this.fullname = fullname;
    this.id = id;
    this.birthDate = birthDate;
    this.sayHello = function(){

        console.log("Hello", this.fullname)
    }
}


const newStudent = new Student("Amnon Lehi","008","22/8/1994");

console.log(newStudent);

newStudent.sayHello();