import {SafeAreaView, View, StyleSheet} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import List from '../components/List';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerLayout}>
        <Header />
        <List />
      </View>
    </SafeAreaView>
  );
};

export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#f7f7f7',
  },
  innerLayout: {
    paddingHorizontal: '4%',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    paddingTop: '3%',
    flex: 1,
  },
});
