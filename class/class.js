
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
