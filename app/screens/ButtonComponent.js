/**
 * This is the button component
 */

import React, {useCallback} from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

function ButtonComponent({onPress, isLoading}) {
  const buttonColorStyle = useCallback(() => {
    return {
      backgroundColor: isLoading ? '#ffe6cc' : '#ff9933',
    };
  }, [isLoading]);

  return (
    <TouchableOpacity
      style={[styles.buttonContainer, buttonColorStyle()]}
      onPress={onPress}>
      <Text style={styles.buttonText}>Send</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: '18%',
    height: 40,
    justifyContent: 'center', // button text is the child
    alignItems: 'center', // button text is the child
    borderRadius: 30,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: '500',
  },
});

export default ButtonComponent;
