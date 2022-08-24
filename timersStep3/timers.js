function fullName(firstName,lastName){
    this.name =firstName;
    this.lastName=lastName;
    this.functionName =function(){

        console.log("full name : " ,this.name ,this.lastName);
    }

}








const obj = new fullName("shimon","abukasis");


const obj2 = new fullName("The Bruh", "James")
console.log(":",obj,":");


obj.functionName();

obj2.functionName();
export default obj ;