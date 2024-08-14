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
          <CustomDrawerContent {...props} allChats={allChats} />
        )}
        screenOptions={{
          headerShown: true,
          drawerStyle: {backgroundColor: '#ff9933'},
        }}>
        <DRAWER.Screen
          name="Home"
          children={props => (
            <ChatScreen
              {...props}
              chat={chat}
              setChat={setChat}
              setAllChats={setAllChats}
              allChats={allChats}
            />
          )}
          options={{
            headerStyle: {
              backgroundColor: '#ff9933',
            },
          }}
        />
        <DRAWER.Screen
          name="Chat"
          component={IndividualChatScreen}
          options={{
            headerStyle: {
              backgroundColor: '#ff9933',
            },
          }}
        />
      </DRAWER.Navigator>
    </NavigationContainer>
  );
}

export default App;
