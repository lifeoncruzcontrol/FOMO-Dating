import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './components/home';
import EnterVerificationCode from './components/createAccount/enterVerificationCode';
import GetNewAccountInfo from './components/createAccount/getAccountInfo';
import BuildProfile from './components/createAccount/buildProfile';

const Stack = createNativeStackNavigator();

const App = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Get New Account Info" component={GetNewAccountInfo} />
        <Stack.Screen name="Enter Verification Code" component={EnterVerificationCode} />
        <Stack.Screen name="Build Profile" component={BuildProfile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
