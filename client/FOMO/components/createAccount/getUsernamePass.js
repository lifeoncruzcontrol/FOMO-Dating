import React, { useState, useEffect } from 'react';
import { Text, Dimensions, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Header from '../header';
import Button from '../customTools/button';
import InputPrompt from '../customTools/inputPrompt';

const GetUsernamePass = ({ navigation }) => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

  const inputStyle = {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10
  };
  return(
    <SafeAreaView>
      <Header />
      <InputPrompt marginBottom={20} promptText='Enter the username and password for logging into your account:'/>
      <Text>
        Username:
      </Text>
      <TextInput
        style={inputStyle}
        placeholder='Your username'
        keyboardType='default'
        onChangeText={setUsername}
      />
      <Text>
        Password:
      </Text>
      <TextInput
        style={inputStyle}
        placeholder='Your password'
        keyboardType='default'
        onChangeText={setPassword}
      />
      <Button navigation={navigation} route='Build Profile' />
    </SafeAreaView>
  );
};

export default GetUsernamePass;