import React from 'react';
import { Text, Dimensions } from 'react-native';

import Header from './header';

const CreateAccount = () => {
  const viewStyle = {
    marginTop: Dimensions.get('window').height / 9
  };
  const titleStyle = {
    fontSize: 20,
    marginBottom: 200
  };
  return(
    <>
      <Header viewStyle={viewStyle} titleStyle={titleStyle}/>
      <Text>Please enter your email for verification purposes:</Text>
    </>
  );
};

export default CreateAccount;