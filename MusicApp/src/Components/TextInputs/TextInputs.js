import React from 'react';
import {TextInput} from 'react-native';
import styles from './TextInputs.style';

const TextInputs = props => {
  return (
    <TextInput
      style={styles.formUnit}
      label={props.labelName}
      onFocus={props.focusTask}
      placeholder={props.holder}
      onChangeText={props.task}
      secureTextEntry={props.security}
      // placeholderTextColor={theme === 'Light' ? '#212121' : '#fff'}
    />
  );
};

export default TextInputs;
