// Elements
const welcomeScreen = document.getElementById(`welcome-screen`);
const gameScreen = document.getElementById('game-screen');
const startGameButton = document.getElementById('start-game-button');
const userName = document.getElementById('username');
const userSelection = document.getElementById('user-selection');
const goButton = document.getElementById('go-button');
const scoreParagraph = document.getElementById('score');
const gameHistoryParagraph = document.getElementById('game-history');

// instantiate the game object from the `RockPaperScissors` class.
let game;

// hide gamescreen
gameScreen.classList.add(`d-none`);

// Add storage for username and game history
function setStorage(){
localStorage.setItem('username', document.getElementById('username').value);
sessionStorage.setItem('score', document.getElementById('score').innerText);
sessionStorage.setItem('game-history', document.getElementById('game-history').innerText);
}
function setValues(){
  
  gameHistoryParagraph.innerHTML = sessionStorage.getItem('game-history');
  scoreParagraph.innerHTML = sessionStorage.getItem('score');
}
if (!sessionStorage.getItem('score') || !sessionStorage.getItem('game-history')){
  setStorage();
}
else {
  setValues();
}

// updateScoreTallyUI
function updateScoreTallyUI(){
  

scoreParagraph.innerText = userName.value + ':' + game.score.user + ' v CPU:' + game.score.cpu;
}

// updateGameHistoryUI
function updateGameHistoryUI(){

gameHistoryParagraph.innerHTML = game.gameHistoryLog;
}

// start-game-button EventListener
startGameButton.addEventListener(`click`, function (event) {
  const username = userName;
  setStorage();
  game = new RockPaperScissors(username);
  welcomeScreen.classList.add('d-none');
  gameScreen.classList.remove('d-none');
  event.preventDefault();

  // Complete
});

// go-button EventListener
goButton.addEventListener(`click`, function (event) {
  event.preventDefault();
  game.play(userSelection.value);
  updateScoreTallyUI();
  updateGameHistoryUI();
  setStorage();
  setValues();
  
});