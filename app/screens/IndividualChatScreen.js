// import React from 'react';
// import {Text, View} from 'react-native';

// function IndividualChatScreen(props) {
//   return (
//     <View>
//       <Text>Individual Chat Screen</Text>
//     </View>
//   );
// }

// export default IndividualChatScreen;

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
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  chatItem: {
    marginBottom: 10,
  },
  chatMessage: {
    fontSize: 14,
  },
});

export default IndividualChatScreen;
