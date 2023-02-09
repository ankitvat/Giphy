/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, Platform} from 'react-native';
import {theme} from '../utils/theme';

const CustomText = (props: any) => {
  return (
    <Text
      style={[
        {
          lineHeight: props.lineHeight,
          letterSpacing: -0.5,
          color: props.textColor
            ? props.textColor
            : props.primary
            ? theme.colors.primary
            : props.secondary
            ? theme.colors.secondary
            : props.error
            ? theme.colors.red
            : props.white
            ? theme.colors.white
            : props.gray
            ? theme.colors.darkGray
            : theme.colors.black,

          fontSize: theme.fontSizes[props.variant],
          fontFamily: props.bold
            ? 'Gordita-Black'
            : props.medium
            ? 'Gordita-Medium'
            : theme.fontFamilies[props.variant || 'subtext'],
          textDecorationLine: props.underline ? 'underline' : 'none',
          marginVertical: props.noDefaultMargin ? 0 : '2%',
          textAlign: props.center ? 'center' : 'left',
        },
        props.style || {},
      ]}
      allowFontScaling={false}
      numberOfLines={props.numberOfLines}
      onPress={props.onPress}>
      {props.text}
      {props.children}
    </Text>
  );
};

export {CustomText};
