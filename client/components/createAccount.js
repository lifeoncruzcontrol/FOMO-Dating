import React, { useState } from 'react';
import { Text, Dimensions, SafeAreaView, TextInput, Pressable, StyleSheet } from 'react-native';

import Header from './header';

const CreateAccount = () => {
  const [email, setEmail] = useState(null);
  const viewStyle = {
    marginTop: 0
  };
  const titleStyle = {
    fontSize: 20,
    marginBottom: 100
  };
  const inputStyle = {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10
  };
  return(
    <>
      <SafeAreaView>
        <Header viewStyle={viewStyle} titleStyle={titleStyle}/>
        <Text style={{alignSelf: 'center', fontSize: 30, marginBottom: 20}}>Please enter your email for verification purposes:</Text>
        <TextInput
          style={inputStyle}
          placeholder='email@domain.com'
          keyboardType='email-address'
          onChangeText={setEmail}
        />
        <Pressable
          style={styles.button}
          onPress={() => console.log(email)}
        >
          <Text
            style={styles.text}
          >
            Submit
          </Text>
        </Pressable>
      </SafeAreaView>
    </>
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

export default CreateAccount;