const searchContainer = document.querySelector(".filter")

//searchbar initialization
const searchBar = document.createElement("input");

searchBar.className="searchBar";

searchBar.placeholder="Enter a movie name";

searchContainer.appendChild(searchBar);

searchBar.addEventListener("input",searchMovie);


//movie container creation and definition
const movieContainer = document.createElement("section");

movieContainer.className="movieContainer";


//add a movie

const addAMovie = document.createElement("div");

addAMovie.className="addAMovie";

addAMovie.innerHTML="+";

addAMovie.addEventListener("click", addNewMovie);


//defining the select option

const selectCategory  =  document.querySelector("#selectCategory");

//defining the length search input

const startingLength = document.querySelector("#startingLength");
const endingLength = document.querySelector("#endingLength");


//defining sort option


const sortBy = document.querySelector("#sortBy");


function Movie(name,lengthMinutes,category,price) {
    this.name=name;

    this.lengthMinutes=lengthMinutes;

    this.category=category;

    this.price=price;

    this.id=this.name+this.lengthMinutes;

    this.html ;


    

}

let movies = [
(new Movie("Pulp Fiction", 154 , "crime", 32)),
(new Movie("Taxidermia ", 91 , "comedy", 32)),
(new Movie("Naked Lunch", 115, "drama", 32)),
(new Movie("There Will Be Blood ", 158, "drama", 32)),
(new Movie("Trainspotting ", 100, "action", 32)),
(new Movie("Delicatessen ", 100, "action", 32)),
(new Movie("Requiem for a Dream", 100, "comedy", 32))
];
movies.push(new Movie("luck", 100, "comedy", 32));
movies.push(new Movie ("heart", 85, "drama", 40));
movies.push(new Movie ("unholy", 100, "horror", 32));
movies.push(new Movie ("blonde", 135, "drama", 25));
movies.push(new Movie ("me time", 92, "comedy", 30));
movies.push(new Movie ("choose or die", 118, "horror", 36));
movies.push(new Movie ("red note", 110, "comedy", 40));

movies = JSON.parse(localStorage.getItem("movieList"));

showAllMovies(movies);

function showAllMovies(movieArray) {

    movieContainer.innerHTML="";

    document.body.appendChild(movieContainer);
    
    //re assigning all of the html elements because localStorage dos not support classes

    for (let i = 0; i < movieArray.length; i++) {

        movieArray[i].html = document.createElement("div");

        movieArray[i].html.innerHTML=" name : "+movieArray[i].name+"<br> length : "+movieArray[i].lengthMinutes+"<br> category : "+movieArray[i].category+"<br> price : "+movieArray[i].price+"$";

        movieArray[i].removeMovie = document.createElement("button");

        movieArray[i].removeMovie.innerHTML="delete <br> movie";

        movieArray[i].removeMovie.className="removeButton";

        movieArray[i].html.appendChild(movieArray[i].removeMovie);

        movieArray[i].removeMovie.addEventListener("click",()=>{
    
        deleteMovie(movieArray[i].name);

    });

        movieContainer.appendChild(movieArray[i].html);
        
    }


    //option 2:

    /*  movieArray.map((movie)=>{
        movieContainer.appendChild(movie.html);
    }) */


    movieContainer.appendChild(addAMovie);

}


function searchMovie() {

    let newMovieArray = movies.filter((movie)=>{
        return movie.name.includes(searchBar.value);
    });

    
    showAllMovies(newMovieArray); 

}


function addNewMovie() {
    //creating all of the elements of the new form 
    const newMovieContainer = document.createElement("div");
    const saveMovie = document.createElement("button");
    const movieName = document.createElement("input");
    const movieLength = document.createElement("input");
    const moviePrice = document.createElement("input");
    const movieCategory = document.createElement("input");
    
    //setting the input type to numbers only
    movieLength.type="number";
    moviePrice.type="number";

    //entering placeholders for the inputs  
    movieName.placeholder="Enter a movie name"
    movieLength.placeholder="Enter the movie length"
    moviePrice.placeholder="Enter the movie price"
    movieCategory.placeholder="Enter the movie category"


    newMovieContainer.className="newMovieContainer";

    saveMovie.innerHTML="save new movie"

    //adding the elements into the new container
    newMovieContainer.appendChild(movieName);
    newMovieContainer.appendChild(movieLength);
    newMovieContainer.appendChild(movieCategory);
    newMovieContainer.appendChild(moviePrice);
    newMovieContainer.appendChild(saveMovie);
    movieContainer.appendChild(newMovieContainer);

    saveMovie.addEventListener("click",()=>{

        movies.push(new Movie(movieName.value,movieLength.value,movieCategory.value,moviePrice.value))

        showAllMovies(movies);

        saveData();

    });
    

    
    




    
}

selectCategory.addEventListener("change",filterByCategory);

function filterByCategory(){

    let filteredByCategoryArray = movies.filter((movie)=>{return movie.category==selectCategory.value})


    showAllMovies(filteredByCategoryArray);

    if (selectCategory.value=="") {
        
        showAllMovies(movies);


    }

}

document.querySelector("#filterLength").addEventListener("click",filterByLength);


function filterByLength() {

    let arrayFilteredByLength = movies.filter((movie)=>{

        if (endingLength.value>0&&startingLength.value>0) {

            return movie.lengthMinutes>=startingLength.value && movie.lengthMinutes<=endingLength.value;
            
        }else if(startingLength.value>0){

            return movie.lengthMinutes>=startingLength.value;

        }else if(endingLength.value>0){

            return  movie.lengthMinutes<=endingLength.value;
        
        }else{

            return movie.lengthMinutes;

        }
    })

    showAllMovies(arrayFilteredByLength);
    
    
}


function deleteMovie(movieName){

    movies=movies.filter((movie)=>{

        return movie.name!=movieName;

    });

    showAllMovies(movies);

    saveData();

}

sortBy.addEventListener("change",sortSelection);

function sortSelection() {
    switch (sortBy.value) {
        case "name": 
            movies= movies.sort((a,b)=>{
                if(a.name>b.name){
                    return 1;
                }
                if(a.name<b.name){
                    return -1;
                }
                return 0;
            })
            
            break;

            case "category":
                movies= movies.sort((a,b)=>{
                    if(a.category>b.category){
                        return 1;
                    }
                    if(a.category<b.category){
                        return -1;
                    }
                    return 0;
                })

            break;

            case "length":
                movies= movies.sort((a,b)=>{
                    if(a.lengthMinutes>b.lengthMinutes){
                        return 1;
                    }
                    if(a.lengthMinutes<b.lengthMinutes){
                        return -1;
                    }
                    return 0;
                })
                break;

                case "priceLow2High" :

                    movies= movies.sort((a,b)=>{
                        if(a.price>b.price){
                            return 1;
                        }
                        if(a.price<b.price){
                            return -1;
                        }
                        return 0;
                    })
                    break;
                    
                case "PriceHigh2Low" :

                    movies= movies.sort((a,b)=>{
                        if(a.price>b.price){
                            return -1;
                        }
                        if(a.price<b.price){
                            return 1;
                        }
                        return 0;
                    })

                    break;
    
                default:
                    
                    break;
    }
    
        
    

    showAllMovies(movies);

}




saveData();



function saveData (){

    localStorage.setItem("movieList",JSON.stringify(movies))

    

}




