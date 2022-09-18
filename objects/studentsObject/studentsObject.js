


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
       students.push({newStudent:new Student("Yoshi",Math.floor(Math.random()*999999999),Math.floor(Math.random()*9999999999)),newGrades: new Grades(Math.floor(Math.random()*100)+1,Math.floor(Math.random()*100)+1,Math.floor(Math.random()*100)+1)});
        
    }

    return students;
}

console.log(randomStudents(8));

let allStudents=randomStudents(8);

function bestStudent(students){
    let smartestStudent=students[0];
    let prevAvarage=0;
    for (let i = 0; i < students.length; i++) {

        console.log(prevAvarage,(students[i].newGrades.math+students[i].newGrades.history+students[i].newGrades.english)/3);

         if( prevAvarage < ((students[i].newGrades.math+students[i].newGrades.history+students[i].newGrades.english)/3)){
            smartestStudent=students[i];
            prevAvarage=(students[i].newGrades.math+students[i].newGrades.history+students[i].newGrades.english)/3;
         }

        
        
    }
    return smartestStudent;
}
console.log(allStudents);
console.log(bestStudent(allStudents));