import {
  CLEAR_GAME,
  CLEAR_PLAYER_SCORED_6,
  CLEAR_TWICE_ONE,
  CREATE_PLAYERS_SUCCESS,
  PLAYER_SCORED_6,
  ROLL_THE_DICE,
  ROLL_THE_DICE_SUCCESS,
} from './gameActions';

const INITIAL_STATE = {
  isRollInProgress: false,
  currentPlayer: 0,
  players: [],
  generatedValue: 0,
  wonPlayers: [],
  playScoredSix: false,
  sixScoredPlayerName: '',
  playerScored1Twice: false,
  playerScored1TwiceName: '',
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
        playScoredSix: action.payload.hasScored6,
        sixScoredPlayerName: action.payload.name,
        playerScored1Twice: action.payload.playerScored1Twice,
        playerScored1TwiceName: action.payload.name,
      };
      break;
    case CLEAR_GAME:
      state = {
        isRollInProgress: false,
        currentPlayer: 0,
        players: [],
        generatedValue: 0,
        wonPlayers: [],
      };
      break;
    case CLEAR_PLAYER_SCORED_6:
      state = {
        ...state,
        playScoredSix: false,
        sixScoredPlayerName: '',
      };
      break;
    case CLEAR_TWICE_ONE:
      state = {
        ...state,
        playerScored1Twice: false,
        playerScored1TwiceName: '',
      };
      break;
    default:
      state;
  }
  return state;
};
