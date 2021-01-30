import React from 'react';
import {Input} from 'react-native-elements';
import styles from './styles';

export default InputField = (props) => {
  return (
    <Input
      placeholder={props.placeholder}
      label={props.label}
      style={[props.style, styles.inputStyle]}
      inputContainerStyle={styles.inputContainerStyle}
    />
  );
};
