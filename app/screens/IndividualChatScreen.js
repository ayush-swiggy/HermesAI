import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

function IndividualChatScreen({route}) {
  const {chatGroup} = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{chatGroup.title}</Text>
      <ScrollView>
        {chatGroup.chats.map(chat => (
          <View key={chat.chat_id} style={styles.chatItem}>
            <Text style={styles.chatMessage}>{chat.message}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#ffe6cc',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  chatItem: {
    marginBottom: 10,
  },
  chatMessage: {
    fontSize: 18,
  },
});

export default IndividualChatScreen;
