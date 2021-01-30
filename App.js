/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Homescreen from './src/screens/home/HomeScreen';

const App = () => {
  return (
    <SafeAreaProvider style={styles.mainParentStyle}>
      <SafeAreaView />
      <View style={styles.mainParentStyle}>
        <Homescreen />
      </View>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  mainParentStyle: { flex: 1, justifyContent: 'center', alignItems: 'center' }
});

export default App;
