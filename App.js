import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import TopBarMenu from './components/TopBarMenu';
import Post from './components/Post';

const App = () => {
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

export default App;
