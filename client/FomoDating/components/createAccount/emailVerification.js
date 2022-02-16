import React, { useState } from 'react';
import { Text, Dimensions, TextInput, Pressable, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Header from '../header';
import Button from '../customTools/button';
import InputPrompt from '../customTools/inputPrompt';

const EmailVerification = ({ navigation }) => {
  const [email, setEmail] = useState(null);
  const inputStyle = {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10
  };
  return(
    <>
      <SafeAreaView>
        <Header />
        <InputPrompt promptText='Please enter your email for verification purposes:'/>
        <TextInput
          style={inputStyle}
          placeholder='email@domain.com'
          keyboardType='email-address'
          onChangeText={setEmail}
        />
      <Button navigation={navigation} route="Enter Verification Code" />
      </SafeAreaView>
    </>
  );
};

export default EmailVerification;