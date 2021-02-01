import React, {useEffect} from 'react';
import {FlatList, View} from 'react-native';
import {Text} from 'react-native-elements';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import RNShake from 'react-native-shake';
import ButtonComponent from '../../components/ButtonComponent';
import Heading1Text from '../../components/Heading1Text';
import NormalTextField from '../../components/NormalTextField';
import {CLEAR_GAME, CREATE_PLAYERS, ROLL_THE_DICE} from './gameActions';
import gameScreenStyles from './gameScreenStyles';
import { useFocusEffect } from '@react-navigation/native';

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

  useEffect(() => {
    const {players, currentPlayer, wonPlayers} = gameProp;
    RNShake.addEventListener('ShakeEvent', () => {
      if (players.length > 0) {
        dispatch({
          type: ROLL_THE_DICE,
          payload: {
            players,
            currentPlayer,
            wonPlayers,
            winningPoint: homeProp.winningPoint,
          },
        });
      } else {
        alert('Game done');
      }
    });
    return function () {
      console.log('===================this is called');
      RNShake.removeEventListener('ShakeEvent');
    };
  });

  const renderItem = ({index, item}) => {
    return (
      <View style={gameScreenStyles.playerRowStyle}>
        <NormalTextField>{item.name}</NormalTextField>
        <NormalTextField>{item.pointsWon}</NormalTextField>
      </View>
    );
  };

  const renderItemCurrentPlayers = ({index, item}) => {
    const backgroundColor =
      gameProp.currentPlayer === index ? '#9575cd' : '#c7a4ff';
    return (
      <View style={[gameScreenStyles.playerRowStyle, {backgroundColor}]}>
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
      <Heading1Text>Playing</Heading1Text>
      <FlatList
        data={gameProp.players}
        renderItem={renderItemCurrentPlayers}
        keyExtractor={keyExtractor}
      />
      <Heading1Text>WON</Heading1Text>
      <FlatList
        data={gameProp.wonPlayers}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </View>
  );
};

export default GameScreen;
