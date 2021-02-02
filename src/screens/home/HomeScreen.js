import React, {useState} from 'react';
import {View} from 'react-native';
import {useDispatch} from 'react-redux';
import ButtonComponent from '../../components/ButtonComponent';
import Heading1Text from '../../components/Heading1Text';
import InputField from '../../components/InputField';
import {CLEAR_GAME} from '../game/gameActions';
import {LET_THE_GAME_BEGIN} from './HomeActions';
import homeScreenStyles from './homeScreenStyles';

const HomeScreen = (props) => {
  const [playerCount, setPlayerCount] = useState(0);
  const [winningPoint, setWinningPoint] = useState(0);
  const dispatch = useDispatch();

  const startTheGame = (propsRef) => {
    if (!playerCount || !winningPoint) {
      alert('Please enter all details');
      return;
    }
    dispatch({type: CLEAR_GAME});
    propsRef.navigation.navigate('Game', {
      playerCount,
      winningPoint,
    });
    dispatch({
      type: LET_THE_GAME_BEGIN,
      payload: {
        playerCount,
        winningPoint,
      },
    });
  };

  const onPlayerCountChange = (playerCountVal) => {
    setPlayerCount(playerCountVal.replace(/[^0-9]/g, ''));
  };

  const onWinningPointsChange = (winningPointVal) => {
    console.log('this. sindei', winningPointVal.replace(/[^0-9]/g, ''));
    setWinningPoint(winningPointVal.replace(/[^0-9]/g, ''));
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
        keyboardType={'number-pad'}
        value={playerCount}
      />
      <InputField
        placeholder="Winning Points"
        label="Enter the Winning points"
        style={homeScreenStyles.inputFieldStyle}
        onChangeText={onWinningPointsChange}
        keyboardType={'number-pad'}
        value={winningPoint}
      />
      <ButtonComponent
        title="Start the Game"
        onPress={() => startTheGame(props)}
      />
    </View>
  );
};

export default HomeScreen;
