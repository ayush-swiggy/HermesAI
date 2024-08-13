/**
 * This is the input area
 * This will be at the bottom of the chat area
 * It will have following componenets:
    1. Input Box to take text input
    2. Button to submit the query
 */

import React from 'react';
import {View, StyleSheet} from 'react-native';
import InputBox from './InputBox';
import ButtonComponent from './ButtonComponent';

function InputArea({inputValue, onChangeText, onPress, isLoading}) {
  return (
    <View style={styles.inputContainer}>
      <InputBox value={inputValue} onChangeText={onChangeText} />
      <ButtonComponent onPress={onPress} isLoading={isLoading} />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row', // aligning child items row wise
    padding: 10,
    borderColor: 'grey',
    justifyContent: 'space-around',
    backgroundColor: '#ffce99',
  },
});

export default InputArea;
