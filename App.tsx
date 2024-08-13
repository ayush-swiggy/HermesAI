/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {createDrawerNavigator} from '@react-navigation/drawer';
import './gesture-handler';

import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import ChatScreen from './app/screens/ChatScreen';
import IndividualChatScreen from './app/screens/IndividualChatScreen';
import CustomDrawerContent from './app/screens/CustomDrawerContent';

const DRAWER = createDrawerNavigator();

function App(): React.JSX.Element {
  const [chat, setChat] = useState([]);
  const [allChats, setAllChats] = useState([]);

  return (
    <NavigationContainer>
      <DRAWER.Navigator
        // eslint-disable-next-line react/no-unstable-nested-components
        drawerContent={props => (
          <CustomDrawerContent {...props} chat={chat} allChats={allChats} />
        )}
        screenOptions={{headerShown: true}}>
        <DRAWER.Screen
          name="Main Chat"
          children={props => (
            <ChatScreen
              {...props}
              chat={chat}
              setChat={setChat}
              setAllChats={setAllChats}
              allChats={allChats}
            />
          )}
        />
        <DRAWER.Screen
          name="Individual Chat"
          component={IndividualChatScreen}
        />
      </DRAWER.Navigator>
    </NavigationContainer>
  );
}

export default App;
