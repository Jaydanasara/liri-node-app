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

    if (!error && response.statusCode === 200) {
      for (i = 0; i < JSON.parse(body).length; i++) {
        console.log("The artist will be at this Venue " + JSON.parse(body)[i].venue.name);
        console.log("State " + JSON.parse(body)[i].venue.region);
        console.log("City " + JSON.parse(body)[i].venue.city);
        console.log("Date and Time " + JSON.parse(body)[i].datetime);
      }


    }
  });





}

else if (input1==="spotify-this-song" && input2===undefined){
input2= "the sign (ace of base)"
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
    }
  


else if
(input1 === `spotify-this-song`) {

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
    }




  });



}


else if
(input1 === `movie-this`) {


  var queryUrl = "http://www.omdbapi.com/?t=" + input2 + "&y=&plot=short&apikey=trilogy";

  console.log(queryUrl);

  request(queryUrl, function (error, response, body) {
    if (!error && response.statusCode === 200) {
      console.log("The movie's title is: " + JSON.parse(body).Title);
      console.log("Release Year: " + JSON.parse(body).Year);
      console.log("The movie's rating is: " + JSON.parse(body).imdbRating);
      console.log("The movie's country is: " + JSON.parse(body).Country);
      console.log("The movie's language is: " + JSON.parse(body).Language);
      console.log("The movie's plot is: " + JSON.parse(body).Plot);
      console.log("The movie's actors are : " + JSON.parse(body).Anctors);
    }
  });






}
// // else if
// // (input1 === `do-what-it-says`) {


// // }
