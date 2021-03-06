import React from 'react';
import {View} from 'react-native';
import LottieView from 'lottie-react-native';
import playerModalStyles from './playerModalStyles';
import Heading4Text from '../../components/Heading4Text';
import { ScrollView } from 'react-native-gesture-handler';

export default function PlayersModalScreen({route, navigation}) {
  const {params} = route;
  const {player} = params;
  return (
    <View style={playerModalStyles.parentStyle}>
      {player.index && player.index === 1 ? (
        <LottieView
          source={require('../../res/lottie/6691-winner.json')}
          autoPlay
          loop
          style={playerModalStyles.winnerLottieStyle}
        />
      ) : null}
      <Heading4Text style={playerModalStyles.textViewStyles}>
        Name: {player.name}
      </Heading4Text>
      <Heading4Text style={playerModalStyles.textViewStyles}>
        Total Points: {player.pointsWon}
      </Heading4Text>
      {player.pointsList && (
        <View style={playerModalStyles.pointsListStyle}>
          <Heading4Text>Pts per itr: </Heading4Text>
          <ScrollView horizontal={true}>
            {player.pointsList &&
              player.pointsList.map((point, index) => (
                <Heading4Text key={index}>{point} </Heading4Text>
              ))}
          </ScrollView>
        </View>
      )}
    </View>
  );
}
