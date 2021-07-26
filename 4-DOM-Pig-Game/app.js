/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

//Coding Challenge 3

YOUR 3 CHALLENGES
Change the game to follow these rules:

1. A player loses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn. (Hint: Always save the previous dice roll in a separate variable)
2. Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100. (Hint: you can read that value with the .value property in JavaScript. This is a good oportunity to use google to figure this out :)
3. Add another dice to the game, so that there are two dices now. The player looses his current score when one of them is a 1. (Hint: you will need CSS to position the second dice, so take a look at the CSS code for the first one.)
*/

//A state variable tells us the condition of a system (gamePlaying)
var scores, roundScore, activePlayer, gamePlaying;

init();

//document.querySelector('#current-' + activePlayer).textContent = dice;

//var x = document.querySelector('#score-1').textContent;
//console.log(x);
 
var lastDice;
document.querySelector('.btn-roll').addEventListener('click', function() {
    
    if(gamePlaying)
    {
        //Assinging Name 
        document.getElementById('name-0').classList.add(nameOne);
        //1. Random number
        var dice = Math.floor(Math.random() * 6) + 1;

        //2. DIsplay the result 
        var diceDOM = document. querySelector('.dice');
        diceDOM.style.display ='block';  
        diceDOM.src = 'dice-'+ dice + '.png';

        //3. Update the round score IF the rolled number was NOT a 1
        if (dice === 6 && lastDice == 6) {
            //player looses score
            scores[activePlayer] = 0;
            document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
            nextPlayer();
        }else if (dice !== 1) {
            //add score
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        }else{
            //next player
            nextPlayer();
        }
    }
});

var winningScore;
document.querySelector('.btn-hold').addEventListener('click', function() {
    if(gamePlaying)
    {
        //Add Current scroe to GLOBAL score
        scores[activePlayer] += roundScore;
        
        //update UI 
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

        //check if player won the game
        if (scores[activePlayer] >= winningScore){
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + "-panel").classList.add('winner');
            document.querySelector('.player-' + activePlayer + "-panel").classList.remove('active');
            document.querySelector('final-score').classList.add('.player-' + scores[activePlayer])
            gamePlaying = false;
 
        }else{
            //NextPlayer
            nextPlayer();
        }
    }
        
});

function nextPlayer() {
    //next player
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0;

        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';

        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');

        document.querySelector('.dice').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
    scores = [0,0]
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;

    nameOne = prompt('Player One Name')
    nameTwo = prompt('Player Two Name')
    winningScore = prompt('Enter winning score')

    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = nameOne;
    document.getElementById('name-1').textContent = nameTwo; 
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');   
}