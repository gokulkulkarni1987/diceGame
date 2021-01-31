import {LET_THE_GAME_BEGIN} from './HomeActions';

const INITIAL_STATE = {
  playerCount: 0,
  winningPoint: 0,
};

export default (state = INITIAL_STATE, action) => {
  const {payload} = action;
  switch (action.type) {
    case LET_THE_GAME_BEGIN:
      state = {
        ...state,
        winningPoint: parseInt(payload.winningPoint),
        playerCount: parseInt(payload.playerCount),
      };
      break;
    default:
      state;
  }
  return state;
};
