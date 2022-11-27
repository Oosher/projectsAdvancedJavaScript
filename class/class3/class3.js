class  Person{

        #firstName;

        #lastName;

        #id;

        constructor(firstName,lastName,id){
            this.firstName=firstName;

            this.lastName=lastName;

            this.id=id;

        }

        set firstName(newName){
            
            this.#firstName=newName;
        }

        set lastName(newLastName){
            
            this.#lastName=newLastName;
        }

        set id(newId){

            this.#id=newId;

        }
        get firstName(){

            return this.#firstName;

        }
        get lastName(){

            return this.#lastName;

        }

        get id(){

            return this.#id;

        }

        happyHoliday(){

            console.log(`Hello mr.${this.firstName} ${this.#lastName} Happy holiday`);

        }
        getName (){

                return "Person";
                        
        }

    }


    const newPerson = new Person("yoshi","shlumielove",21312313);



    console.log(newPerson);

    newPerson.happyHoliday();




    class Student extends Person{

        #yearsOfStudy;

        #fieldOfStudy;

        constructor(firstName,lastName,id,yearsOfStudy,fieldOfStudy){

                    super(firstName,lastName,id);

                    this.yearsOfStudy=yearsOfStudy;

                    this.fieldOfStudy=fieldOfStudy;

                }

                set yearsOfStudy(yearsOfStudy){

                    this.#yearsOfStudy=yearsOfStudy;

                }

                set fieldOfStudy(fieldOfStudy){

                this.#fieldOfStudy=fieldOfStudy;

                }
                get yearsOfStudy(){

                    return  this.#yearsOfStudy;

                }

                get fieldOfStudy(){

                    return this.#fieldOfStudy;

                }


                happyHoliday(){


                    console.log(`happy holiday student and we wish for you to succeed in ${this.#fieldOfStudy}`);


                }
                  getName (){

                        return "Student";
                        
                    }

            }



            const newStudent = new Student("yoshi","shlumielove",21312313,12,"chemistry");

            console.log(newStudent);

            newStudent.happyHoliday();



            class Lecturer extends Person{

                    #phakulta;

                    #degree;

                    constructor(firstName,lastName,id,phakulta,degree){

                        super(firstName,lastName,id);

                        this.phakulta=phakulta;

                        this.degree=degree;
                        
                    }

                    set phakulta (phakulta){

                        this.#phakulta=phakulta;

                    }

                    set degree(degree){

                        this.#degree=degree;

                    }
                    get phakulta (){

                        return this.#phakulta;

                    }

                    get degree(){

                        return this.#degree;

                    }


                    happyHoliday(){

                        console.log(`happy holiday ${this.#degree} ${this.firstName} `);

                    }

                    getName (){

                        return "Lecturer";

                    }
            }




            const newLecturer =  new Lecturer ("yoshi","gurevictch",213132133,"mishpatim","dr");


            console.log(newLecturer);

            newLecturer.happyHoliday();




            const personsArray = [];

            personsArray.push(new Student("student"," 1", 12341, 2, "economics"));

            personsArray.push(new Student("student ","2", 1233333, 1, "data sience"));

            personsArray.push(new Person("Person"," 1", 121111));

            personsArray.push(new Person("Person"," 2", 21344));

            personsArray.push(new Student("student ","3", 102151, 3, "history"));

            personsArray.push(new Lecturer("Lecturer"," 1", 11111, "Economics & Menegments", "Mr"));

            personsArray.push(new Lecturer("Lecturer"," 2", 131333, "Data Sience", "Professor"));

            personsArray.push(new Lecturer("Lecturer","3", 1324566, "History", "Dr"));

            personsArray.push(new Student("student"," 4", 1242322, 2, "history"));

            personsArray.push(new Lecturer("Lecturer","4", 121144, "Biology", "Professor"));

            personsArray.push(new Student("student ","5", 1111, 2, "biology"));
            



            function happyNewYearToEveryOne(personsArray) {

                    personsArray.map((person)=>{

                        person.happyHoliday();
                      

                    });
                
            }



            happyNewYearToEveryOne(personsArray);








            class Fruit {

                constructor(fruitName,fruitCal){

                    this.fruitName=fruitName;

                    this.fruitCal=fruitCal

                }


                showData(){

                    console.log(`Fruit type : ${this.fruitName} Fruit calory : ${this.fruitCal}`);

                }

            }


        /* 
            const a = { 
                property : "property",
                method(){

                    return  "method";

                }
            }




            let fruitWithA = Object.assign(Fruit.prototype,a);



            console.log(fruitWithA); 
            
            */





            const TreeWithInherit = (subClass)=>

            class Tree extends subClass{

                constructor(treeName,treeHight,origin,...fruit){
                            super(...fruit);

                            this.treeName=treeName;

                            this.treeHight=treeHight;

                            this.origin=origin;
                }



                giveWater(){

                    console.log(` its time to water the tree `);

                }

            }



            class FruitTree extends TreeWithInherit(Fruit){

                constructor(month,numberOfFruits,treeName,treeHight,origin,fruitName,fruitCal){

                    super(treeName,treeHight,origin,fruitName,fruitCal);

                    this.month=month;

                    this.numberOfFruits=numberOfFruits;
                    
                    
                }
         


            }


            

            const newFruitTree = new FruitTree(11,140,"yosef","340cm","africa","gurevitch",500);


            console.log(newFruitTree);


            const justATree = TreeWithInherit(Object);


            const newTree = new justATree ;

            console.log(newTree);










            const lotteryWithChangedInheritance = (inheritedClass)=>

            class Lottery extends inheritedClass {


            constructor (date,lotteryNumber,lotterySum,...outerParameters){

                super(...outerParameters);

                this.date=date;

                this.lotteryNumber=lotteryNumber;

                this.lotterySum=lotterySum;

            }

            
            
        }




        const HumanLottery = lotteryWithChangedInheritance(Person);

        const StudentLottery = lotteryWithChangedInheritance(Student);

        const LecturerLottery = lotteryWithChangedInheritance(Lecturer);



        const newPersonLottery = new HumanLottery("12-12-22",9000332,"15000$","abu","yosef",213123213);

        console.log(newPersonLottery);

        const newStudentLottery = new StudentLottery ("13-14-14",1232313113,"4500$","moshik","abuk",23123123,13,"mathematics")
        
        console.log(newStudentLottery);


        function createArrayOfPerson(arrayOfPersonal){

            let newArray=[];


            arrayOfPersonal.map((person)=>{

                    switch (person.getName()) {

                    case "Person":
                        newArray.push(new HumanLottery("12-12-22",2131231,"15000$",person.firstName,person.lastName,person.id));
                        
                        break;
                    
                    case "Student":
                        newArray.push(new StudentLottery("14-14-14",1232313113,"8000$",person.firstName,person.lastName,person.id,person.yearsOfStudy,person.fieldOfStudy))
                        break;
                    
                    case "Lecturer":
                        newArray.push(new LecturerLottery("15-16-17",1232313113,"19000$",person.firstName,person.lastName,person.id,person.phakulta,person.degree))
                        break;
                    
                    default:
                        break;
                        
                    }
            });

            return newArray;

        }




        
        
        console.log(createArrayOfPerson(personsArray));