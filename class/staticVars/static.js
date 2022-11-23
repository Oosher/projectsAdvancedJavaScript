class Students{

    static consta= 14; 

    constructor(name,id){
 
    this.name=name;
    this.id=id;

    }

    sayHello(){
        console.log(`hello mr.${this.name}`);
    }
    
    static sayHelloAll(){

        console.log("hello mr mr");

    }
}


let student1 = new Students("shimi tavor",124312312);




Students.sayHelloAll();

//class task


class Mathematics{

    static pi = 3.14159265359;

    static e = 2.71828182845904;

    static max(...n){;
       
        let max=n[0]

        for (let i = 0; i < n.length; i++) {
            
            if (n[i]>max) {

                max=n[i];

            }
            
        }

        return max;


    }


    static power(base , power){
        
        let poweredItem=base;

        for (let i = 0; i < power-1; i++) {

            poweredItem*=base;
            
        }

        return poweredItem;

    }
}




console.log(Mathematics.power(4,5));



console.log(Mathematics.max(1,2,3,4,1,5,-1,7,9,4,2));



class Student{

    #name;
    #id;
    #year;
    constructor(year,name,id){

        this.setName=name;

        this.setId=id;

        this.setYear=year;

    }

    set setName(name){

        this.#name=name;

    }
    
    set setId(id){

        this.#id=id;

    }

    set setYear (year){

        this.#year=year;

    }
    get getName(){

       return this.#name;

    }
    
    get getId(){

        return this.#id;

    }

    get getYear (){

        return this.#year;

    }

}


    let student = new Student(1,"shlomon","123213123");

    console.log(student );