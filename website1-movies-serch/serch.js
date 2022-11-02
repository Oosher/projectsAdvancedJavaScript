
//searchbar initialization
const searchBar = document.createElement("input");

searchBar.className="searchBar";

searchBar.placeholder="Enter a movie name";

document.body.appendChild(searchBar);

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

let startingLength = document.querySelector("#startingLength");
let endingLength = document.querySelector("#endingLength");



function Movie(name,lengthMinutes,category,price) {
    this.name=name;

    this.lengthMinutes=lengthMinutes;

    this.category=category;

    this.price=price;

    this.id=this.name+this.lengthMinutes;

    this.html = document.createElement("div");

    this.html.innerHTML=" name : "+this.name+"<br> length : "+this.lengthMinutes+"<br> category : "+this.category+"<br> price : "+this.price+"$";

    this.removeMovie = document.createElement("button");

    this.removeMovie.innerHTML="delete <br> movie";

    this.removeMovie.className="removeButton";

    this.html.appendChild(this.removeMovie);

    this.removeMovie.addEventListener("click",()=>{

        
        deleteMovie(this.name);

    });
     
    

}

let movies = [
(new Movie("Pulp Fiction", 154 , "Crime", 32)),
(new Movie("Taxidermia ", 91 , "comedy", 32)),
(new Movie("Naked Lunch", 115, "Drama", 32)),
(new Movie("There Will Be Blood ", 158, "Drama", 32)),
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


showAllMovies(movies);

function showAllMovies(movieArray) {

    movieContainer.innerHTML="";

    document.body.appendChild(movieContainer);
    

    for (let i = 0; i < movieArray.length; i++) {

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

}