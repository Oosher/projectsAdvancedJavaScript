
//methods and constructor 




class Movie {

    constructor(name,length,price,category){    

        this.name=name;

        this.price=price;

        this.length=length;

        this.category=category;

    }

    addMinutes(howManyMinutes){

        this.length+=howManyMinutes;

    }
    welcome(){

        console.log(`welcome to ${this.name}  enjoy your watch`);

    }

}



let movie = new Movie("fart from home",220,35,"action comedy");



movie.addMinutes(150);


console.log(movie.length);

movie.welcome();


//class task


class Queue {

    constructor(){

        this.values=[];

        this.lastPoppedItem;

    }

    enqueue(addToEndOfTheArray){

        this.values=[...this.values,addToEndOfTheArray];

    }

    dequeue(){

        let poppedItem = this.values[0];

        this.lastPoppedItem=poppedItem;

        this.values.splice(0,1);




        return poppedItem;

    }

    firstItem(){

        return this.values[0];

    }

    isEmpty(){
        if (this.values.length>0) {

            return false;
            
        }

        return true;

    }
    printQueue(){
      /*   this.values.map((value)=>{

            console.log(value);

        }); */
        
        console.log(...this.values);

    }
}



let newQueue =new Queue ;

newQueue.enqueue(5);
newQueue.enqueue(4);
newQueue.enqueue(3);
newQueue.enqueue(2);
newQueue.enqueue(6);
newQueue.enqueue(8);

console.log(newQueue.values);


newQueue.dequeue();


console.log(newQueue.values);



console.log(newQueue);


console.log(newQueue.firstItem());

console.log(newQueue.isEmpty());

newQueue.printQueue();



class Mag{

    constructor(){

        this.magazine=[];
        

        this.poppedItems=[];

    }

    push(item){

        this.magazine=[...this.magazine,item];

    }
    pop(){

        this.poppedItems=[...this.poppedItems,this.magazine[this.magazine.length-1]];
        this.magazine.splice(this.magazine.length-1,1);

        return this.poppedItems;

    }

    firstItem(){

        return this.magazine[0];

    }

    isEmpty(){
        if (this.magazine.length>0) {

            return false
            
        }

        return true;

    }


    printMag(){

        console.log(...this.magazine);

    }


    rollBack(){

        if (this.poppedItems.length>0) {

            this.magazine=[...this.magazine,this.poppedItems[this.poppedItems.length-1]];
            this.poppedItems=this.poppedItems.slice(0,this.poppedItems.length-1);

        }
        

    }

}



let newMag = new Mag;


newMag.push(7);
newMag.push(4);
newMag.push(3);
newMag.push(2);
newMag.push(6);
newMag.push(8);
newMag.push(9);


console.log(newMag.magazine);



newMag.pop();
newMag.pop();
newMag.pop();
newMag.pop();


console.log(newMag.firstItem());

console.log(newMag.isEmpty());


newMag.printMag();



console.log(newMag.poppedItems);

newMag.rollBack();

newMag.printMag();

console.log(newMag.poppedItems);



class Student{


    constructor(name,id,year,course){
        
       this.fullName=name;

        


    } 

    set identificationNumber(identification){

        this.id = identification;

    }

    get getId(){

        return this.id;

    }
    set fullName(fullNames){
        
        this.name=fullNames;

    }

    get fullName(){

        return this.name;

    }

}


const newStudent = new Student;

newStudent.fullName="yoshi";


newStudent.identificationNumber=123123134;


console.log(newStudent);

console.log(newStudent.getId);





class AdMovie{


    constructor(name,length,category,price){


    }


    set setName(movieName){

        this.name=movieName;
        
    }
    set setLength(movieLength){

        let hours=Math.floor(movieLength/60);

        let minutes = movieLength-(hours*60);

        if (minutes<10) {
            this.length = hours +":0"+ minutes;
        }
        else{

             this.length = hours +":"+ minutes;

        }
       


    }
    set setCategory(movieCategory){
        if (movieCategory=="comedy"||movieCategory=="drama"||movieCategory=="action") {
            this.category=movieCategory;
        }
        else{

            this.category="outer";

        }
        

    }
    set setPrice(moviePrice){

        if (moviePrice>0) {

            this.price=moviePrice;

        }

        else{

            console.log("please enter a positive number");
            
        }
        

    }

    get getName(){

       return this.name
        
    }
    get getLength(){

       return this.length

    }
    get getCategory(){

       return this.category
    }
    get getPrice(){

       return this.price

    }


}




const newMovie = new AdMovie;


newMovie.setCategory="bruh";
newMovie.setPrice=1123;
newMovie.setLength=122;

console.log(newMovie);

console.log(1.3233%1);