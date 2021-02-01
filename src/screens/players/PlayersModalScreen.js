import React from 'react';
import {Text, View} from 'react-native';
import {Button} from 'react-native-elements';

export default function PlayersModalScreen({route, navigation}) {
  const {params} = route;
  const {players} = params;
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 30}}>Player: {players.length}</Text>
      {players.map((player) => {
        return <Text>{player.name}</Text>;
      })}
      <Button onPress={() => navigation.goBack()} title="Dismiss" />
    </View>
  );
}
