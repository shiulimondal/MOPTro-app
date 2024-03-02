import { Dimensions, StyleSheet, View,Text } from 'react-native'
import React from 'react'
import { moderateScale } from '../Constants/PixelRatio'
import { FONTS } from '../Constants/Fonts'

const { height, width } = Dimensions.get('screen')
const UserListCard = ({item,index, subContract = false }) => {
    return (
        <View style={{
            flexDirection: "row"
        }}>
            {subContract &&
                <View style={{ width: moderateScale(30) }} />}

            <View style={styles.main_view}>
                <View style={styles.id_circle_view}>
                    <View style={styles.id_aling_view}>
                        <Text style={styles.empId_txt}>EMP ID</Text>
                        <Text style={{color: '#727070' }}>:</Text>
                        <Text style={styles.emp_no_txt}>{item.empId}</Text>
                    </View>
                    <View style={styles.circle_view}>
                        <Text style={styles.emp_count_txt}>{index}</Text>
                    </View>
                </View>

                <View style={{...styles.id_aling_view,marginTop:moderateScale(15)}}>
                    <View style={styles.id_aling_view}>
                        <Text style={styles.empId_txt}>Name</Text>
                        <Text style={{color: '#727070' }}>:</Text>
                        <Text style={styles.emp_no_txt}>{item.name}</Text>
                    </View>
                </View>

                <View style={{...styles.id_aling_view,marginTop:moderateScale(15)}}>
                    <View style={styles.id_aling_view}>
                        <Text style={styles.empId_txt}>DOB</Text>
                        <Text style={{color: '#727070' }}>:</Text>
                        <Text style={{...styles.emp_no_txt,color:'rgba(99,71,28,255)'}}>{item.dob}</Text>
                    </View>
                </View>

                <View style={{...styles.id_aling_view,marginTop:moderateScale(15)}}>
                    <View style={styles.id_aling_view}>
                        <Text style={styles.empId_txt}>Role</Text>
                        <Text style={{color: '#727070' }}>:</Text>
                        <Text style={{...styles.emp_no_txt,color:'rgba(54, 165, 70, 0.5)'}}>{item.role}</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default UserListCard

const styles = StyleSheet.create({
    main_view: {
        padding: 10,
        backgroundColor: 'rgba(94, 94, 94, 0.3)',
        elevation: moderateScale(8),
        width: width - moderateScale(70),
        borderRadius: moderateScale(13),
        marginTop: moderateScale(20),
        elevation: 13,
        borderWidth:1,
        borderColor:'rgba(94, 94, 94, 0.3)'
    },
    id_circle_view: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    id_aling_view: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    empId_txt: {
        fontFamily: FONTS.semibold,
        fontSize: moderateScale(12),
        color: '#727070',
      width:moderateScale(50)
    },
    emp_no_txt: {
        fontFamily: FONTS.semibold,
        fontSize: moderateScale(12),
        color: '#fff',
        marginLeft: moderateScale(10)
    },
    circle_view:{
        height: moderateScale(22),
        width: moderateScale(22),
        borderRadius: moderateScale(12),
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#000',
        backgroundColor: '#595959',
        elevation: 3
    },
    emp_count_txt:{
        fontFamily: FONTS.semibold,
        fontSize: moderateScale(11),
        color: '#fff'
    }

})
