import React from 'react';
import { Text } from 'react-native-elements';
import styles from './styles';

export default Heading1Text = (props) => {
  return <Text style={[props.styles, styles.heading1TextStyle]}>{props.children}</Text>
}