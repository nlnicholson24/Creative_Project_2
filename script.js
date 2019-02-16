const APIKEY = "81fc9dd";

document.getElementById("movieSubmit").addEventListener("click", function(event) {
  event.preventDefault();
  const value = document.getElementById("movieInput").value;
  const year = document.getElementById("yearInput").value;
  if (value === "")
    return;
  console.log(value);

  request = "http://omdbapi.com/?apikey=" + APIKEY + "&t="+ value;
  if (year != "") {
    request += ("&y=" + year);
    console.log(year);
  }
  const url = request;
    fetch(url)
      .then(function(response) {
        return response.json();
      }).then(function(json) {
        console.log(json);

        document.getElementById("moviePoster").innerHTML = '<img src = "' + json.Poster + '">';

        aboutResults = "";
        aboutResults += "<h2>About <i>" + json.Title + "</i></h2>";
        aboutResults += "<b>Starring: </b>";
        aboutResults += json.Actors + "</br>";
        aboutResults += "<b>Directed By: </b>";
        aboutResults += json.Director + "</br>";
        aboutResults += "<b>Written By: </b>";
        aboutResults += json.Writer + "</br>";
        aboutResults += "<b>Production Company: </b>";
        aboutResults += json.Production + "</br>";
        aboutResults += "<b>Rated: </b>";
        aboutResults += json.Rated + "</br>";
        aboutResults += "<b>Runtime: </b>";
        aboutResults += json.Runtime + "</br>";
        aboutResults += "<b>Genre: </b>";
        aboutResults += json.Genre + "</br>";
        aboutResults += "<b>Plot Summary: </b>";
        aboutResults += json.Plot + "</br>";
        document.getElementById("about").innerHTML = aboutResults;

        reviewsResults = "";
        reviewsResults += "<h2>Reviews and Box Office</h2>";
        for (let i = 0; i < json.Ratings.length; i++)
        {
          reviewsResults += "<b>" + json.Ratings[i].Source + ": </b>";
          reviewsResults += json.Ratings[i].Value + "</br>";
        }
        reviewsResults += "<b>IMDB Rating: </b>" + json.imdbRating + "</br>";
        reviewsResults += "<b>Number of IMDB Votes: </b>" + json.imdbVotes + "</br>";
        reviewsResults += "<b>Box Office Gross: </b>" + json.BoxOffice + "</br>";
        reviewsResults += "<b>Country: </b>" + json.Country + "</br>";
        reviewsResults += "<b>Release Date: </b>" + json.Released + "</br>";
        document.getElementById("reviews").innerHTML = reviewsResults;
      });
    });
