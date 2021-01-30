import React from 'react';
import { Text } from 'react-native-elements';
import componentStyles from './componentStyles';

export default Heading1Text = (props) => {
  return <Text style={[props.style, componentStyles.heading1TextStyle]}>{props.children}</Text>
}