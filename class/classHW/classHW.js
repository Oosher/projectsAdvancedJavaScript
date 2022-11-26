
class Car{

    #manufacturer;
    #licensePlate;
    #color;

    constructor(manufacturer,licensePlate,color){

        this.setColor=color;

        this.setLicensePlate=licensePlate;

        this.setManufacturer=manufacturer;

    }

    set setManufacturer(manufacturer){

        this.#manufacturer=manufacturer;
        
    }

    set setColor(color){

        this.#color=color;

    }

    set setLicensePlate(licensePlate){

        this.#licensePlate=licensePlate;

    }
    get getManufacturer(){

        return this.#manufacturer;
        
    }

    get getColor(){

        return this.#color;

    }

    get getLicensePlate(){

        return this.#licensePlate;

    }

    drive(){

        console.log(`Start driving`);

    }


    static engineTypes(){

        console.log(`Diesel/Gasoline/Electric`);

    }

}





let newCar = new Car("Mercedes","123341424","white");


console.log(newCar);

newCar.drive();

Car.engineTypes();





class SportsCar extends Car{


    #horsepower;

    #engineCapacity;

    constructor(manufacturer,licensePlate,color,horsepower,engineCapacity){

        super(manufacturer,licensePlate,color);

        this.setEngineCapacity=engineCapacity;

        this.setHorsepower= horsepower;


        


    }


    set setEngineCapacity(engineCapacity){

        this.#engineCapacity=engineCapacity;

    }

    set setHorsepower(horsepower){

        this.#horsepower=horsepower;

    }
    get getEngineCapacity(){

        return this.#engineCapacity;

    }

    get getHorsepower(){

        return this.#horsepower;

    }

    drive(){

        console.log(`Go Go Go`);

    }


    liftSuspension(){

        console.log(`Lift your suspension`);


    }

}






const newSportsCar = new SportsCar("Mercedes AMG ","3123412441","white and black",340,"2500");


console.log(newSportsCar);

newSportsCar.drive();

newSportsCar.liftSuspension();


class TourBus extends Car{


    #numberOfSeats;

    #isAbeleToDriveKids;


    constructor(manufacturer,licensePlate,color,numberOfSeats,isAbeleToDriveKids){

        super(manufacturer,licensePlate,color);

        this.setIsAbeleToDriveKids=isAbeleToDriveKids;

        this.setNumberOfSeats=numberOfSeats;



    }


    set setNumberOfSeats(numberOfSeats){


        this.#numberOfSeats=numberOfSeats;




    }

    set setIsAbeleToDriveKids(isAbeleToDriveKids){
    
        if ((typeof isAbeleToDriveKids)== "boolean") {

            this.#isAbeleToDriveKids=isAbeleToDriveKids;
            
        }
    

        else{


            console.log(`the parameter isAbeleToDriveKids Must be only true or false`);

        }


    }


    get getNumberOfSeats(){

        return this.#numberOfSeats;

    }

    get getIsAbeleToDriveKids(){

        return this.#isAbeleToDriveKids;
            
    }






    pickupPassengers(){

        console.log(`Pickup passengers`);   

    }


    dropOffPassengers(){

    console.log(`Drop off passengers`);

    }


}

const newTourBus = new TourBus("Mercedes","1234124","green",340,true);


console.log(newTourBus);


newTourBus.pickupPassengers();

newTourBus.dropOffPassengers();