import {ColorValue} from 'react-native';
import palette from './palette';

export interface iColorTint {
  primary: ColorValue;
  a: ColorValue;
  b: ColorValue;
  c: ColorValue;
  d: ColorValue;
  e: ColorValue;
}

export interface iColor {
  text: ColorValue;
  background: ColorValue;
  primary: ColorValue;
  card: ColorValue;
  border: ColorValue;
  notification: ColorValue;
  white?: ColorValue;
  transparent?: ColorValue;
  blue?: iColorTint;
  green?: iColorTint;
  pink?: iColorTint;
  purple?: iColorTint;
  yellow?: iColorTint;
  orange?: iColorTint;
  red?: iColorTint;
  grey?: iColorTint;
}

export interface iTheme {
  dark: Boolean;
  colors: iColor;
}

export const lightThemeColor = {
  dark: false,
  colors: {
    background: palette.white,
    text: palette.black,
    primary: palette.blue,
    card: palette.white,
    border: palette.white,
    notification: palette.white,
    white: palette.white,
    transparent: palette.transparent,
    blue: {
      primary: palette.blue,
      a: palette.blue1,
      b: palette.blue2,
      c: palette.blue3,
      d: palette.blue4,
      e: palette.blue5,
    },
    green: {
      primary: palette.green,
      a: palette.green1,
      b: palette.green2,
      c: palette.green3,
      d: palette.green4,
      e: palette.green5,
    },
    pink: {
      primary: palette.pink,
      a: palette.pink1,
      b: palette.pink2,
      c: palette.pink3,
      d: palette.pink4,
      e: palette.pink5,
    },
    purple: {
      primary: palette.purple,
      a: palette.purple1,
      b: palette.purple2,
      c: palette.purple3,
      d: palette.purple4,
      e: palette.purple5,
    },
    yellow: {
      primary: palette.yellow,
      a: palette.yellow1,
      b: palette.yellow2,
      c: palette.yellow3,
      d: palette.yellow4,
      e: palette.yellow5,
    },
    orange: {
      primary: palette.orange,
      a: palette.orange1,
      b: palette.orange2,
      c: palette.orange3,
      d: palette.orange4,
      e: palette.orange5,
    },
    red: {
      primary: palette.red,
      a: palette.red1,
      b: palette.red2,
      c: palette.red3,
      d: palette.red4,
      e: palette.red5,
    },
    grey: {
      a: palette.lightestGrey,
      b: palette.lightGrey,
      c: palette.darkGrey,
    },
  },
};

export const darkThemeColor = {
  dark: true,
  colors: {
    background: palette.black,
    text: palette.white,
    primary: palette.white,
    card: palette.white,
    border: palette.white,
    notification: palette.white,
    blue: {
      primary: palette.blue,
      a: palette.blue1,
      b: palette.blue2,
      c: palette.blue3,
      d: palette.blue4,
      e: palette.blue5,
    },
    green: {
      primary: palette.green,
      a: palette.green1,
      b: palette.green2,
      c: palette.green3,
      d: palette.green4,
      e: palette.green5,
    },
    pink: {
      primary: palette.pink,
      a: palette.pink1,
      b: palette.pink2,
      c: palette.pink3,
      d: palette.pink4,
      e: palette.pink5,
    },
    purple: {
      primary: palette.purple,
      a: palette.purple1,
      b: palette.purple2,
      c: palette.purple3,
      d: palette.purple4,
      e: palette.purple5,
    },
    yellow: {
      primary: palette.yellow,
      a: palette.yellow1,
      b: palette.yellow2,
      c: palette.yellow3,
      d: palette.yellow4,
      e: palette.yellow5,
    },
    orange: {
      primary: palette.orange,
      a: palette.orange1,
      b: palette.orange2,
      c: palette.orange3,
      d: palette.orange4,
      e: palette.orange5,
    },
    red: {
      primary: palette.red,
      a: palette.red1,
      b: palette.red2,
      c: palette.red3,
      d: palette.red4,
      e: palette.red5,
    },
  },
};
