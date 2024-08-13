import React from 'react';

import {View, StyleSheet} from 'react-native';
// import SaveChatButton from './SaveChatButton';
import ClearChatButton from './ClearChatButton';
import SaveChatButton from './SaveChatButton';

// const STACK = createNativeStackNavigator();

function Header({
  onPress,
  onSaveChatPress,
  allChats,
  setAllChats,
  chats,
  setChats,
}) {
  return (
    <View style={styles.topBarContainer}>
      <SaveChatButton
        onPress={onSaveChatPress}
        allChats={allChats}
        setAllChats={setAllChats}
        chats={chats}
        setChats={setChats}
      />
      <ClearChatButton onPress={onPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  topBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderWidth: 1,
    backgroundColor: '#ffce99',
  },
});

export default Header;
