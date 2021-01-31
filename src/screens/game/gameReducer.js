import {CREATE_PLAYERS} from './gameActions';

const INITIAL_STATE = {
  isRollInProgress: false,
  players: [],
};

export default (state, action) => {
  if (!state) {
    state = INITIAL_STATE;
  }
  switch (action.type) {
    case CREATE_PLAYERS:
      console.log(`inside gameReducer: `, action);
      const players = [];
      const playerCount = action.payload;
      for (let i = 0; i < playerCount; i++) {
        players.push({
          name: `Player${i + 1}`,
          pointsWon: 0,
        });
      }
      state = {
        ...state,
        players,
      };
      break;
    default:
      state;
  }
  return state;
};
