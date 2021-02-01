import {put} from 'redux-saga/effects';
import {CREATE_PLAYERS_SUCCESS} from './gameActions';

export function* rollDiceStartedSaga() {}

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
