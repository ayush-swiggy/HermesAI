import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {DrawerContentScrollView} from '@react-navigation/drawer';

function CustomDrawerContent(props) {
  const allChats = props.allChats;
  const navigation = props.navigation;

  const handleChatGroupPress = chatGroup => {
    navigation.navigate('Chat', {chatGroup});
    // navigation.navigate('Main Chat', {chatGroup});
  };

  return (
    <View style={styles.drawerContainer}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={styles.drawerContent}>
        <View style={styles.content}>
          <Text style={styles.title}>Saved Chats</Text>
          {allChats.length === 0 ? (
            <Text>No chats saved</Text>
          ) : (
            <ScrollView>
              {allChats.map((chatGroup, index) => (
                <View key={index} style={styles.chatGroupItem}>
                  <TouchableOpacity
                    onPress={() => handleChatGroupPress(chatGroup)}>
                    <Text style={styles.chatGroupTitle}>
                      {index + 1}. {chatGroup.title}
                    </Text>
                  </TouchableOpacity>
                </View>
              ))}
            </ScrollView>
          )}
        </View>
      </DrawerContentScrollView>
      <View style={styles.homeButtonContainer}>
        <TouchableOpacity
          style={styles.homeButton}
          onPress={() => navigation.navigate('Home')}>
          <Text style={styles.homeButtonText}>Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
    backgroundColor: '#ffe6cc',
  },
  drawerContent: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  chatGroupItem: {
    padding: '2%',
    margin: '2%',
    backgroundColor: '#ff9933',
    borderRadius: 10,
    overflow: 'hidden',
  },
  chatGroupTitle: {
    fontSize: 18,
  },
  homeButtonContainer: {
    padding: 16,
    backgroundColor: '#ff9933',
    justifyContent: 'flex-end',
  },
  homeButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    backgroundColor: '#ffe6cc',
    borderRadius: 4,
  },
  homeButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default CustomDrawerContent;
