/**
 * This is the input box
 * Takes text input
 */

import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

function InputBox({value, onChangeText}) {
  return (
    <TextInput
      placeholder="Chat Here"
      style={styles.inputBox}
      value={value}
      onChangeText={onChangeText}
    />
  );
}

const styles = StyleSheet.create({
  inputBox: {
    height: 40,
    width: '80%',
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 25,
    paddingHorizontal: 10,
    backgroundColor: '#ffffff',
  },
});

export default InputBox;
