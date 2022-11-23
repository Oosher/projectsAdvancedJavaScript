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

    static max(){


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