import React, {useEffect} from 'react';
import {FlatList, View} from 'react-native';
import {Text} from 'react-native-elements';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import ButtonComponent from '../../components/ButtonComponent';
import Heading1Text from '../../components/Heading1Text';
import NormalTextField from '../../components/NormalTextField';
import {CREATE_PLAYERS} from './gameActions';
import gameScreenStyles from './gameScreenStyles';

const GameScreen = (props) => {
  const homeProp = useSelector(({home}) => home);
  const gameProp = useSelector(({game}) => game);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({type: CREATE_PLAYERS, payload: homeProp.playerCount});
  }, [dispatch, homeProp.playerCount]);

  const onShowPlayersClicked = () => {
    const {players} = gameProp;
    props.navigation.navigate('PlayersModal', {
      players,
    });
  };

  const renderItem = ({index, item}) => {
    return (
      <View style={gameScreenStyles.playerRowStyle}>
        <NormalTextField>{item.name}</NormalTextField>
        <NormalTextField>{item.pointsWon}</NormalTextField>
       </View>
       );
  };

  const keyExtractor = (item, index) => {
    return `${index}_${item.name}`;
  };

  return (
    <View style={gameScreenStyles.parentStyle}>
      <View style={gameScreenStyles.topViewStyle}>
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
      <View style={gameScreenStyles.rollViewStyle}>
        <Heading1Text>Shake to roll</Heading1Text>
      </View>
      <FlatList
        data={gameProp.players}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </View>
  );
};

export default GameScreen;
