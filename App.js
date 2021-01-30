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

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView />
      <View style={styles.mainParentStyle}>
        <Text>Hello!!!</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  mainParentStyle: { flex: 1, justifyContent: 'center', alignItems: 'center' }
});

export default App;
