import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, Pressable} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faArrowUpFromBracket,
  faComment,
  faHeart,
  faRetweet,
} from '@fortawesome/free-solid-svg-icons';

const Post = () => {
  const [countComment, setCountComment] = useState(0);
  const [countRetweet, setCountRetweet] = useState(0);
  const [countLike, setCountLike] = useState(0);
  return (
    <View style={styles.postContainer}>
      <Image
        source={require('../assets/images/profile-picture.png')}
        style={styles.image}
      />
      <View>
        <View style={styles.profileContainer}>
          <Text style={styles.userName}>UserName</Text>
          <Text style={styles.linkofProfile}>@username</Text>
          <Text
            style={{
              color: 'white',
              fontSize: 12,
              paddingLeft: 5,
              alignSelf: 'center',
            }}>
            .
          </Text>
          <Text style={styles.hours}>12h</Text>
        </View>
        <Text style={styles.text}>This is a post</Text>
        <View style={styles.icons}>
          <Pressable
            onPress={() => {
              setCountComment(countComment + 1);
            }}
            style={styles.button}>
            <FontAwesomeIcon icon={faComment} color="grey" />
            <Text style={styles.number}>{countComment}</Text>
          </Pressable>
          <Pressable
            onPress={() => {
              setCountRetweet(countRetweet + 1);
            }}
            style={styles.button}>
            <FontAwesomeIcon icon={faRetweet} color="grey" />
            <Text style={styles.number}>{countRetweet}</Text>
          </Pressable>
          <Pressable
            onPress={() => {
              setCountLike(countLike + 1);
            }}
            style={styles.button}>
            <FontAwesomeIcon icon={faHeart} color="grey" />
            <Text style={styles.number}>{countLike}</Text>
          </Pressable>
          <Pressable style={styles.button}>
            <FontAwesomeIcon icon={faArrowUpFromBracket} color="grey" />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  postContainer: {
    borderColor: 'grey',
    borderBottomWidth: 1,
    flexDirection: 'row',
    padding: 15,
  },
  profileContainer: {
    flexDirection: 'row',
  },
  userName: {
    color: 'white',
    fontSize: 12,
    paddingLeft: 8,
  },
  linkofProfile: {
    color: 'white',
    fontSize: 12,
    paddingLeft: 5,
  },
  hours: {
    color: 'white',
    paddingLeft: 5,
    fontSize: 12,
  },
  text: {
    fontSize: 15,
    color: 'white',
    paddingLeft: 10,
    paddingTop: 10,
  },
  image: {
    width: 35,
    height: 35,
    borderRadius: 17.5,
  },
  icons: {
    paddingLeft: 10,
    flexDirection: 'row',
    paddingTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    paddingRight: 56,
    flexDirection: 'row',
  },
  number: {
    color: 'grey',
    paddingLeft: 8,
  },
});
export default Post;
