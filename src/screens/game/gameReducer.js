import {CREATE_PLAYERS_SUCCESS} from './gameActions';

const INITIAL_STATE = {
  isRollInProgress: false,
  players: [],
};

export default (state, action) => {
  if (!state) {
    state = INITIAL_STATE;
  }
  switch (action.type) {
    case CREATE_PLAYERS_SUCCESS:
      state = {
        ...state,
        players: action.payload,
      };
      break;
    default:
      state;
  }
  return state;
};
