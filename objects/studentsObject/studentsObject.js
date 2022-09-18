


function Student(fullName,id,phoneNumber){
    this.fullName=fullName;
    this.id=id;
    this.phoneNumber=phoneNumber;

}


function Grades(math,history,english){
    this.math=math;
    this.history=history;
    this.english=english;

}

function randomStudents(numberOfStudents){
    let students =[];

    for (let i = 0; i < numberOfStudents; i++) {
       students.push({newStudent:new Student("Yoshi",Math.floor(Math.random()*999999999),Math.floor(Math.random()*9999999999)),newGrades: new Grades(Math.floor(Math.random()*100),Math.floor(Math.random()*100),Math.floor(Math.random()*100))});
        
    }

    return students;
}
console.log(randomStudents(8));