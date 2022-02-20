import React, { useState, useEffect } from 'react';
import { Text, Dimensions, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Header from '../header';
import Button from '../customTools/button';
import InputPrompt from '../customTools/inputPrompt';

const GetNewAccountInfo = ({ navigation }) => {
  const [email, setEmail] = useState(null);
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [notMatching, setNotMatching] = useState(true);

  const inputStyle = {
    height: 40,
    margin: 20,
    borderWidth: 1,
    padding: 10
  };

  useEffect(() => {
    setNotMatching(password !== confirmPassword);
  }, [confirmPassword]);

  return(
    <SafeAreaView>
      <Header />
      <InputPrompt marginBottom={20} promptText='Enter the email, username, and password to be associated with your account:'/>
      <Text>
        Email:
      </Text>
      <TextInput
        style={inputStyle}
        placeholder='Your email'
        keyboardType='email-address'
        onChangeText={setEmail}
      />
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
      <Text style={{color: "grey", marginBottom: 20}}>Your password should be at least 8 characters long and should contain at least 1 number and 1 symbol</Text>
      <Text>
        Confirm Password:
      </Text>
      <TextInput
        style={inputStyle}
        placeholder='Your password'
        keyboardType='default'
        onChangeText={setConfirmPassword}
      />
      {notMatching && <Text>Your passwords do not match!</Text>}
      <Button navigation={navigation} route='Enter Verification Code' />
    </SafeAreaView>
  );
};

export default GetNewAccountInfo;