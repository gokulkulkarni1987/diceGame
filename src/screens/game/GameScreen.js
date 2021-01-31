import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-elements';
import {useSelector} from 'react-redux';
import Heading1Text from '../../components/Heading1Text';
import gameScreenStyles from './gameScreenStyles';

const GameScreen = (props) => {
  const homeProp = useSelector(({home}) => home);
  const gameProp = useSelector(({game}) => game);

  return (
    <View style={gameScreenStyles.parentStyle}>
      <Heading1Text>Game Screen</Heading1Text>
      <Text>Players: {homeProp.playerCount}</Text>
      <Text>Winning points: {homeProp.winningPoint}</Text>
    </View>
  );
};

export default GameScreen;
