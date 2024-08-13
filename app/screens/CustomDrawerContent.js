// import {
//   DrawerContentScrollView,
//   DrawerItemList,
// } from '@react-navigation/drawer';
// import React from 'react';

// function CustomDrawerContent(props) {
//   const singleChat = props.chat;

//   const allChats = props.allChats;

//   //   console.log(singleChat);

//   return (
//     <DrawerContentScrollView {...props}>
//       <DrawerItemList {...props} />
//     </DrawerContentScrollView>
//   );
// }

// export default CustomDrawerContent;

// import React from 'react';
// import {View, Text, StyleSheet, ScrollView} from 'react-native';
// import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';

// function CustomDrawerContent(props) {
//   console.log('Inside the custom thing.');

//   const allChats = props.allChats;
//   const navigation = props.navigation;

//   console.log(allChats);
//   return (
//     <DrawerContentScrollView {...props}>
//       <View style={styles.drawerContent}>
//         <Text style={styles.title}>Saved Chats</Text>
//         <ScrollView>
//           {allChats.length === 0 ? (
//             <Text>No chats saved</Text>
//           ) : (
//             allChats.map(chat => (
//               <View key={chat.chat_id}>
//                 <Text style={styles.chatMessage}>{chat.message}</Text>
//               </View>
//             ))
//           )}
//         </ScrollView>
//         {/* Other drawer items */}
//         <DrawerItem
//           label="Home"
//           onPress={() => navigation.navigate('ChatScreen')}
//         />
//       </View>
//     </DrawerContentScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   drawerContent: {
//     flex: 1,
//     padding: 16,
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   chatGroupTitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginVertical: 5,
//   },
// });

// export default CustomDrawerContent;

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';

function CustomDrawerContent(props) {
  const singleChat = props.chat;

  const allChats = props.allChats;
  const navigation = props.navigation;

  console.log(allChats);

  const handleChatGroupPress = chatGroup => {
    console.log('Checking : ');
    console.log(chatGroup);
    navigation.navigate('Individual Chat', {chatGroup});
    // navigation.navigate('Main Chat', {chatGroup});
  };

  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.drawerContent}>
        <Text style={styles.title}>Saved Chats</Text>
        <ScrollView>
          {allChats.length === 0 ? (
            <Text>No chats saved</Text>
          ) : (
            allChats.map((chatGroup, index) => (
              <View key={index} style={styles.chatGroupItem}>
                <TouchableOpacity
                  onPress={() => handleChatGroupPress(chatGroup)}>
                  <Text style={styles.chatGroupTitle}>{chatGroup.title}</Text>
                </TouchableOpacity>
              </View>
            ))
          )}
        </ScrollView>

        <DrawerItem
          label="Home"
          onPress={() => navigation.navigate('Main Chat')}
        />
      </View>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  chatItem: {
    paddingVertical: 10,
  },
  chatMessage: {
    fontSize: 16,
  },
});

export default CustomDrawerContent;
