



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



guest1.cleanRoom();






class Hotel{

    constructor(hotelName,hotelPermitNumber,arrayOfRooms){
        this.setHotelName=hotelName;
        this.setHotelPermitNumber=hotelPermitNumber;
        this.arrayOfRooms=arrayOfRooms;
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

        if (this.arrayOfRooms.includes(roomToRemove)) {

                this.arrayOfRooms.splice(this.arrayOfRooms.indexOf(roomToRemove),1); this.arrayOfRooms.splice(this.arrayOfRooms.indexOf(roomToRemove),1);

        }

    }

}




arrayOfRoom =["123","332f","323","414c"]

const hotel1 = new Hotel("abushimon",993838,arrayOfRoom);
console.log(hotel1);

hotel1.setHotelName="abu yoshi"





console.log(hotel1.getHotelName);


hotel1.setHotelPermitNumber=1234122222;






hotel1.addNewRoom("480b");


hotel1.removeRoomFromTheHotel("414cd")

console.log(hotel1);