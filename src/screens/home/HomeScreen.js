import React from 'react';
import {View, Text } from 'react-native';
import { Input } from 'react-native-elements';
import ButtonComponent from '../../components/ButtonComponent';
import Heading1Text from '../../components/Heading1Text';
import InputField from '../../components/InputField';
import styles from './styles';

const startTheGame = () => {
  alert('game started')
}

export default HomeScreen = (props) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'stretch'}}>
      <Heading1Text>
        Welcome to Dice Game
      </Heading1Text>
      <InputField placeholder='Players' label='Enter Number of Players' style={styles.inputFieldStyle}/>
      <InputField placeholder='Winning Points' label='Enter the Winning points' style={styles.inputFieldStyle}/>
      <ButtonComponent title='Start the Game' onPress={startTheGame} />
    </View>
  )
}