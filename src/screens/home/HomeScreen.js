import React, { useState } from 'react';
import {View, Text } from 'react-native';
import { Input } from 'react-native-elements';
import ButtonComponent from '../../components/ButtonComponent';
import Heading1Text from '../../components/Heading1Text';
import InputField from '../../components/InputField';
import styles from './styles';

export default HomeScreen = (props) => {

  const [playerCount, setPlayerCount] = useState(0);
  const [winningPoint, setWinningPoint] = useState(0);

  const startTheGame = (props) => {
    props.navigation.navigate('Game', {
      playerCount,
      winningPoint
    });
  }
  
  const onPlayerCountChange = (playerCount) => {
    setPlayerCount(playerCount);
  }
  
  const onWinningPointsChange = (playerCount) => {
    setWinningPoint(playerCount);
  }

  return (
    <View style={styles.parentStyle}>
      <Heading1Text>
        Welcome to Dice Game
      </Heading1Text>
      <InputField placeholder='Players' label='Enter Number of Players' style={styles.inputFieldStyle} onChangeText={onPlayerCountChange}/>
      <InputField placeholder='Winning Points' label='Enter the Winning points' style={styles.inputFieldStyle} onChangeText={onWinningPointsChange}/>
      <ButtonComponent title='Start the Game' onPress={() => startTheGame(props)} />
    </View>
  )
}