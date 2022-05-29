'use strict';

const currentScoreElementP0 = document.querySelector('#current--0');
const currentScoreElementP1 = document.querySelector('#current--1');
const playerElementP0 = document.querySelector('.player--0');
const playerElementP1 = document.querySelector('.player--1');
const scoreElementP0 = document.querySelector('#score--0');
const scoreElementP1 = document.querySelector('#score--1');
const img = document.querySelector('.dice');

let scoreP0 = 0;
let scoreP1 = 0;
let currentScoreP0 = 0;
let currentScoreP1 = 0;
let activePLayerData = [];
const rollDiceBtn = document.querySelector('.btn--roll');
const holdScoreBtn = document.querySelector('.btn--hold');
const newGameBtn = document.querySelector('.btn--new');
let player = 0;

const rollDice = function () {
  // Get Player
  let scoreElement;
  let currentScoreElement;
  let diceNumber;
  let newScore;
  let newCurrentScore;
  diceNumber = Math.floor(Math.random() * 6 + 1);
  img.setAttribute('src', 'dice-' + diceNumber + '.png');
  if (player == 0) {
    currentScoreElement = document.querySelector('#current--' + player);
    if (diceNumber != 1) {
      currentScoreP0 = currentScoreP0 + diceNumber;
      currentScoreElement.textContent = currentScoreP0;
    } else {
      player = 1;
      currentScoreP0 = 0;
      currentScoreElement.textContent = 0;
    }
  } else {
    currentScoreElement = document.querySelector('#current--' + player);
    if (diceNumber != 1) {
      currentScoreP1 = currentScoreP1 + diceNumber;
      currentScoreElement.textContent = currentScoreP1;
    } else {
      player = 0;
      currentScoreP1 = 0;
      currentScoreElement.textContent = 0;
    }
  }
};

const holdDice = function () {
  // Get Player
  let scoreElement;
  let currentScoreElement;
  if (player == 0) {
    scoreP0 = scoreP0 + currentScoreP0;
    scoreElementP0.textContent = scoreP0;
    currentScoreP0 = 0;
    player = 1;
    console.log(scoreP0);
    if (scoreP0 > 100) {
      gameFinish();
      playerElementP0.classList.add('player--winner');
    }
  } else {
    scoreP1 = scoreP1 + currentScoreP1;
    scoreElementP1.textContent = scoreP1;
    currentScoreP1 = 0;
    player = 0;
    if (scoreP1 > 100) {
      gameFinish();
      playerElementP1.classList.add('player--winner');
    }
  }
  gameFinish();
  console.log('Holding the dice');
};

const newGame = function () {
  currentScoreElementP0.textContent = 0;
  currentScoreElementP1.textContent = 0;
  scoreElementP0.textContent = 0;
  scoreElementP1.textContent = 0;
  currentScoreP0 = 0;
  currentScoreP1 = 0;

  player = 0;
  console.log('New Game');
};

const ActivePlayer = function () {
  let activePLayerData = [];
  if (player == 0) {
    activePLayerData['scoreElement'] = scoreElementP0;
    activePLayerData['currentScoreElement'] = currentScoreElementP0;
    activePLayerData['score'] = scoreP0;
    activePLayerData['currentScore'] = currentScoreP0;
  } else {
    activePLayerData['scoreElement'] = scoreElementP1;
    activePLayerData['currentScoreElement'] = currentScoreElementP1;
    activePLayerData['score'] = scoreP1;
    activePLayerData['currentScore'] = currentScoreP1;
  }
  return activePLayerData;
};

const gameFinish = function () {
  rollDiceBtn.removeEventListener('click', rollDice);
  holdScoreBtn.removeEventListener('click', holdDice);
  console.log('finish');
};
rollDiceBtn.addEventListener('click', rollDice);
holdScoreBtn.addEventListener('click', holdDice);
newGameBtn.addEventListener('click', newGame);
console.log(ActivePlayer());
