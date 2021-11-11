
import * as React from 'react';

import NewApp from './NewApp'

import { StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import  LoginStack  from './LoginStack';



const Stack = createNativeStackNavigator();

export default function Madre() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Homep">

      <Stack.Screen options={{ headerShown: false }} name="Loginp" component={ LoginStack } />
        <Stack.Screen options={{ headerShown: false }} name="Homep" component={ NewApp } />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});



