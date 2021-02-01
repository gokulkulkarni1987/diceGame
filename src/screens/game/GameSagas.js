import {put} from 'redux-saga/effects';
import {CREATE_PLAYERS_SUCCESS, ROLL_THE_DICE_SUCCESS} from './gameActions';

export function* rollDiceStartedSaga(action) {
  let {players, currentPlayer, winningPoint, wonPlayers} = action.payload;
  const currentPlayerTemp = currentPlayer;
  const diceNumber = Math.floor(Math.random() * 6) + 1;
  players[currentPlayer].pointsWon += diceNumber;

  if (!players[currentPlayer].prev1) {
    players[currentPlayer].prev1 = diceNumber;
  } else if (!players[currentPlayer].prev2) {
    players[currentPlayer].prev2 = diceNumber;
  } else {
    players[currentPlayer].prev1 = undefined;
    players[currentPlayer].prev2 = undefined;
  }

  if (diceNumber !== 6) {
    if (diceNumber !== 1) {
      players[currentPlayer].prev1 = undefined;
      players[currentPlayer].prev2 = undefined;
    }
    if (
      players[currentPlayer].prev1 === 1 &&
      players[currentPlayer].prev2 === 1
    ) {
      players[currentPlayer].prev1 = undefined;
      players[currentPlayer].prev2 = undefined;
      currentPlayer += 2;
    } else {
      currentPlayer++;
    }
    currentPlayer = currentPlayer >= players.length ? 0 : currentPlayer;
  }

  if (players[currentPlayerTemp].pointsWon > winningPoint) {
    const index = wonPlayers.length + 1;
    wonPlayers.push({
      index,
      ...players[currentPlayerTemp],
    });
    players.splice(currentPlayerTemp, 1);
    currentPlayer = currentPlayer >= players.length ? 0 : currentPlayer;
  }

  yield put({
    type: ROLL_THE_DICE_SUCCESS,
    payload: {
      currentPlayer,
      players,
      wonPlayers,
    },
  });
}

export function* createPlayers(action) {
  const players = [];
  const playerCount = action.payload;
  for (let i = 0; i < playerCount; i++) {
    players.push({
      name: `Player${i + 1}`,
      pointsWon: 0,
      prev1: 0,
      prev2: 0,
    });
  }
  yield put({type: CREATE_PLAYERS_SUCCESS, payload: players});
}
