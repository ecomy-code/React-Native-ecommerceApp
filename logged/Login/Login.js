import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, SafeAreaView, TextInput, Image, TouchableOpacityBase, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/core'


import { colors } from '../Login/config/colors';
import { SecondaryButton } from './components/buttons/SecondaryButton';
import { PrimaryInput } from './components/forms/PrimaryInput';
import { PrimaryButton } from './components/buttons/PrimaryButton';




export default function Login({ navigation }) {
  return (



    <ScrollView>

      <View style={styles.container}>

        <Image
          style={styles.vector1}
          source={require('./assets/images/vector1.png')}
        />
        <Image
          style={styles.vector2}
          source={require('./assets/images/vector2.png')}
        />
        <Image
          style={styles.vector3}
          source={require('./assets/images/vector3.png')}
        />
        <Image
          style={styles.vector4}
          source={require('./assets/images/vector4.png')}
        />
        <View>


          <Text style={styles.heading}>Tiendas ecomycr™</Text>
          <Text style={styles.headingDos}  > La cuesta de Corredores, Puntarenas. </Text>

        </View>
        <View style={styles.btnWrapper}>


          <View style={styles.btnItemWrapper}>
            <SecondaryButton
              label={'INICIAR CON FACEBOOK'}
              background={'#445c8f'}
              fontColor={colors.white}
              btnType="FACEBOOK"
            />
          </View>

          <View style={styles.btnItemWrapper}>
            <SecondaryButton
              style={styles.ecomyb2}
              label={'INICIAR CON GOOGLE'}
              background={colors.white}
              btnType="GOOGLE"
              fontColor={colors.heading}
            />
          </View>

        </View>



        <View styles={styles.contentContainer}>





          <View>


            <Text style={styles.or}>O Inicia con tu correo electrónico</Text>

            <View style={styles.inputItem}>
              <PrimaryInput placeHolder={'Correo electrónico o número de teléfono '} />
            </View>

            <View style={styles.inputItem}>
              <PrimaryInput placeHolder={'Contraseña                      '} />
            </View>




            <View style={styles.loginBtnWrapper}>
              <PrimaryButton label={'Iniciar Sesión'} />

            </View>

            <TouchableOpacity>
              <Text style={styles.forgotPassword}>¿Has olvidado la contraseña?</Text>
            </TouchableOpacity>

            <Text style={{ marginTop: 9, fontSize: 15, textAlign: 'center' }}>O</Text>
          </View>




          <View style={{ marginTop: 9 }}>
            <TouchableOpacity>
              <Text style={styles.footerText2}>¿Crear cuenta nueva?</Text>
            </TouchableOpacity>
          </View>

        </View>



      </View>
    </ScrollView>

  );
};




export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    padding: 20,
  },
  vector1: {
    position: 'absolute',
    left: -10,
    top: -5,
  },
  vector2: {
    position: 'absolute',
    right: -6,
  },
  vector3: {
    position: 'absolute',
    top: 90,
  },
  vector4: {
    position: 'absolute',
    right: 0,
    top: 90,
  },
  contentContainer: {
    flex: 1,
  },
  back: {
    marginTop: 50,
  },
  heading: {
    fontSize: 40,
    fontWeight: '700',
    lineHeight: 40,
    marginTop: 83,

    textAlign: 'center',
    color: 'black',

  },
  headingDos: {
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 40,
    marginBottom: 18,
    textAlign: 'center',
    color: 'black',
  },

  btnWrapper: {
    marginTop: 30,
  },
  btnItemWrapper: {
    marginBottom: 20,

  },
  or: {
    textAlign: 'center',
    marginTop: 30,
    marginBottom: 30,
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 30,
    color: colors.gray,
  },
  inputItem: {
    marginBottom: 18,
  },
  loginBtnWrapper: {
    marginTop: 10,
  },
  forgotPassword: {
    fontWeight: '400',
    fontSize: 17,
    textAlign: 'center',
    marginTop: 20,
    color: '#646973',
  },
  footerText: {
    fontWeight: '400',
    fontSize: 14,
  },
  footerText1: {
    color: colors.gray,
  },
  footerText2: {
    color: colors.primary,
    textAlign: 'center',
    fontSize: 17,
  },
  footerWrapper: {
    position: 'absolute',
    bottom: 60,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
});
