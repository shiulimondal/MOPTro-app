import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'react-native-basic-elements'
import { moderateScale } from '../../Constants/PixelRatio'
import { Shadow } from 'react-native-shadow-2';
import { FONTS } from '../../Constants/Fonts'

const HomeHeader = () => {

  const userData =[
    {
        empId:'1',
        name:'Arjun',
        dob:'12-12-00',
        role:'Seftware Devloper'
    },
    {
        empId:'2',
        name:'Aarav',
        dob:'31-12-01',
        role:'AI Specialist'
    },
    {
        empId:'3',
        name:'Ishita',
        dob:'15-08-94',
        role:'Network Engineer'
    },
    {
        empId:'4',
        name:'Kavya',
        dob:'22-03-90',
        role:'Mobile App Developer'
    },
    {
        empId:'5',
        name:'Aditya',
        dob:'06-07-02',
        role:'UI/UX Designer'
    },
    {
        empId:'6',
        name:'Ananya',
        dob:'27-10-98',
        role:'Quality Assurance Engineer'
    },
    {
        empId:'7',
        name:'Diya',
        dob:'17-05-95',
        role:'Cloud Solutions Architect'
    },
    {
        empId:'8',
        name:'Rohan',
        dob:'03-11-00',
        role:'Machine Learning Engineer'
    },
    {
        empId:'9',
        name:'Shiuli',
        dob:'13-04-96',
        role:'React Native Devloper'
    },
     {
        empId:'10',
        name:'Riya',
        dob:'01-06-97',
        role:'Application Engineer'
    },
    {
        empId:'14',
        name:'Shiuli',
        dob:'13-04-98',
        role:'Cybersecurity Analyst'
    },
    {
        empId:'45',
        name:'Shiuli',
        dob:'13-04-97',
        role:'Data Scientist'
    },
]
  return (
    <View>
      <StatusBar
        backgroundColor={'#000'}
        barStyle='light-content'
      />
      <Image source={require('../../Assets/img/userB.png')} style={styles.support_img} />

      <View style={styles.main_view}>
        <View style={styles.shadow_view}>
          <Shadow distance={10}
            startColor={'rgba(17,19,18,255)'}
            endColor={'rgba(31, 25, 28, 0.1)'}
            offset={[1, 2]}
            style={styles.circle_view}
          >
            
                <Text style={styles.count_txt}>{userData.length}</Text>
          </Shadow>
        </View>
        <Image source={require('../../Assets/img/appLogoB.png')} style={styles.logo_sty} />
      </View>
    </View>
  )
}

export default HomeHeader

const styles = StyleSheet.create({
  support_img: {
    height: moderateScale(40),
    width: moderateScale(40),
    alignSelf: 'flex-end',
    marginRight: moderateScale(20),
  },
  logo_sty: {
    height: moderateScale(66),
    width: moderateScale(67)
  },
  shadow_view: {
    position: 'absolute',
    top: moderateScale(-15),
    right: moderateScale(110)
  },
  circle_view: {
    height: moderateScale(28),
    width: moderateScale(28),
    borderRadius: moderateScale(15),
    backgroundColor: 'rgba(94, 94, 94, 0.1)',
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  main_view: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: moderateScale(20)
  },
  count_txt:{
    fontFamily:FONTS.regular,
    fontSize:moderateScale(13),
    color:'rgba(54, 165, 70, 1)'
  }
})