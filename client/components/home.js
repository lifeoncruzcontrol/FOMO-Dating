import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import Header from './header';

const Home = ({ navigation }) => {
  return(
    <>
      <Header />
      <View>
        <Pressable
          style={{...styles.button, ...styles.createAcct}}
          onPress={() => navigation.navigate('CreateAccount')}
        >
          <Text
            style={styles.text}
          >
            Create Account
          </Text>
        </Pressable>
        <Pressable
          style={{...styles.button, ...styles.signIn}}
        >
          <Text
            style={styles.text}
          >
            Sign-in
          </Text>
        </Pressable>
        <Text>
          By creating an account or signing in, you agree to our Terms. Learn how we process your data in our Privacy Policy and Cookies Policy.
        </Text>
      </View>
    </>
   );
};

const styles = StyleSheet.create({
  title: {
   fontSize: 20,
   alignSelf: 'center',
   marginBottom: 200
  },
  button: {
    backgroundColor: '#add8e6',
    width: "50%",
    alignItems: 'center',
    alignSelf: 'center',
    paddingVertical: 20,
    borderRadius: 10
  },
  createAcct: {
    marginBottom: 20
  },
  signIn: {
   marginBottom: 50
 },
  text: {
    color: 'white'
  }
});

export default Home;