import React, {useState} from 'react';
import {View} from 'react-native';
import ButtonComponent from '../../components/ButtonComponent';
import Heading1Text from '../../components/Heading1Text';
import InputField from '../../components/InputField';
import homeScreenStyles from './homeScreenStyles';

const HomeScreen = (props) => {
  const [playerCount, setPlayerCount] = useState(0);
  const [winningPoint, setWinningPoint] = useState(0);

  const startTheGame = (propsRef) => {
    if (!playerCount || !winningPoint) {
      alert('Please enter all details');
      return;
    }
    propsRef.navigation.navigate('Game', {
      playerCount,
      winningPoint,
    });
  };

  const onPlayerCountChange = (playerCountVal) => {
    setPlayerCount(playerCountVal);
  };

  const onWinningPointsChange = (winningPointVal) => {
    setWinningPoint(winningPointVal);
  };

  return (
    <View style={homeScreenStyles.parentStyle}>
      <Heading1Text style={homeScreenStyles.headingTextStyle}>
        Welcome to Dice Game
      </Heading1Text>
      <InputField
        placeholder="Players"
        label="Enter Number of Players"
        style={homeScreenStyles.inputFieldStyle}
        onChangeText={onPlayerCountChange}
      />
      <InputField
        placeholder="Winning Points"
        label="Enter the Winning points"
        style={homeScreenStyles.inputFieldStyle}
        onChangeText={onWinningPointsChange}
      />
      <ButtonComponent
        title="Start the Game"
        onPress={() => startTheGame(props)}
      />
    </View>
  );
};

export default HomeScreen;
