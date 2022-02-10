import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './components/home';
import EmailVerification from './components/createAccount/emailVerification';
import GetUsernamePass from './components/createAccount/getUsernamePass';

const Stack = createNativeStackNavigator();

const App = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Email Verification" component={EmailVerification} />
        <Stack.Screen name="Username/Password" component={GetUsernamePass} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
