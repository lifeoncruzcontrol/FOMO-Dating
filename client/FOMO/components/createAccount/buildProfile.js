import React, { useState } from 'react';
import { Text, TextInput, Pressable, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Header from '../header';
import InputPrompt from '../customTools/inputPrompt';
import Button from '../customTools/button';

const BuildProfile = ({ navigation }) => {
  const [name, setName] = useState(null);
  const [home, setHome] = useState(null);
  const [about, setAbout] = useState(null);

  const inputStyle = {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10
  };
  const inputLabelStyle = {
    marginLeft: 12,
    marginTop: 12
  };
  return(
    <SafeAreaView>
      <Header />
      <InputPrompt promptText='Please fill out your profile information'/>

      <Text style={inputLabelStyle}>Name</Text>
      <TextInput
        style={inputStyle}
        placeholder='Your name'
        keyboardType='default'
        onChangeText={setName}
      />

      <Text style={inputLabelStyle}>Home (Where you hail from)</Text>
      <TextInput
        style={inputStyle}
        placeholder='Your home'
        keyboardType='default'
        onChangeText={setHome}
      />

      <Text style={inputLabelStyle}>About (This is what users will initially see. Make sure you stand out!)</Text>
      <TextInput
        style={inputStyle}
        placeholder='About you'
        keyboardType='default'
        onChangeText={setAbout}
      />

      <Button />
    </SafeAreaView>
  )
};

export default BuildProfile;