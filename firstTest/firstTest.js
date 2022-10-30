
//1:
function Movie(name,lengthMinutes,category,price) {

    this.name=name;

    this.lengthMinutes=lengthMinutes;

    this.category=category;

    this.price=price;
    
}

//הקוד מייצר אובייקטיס שונים מסוג סרט ומכניס אותם לתןך מערך של סרטים 
const movies = [];
movies.push(new Movie("luck", 100, "comedy", 32));
movies.push(new Movie ("heart", 85, "drama", 40));
movies.push(new Movie ("unholy", 100, "horror", 32));
movies.push(new Movie ("blonde", 135, "drama", 25));
movies.push(new Movie ("me time", 92, "comedy", 30));
movies.push(new Movie ("choose or die", 118, "horror", 36));
movies.push(new Movie ("red note", 110, "comedy", 40));



highestPrice(movies);


function highestPrice(movieArray){
    let mostExpensive=0;
    let BiggestPrice=0;
    

    for (let i = 0; i < movieArray.length; i++) {
        if (movieArray[i].price>BiggestPrice) {
            mostExpensive=movieArray[i];
            BiggestPrice =movieArray[i].price;
        }
        
    }


    console.log("The most expensive movie is : "+mostExpensive.name);

}


longestMovie(movies);

function longestMovie(movieArray) {

    let longestMovie =0;
    let highestMinuets =0;
     for (let i = 0; i < movieArray.length; i++) {
        if (movieArray[i].lengthMinutes>highestMinuets) {
           
            highestMinuets=movieArray[i].lengthMinutes;

            longestMovie=movieArray[i];
        }
        
    }

    console.log("the longest movie is : "+ longestMovie.name);
}
//2:

const menu = { pasta: 55, pizza: 25, hamburger: 70, salad: 24, steak: 120 };




showMenu(menu);
showMenu2(menu);


function showMenu(menu) {
    
    console.log(JSON.stringify(menu,null,5));

}
function showMenu2(menu) {
    
   for ( i in menu) {
    
   console.log(i+": "+menu[i]);
    
   }

}

avgPrice(menu);


function avgPrice(menu) {
let counter=0;

let sum=0;

    for ( i in menu) {
        sum+=menu[i];
        counter++;

    }

    console.log("The average price of the menu is : "+sum/counter);
    
}

//:3

mailCompany("ooosher10@walla.com");


function mailCompany(eMail) {

   console.log(eMail.slice(eMail.indexOf("@")+1,eMail.indexOf(".")) ) ;
    
}

emailUserLength("ooosher10@walla.com");

function emailUserLength(eMail) {

let userName = eMail.slice(0,eMail.indexOf("@"));

    console.log("The username length is : "+userName.length);

    //option 2:

    // console.log("The username length is : "+eMail.indexOf("@"));
    
}


//4:

const changeColor = document.createElement("button");

changeColor.innerHTML="Click to change color";

document.body.appendChild(changeColor);


changeColor.addEventListener("click",changeBodyColor);


function changeBodyColor(){


    document.body.style.backgroundColor="#"+Math.floor(Math.random()*1000000);
}