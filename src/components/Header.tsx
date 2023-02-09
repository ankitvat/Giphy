import React, {useState, useEffect} from 'react';
import {StyleSheet, Dimensions, View, Pressable} from 'react-native';
import {CustomText} from './CustomText';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

const {width} = Dimensions.get('window');

const Header = () => {
  const hour = new Date().getHours();
  const navigation = useNavigation();
  const [welcomeText, setWelcomeText] = useState<string>('');
  useEffect(() => {
    const welcomeTypes = ['Good Morning', 'Good Afternoon', 'Good Evening'];
    if (hour < 12) {
      setWelcomeText(welcomeTypes[0]);
    } else if (hour < 18) {
      setWelcomeText(welcomeTypes[1]);
    } else {
      setWelcomeText(welcomeTypes[2]);
    }
  }, [hour]);

  return (
    <View style={styles.container}>
      <CustomText variant="h3" text={welcomeText} />
      <Pressable
        style={styles.search}
        onPress={() => navigation.navigate('Search')}>
        <Icon name="search" size={20} color="#242424" />
      </Pressable>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    height: width / 8,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '100%',
  },
  search: {
    borderRadius: 50,
    height: 40,
    width: 40,
    backgroundColor: '#f1f1f1',
    borderWidth: 1,
    borderColor: '#d9d9d9',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
