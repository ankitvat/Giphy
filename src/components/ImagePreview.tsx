import {View, Image, StyleSheet, Dimensions} from 'react-native';
import React from 'react';

var dimWidth = Dimensions.get('window').width * 0.9;
var dimHeight = Dimensions.get('window').height * 0.4;
const ImagePreview = ({data}: {data: any}) => {
  return (
    <View style={styles.gifContainer}>
      <Image
        style={styles.gif}
        source={{
          uri: data.images.fixed_height.url,
        }}
      />
    </View>
  );
};

export default ImagePreview;

const styles = StyleSheet.create({
  gifContainer: {
    marginBottom: 5,
    borderRadius: 10,
    margin: 5,
    backgroundColor: '#d9d9d9',
  },

  gif: {
    height: dimHeight / 2.1,
    width: dimWidth / 2.1,
    borderRadius: 10,
  },
});
