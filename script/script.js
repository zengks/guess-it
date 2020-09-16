let secretNum = Math.floor((Math.random() * 100) + 1);
const $guessBtn = $('#guess-button');
const $history = $('#history');
let times = 0;

$(document).ready(function(){
    $guessBtn.on('click', function(){
        let playerGuess = $('#player-guess').val();
        const $status = $('#current-status');
        if(playerGuess.includes('.')){
            $status.text('Invalid value. Please enter a whole number between 1 and 100...');
        }else if(playerGuess.length == 0 || !checkInRange(playerGuess)){
            $status.text('Invalid value. Please enter a number between 1 and 100...');
        }else{
            times++;
            console.log(secretNum);
            if(playerGuess == secretNum){
                $status.text(`CONGRATS, YOU GUESSED RIGHT!`);
                $status.append(`<br>You guessed ${times} times`);
                $status.css('color', 'red');
                addHistory(playerGuess);
            }else if(playerGuess < secretNum){
                $status.text(`${playerGuess} is too low. Try again...`);
                addHistory(playerGuess);
            }else{
                $status.text(`${playerGuess} is too high. Try again...`);
                addHistory(playerGuess);
            }
        }
        $('#player-guess').val('');
    });
})

function addHistory(guessNum){
    if(guessNum < secretNum){
        $history.append(`<li> ${guessNum} too low </li>`);
    }else if(guessNum > secretNum){
        $history.append(`<li> ${guessNum} too high </li>`);
    }else{
        $history.append(`<li> ${guessNum} CORRECT </li>`);
    }
}

function checkInRange(guessNum){
    if (guessNum <= 100 && guessNum >= 1){
        return true;
    }
}
