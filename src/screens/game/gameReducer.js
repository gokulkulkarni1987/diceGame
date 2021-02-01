import {
  CREATE_PLAYERS_SUCCESS,
  ROLL_THE_DICE,
  ROLL_THE_DICE_SUCCESS,
} from './gameActions';

const INITIAL_STATE = {
  isRollInProgress: false,
  currentPlayer: 0,
  players: [],
  generatedValue: 0,
  wonPlayers: [],
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
    case ROLL_THE_DICE:
      state = {
        ...state,
        isRollInProgress: true,
      };
      break;
    case ROLL_THE_DICE_SUCCESS:
      state = {
        ...state,
        isRollInProgress: false,
        players: action.payload.players,
        currentPlayer: action.payload.currentPlayer,
        wonPlayers: action.payload.wonPlayers,
      };
      break;
    default:
      state;
  }
  return state;
};
