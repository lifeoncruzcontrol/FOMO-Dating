import React from 'react';
import { View, Text, Dimensions } from 'react-native';

const Header = ({
  viewStyle = {
    marginTop: Dimensions.get('window').height / 4
  },
  titleStyle={
    fontSize: 20,
    alignSelf: 'center',
    marginBottom: 200
  }
}) => {
  return(
    <View 
      style={viewStyle}
    >
      <Text
        style={titleStyle}
      >
        FOMO Dating
      </Text> 
    </View>
  );
};

export default Header;