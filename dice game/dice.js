// Dice game

var scores, roundScore, activePlayer, gamePlaying;



init();

// button roll event handler
document.querySelector('.btn-roll').addEventListener('click', function() {
    if(gamePlaying) {
        // generate a random number for the dice
        var dice = Math.floor((Math.random() * 6 )+ 1);
        var rolledDice = dice;
        

        // select the dice and roll it
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';

        // display around number when one isn't rolled on the dice 
        if(dice !== 1) {
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else if (rolledDice === 6 && dice === 6) {
            document.querySelector('#score-' + activePlayer).textContent = '0';
            nextPlayer();
        } else {
        nextPlayer();
        }
    }

});


// the hold button event handler
document.querySelector('.btn-hold').addEventListener('click', function() {

    if(gamePlaying) {
        // 
        scores[activePlayer] += roundScore;

        // update the current score to the global score
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];


        

        // check if player won the game
        if(scores[activePlayer] >= 100) {
            document.querySelector('#name-' + activePlayer).textContent = 'WINNER!!!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer).classList.add('winner');
            document.querySelector('.player-' + activePlayer).classList.add('active');
            document.querySelector('#current-' + activePlayer).textContent = '0';
            gamePlaying = false;
        } else {
            
            // Next player
            nextPlayer();
        } 

    }
   

});

document.querySelector('.btn-new').addEventListener('click', init);

function nextPlayer() {
    if(activePlayer === 0) {
        activePlayer = 1;
    } else {
        activePlayer = 0;
    }

    roundScore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    // toggle the active class
    document.querySelector('.player-0').classList.toggle('active');
    document.querySelector('.player-1').classList.toggle('active');

    document.querySelector('.dice').style.display = 'none';

}


function init() {

    
    
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;

    // set the display for the dice to none
    document.querySelector('.dice').style.display = 'none';

    // Reset the game
    document.querySelector('#score-0').textContent = '0';
    document.querySelector('#current-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    // remove the winner class
    document.querySelector('.player-0').classList.remove('winner');
    document.querySelector('.player-1').classList.remove('winner');
    // remove the active class
    document.querySelector('.player-0').classList.remove('active');
    document.querySelector('.player-1').classList.remove('active');
    // add active class to first player
    document.querySelector('.player-0').classList.add('active');



    // Change the name of the players to player1 & player2
    document.querySelector('#name-0').textContent = 'Player 1';
    document.querySelector('#name-1').textContent = 'Player 2';

    if(activePlayer === 1) {
        activePlayer = 0;
    }
    else{
        activePlayer = 0;
    }


}