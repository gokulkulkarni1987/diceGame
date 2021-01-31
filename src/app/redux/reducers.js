import {combineReducers} from 'redux';
import gameReducer from '../../screens/game/gameReducer';
import homeReducer from '../../screens/home/homeReducer';

export default combineReducers({game: gameReducer, home: homeReducer});
