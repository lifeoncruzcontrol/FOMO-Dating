import React, { useState } from 'react';
import { Text, TextInput, Pressable, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Header from '../header';
import InputPrompt from '../customTools/inputPrompt';
import FomoButton from '../customTools/fomoButton';

const BuildProfile = ({ navigation }) => {
  const [name, setName] = useState(null);
  const [home, setHome] = useState(null);
  const [about, setAbout] = useState(null);

  const inputStyle = {
    height: 40,
    margin: 20,
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
      <View style={{
        flexDirection: "row"
      }}>
        <View style={{
          flex: 0.5
        }}>
          <Text style={inputLabelStyle}>Name</Text>
          <TextInput
            style={inputStyle}
            placeholder='Your name'
            keyboardType='default'
            onChangeText={setName}
          />
        </View>
        <View style={{flex: 0.5}}>
          <Text style={inputLabelStyle}>Profile Photo</Text>
          <FomoButton text='Upload'></FomoButton>
        </View>
      </View>

      <Text style={inputLabelStyle}>Home</Text>
      <TextInput
        style={inputStyle}
        placeholder='Your home'
        keyboardType='default'
        onChangeText={setHome}
      />

      <Text style={inputLabelStyle}>About</Text>
      <TextInput
        style={{
          height: 80,
          margin: 20,
          borderWidth: 1,
          padding: 10
        }}
        placeholder='About you'
        keyboardType='default'
        onChangeText={setAbout}
        multiline={true}
      />

      <View style={{
        flexDirection: "row",
        marginBottom: 20
      }}>
        <View style={{flex: 1}}>
          <Text style={inputLabelStyle}>Photo Album</Text>
          <FomoButton text='Upload'></FomoButton>
        </View>
      </View>

      <FomoButton text='Continue'/>
    </SafeAreaView>
  )
};

export default BuildProfile;