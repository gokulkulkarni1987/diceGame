import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  inputFieldStyle: {marginTop: 10},
  parentStyle: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: 'white',
    padding: 10,
  },
  topViewStyle: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'space-between',
  },
  gameHeaderViewStyle: {
    marginTop: 10,
    padding: 10,
  },
  playerRowStyle: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-between',
    backgroundColor: '#00e676',
    marginTop: 5,
  },
  winnerEmptyViewStyle: {alignSelf: 'stretch', alignItems: 'center'},
  winnerEmptyLottiViewStyle: {width: 100, height: 100},
  flatlistStyle: {flex: 1},
  flatlistParentStyle: {flex: 1, padding: 10},
});
