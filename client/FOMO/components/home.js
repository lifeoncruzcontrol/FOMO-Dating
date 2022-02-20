import React from 'react';
import { View, Dimensions, Text, Pressable, StyleSheet } from 'react-native';

import Header from './header';
import FomoButton from './customTools/fomoButton';

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
        <FomoButton navigation={navigation} route='Get New Account Info' text='Create Account'/>

        <FomoButton text='Sign-in'/>
        <Text>
          By creating an account or signing in, you agree to our Terms. Learn how we process your data in our Privacy Policy and Cookies Policy.
        </Text>
      </View>
    </>
   );
};

export default Home;