import { View, Text, StyleSheet, Animated } from 'react-native';
import { moderateScale } from '../Constants/PixelRatio';
import { FONTS } from '../Constants/Fonts';
import * as Progress from 'react-native-progress';

const ProductivityCard = ({ item,index }) => {
  return (
    <View key={index} style={styles.container}>
      <View style={styles.main_view}>
        <Text style={styles.title_txt}>{item.title}</Text>
        <Text style={styles.percentage_txt}>{item.percentage}</Text>
      </View>
      <View style={{ marginTop: moderateScale(7) }}>
      <Progress.Bar
          progress={Number(item.process)} 
          width={180}
          height={7}
          color='rgba(54, 165, 70, 1)'
          borderRadius={10}
          borderWidth={0}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: moderateScale(17),
    marginHorizontal: moderateScale(15),
    marginBottom:moderateScale(10)
  },
  main_view: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title_txt: {
    fontFamily: FONTS.regular,
    fontSize: moderateScale(12),
    color: 'rgba(255, 253, 253, 0.70)',
    marginLeft: moderateScale(7),
  },
  percentage_txt: {
    fontFamily: FONTS.regular,
    fontSize: moderateScale(13),
    color: 'rgba(54, 165, 70, 1)',
    marginRight: moderateScale(22),
  },
});

export default ProductivityCard;
