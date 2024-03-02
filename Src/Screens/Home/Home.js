//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import HomeHeader from '../../Components/Header/HomeHeader';
import { Shadow } from 'react-native-shadow-2';
import { moderateScale } from '../../Constants/PixelRatio';
import { FONTS } from '../../Constants/Fonts';
import ProductvityCard from '../../Components/ProductvityCard';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const { height, width } = Dimensions.get('screen')
const Home = () => {
  
  const ProductivityData = [
    {
      title: 'Productivity on Monday',
      percentage: '4%',
      process: '0.04'

    },
    {
      title: 'Productivity on Tueday',
      percentage: '92%',
      process: '0.92'

    },
    {
      title: 'Productivity on Wednesday',
      percentage: '122%',
      process: '1.22'

    },
    {
      title: 'Productivity on Thursday',
      percentage: '93%',
      process: '0.93'

    },
    {
      title: 'Productivity on Friday',
      percentage: '89%',
      process: '0.89'

    },
    {
      title: 'Productivity on Saturday',
      percentage: '98%',
      process: '0.98'

    },
  ]
  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <HomeHeader />
        <View style={styles.main_view}>
          <Shadow distance={4}
            startColor={'rgba(17,19,18,255)'}
            endColor={'rgba(31, 25, 28, 0.2)'}
            offset={[3.4, 4]}
            style={styles.shdow_view}
          >
            <View style={styles.title_view}>
              <Text style={styles.title_txt}>Employee Productivity Dashboard</Text>
            </View>
            {
              ProductivityData.map((item,index)=>{
                return(
                  <ProductvityCard item={item} key={index} /> 
                )
              })
            }
          </Shadow>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  main_view: {
    marginTop: moderateScale(40),
    alignItems: 'center',
    paddingBottom:moderateScale(10),
  },
  shdow_view: {
    borderRadius: moderateScale(25),
  },
  title_view: {
    backgroundColor: 'rgba(19,22,21,255)',
    borderRadius: moderateScale(25),
    padding: moderateScale(15),
    marginLeft: moderateScale(2)
  },
  title_txt: {
    fontFamily: FONTS.bold,
    fontSize: moderateScale(15),
    color: 'rgba(255, 253, 253, 0.70)',
    textAlign: 'center',
  }
});

//make this component available to the app
export default Home;
