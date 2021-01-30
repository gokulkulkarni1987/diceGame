import React from 'react';
import {Input} from 'react-native-elements';
import componentStyles from './componentStyles';

export default InputField = (props) => {
  return (
    <Input
      placeholder={props.placeholder}
      label={props.label}
      style={[props.style, componentStyles.inputStyle]}
      inputContainerStyle={componentStyles.inputContainerStyle}
      onChangeText={props.onChangeText}
    />
  );
};
