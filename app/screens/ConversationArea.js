/**
 * This is the conversation area
 * This component will have the conversations displayed between the user and the AI
 */

import React from 'react';
import {FlatList, StyleSheet, ImageBackground} from 'react-native';
import ChatItem from './ChatItem';

function ConversationArea({chats}) {
  return (
    <ImageBackground
      style={styles.chatContainer}
      source={require('../assets/hermes.jpg')}>
      <FlatList
        data={chats}
        renderItem={({item}) => <ChatItem item={item} />}
      />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  chatContainer: {
    flex: 1,
  },
});

export default ConversationArea;
