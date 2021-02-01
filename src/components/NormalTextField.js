import React from 'react';
import {Text} from 'react-native-elements';
import componentStyles from './componentStyles';

const NormalTextField = (props) => {
  return (
    <Text style={[props.style, componentStyles.normalTextStyle]}>
      {props.children}
    </Text>
  );
};

export default NormalTextField;
