import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
  SafeAreaView,
} from 'react-native';

const TopBarMenu = () => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.profileButton} />
      <Image
        source={require('../assets/images/x-logo-twitter.png')}
        style={styles.logoImg}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 100,
    borderColor: 'grey',
    borderBottomWidth: 1,
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 30,
  },
  profileButton: {
    width: 50,
    height: 50,
    backgroundColor: 'grey',
    borderRadius: 30,
  },
  logoImg: {
    width: 50,
    height: 50,
    marginLeft: 110,
  },
});

export default TopBarMenu;
