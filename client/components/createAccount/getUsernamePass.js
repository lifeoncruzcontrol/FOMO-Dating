import React from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Header from '../header';

const GetUsernamePass = () => {
  const viewStyle = {
    marginTop: 50
  };
  const titleStyle = {
    fontSize: 30,
    marginBottom: 100
  };
  return(
    <SafeAreaView>
      <Header viewStyle={viewStyle} titleStyle={titleStyle}/>
      <Text style={{alignSelf: 'center', fontSize: 20, marginBottom: 20}}>
        Enter the username and password for logging into your account:
      </Text>
    </SafeAreaView>
  );
};

export default GetUsernamePass;