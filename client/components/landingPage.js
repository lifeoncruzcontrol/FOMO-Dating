import React from 'react';
import { View, Text, Pressable, StyleSheet, Dimensions } from 'react-native';

const LandingPage = ({ navigation }) => {
  return(
    <View 
      style={{
        marginTop: Dimensions.get('window').height / 4,
      }}
    >
      <View>
        <Text
          style={styles.title}
        >
          FOMO Dating
        </Text>
      </View>
      <View>
        <Pressable
          style={styles.createAcct}
          onPress={() => navigation.navigate('CreateAccount')}
        >
          <Text
            style={styles.text}
          >
            Create Account
          </Text>
        </Pressable>
        <Pressable
          style={styles.signIn}
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
     </View>
   );
};

const styles = StyleSheet.create({
  title: {
   fontSize: 20,
   alignSelf: 'center',
   marginBottom: 200
  },
  createAcct: {
    backgroundColor: '#add8e6',
    width: "50%",
    alignItems: 'center',
    alignSelf: 'center',
    paddingVertical: 20,
    borderRadius: 10,
    marginBottom: 20
  },
  signIn: {
   backgroundColor: '#add8e6',
   width: "50%",
   alignItems: 'center',
   alignSelf: 'center',
   paddingVertical: 20,
   borderRadius: 10,
   marginBottom: 50
 },
  text: {
    color: 'white'
  }
});

export default LandingPage;