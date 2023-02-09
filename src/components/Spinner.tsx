import React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
const Spinner = () => {
  return (
    <View style={{flexDirection: 'row', justifyContent: 'center'}}>
      <Icon name="spinner" size={30} color="#e349dc" />
    </View>
  );
};
export default Spinner;
