import React, {useMemo} from 'react';
import {Image, View, StyleSheet} from 'react-native';

import ai_image from '../assets/ai_image.png';
import user_image from '../assets/user_image.png';

function ImageComponent({item}) {
  const avatar_location = useMemo(() => {
    if (item.chat_id % 2 !== 0) {
      return user_image;
    } else {
      return ai_image;
    }
  }, [item]);

  return (
    <View style={styles.imageContainer}>
      <Image style={styles.imageComp} source={avatar_location} />
    </View>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    width: 36,
    height: 36,
    marginRight: 10,
    borderRadius: 18,
    // backgroundColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageComp: {
    width: 24,
    height: 24,
    borderRadius: 12,
  },
});

export default ImageComponent;
