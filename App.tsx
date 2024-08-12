/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {createDrawerNavigator} from '@react-navigation/drawer';
import './gesture-handler';

import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import ChatScreen from './app/screens/ChatScreen';
import IndividualChatScreen from './app/screens/IndividualChatScreen';

const DRAWER = createDrawerNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <DRAWER.Navigator>
        <DRAWER.Screen name="Main Chat" component={ChatScreen} />
        <DRAWER.Screen
          name="Individual Chat"
          component={IndividualChatScreen}
        />
      </DRAWER.Navigator>
    </NavigationContainer>
  );
}

export default App;
