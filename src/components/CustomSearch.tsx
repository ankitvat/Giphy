import {View, TextInput, Dimensions, StyleSheet} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/EvilIcons';
import {theme} from '../utils/theme';
import {scale} from '../utils/fonts';

const CustomSearch = ({
  length,
  onClear,
  placeholder,
  value,
  onChangeText,
  autoFocus,
}: {
  length: number;
  onClear: () => void;
  placeholder: string;
  value: string;
  autoFocus: boolean;

  onChangeText: (text: string) => any;
}) => {
  return (
    <View style={styles.searchBox}>
      <Icon
        name="search"
        size={scale(28)}
        color={theme.colors.smoothBlack}
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          marginTop: '-0.5%',
        }}
      />
      <TextInput
        selectionColor={theme.colors.smoothBlack}
        autoCapitalize="none"
        autoFocus={autoFocus || true}
        allowFontScaling={false}
        placeholder={placeholder}
        autoCorrect={false}
        value={value}
        onChangeText={onChangeText}
        style={styles.searchText}
      />
      {length > 0 ? (
        <Icon
          name="close-o"
          size={scale(28)}
          color={theme.colors.smoothBlack}
          style={{marginLeft: '-0.5%'}}
          onPress={onClear}
        />
      ) : null}
    </View>
  );
};

export {CustomSearch};

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  searchBox: {
    backgroundColor: '#f7f7f7',
    width: width / 1.1,
    height: width / 8,
    borderRadius: 10,
    marginVertical: '3%',
    paddingHorizontal: '3%',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#d9d9d9',
    alignItems: 'center',
  },
  searchText: {
    width: width / 1.5,
    height: '100%',
    marginLeft: '3%',
    fontSize: 12,
    fontFamily: 'Gordita-Regular',
  },
});

export {styles};
