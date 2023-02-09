/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Search from '../screens/Search';
import Settings from '../screens/Settings';
import {THEME_TYPE} from '../utils/theme';
import {darkThemeColor, lightThemeColor} from '../utils/colors';
import {StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/Foundation';
import {scale} from '../utils/fonts';
import {Platform} from 'react-native';

interface iThemeContext {
  theme: String;
  setTheme: Function;
}
type BottomTabParamList = {
  Home: undefined;
  Search: undefined;
  Settings: undefined;
};

const Tab = createBottomTabNavigator<BottomTabParamList>();
let defaultThemeValue: iThemeContext = {
  theme: THEME_TYPE.LIGHT,
  setTheme: () => {},
};

const icons = {
  Home: 'home',
  Search: 'ios-search-outline',
  Settings: 'cog',
};
export const ThemeContext = React.createContext(defaultThemeValue);
const RootNavigator: React.FC<any> = () => {
  const [theme, setTheme] = React.useState(THEME_TYPE.LIGHT);
  const themeData = {theme, setTheme};
  console.log(theme);

  return (
    <ThemeContext.Provider value={themeData}>
      <Tab.Navigator
        screenOptions={({route}: {route: any}) => ({
          headerShown: false,
          tabBarHideOnKeyboard: true,
          tabBarStyle: {
            position: 'absolute',
            bottom: 25,
            left: 15,
            right: 15,
            borderRadius: 15,
            height: 80,
            ...styles.shadow,
          },
          tabBarActiveTintColor: lightThemeColor.colors.text,
          tabBarLabelStyle: {
            fontFamily: 'Gordita-Regular',
            fontSize: 14,
            top: Platform.OS === 'ios' ? 15 : -12,
          },
          tabBarIcon: ({color}) => {
            const iconName = icons[route.name];
            return iconName === 'home' ? (
              <Icon2
                name={iconName}
                color={color}
                size={26}
                style={{top: Platform.OS === 'ios' ? 12 : 0}}
              />
            ) : (
              <Icon
                name={iconName}
                color={color}
                size={26}
                style={{top: Platform.OS === 'ios' ? 12 : 0}}
              />
            );
          },
        })}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </ThemeContext.Provider>
  );
};

export default RootNavigator;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
});
