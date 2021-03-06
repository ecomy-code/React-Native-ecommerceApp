import React from 'react';
import {View, Text, StyleSheet, TextInput, Image} from 'react-native';
import {colors} from '../../../config/colors';

export const PrimaryInput = (props) => {
  const {placeHolder, isValid, value} = props;
  return (
    <View style={styles.container}>
      <TextInput value={value} style={styles.input} placeholder={placeHolder} />
      <View style={styles.validityShowWrapper}>
        {isValid ? (
          <Image source={require('../../../assets/images/checked.png')} />
        ) : null}
      </View>
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: '#f5f6f7',
    borderWidth: .4,
    borderRadius: 25,
    marginRight:12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  input: {
    padding: 20,
    fontSize: 17,
  },
  validityShowWrapper: {
    marginRight: 44,
  },
});
