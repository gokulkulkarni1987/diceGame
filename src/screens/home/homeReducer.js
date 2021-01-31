import {LET_THE_GAME_BEGIN} from './HomeActions';

const INITIAL_STATE = {
  playerCount: 0,
  winningPoint: 0,
};

export default (state, action) => {
  const {payload} = action;
  switch (action.type) {
    case LET_THE_GAME_BEGIN:
      state = {
        ...state,
        winningPoint: payload.winningPoint,
        playerCount: payload.playerCount,
      };
      break;
    default:
      state = INITIAL_STATE;
  }
  return state;
};
