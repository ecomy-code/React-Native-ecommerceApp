import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {colors} from '../../../config/colors';
import { useNavigation } from '@react-navigation/core'

export const PrimaryButton = (props) => {

  const navigation = useNavigation()
  
  const {label, background, color} = props;
  const background_color = background || colors.primary;
  const label_color = color || colors.white;
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.btn, {backgroundColor: '#5a72a3'}]}
        onPress={()=>navigation.replace("Homep")}
        >
        <Text style={[styles.label, {color: label_color}]}>{label}</Text>
      </TouchableOpacity>
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    marginLeft:71,
    marginRight:71,
  },
  btn: {
    borderRadius: 30,
  },
  label: {
    textAlign: 'center',
    fontSize: 17,
    fontWeight: '400',
    padding: 20,

  },
});
