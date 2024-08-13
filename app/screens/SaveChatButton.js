// import React from 'react';
// import {TouchableOpacity, Text, StyleSheet} from 'react-native';

// function SaveChatButton({onPress}) {
//   return (
//     <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
//       <Text style={styles.textStyle}>Save Chat</Text>
//     </TouchableOpacity>
//   );
// }

// const styles = StyleSheet.create({
//   buttonContainer: {
//     width: '25%',
//     height: 27,
//     borderRadius: 15,
//     backgroundColor: '#ff9933',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   textStyle: {
//     fontSize: 15,
//     fontWeight: '500',
//   },
// });

// export default SaveChatButton;

import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Modal,
  TextInput,
  Button,
} from 'react-native';

function SaveChatButton({onPress, allChats, setAllChats, chats, setChats}) {
  const [modalVisible, setModalVisible] = useState(false);
  const [chatTitle, setChatTitle] = useState('');

  const handleSave = () => {
    // Call the onPress function with the title
    if (chats.length === 0) {
      console.warn(
        'No Chat to Save',
        'There are no chats to save. Please add some content first.',
      );
      return;
    }
    if (chatTitle.trim()) {
      onPress(chatTitle);
      const newChatObj = {title: chatTitle, chats: chats};
      setAllChats([...allChats, newChatObj]);
      setChats([]);
      setChatTitle('');
      setModalVisible(false);
    } else {
      // Optionally show an alert if the title is empty
      alert('Please enter a title for the chat.');
    }
  };

  return (
    <View>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>Save Chat</Text>
      </TouchableOpacity>

      <Modal
        transparent={true}
        visible={modalVisible}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Enter Chat Title</Text>
            <TextInput
              style={styles.textInput}
              value={chatTitle}
              onChangeText={setChatTitle}
              placeholder="Chat Title"
            />
            <View style={styles.modalButtons}>
              <Button title="Cancel" onPress={() => setModalVisible(false)} />
              <Button title="Save" onPress={handleSave} />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: '130%',
    height: 27,
    borderRadius: 15,
    backgroundColor: '#ff9933',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: 15,
    fontWeight: '500',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)', // semi-transparent background
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  textInput: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
});

export default SaveChatButton;
