import React from 'react';
import { View, Dimensions, Text, Pressable, StyleSheet } from 'react-native';

import Header from './header';
import Button from './customTools/button';

const Home = ({ navigation }) => {
  return(
    <>
      <Header 
        viewStyle={{
          marginTop: Dimensions.get('window').height / 4
        }}
        titleStyle={{
          fontSize: 20,
          alignSelf: 'center',
          marginBottom: 200
        }}
      />
      <View>
        <Button navigation={navigation} route='Email Verification' text='Create Account'/>

        <Button text='Sign-in'/>
        <Text>
          By creating an account or signing in, you agree to our Terms. Learn how we process your data in our Privacy Policy and Cookies Policy.
        </Text>
      </View>
    </>
   );
};

export default Home;