import React from 'react';
import { View, Text, Dimensions } from 'react-native';

const Header = ({
  viewStyle = {
    marginTop: 10
  },
  titleStyle={
    fontSize: 30,
    marginBottom: 100
  }
}) => {
  return(
    <View 
      style={viewStyle}
    >
      <Text
        style={titleStyle}
      >
        FOMO
      </Text> 
    </View>
  );
};

export default Header;