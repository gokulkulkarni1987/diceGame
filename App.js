/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import HomeScreen from './src/screens/home/HomeScreen';
import GameScreen from './src/screens/game/GameScreen';
import initRedux from './src/app/redux/initRedux';
import {PersistGate} from 'redux-persist/integration/react';

const Stack = createStackNavigator();

const App = () => {
  const storeDetails = initRedux();
  return (
    <SafeAreaProvider style={styles.mainParentStyle}>
      <Provider store={storeDetails.store}>
        <PersistGate loading={null} persistor={storeDetails.persistor}>
          <View style={styles.mainParentStyle}>
            <NavigationContainer>
              <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Game" component={GameScreen} />
              </Stack.Navigator>
            </NavigationContainer>
          </View>
        </PersistGate>
      </Provider>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  mainParentStyle: {flex: 1, justifyContent: 'center', alignItems: 'stretch'},
});

export default App;
