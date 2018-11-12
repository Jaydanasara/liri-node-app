var dotenv = require("dotenv").config();

var keys = require("./keys.js");
var Spotify = require("node-spotify-Api");
var fs = require("fs");

var request = require("request");

var input = process.argv;
var input1 = input[2];
var input2 = input[3];

if (input1 === `concert-this`) {


  var queryBUrl = "https://rest.bandsintown.com/artists/" + input2 + "/events?app_id=codingbootcamp";



  request(queryBUrl, function (error, response, body) {
    space="\n";

    if (!error && response.statusCode === 200) {
      for (i = 0; i < JSON.parse(body).length; i++) {
        output1="The artist will be at this Venue " + JSON.parse(body)[i].venue.name+space+
        "State " + JSON.parse(body)[i].venue.region+space+ "City " + JSON.parse(body)[i].venue.city+space+
        "Date and Time " + JSON.parse(body)[i].datetime+space+space;
        console.log(output1);
        fs.appendFile("logtxt",output1, function (err){
          if (err) throw err;
        })
      }


    }
  });





}




else if
(input1 === `spotify-this-song`) {
  spot()

  var spotify = new Spotify(keys.spotify);
  var space = "\n";
  spotify.search({ type: 'track', query: input2 }, function (err, data) {
    if (err) {
      console.log('Error occurred: ' + err);
      return;
    }
    else if (!err) {
      output = space + "================= DATA HERE ==================" +
        space + "Artist Name: " + data.tracks.items[0].album.artists[0].name +
        space + "Song Name: " + "'" + input2.toUpperCase() + "'" +
        space + "Album Name: " + data.tracks.items[0].album.name +
        space + "URL: " + data.tracks.items[0].album.external_urls.spotify + "\n\n\n";
      console.log(output);
      fs.appendFile("logtxt",output,function (err){
        if (err) throw err;
      })
    }




  });



}


else if
(input1 === `movie-this`) {

j();
  var queryUrl = "http://www.omdbapi.com/?t=" + input2 + "&y=&plot=short&apikey=trilogy";

  

  request(queryUrl, function (error, response, body) {
    space="\n";
    if (!error && response.statusCode === 200) { 
      output2=  "The movie's title is: " + JSON.parse(body).Title+space+
      "Release Year: " + JSON.parse(body).Year+space+
      "The movie's rating is: " + JSON.parse(body).imdbRating+space+
      "The movie's country is: " + JSON.parse(body).Country+space+
      "The movie's language is: " + JSON.parse(body).Language+space+
      "The movie's plot is: " + JSON.parse(body).Plot+space+
      "The movie's actors are : " + JSON.parse(body).Actors+space+space;
      console.log(output2)
      fs.appendFile("logtxt", output2,function (err){
        if (err) throw err;
      })
    }
  });






}
 

// // else if
// // (input1 === `do-what-it-says`) {


// // }
 function j (){
  if (input1==="movie-this"&&input2===undefined){
    input2="mr nobody";
    console.log(" If you haven't watched Mr. Nobody, then you should <http://www.imdb.com/title/tt0485947/>  It's on Netflix!")
  
  };
}

function spot(){
  if (input1==="spotify-this-song"&&input2===undefined){

    input2= "the sign(ace of base)";
  };
}