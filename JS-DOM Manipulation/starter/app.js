/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var score, roundScore, activePlayer, gamePlaying = true;

init();

document.querySelector('.btn-roll').addEventListener('click', function(){       //Anonymous Function has been declared in this line.
    if(gamePlaying){
    //get a number in dice after a roll:
    dice = Math.floor(Math.random() * 6) + 1;
    
    //make the dice visible:
    var diceNum = document.querySelector('.dice');  //Storing in a variable to shorten the program.
    diceNum.style.display = 'block';
    diceNum.src = 'dice-' + dice + '.png';
    
    //Sum up the current value to the current value:
   if (dice !== 1){
       //Add the scores
       roundScore += dice;
       document.querySelector('#current-' + activePlayer).textContent = roundScore;
       
   } else {
       //change the player and stuffs
      nextPlayer();
    }        
    }
});

document.querySelector('.btn-hold').addEventListener('click', function(){
    if(gamePlaying){
     //Store into the global score and the update
    score[activePlayer] += roundScore;
    
    //Update the user Interface
    document.querySelector('#score-' + activePlayer).textContent = score[activePlayer];
    
    //check whether the player has won the game or not
    if (score[activePlayer] >= 100){
        document.querySelector('#name-' + activePlayer).textContent = 'WINNER!';
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        gamePlaying = false;
    }else{
        nextPlayer();
    }       
    }

});

document.querySelector('.btn-new').addEventListener('click', init);

function init (){
    score = [0,0];
    roundScore = 0;
    activePlayer = 0;

    //document.querySelector('#current-' + activePlayer).textContent = dice;      //textcontent does only for strings.    //Gover value
    //document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';       //innerHTML is used to embedd addition Html code in the dice variable

    //var x = document.querySelector('#score-0').textContent;   //To see the selected part //Getter value
    //console.log(x);

    document.querySelector('.dice').style.display = 'none';


    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');            
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    gamePlaying = true;
    }


function nextPlayer () {
     activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
       roundScore = 0;
       
       document.getElementById('current-0').textContent = '0';
       document.getElementById('current-1').textContent = '0';
       
       document.querySelector('.player-0-panel').classList.toggle('active');
       document.querySelector('.player-1-panel').classList.toggle('active');
       
       //document.querySelector('.player-0-pannel').classList.remove('active');
       //document.querySelector('.player-1-pannel').classList.add('active');

       
       document.querySelector('.dice').style.display = 'none';
}