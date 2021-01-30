import React from 'react';
import {Button} from 'react-native-elements';

const ButtonComponent = (props) => {
  return (
    <Button
      title={props.title}
      raised
      loading={props.loading}
      onPress={props.onPress}
    />
  );
};

export default ButtonComponent;
