import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-elements';
import Heading1Text from '../../components/Heading1Text';

export default GameScreen = (props) => {
  const {route} = props;
  const {playerCount, winningPoint} = route.params;
  return (
    <View>
      <Heading1Text>Game Screen</Heading1Text>
      <Text>Players: {playerCount}</Text>
      <Text>Winning points: {winningPoint}</Text>
    </View>
  );
};
