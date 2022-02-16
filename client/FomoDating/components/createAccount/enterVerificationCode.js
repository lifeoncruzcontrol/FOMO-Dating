import React, { useState } from 'react';
import { Text, Dimensions, TextInput, Pressable, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Header from '../header';
import Button from '../customTools/button';
import InputPrompt from '../customTools/inputPrompt';

const EnterVerificationCode = ({ navigation }) => {
  const [verificationCode, setVerificationCode] = useState(null);
  const inputStyle = {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10
  };
  return(
    <SafeAreaView>
      <Header />
      <InputPrompt marginBottom={20} promptText="A code has been sent to the email you provided. Please enter that code below:"/>
      <TextInput
        style={inputStyle}
        placeholder='Verification Code'
        keyboardType='default'
        onChangeText={setVerificationCode}
      />
    <Button navigation={navigation} route='Username/Password' />
    </SafeAreaView>
  );
};

export default EnterVerificationCode;