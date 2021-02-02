import React, {useEffect} from 'react';
import {Alert, FlatList, View} from 'react-native';
import {Text} from 'react-native-elements';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import LottieView from 'lottie-react-native';
import RNShake from 'react-native-shake';
import Heading1Text from '../../components/Heading1Text';
import NormalTextField from '../../components/NormalTextField';
import {
  CREATE_PLAYERS,
  ROLL_THE_DICE,
  CLEAR_PLAYER_SCORED_6,
  CLEAR_TWICE_ONE,
} from './gameActions';
import gameScreenStyles from './gameScreenStyles';
import {TouchableHighlight} from 'react-native-gesture-handler';
import Heading4Text from '../../components/Heading4Text';

const GameScreen = (props) => {
  const homeProp = useSelector(({home}) => home);
  const gameProp = useSelector(({game}) => game);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({type: CREATE_PLAYERS, payload: homeProp.playerCount});
  }, [dispatch, homeProp.playerCount]);

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
      RNShake.removeEventListener('ShakeEvent');
    };
  });

  const onPlayerPressed = (player) => {
    props.navigation.navigate('PlayersModal', {
      player,
    });
  };

  const renderItem = ({index, item}) => {
    return (
      <TouchableHighlight onPress={() => onPlayerPressed(item)}>
        <View style={gameScreenStyles.playerRowStyle}>
          <NormalTextField>{item.name}</NormalTextField>
          <NormalTextField>{item.pointsWon}</NormalTextField>
        </View>
      </TouchableHighlight>
    );
  };

  const renderItemCurrentPlayers = ({index, item}) => {
    const backgroundColor =
      gameProp.currentPlayer === index ? '#9575cd' : '#c7a4ff';
    return (
      <TouchableHighlight onPress={() => onPlayerPressed(item)}>
        <View style={[gameScreenStyles.playerRowStyle, {backgroundColor}]}>
          <NormalTextField>{item.name}</NormalTextField>
          <NormalTextField>{item.pointsWon}</NormalTextField>
        </View>
      </TouchableHighlight>
    );
  };

  const keyExtractor = (item, index) => {
    return `${index}_${item.name}`;
  };

  if (gameProp.playScoredSix) {
    Alert.alert(
      'Six scored!!!',
      `${gameProp.sixScoredPlayerName} has scored 6, so he will be playing again`,
      [
        {
          text: 'OK',
          onPress: () => dispatch({type: CLEAR_PLAYER_SCORED_6}),
        },
      ],
    );
  }

  if (gameProp.playerScored1Twice) {
    Alert.alert(
      'Fouled!!!',
      `${gameProp.playerScored1TwiceName} has scored 1 twice, so he will be be skipping`,
      [
        {
          text: 'OK',
          onPress: () => dispatch({type: CLEAR_TWICE_ONE}),
        },
      ],
    );
  }

  return (
    <View style={gameScreenStyles.parentStyle}>
      <View style={gameScreenStyles.topViewStyle}>
        <Text>Total no of Players: {homeProp.playerCount}</Text>
        <Text>Winning points: {homeProp.winningPoint}</Text>
      </View>
      {gameProp.players[gameProp.currentPlayer] && (
        <Heading4Text>{`It's ${
          gameProp.players[gameProp.currentPlayer].name
        }'s turn now`}</Heading4Text>
      )}
      <View style={gameScreenStyles.gameHeaderViewStyle}>
        <Heading1Text>Shake to roll</Heading1Text>
        <LottieView
          source={require('../../res/lottie/14109-dice-rollllinnnggg.json')}
          autoPlay
          loop
          style={gameScreenStyles.rollLottiViewStyle}
        />
      </View>

      <View style={gameScreenStyles.flatlistParentStyle}>
        <Heading1Text style={gameScreenStyles.gameHeaderTextViewStyle}>
          Playing
        </Heading1Text>
        <FlatList
          data={gameProp.players}
          renderItem={renderItemCurrentPlayers}
          keyExtractor={keyExtractor}
          style={gameScreenStyles.flatlistStyle}
          ListEmptyComponent={
            <View style={gameScreenStyles.winnerEmptyViewStyle}>
              <LottieView
                source={require('../../res/lottie/972-done.json')}
                autoPlay
                loop
                style={gameScreenStyles.winnerEmptyLottiViewStyle}
              />
              <Text>Game Done</Text>
            </View>
          }
        />
        <Heading1Text style={gameScreenStyles.gameHeaderTextViewStyle}>
          WON
        </Heading1Text>
        <FlatList
          data={gameProp.wonPlayers}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          style={gameScreenStyles.flatlistStyle}
          showsVerticalScrollIndicator={true}
          ListEmptyComponent={
            <View style={gameScreenStyles.winnerEmptyViewStyle}>
              <LottieView
                source={require('../../res/lottie/winners_empty.json')}
                autoPlay
                loop
                style={gameScreenStyles.winnerEmptyLottiViewStyle}
              />
              <Text>No Winners yet</Text>
            </View>
          }
        />
      </View>
    </View>
  );
};

export default GameScreen;
