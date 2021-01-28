
/* Wire up the UI
#buttons-view  -- put the clickable favourite movie buttons in here
clearFavouriteButtons() -- make this function to clear the favourite button list

#movie-input -- INPUT with the movie name
addMovie(event) -- the button clicked to display the inputted movie

#movie-view -- where the movie list is displayed in a bootstrap card:
    Show movies as:
    [    Title   ]
    [Release Year]
    [Poster Image]
    ---------------
*/

// this adds a movie button
function addFavouriteButton( movieName ){
// current movies in favourit ebar
var favList = document.querySelector('#buttons-view').innerText.toUpperCase()
var isAlreadyFav = favList.includes( movieName.toUpperCase() )
if( isAlreadyFav ) return

document.querySelector('#buttons-view').innerHTML += 
    `<button onClick="getMovie('${movieName}')" class='btn btn-warning btn-sm'>${movieName}</button> &nbsp;` 
}

// clear the favourite buttons
function clearFavouriteButtons(){
document.querySelector('#buttons-view').innerHTML = ''
}

// add movie button clicked - read INPUT and getMovie()
function addMovie(event){
event.preventDefault()

var movieTitle = document.querySelector('#movie-input').value
// clear the INPUT now
document.querySelector('#movie-input').value = ''

getMovie( movieTitle )
}

// getMovie function, is async, awaits data to fetch
async function getMovie( movieName ){
var queryUrl = `https://www.omdbapi.com/?t=${movieName}&apikey=trilogy`

// get the movie information
console.log( `... getting movie info for ${movieName}` )
var movieData = await fetch( queryUrl ).then( r=>r.json() )
console.log( ` .. fetched movie info: `, movieData )

addFavouriteButton( movieData.Title )

// display it
var movieView = document.querySelector('#movie-view')
movieView.innerHTML = `
    <div class="col-6 col-md-4 col-lg-3">
    <div class="card">
        <div class="card-header">${movieData.Title}</div>
        <div class="card-body">
        <p>Release Year: ${movieData.Year}</p>
        <img src='${movieData.Poster}' style='width:100%;' />
        </div>
    </div>
    </div>` + movieView.innerHTML
}

// starting initialization - showing a few movie buttons
addFavouriteButton( 'The Matrix' )
addFavouriteButton( 'Mr. Nobody' )