import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

function ClearChatButton({onPress}) {
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
      <Text style={styles.textStyle}>Clear Chat</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: '21%',
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
});

export default ClearChatButton;
