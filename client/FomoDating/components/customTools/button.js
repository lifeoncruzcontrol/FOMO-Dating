import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';

const Button = ({ 
  navigation, 
  route, 
  text="Submit" 
}) => {
  return(
    <Pressable
      style={styles.button}
      onPress={() => {
        navigation.navigate(route);
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
    marginBottom: 50
  },
  text: {
    color: 'white'
  }
});

export default Button;