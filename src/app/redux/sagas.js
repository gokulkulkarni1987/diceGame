import {takeLatest} from 'redux-saga/effects';
import {CREATE_PLAYERS, ROLL_THE_DICE} from '../../screens/game/gameActions';
import {createPlayers, rollDiceStartedSaga} from '../../screens/game/GameSagas';

export default function* sagas() {
  yield takeLatest(ROLL_THE_DICE, rollDiceStartedSaga);
  yield takeLatest(CREATE_PLAYERS, createPlayers);
}
