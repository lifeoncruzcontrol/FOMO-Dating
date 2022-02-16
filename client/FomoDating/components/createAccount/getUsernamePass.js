import React, { useState } from 'react';
import { Text, Dimensions, TextInput, Pressable, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Header from '../header';

const GetUsernamePass = ({ navigation }) => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

  const viewStyle = {
    marginTop: 50
  };
  const titleStyle = {
    fontSize: 30,
    marginBottom: 100
  };
  const inputStyle = {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10
  };
  return(
    <SafeAreaView>
      <Header viewStyle={viewStyle} titleStyle={titleStyle}/>
      <Text style={{alignSelf: 'center', fontSize: 20, marginBottom: 20}}>
        Enter the username and password for logging into your account:
      </Text>
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
      <Pressable
        style={styles.button}
        onPress={() => {
          navigation.navigate('Build Profile')
        }}
      >
        <Text
          style={styles.text}
        >
          Submit
        </Text>
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  button: {
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

export default GetUsernamePass;