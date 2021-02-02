import {put} from 'redux-saga/effects';
import {CREATE_PLAYERS_SUCCESS, ROLL_THE_DICE_SUCCESS} from './gameActions';

export function* rollDiceStartedSaga(action) {
  let {players, currentPlayer, winningPoint, wonPlayers} = action.payload;
  const currentPlayingPlayer = players[currentPlayer];
  const currentPlayerTemp = currentPlayer;
  let hasPlayerFouled = false;
  const diceNumber = Math.floor(Math.random() * 6) + 1;
  players[currentPlayer].pointsWon += diceNumber;
  if (!players[currentPlayer].pointsList) {
    players[currentPlayer].pointsList = [];
  }
  players[currentPlayer].pointsList.push(diceNumber);

  if (diceNumber === 1) {
    if (players[currentPlayer].prev1 === 1) {
      hasPlayerFouled = true;
      players[currentPlayer].prev2 = 1;
    } else {
      players[currentPlayer].prev1 = 1;
    }
  } else {
    players[currentPlayer].prev1 = undefined;
    players[currentPlayer].prev2 = undefined;
  }
  if (diceNumber !== 6 || players[currentPlayerTemp].pointsWon > winningPoint) {
    let tempCount = 0;
    do {
      currentPlayer++;
      currentPlayer = currentPlayer >= players.length ? 0 : currentPlayer;
      tempCount++;
    } while (
      players[currentPlayer].prev1 === 1 &&
      players[currentPlayer].prev2 === 1 &&
      tempCount < players.length
    );
    if (tempCount >= players.length) {
      for (let i = 0; i < players.length; i++) {
        players[i].prev1 = undefined;
        players[i].prev2 = undefined;
      }
    }
  }

  const hasScored6 =
    diceNumber === 6 && players[currentPlayerTemp].pointsWon <= winningPoint;

  if (players[currentPlayerTemp].pointsWon > winningPoint) {
    const index = wonPlayers.length + 1;
    wonPlayers.push({
      index,
      ...players[currentPlayerTemp],
    });
    players.splice(currentPlayerTemp, 1);
    currentPlayer--;
    currentPlayer =
      currentPlayer >= players.length || currentPlayer < 0 ? 0 : currentPlayer;
  }

  yield put({
    type: ROLL_THE_DICE_SUCCESS,
    payload: {
      currentPlayer,
      players,
      wonPlayers,
      diceNumber,
      hasScored6,
      name: currentPlayingPlayer.name,
      playerScored1Twice: hasPlayerFouled,
    },
  });
}

export function* createPlayers(action) {
  const players = [];
  const playerCount = action.payload;
  for (let i = 0; i < playerCount; i++) {
    players.push({
      name: `Player-${i + 1}`,
      pointsWon: 0,
      prev1: 0,
      prev2: 0,
    });
  }
  yield put({type: CREATE_PLAYERS_SUCCESS, payload: players});
}
