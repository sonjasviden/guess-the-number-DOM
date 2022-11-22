/**
 * Guess the number
 *
 * Skriv om ”gissa talet” till att ta emot och visa utfall i DOM. Använd
 * formulär-fält för att ta emot input från användaren, och när formuläret
 * skickas (submits) så jämför det gissade talet mot svaret och visa utfallet
 * i DOM istället för alert()-rutor.
 *
 * STEG 1
 * En input-box där man kan gissa på ett tal. En knapp för att gissa.
 *
 * STEG 1.1
 * Visa resultatet i en alert.
 *
 * STEG 1.2
 * Visa om resultatet var rätt eller inte i ett HTML-element.
 *
 * STEG 2
 * Visa antalet gissningar hittills i ett HTML-element.
 *
 * STEG 3
 * Visa om det gissade talet var för högt eller lågt i ett HTML-element.
 *
 * STEG 4
 * Skapa en knapp för att starta om spelet (ett nytt tal ska slumpas fram och
 * antalet gissningar ska nollställas).
 *
 */

 const cheatEl = document.querySelector('#cheat');
 const formGuessEl = document.querySelector('#formGuess');
 const inputGuessEl = document.querySelector('#inputGuess');
 const turnoutEl = document.querySelector('#turnout');
 const knappis = formGuessEl.querySelector('.knappis');
 
 const getRandomNumber = function (max = 10) {

    return Math.ceil(Math.random() * max);

}

let correctNumber = getRandomNumber();
let guesses = 0;

// Cheat
cheatEl.innerText = correctNumber;

formGuessEl.addEventListener("submit", (e) => {
    e.preventDefault();

    guesses++;

    if (correctNumber == inputGuessEl.value) {
        turnoutEl.innerHTML = `<p>U said ${inputGuessEl.value} and it's correct! 🥳</p>`;
        knappis.disabled = true;
    }

    else if (correctNumber > inputGuessEl.value) {
        turnoutEl.innerHTML = `<p>${inputGuessEl.value} is too LOW...</p>`;

    } 
    else if (correctNumber < inputGuessEl.value) {
        turnoutEl.innerHTML = `<p>${inputGuessEl.value} is oo HIGH!</p>`;
    }

    turnoutEl.innerHTML += `<p>You've guessed ${guesses} times</p>`;
    inputGuessEl.value = "";
    inputGuessEl.focus();
});

// Listen for New Game
formGuessEl.addEventListener('reset', () => {

    // Get a new number to guess
    correctNumber = getRandomNumber();

    // Cheat
    cheatEl.innerText = correctNumber;

    // Reset number of guesses to 0
    guesses = 0;

    // Empty previous result
    turnoutEl.innerHTML = "";

    // Enable button again
    knappis.disabled = false;
});
