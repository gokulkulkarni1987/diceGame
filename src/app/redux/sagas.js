import {takeLatest} from 'redux-saga/effects';
import {rollDiceStartedSaga} from '../../screens/game/GameSagas';

export default function* sagas() {
  yield takeLatest('ROLL_DICE', rollDiceStartedSaga);
}
