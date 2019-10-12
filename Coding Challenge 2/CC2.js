var johnGame1 = 89;
var johnGame2 = 120;
var johnGame3 = 103;
var johnAvgGame = (johnGame1 + johnGame2 + johnGame3) / 3;

var mikeGame1 = 116;
var mikeGame2 = 94;
var mikeGame3 = 123;
var mikeAvgGame = (mikeGame1 + mikeGame2 + mikeGame3) / 3;

console.log('Average game score of John: ' + johnAvgGame);
console.log('Average game score of Mike: ' + mikeAvgGame);

if(johnAvgGame > mikeAvgGame){
    console.log("John's team is the winner with average score: " + johnAvgGame);
}  else if (johnAvgGame === mikeAvgGame) {
    console.log("It's a tie with score: " + johnAvgGame);
} else {
    console.log("Mike's team is the winner with average score: " + mikeAvgGame);
}

var marryGame1 = 97;
var marryGame2 = 134;
var marryGame3 = 105;
var marryAvgGame = (marryGame1 + marryGame2 + marryGame3) / 3;

console.log('Average game score of Marry: ' + marryAvgGame);

if(johnAvgGame > mikeAvgGame && johnAvgGame > marryAvgGame){
    console.log("John's team is the winner with the highest average score of " + johnAvgGame + " of all the three!");
} else if(mikeAvgGame > johnAvgGame && mikeAvgGame > marryAvgGame){
    console.log("Mike's team is the winner with the highest average score of " + mikeAvgGame + " of all the three!");
} else if(marryAvgGame > johnAvgGame && marryAvgGame > mikeAvgGame){
    console.log("Marry's team is the winner with the highest average score of " + marryAvgGame + " of all the three!");
} else {
    console.log("It's a tie with the average score: " + johnAvgGame);
}