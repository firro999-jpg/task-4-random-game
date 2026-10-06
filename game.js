const nameinput = document.querySelector("#nameinput");
const numberinput = document.querySelector("#numberinput");
const difficulty = document.querySelector("#difficulty");
const startButton = document.querySelector("#startbutton");
const guessButton = document.querySelector("#guessbutton");
const results = document.querySelector("#results");

let attempts;
let targetNumber;

function startGame() {
    const name = nameinput.value.trim();
    const selectedDifficulty = difficulty.value;

    if (selectedDifficulty === "easy") {
        attempts = 10;
    } else if (selectedDifficulty === "medium") {
        attempts = 7;
    } else if (selectedDifficulty === "hard") {
        attempts = 5;
    }

    targetNumber = Math.floor(Math.random() * 100) + 1;

    results.textContent =
        "Game started! Name: " + name +
        " | Attempts: " + attempts;
}

function makeGuess() {
    const guess = Number(numberinput.value);

    attempts--;

    checkGuess(guess);
}

function checkGuess(guess) {
    switch (true) {
        case guess === targetNumber:
            results.textContent = "Correct!";
            break;

        case guess > targetNumber:
            results.textContent =
                "Too high! Attempts left: " + attempts;
            break;

        case guess < targetNumber:
            results.textContent =
                "Too low! Attempts left: " + attempts;
            break;
    }
}

startButton.addEventListener("click", startGame);
guessButton.addEventListener("click", makeGuess);