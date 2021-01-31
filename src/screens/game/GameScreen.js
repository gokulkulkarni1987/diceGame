import React, {useEffect} from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-elements';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import ButtonComponent from '../../components/ButtonComponent';
import Heading1Text from '../../components/Heading1Text';
import {CREATE_PLAYERS} from './gameActions';
import gameScreenStyles from './gameScreenStyles';

const GameScreen = (props) => {
  const homeProp = useSelector(({home}) => home);
  const gameProp = useSelector(({game}) => game);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('inside useEffect: ', homeProp.playerCount);
    dispatch({type: CREATE_PLAYERS, payload: homeProp.playerCount});
  }, [dispatch, homeProp.playerCount]);

  const onShowPlayersClicked = () => {
    props.navigation.navigate('PlayersModal');
  };

  return (
    <View style={gameScreenStyles.parentStyle}>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'stretch',
          justifyContent: 'space-between',
        }}>
        <View>
          <Text>Total no of Players: {homeProp.playerCount}</Text>
          <Text>Winning points: {homeProp.winningPoint}</Text>
        </View>
        <View>
          <ButtonComponent
            title={'Show Players'}
            onPress={onShowPlayersClicked}
          />
        </View>
      </View>
    </View>
  );
};

export default GameScreen;
