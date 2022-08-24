const fullName ={
    name:"Yosshi",
    lname:"abuksis",
    namFunction: function(){

        console.log("bruh", this.name,this.lname);

    }
}


fullName.namFunction("look at this duude");

export default fullName;