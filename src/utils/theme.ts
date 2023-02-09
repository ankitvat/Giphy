import {scale} from './fonts';

export const THEME_TYPE = {
  LIGHT: 'light',
  DARK: 'dark',
};
const theme = {
  roundness: 5,
  colors: {
    primary: '#ff7225', // groyyo-orange
    secondary: '#FFD8BF', // groyyo-orange-dark
    orange: '#e77b35',
    cream: '#F7F4EF',

    white1: '#F6F6F6',
    white2: '#E4E4E4',
    lightGray: '#C4C4C4',
    mediumGray: '#ededed',
    darkGray: '#868686',
    lightBlue: '#B1E0F0',
    lightBlue1: '#CBE5F2',
    red: '#CF4A57',
    medium: '#757575',
    lightRed: '#FFB7B2',
    lightRed1: '#FFD9D9',
    green: '#E2F0CB',
    yellow: '#FFE899',
    purple: '#C7CEEA',
    primary1: '#000000',
    groyoRed: '#FC544C',
    headerBlue: '#141f3b',
    back: '#EBEBEB',
    lightBlack: '#292929',
    smoothBlack: '#2b2b2b',
    transparent: 'transparent',
    warning: '#ebb134',
    //new color
    text: '#24282C',
    blue: '#7582F7',
    white: '#FFF',
    grey: '#656565',
    lightGrey: '#BCBBB8',
    background: '#F7F6F0',
    lightText: '#898884',
    black: '#000',
  },
  fontSizes: {
    h0: scale(30),
    h1: scale(26),
    h2: scale(24),
    h3: scale(20),
    h4: scale(16),
    text: scale(14),
    subtext: scale(12),
    small: scale(10),
    terms: scale(8),
  },
  fontFamilies: {
    h0: 'Gordita-Black',
    h1: 'Gordita-Black',
    h2: 'Gordita-Black',
    h3: 'Gordita-Medium',
    h4: 'Gordita-Medium',
    text: 'Gordita-Regular',
    subtext: 'Gordita-Regular',
    small: 'Gordita-Regular',
    terms: 'Gordita-Regular',
  },
};

export {theme};
