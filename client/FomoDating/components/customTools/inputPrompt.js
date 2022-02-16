import React from 'react';
import { Text } from 'react-native';

const InputPrompt = ({
  fontSize = 20, 
  marginBottom = 25,
  promptText = ""
}) => {
  return(
    <Text style={{alignSelf: 'center', fontSize: fontSize, marginBottom: marginBottom}}>
      {promptText}
    </Text>
  );
};

export default InputPrompt;