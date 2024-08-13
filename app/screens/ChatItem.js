/**
 * This is the chat individual chat item
 */

import React, {useCallback} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import ImageComponent from './ImageComponent';

function ChatItem({item}) {
  const chatItemStyle = useCallback(() => {
    return {
      backgroundColor: item.chat_id % 2 === 0 ? '#fff2e6' : '#ff8400',
    };
  }, [item]);

  return (
    <View style={[styles.itemContainer, chatItemStyle()]}>
      <ImageComponent item={item} />
      <Text style={styles.textItem}>{item.message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    padding: 10,
    marginVertical: 3,
    marginHorizontal: 10,
    borderRadius: 15,
    flexDirection: 'row',
  },
  textItem: {
    color: 'black',
    paddingRight: '12%',
    fontSize: 18,
  },
});

export default ChatItem;
