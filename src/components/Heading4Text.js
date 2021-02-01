import React from 'react';
import {Text} from 'react-native-elements';
import componentStyles from './componentStyles';

const Heading4Text = (props) => {
  return (
    <Text style={[props.style, componentStyles.heading4TextStyle]}>
      {props.children}
    </Text>
  );
};

export default Heading4Text;
