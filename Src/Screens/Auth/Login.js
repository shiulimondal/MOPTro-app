//import liraries
import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TextInput, Pressable } from 'react-native';
import { StatusBar } from 'react-native-basic-elements';
import LinearGradient from 'react-native-linear-gradient';
import { moderateScale } from '../../Constants/PixelRatio';
import { FONTS } from '../../Constants/Fonts';
import { Shadow } from 'react-native-shadow-2';
import NavigationService from '../../Services/Navigation';
import Toast from 'react-native-simple-toast';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
const Fldvalid = txt => txt && txt.replace(/\s/g, '').length;


const { height, width } = Dimensions.get('screen')
const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const isStrongPassword = (password) => {
    if (password.length < 6) {
      Toast.show('Please ensure it is at least 6 characters long, For example: "mopTro#123"', Toast.SHORT);
      return false;
    }
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumbers = /\d/.test(password);
    const hasSpecialChars = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password);
    return hasUpperCase && hasLowerCase && hasNumbers && hasSpecialChars;
  }

  const getLogin = () => {
    if (email == '') {
      Toast.show('Enter valid Email Id', Toast.SHORT);
      return
    }
    let pattern =
      /[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,20}[\.](?!gmail|googlemail)[a-z]{2,5}/g;
    let emailresult = pattern.test(email);
    if (Fldvalid(email) === 0 || email == '') {
    } else if (emailresult !== true) {
      Toast.show('Invalid Email Id', Toast.SHORT, Toast.BOTTOM);
      return;
    }
    if (password == '') {
      Toast.show('Enter Password', Toast.SHORT);
      return
    }
    if (!isStrongPassword(password)) {
      return;
    }
    NavigationService.navigate('BottomTab')
  }
  return (
    <View style={styles.container} >
      <StatusBar
        backgroundColor={'#000'}
        barStyle='light-content'
      />
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <LinearGradient start={{ x: 1, y: 0 }} end={{ x: 0, y: 1 }}
          colors={['#000000', '#000E09']}
          style={styles.main_view}
        >

          <Image source={require('../../Assets/img/logB_logo.png')} style={styles.logo_styl} />

          <Text style={styles.title_txt}>#We are Electric</Text>

          <View style={styles.Shadow_view}>
            <Shadow distance={9}
              startColor={'rgba(17,19,18,255)'}
              endColor={'rgba(31, 25, 28, 0.2)'}
              offset={[3.4, 4]}>
              <View style={styles.inputContainer}>
                <TextInput
                  keyboardType='email-address'
                  autoCapitalize='none'
                  style={styles.input}
                  placeholder="E-mail"
                  placeholderTextColor="#727070"
                  textAlign='left'
                  value={email}
                  onChangeText={(val)=>setEmail(val)}
                />
              </View>
            </Shadow>
          </View>

          <View style={styles.Shadow_view}>
            <Shadow distance={9}
              startColor={'rgba(17,19,18,255)'}
              endColor={'rgba(31, 25, 28, 0.2)'}
              offset={[3.4, 4]}>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="Password"
                  placeholderTextColor="#727070"
                  textAlign='left'
                  value={password}
                  onChangeText={(val)=>setPassword(val)}
                />
              </View>
            </Shadow>
          </View>
          <Pressable
            onPress={() => getLogin()}
            style={styles.Shadow_view}>
            <Shadow distance={2}
              startColor={'rgba(54, 165, 70, 0.3)'}
              endColor={'rgba(54, 165, 70, 0.2)'}
              offset={[0.1, 1]}>
              <View style={{
                ...styles.inputContainer,
                backgroundColor: 'rgba(54, 165, 70, 0.2)'
              }}>
                <Text style={styles.login_txt}>Login</Text>
              </View>
            </Shadow>
          </Pressable>

          <Text style={styles.bottom_txt}>Forgot Password?</Text>
        </LinearGradient>
      </KeyboardAwareScrollView>
    </View>

  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'rgba(0, 14, 9, 120)'
  },
  main_view: {
    flex: 1
  },
  logo_styl: {
    height: moderateScale(90),
    width: moderateScale(90),
    alignSelf: 'center',
    marginTop: height / 7.5
  },
  title_txt: {
    fontFamily: FONTS.regular,
    fontSize: moderateScale(13),
    color: '#36A546CC',
    textAlign: 'center',
    marginTop: moderateScale(15)
  },
  inputContainer: {
    backgroundColor: 'rgba(17,19,18,255)',
    borderRadius: moderateScale(5),
    width: width - moderateScale(65),
    height: moderateScale(42),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: moderateScale(25)
  },
  input: {
    width: '90%',
    height: '90%',
    fontSize: moderateScale(16),
    color: '#FFFFFFB3',
    padding: 0,
    fontFamily: FONTS.medium,
    fontSize: moderateScale(13),
    marginTop: moderateScale(4)
  },
  Shadow_view: {
    alignItems: 'center',
    marginTop: moderateScale(45)
  },
  login_txt: {
    fontFamily: FONTS.bold,
    fontSize: moderateScale(16),
    color: 'rgba(255, 253, 253, 0.70)'
  },
  bottom_txt: {
    fontFamily: FONTS.regular,
    fontSize: moderateScale(14),
    color: '#36A546CC',
    textAlign: 'center',
    marginTop: moderateScale(25),
    marginBottom: moderateScale(30)
  }
});

//make this component available to the app
export default Login;
