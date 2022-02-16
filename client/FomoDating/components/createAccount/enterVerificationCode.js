import React, { useState } from 'react';
import { Text, Dimensions, TextInput, Pressable, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Header from '../header';

const EnterVerificationCode = ({ navigation }) => {
  const [verificationCode, setVerificationCode] = useState(null);
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
        A code has been sent to the email you provided. Please enter that code in the input box below:
      </Text>
      <TextInput
        style={inputStyle}
        placeholder='Verification Code'
        keyboardType='default'
        onChangeText={setVerificationCode}
      />
      <Pressable
        style={styles.button}
        onPress={() => {
          navigation.navigate('Username/Password');
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

export default EnterVerificationCode;