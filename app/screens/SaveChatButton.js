import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Modal,
  TextInput,
  Alert,
} from 'react-native';

function SaveChatButton({onPress, allChats, setAllChats, chats, setChats}) {
  const [modalVisible, setModalVisible] = useState(false);
  const [chatTitle, setChatTitle] = useState('');

  const handleSave = () => {
    if (chats.length === 0) {
      Alert.alert(
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
      Alert.alert('Error', 'Please enter a title for the chat.');
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
              <TouchableOpacity
                onPress={() => setModalVisible(false)}
                style={styles.cancelButton}>
                <Text style={styles.buttonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleSave} style={styles.saveButton}>
                <Text style={styles.buttonText}>Save</Text>
              </TouchableOpacity>
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
    color: 'black',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // semi-transparent background
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: '#ffe6cc',
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
    backgroundColor: 'white',
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  cancelButton: {
    flex: 1,
    backgroundColor: '#ff9933',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginRight: 10,
  },
  saveButton: {
    flex: 1,
    backgroundColor: '#ff9933',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default SaveChatButton;
