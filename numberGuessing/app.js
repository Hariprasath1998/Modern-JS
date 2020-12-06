let min = 1,
    max = 10,
    winningNum = getRandomNum(min, max),
    guessesLeft = 3;


// UI Elements

const game = document.getElementById('game'),
    minNum = document.querySelector('.min-num'),
    maxNum = document.querySelector('.max-num'),
    guessInput = document.querySelector('#guess-input'),
    guessBtn = document.querySelector('#guess-btn'),
    message = document.querySelector('.message');

// Assign UI min max
minNum.textContent = min;
maxNum.textContent = max;

// play again event listener
game.addEventListener('mousedown', function(e) {
    if (e.target.className === 'play-again') {
        window.location.reload();
    }
})




// Button Event Listener

guessBtn.addEventListener('click', function() {
    let guess = parseInt(guessInput.value);

    if (isNaN(guess) || guess < min || guess > max) {
        setMessage(`Please enter a number between ${min} and ${max}`, 'red');
    } else {
        if (guess === winningNum) {
            // Game over-Won
            gameOver(true, `${winningNum} is correct, you won!`);

        } else {
            guessesLeft -= 1;

            if (guessesLeft === 0) {
                // Game over-lost
                gameOver(false, `Game over, You lost. The answer is ${winningNum}`)
            } else {
                // Game continues
                guessInput.value = '';
                setMessage(`${guess} is not correct. You have ${guessesLeft} guesses left.`, 'red');
            }


        }
    }


});

function gameOver(won, msg) {
    let color;
    won === true ? color = 'green' : color = 'red';
    // Disable Input
    guessInput.disabled = 'true';
    guessInput.style.borderColor = color;
    // Set Message
    setMessage(msg, color);
    guessBtn.value = 'Play again?';
    guessBtn.className += 'play-again';
}

function setMessage(msg, color) {
    message.style.color = color;
    message.textContent = msg;
}

// get winning number
function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + 1);
}