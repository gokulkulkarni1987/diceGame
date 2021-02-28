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
import PlayersModalScreen from './src/screens/players/PlayersModalScreen';
import initRedux from './src/app/redux/initRedux';
import * as ReactRedux from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {Icon} from 'react-native-elements';
import {navigationRef} from './RootNavigation';
import ClassComponent from './src/screens/test/ClassComponent';
import VirtualList from './src/screens/test/VirtualList';

if (process.env.NODE_ENV === 'development') {
  const whyDidYouRender = require('@welldone-software/why-did-you-render');
  whyDidYouRender(React, {
    trackAllPureComponents: true,
    trackExtraHooks: [[ReactRedux, 'useSelector']],
  });
}

const Stack = createStackNavigator();
const RootStack = createStackNavigator();

const mainStackScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Game" component={GameScreen} />
      <Stack.Screen name="ClassComp" component={ClassComponent} />
      <Stack.Screen name="VirtualList" component={VirtualList} />
    </Stack.Navigator>
  );
};

const App = () => {
  const storeDetails = initRedux();
  const deepLinking = {
    prefixes: ['game://'],
    config: {
      Main: {
        screens: {
          Game: {
            path: 'Game/:playerCount/:winningPoint',
            params: {
              playerCount: null,
              winningPoint: null,
            },
          },
        },
      },
      PlayersModal: 'PlayersModal',
    },
  };
  return (
    <SafeAreaProvider style={styles.mainParentStyle}>
      <Provider store={storeDetails.store}>
        {/* <PersistGate loading={null} persistor={storeDetails.persistor}> */}
        <View style={styles.mainParentStyle}>
          <NavigationContainer linking={deepLinking} ref={navigationRef}>
            <RootStack.Navigator mode="modal">
              <RootStack.Screen
                name="Main"
                component={mainStackScreen}
                options={{headerShown: false}}
              />
              <RootStack.Screen
                name="PlayersModal"
                component={PlayersModalScreen}
                options={{
                  title: 'Players',
                  headerLeft: null,
                  headerRight: () => {
                    return (
                      <Icon
                        name="close"
                        type="font-awesome"
                        style={styles.closeModalIconStyle}
                        onPress={() => {
                          if (navigationRef) {
                            navigationRef.current.goBack();
                          }
                        }}
                      />
                    );
                  },
                }}
              />
            </RootStack.Navigator>
          </NavigationContainer>
        </View>
        {/* </PersistGate> */}
      </Provider>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  mainParentStyle: {flex: 1, justifyContent: 'center', alignItems: 'stretch'},
  closeModalIconStyle: {padding: 10},
});

export default App;
