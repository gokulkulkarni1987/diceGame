/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import HomeScreen from './src/screens/home/HomeScreen';
import GameScreen from './src/screens/game/GameScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <SafeAreaProvider style={styles.mainParentStyle}>
      {/* <StatusBar /> */}
      {/* <SafeAreaView /> */}
      <View style={styles.mainParentStyle}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Home' component={HomeScreen} />
          <Stack.Screen name='Game' component={GameScreen} />
        </Stack.Navigator>
      </NavigationContainer>
      </View>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  mainParentStyle: { flex: 1, justifyContent: 'center', alignItems: 'stretch' }
});

export default App;
