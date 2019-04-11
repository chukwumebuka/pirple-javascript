/**
 * This file is a javascript file that contains my favourite song, how i used Number,
 * String, Boolean, objects and arrays to work on them
 */
var song = "All of me";
var artiste = "John legend";
var year = 2013;
var genre = "R&B";
var songDurationInSeconds = "‎269";
var totalAwards = 4;
var nominations = 8;
var producer = "Dave Tozer";
var director = "Nabil Elderkin";
var copiesSold = "56.2 million";
var topBillboard = true;
var views = "1.4 billion";
var likesOnYoutube = "7 million";

//The following is where i console.log the above variables
console.log("Logging the characteristics of the song stored in the variables i have the following");
console.log(song);
console.log(artiste);
console.log(year);
console.log(genre);
console.log(songDurationInSeconds);
console.log(totalAwards);
console.log(nominations);
console.log(producer);
console.log(director);
console.log(copiesSold);
console.log(topBillboard);
console.log(views);
console.log(likesOnYoutube);

//combining array and object i have;
var favouriteSong = [
    {
    title: "All of me",
    artiste: "John Legend",
    yearReleased: 2013,
    },
    {
    awards1: "Top Radio Song",
    award2:"Top Streaming Song (Audio)",
    award3: "Outstanding Song",
    award4: "Record of the Year"
    },
    {
    nomination1: "Single of the Year",
    nomination2: "Top Radio Song",
    nomination3: "Top Streaming Song (Audio)",
    nomination4: "Song of the Year",
    nomination5: "Best Lyrics",
    nomination6: "Best Male Video",
    nomination7: "Outstanding Song",
    nomination8: "Record of the Year",
    }
 ];

 //below is where i conlole.log the array/object combination
console.log("") 
console.log("Manipilating and logging array and object, i have the following");
console.log("")
console.log("My favourite song is "+ favouriteSong[0]["title"] + " by " + favouriteSong[0]["artiste"] + " released in the year " + favouriteSong[0]["yearReleased"]);

console.log("")
console.log("This song won the awards of " + favouriteSong[1]["awards1"]+ ", " + favouriteSong[1]["award2"] + ", " + favouriteSong[1]["award3"] + ", " + favouriteSong[1]["award4"] );

console.log("")
console.log("And nominated in the categories of " + favouriteSong[2]["nomination1"]+ ", " + favouriteSong[2]["nomination2"] + ", " + favouriteSong[2]["nomination3"] + ", " + favouriteSong[2]["nomination4"] + ", " + + favouriteSong[2]["nomination5"]+ ", " + favouriteSong[2]["nomination6"] + ", " + favouriteSong[2]["nomination7"] + ", " + favouriteSong[2]["nomination8"] );
