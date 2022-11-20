



class Student {
    
    constructor(fullName,id){

        this.fullName=fullName;
        this.id = id;

    }



    sayHelloToStudent(){

        return `Hello ${this.fullName} and Welcome`

    }

    set setFullName(name){

        this.fullName=name;
        
    }

    set setId(studentId){

        this.id=studentId;

    }
    
    get getFullName(){

        return this.fullName;
        
    }

    get getId(){

        return this.id;

    }
    
}


const student1 = new Student("Shimon",123213123);


console.log(student1.sayHelloToStudent());

console.log(student1);








//class task 1


class hotelGuest {


    constructor(fullName,phoneNumber,roomNumber){
        this.roomNumber=roomNumber;
        this.phoneNumber=phoneNumber;
        this.fullName=fullName;
    }
     

    cleanRoom(){

        console.log(`clean room ${this.roomNumber}`);

    }

}





const guest1 = new hotelGuest("Yoshi avramovich","0304010240","415");
const guest2 = new hotelGuest("avramovich","56582440","415");
const guest3 = new hotelGuest(" avramovichon","663321211","415");
const guest4 = new hotelGuest("mashkit","05746633","414c");
const guest5 = new hotelGuest("ascii","0574554","415");

let guestsArray=[guest1,guest2,guest3,guest4,guest5];

guest1.cleanRoom();






class Hotel{



    //private variable
    #private = "Something";
    //old version 
    _private = "Something";

    #constantPrice = 140;
    constructor(hotelName,hotelPermitNumber,arrayOfRooms,arrayOfGuests){
        this.setHotelName=hotelName;
        this.setHotelPermitNumber=hotelPermitNumber;
        this.arrayOfRooms=arrayOfRooms;
        this.arrayOfGuests=arrayOfGuests;
    }

   

    set setHotelName(name){
        
        this.hotelName =name.replace(name.charAt(0),name.charAt(0).toUpperCase());
        

    }


    set setHotelPermitNumber(permitNUmber){

        if (permitNUmber.toString().length==10) {

            this.hotelPermitNumber=permitNUmber;
            
        }

        else{

            console.log("The permit number must be 10 numbers exactly");

        }

    }


    get getHotelPermitNumber(){

        return this.hotelPermitNumber;

    }


    get getHotelName(){

        return this.hotelName;

    }

    addNewRoom(newRoomNumber){

        if (this.arrayOfRooms.includes(newRoomNumber)) {

            console.log("The room number already exist please choose another");
            
        }
        
        
        else{


            this.arrayOfRooms.push(newRoomNumber);

            
            console.log("The room has been successfully added");

        }
    }



    removeRoomFromTheHotel(roomToRemove){
        let roomClearIndicator=true;

        if (this.arrayOfRooms.includes(roomToRemove)) {

                this.arrayOfGuests.map((guest)=>{
                    if (guest.roomNumber==roomToRemove) {
                        roomClearIndicator=false;

                    }
                })

                if (roomClearIndicator) {

                    this.arrayOfRooms.splice(this.arrayOfRooms.indexOf(roomToRemove),1); 

                }

                else{

                    console.log(`The room is not empty please make sure that the room is empty before trying to remove it`);

                }
            

        }



    }


    addGuest(guestObject){

        this.arrayOfGuests.push(guestObject);

    }

    removeGuest(guestObjectToRemove){


        this.arrayOfGuests.map((guest,i)=>{
            if(guest.phoneNumber==guestObjectToRemove.phoneNumber){
                this.arrayOfGuests.splice(i,1);
            }
        });


    }


    //private function / method Example
    #privateFunction(){

        return "Hello Bruh";

    }

    roomPrice(guestPhoneNumber){

            let guestRoomPrice = this.#constantPrice;
            let guestRoom = 0;
        
            for (let i = 0; i < this.arrayOfGuests.length; i++) {

                if (this.arrayOfGuests[i].phoneNumber == guestPhoneNumber) {

                guestRoom = this.arrayOfGuests[i].roomNumber;
                break;

                }
                
            }

            return guestRoomPrice*=Number(guestRoom.charAt(0));

    }


}




arrayOfRoom =["123","332f","323","414c"]

const hotel1 = new Hotel("abushimon",993838,arrayOfRoom,guestsArray);
console.log(hotel1);

hotel1.setHotelName="abu yoshi"





console.log(hotel1.getHotelName);


hotel1.setHotelPermitNumber=1234122222;



hotel1.addGuest(new hotelGuest("Shimon yizhaki","02585421","430d"))

hotel1.removeGuest(guest4);

hotel1.addNewRoom("480b");

hotel1.removeRoomFromTheHotel("323")

console.log(hotel1);

console.log(hotel1.roomPrice("02585421"));

