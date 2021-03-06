import React from 'react';
import {Input} from 'react-native-elements';
import componentStyles from './componentStyles';

const InputField = (props) => {
  return (
    <Input
      placeholder={props.placeholder}
      label={props.label}
      style={[props.style, componentStyles.inputStyle]}
      inputContainerStyle={componentStyles.inputContainerStyle}
      onChangeText={props.onChangeText}
      keyboardType={props.keyboardType}
      value={props.value}
    />
  );
};

export default InputField;
