import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';

const FomoButton = ({ 
  navigation = null, 
  route = null, 
  text="Submit",
  customStyling = null
}) => {
  return(
    <Pressable
      style={customStyling !== null ? customStyling : styles.button}
      onPress={() => {
        if(navigation !== null){
          navigation.navigate(route);
        }
      }}
    >
      <Text
        style={styles.text}
      >
        {text}
      </Text>
    </Pressable>
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
    marginBottom: 10,
    marginTop: 10
  },
  text: {
    color: 'white'
  }
});

export default FomoButton;