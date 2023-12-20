const words = ['javascript', 'hangman', 'developer', 'programming', 'web'];

let selectedWord = '';
let guessedWord = [];
let incorrectGuesses = 0;
const maxIncorrectGuesses = 5;

// DOM elements
const wordDisplay = document.getElementById('word-display');
const hangmanDisplay = document.getElementById('hangman');
const buttonsContainer = document.getElementById('buttons');

// Initialize the game
function initializeGame() {
  selectedWord = words[Math.floor(Math.random() * words.length)];
  guessedWord = new Array(selectedWord.length).fill('_');
  incorrectGuesses = 0;
  updateDisplay();
}

// Update the display
function updateDisplay() {
  wordDisplay.textContent = guessedWord.join(' ');
  hangmanDisplay.textContent = 'Incorrect Guesses: ' + incorrectGuesses;

  buttonsContainer.innerHTML = '';
  for (let letter of 'abcdefghijklmnopqrstuvwxyz') {
    const button = document.createElement('button');
    button.textContent = letter;
    button.addEventListener('click', () => makeGuess(letter));
    buttonsContainer.appendChild(button);
  }
}

// Make a guess
function makeGuess(letter) {
  if (selectedWord.includes(letter)) {
    for (let i = 0; i < selectedWord.length; i++) {
      if (selectedWord[i] === letter) {
        guessedWord[i] = letter;
      }
    }
  } else {
    incorrectGuesses++;
  }

  if (incorrectGuesses >= maxIncorrectGuesses || guessedWord.join('') === selectedWord) {
    endGame();
  } else {
    updateDisplay();
  }
}

// End the game
function endGame() {
  if (incorrectGuesses >= maxIncorrectGuesses) {
    alert('You lost! The correct word was: ' + selectedWord);
  } else {
    alert('Congratulations! You won!');
  }

  // Restart the game
  initializeGame();
}

// Start the game
initializeGame();
