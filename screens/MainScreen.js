import React from 'react';
import Post from '../components/Post';
import TopBarMenu from '../components/TopBarMenu';
import {View, StyleSheet} from 'react-native';

const MainScreen = props => {
  return (
    <View style={styles.container}>
      <TopBarMenu />
      <Post />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});
export default MainScreen;
