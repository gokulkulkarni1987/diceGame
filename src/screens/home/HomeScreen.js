import React, {useEffect, useState} from 'react';
import {Text, NativeModules} from 'react-native';
import {View} from 'react-native';
import {useDispatch} from 'react-redux';
import ButtonComponent from '../../components/ButtonComponent';
import Heading1Text from '../../components/Heading1Text';
import InputField from '../../components/InputField';
import {CLEAR_GAME} from '../game/gameActions';
import {LET_THE_GAME_BEGIN} from './HomeActions';
import homeScreenStyles from './homeScreenStyles';
const {CalendarModule} = NativeModules;

const HomeScreen = (props) => {
  const [playerCount, setPlayerCount] = useState(0);
  const [winningPoint, setWinningPoint] = useState(0);
  const [nowDate, setNowDate] = useState(undefined);
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

  const navToClassComp = (propsRef) => {
    propsRef.navigation.navigate('ClassComp');
  };

  const navToVirtualList = (propsRef) => {
    propsRef.navigation.navigate('VirtualList');
  };

  const onPlayerCountChange = (playerCountVal) => {
    setPlayerCount(playerCountVal.replace(/[^0-9]/g, ''));
  };

  const onWinningPointsChange = (winningPointVal) => {
    console.log('this. sindei', winningPointVal.replace(/[^0-9]/g, ''));
    setWinningPoint(winningPointVal.replace(/[^0-9]/g, ''));
  };

  useEffect(() => {
    async function getDate() {
      CalendarModule.getTodaysDate((nowDateLocal) => {
        console.log('got date: ', nowDateLocal);
        // console.log('got String: ', CalendarModule.getStringSimple());
        // console.log('got constants: ', CalendarModule.getConstants());
        setNowDate(nowDateLocal);
      });
    }
    getDate();
  }, []);

  console.log('CalendarModule: ', CalendarModule);

  return (
    <View style={homeScreenStyles.parentStyle}>
      <Heading1Text style={homeScreenStyles.headingTextStyle}>
        Welcome to Dice Game
      </Heading1Text>
      <Text>Todays date: {nowDate}</Text>
      <InputField
        placeholder="Players"
        label="Enter Number of Players"
        style={homeScreenStyles.inputFieldStyle}
        onChangeText={onPlayerCountChange}
        keyboardType={'number-pad'}
        value={`${playerCount}`}
      />
      <InputField
        placeholder="Winning Points"
        label="Enter the Winning points"
        style={homeScreenStyles.inputFieldStyle}
        onChangeText={onWinningPointsChange}
        keyboardType={'number-pad'}
        value={`${winningPoint}`}
      />
      <ButtonComponent
        title="Start the Game"
        onPress={() => startTheGame(props)}
      />
      <ButtonComponent
        title="Class Component"
        onPress={() => navToClassComp(props)}
      />
      <ButtonComponent
        title="Virtual List"
        onPress={() => navToVirtualList(props)}
      />
    </View>
  );
};

export default HomeScreen;
