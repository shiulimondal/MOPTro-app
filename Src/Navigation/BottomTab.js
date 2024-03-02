import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { View, Image, Dimensions, StyleSheet } from 'react-native';
import { moderateScale } from '../Constants/PixelRatio';
import Home from '../Screens/Home/Home';
import User from '../Screens/User/User';

const Tab = createBottomTabNavigator();
const { height, width } = Dimensions.get('screen');

const BottomTab = () => {

    return (
        <View style={styles.container}>
            <Tab.Navigator
                screenOptions={{
                    headerShown: false,
                    tabBarStyle: {
                        backgroundColor: 'rgba(17,19,18,255)',
                        height: moderateScale(55),
                        paddingBottom: 0,
                        borderRadius: moderateScale(35),
                        marginBottom: moderateScale(5),
                        position: 'absolute',
                        bottom: 0,
                        width: '100%',
                        zIndex: 1,
                        borderTopWidth: 1,
                        borderTopColor: '#000'
                    },
                    tabBarShowLabel: false
                }}
            >
                <Tab.Screen
                    name="Home"
                    component={Home}
                    options={{
                        unmountOnBlur: true,
                        tabBarIcon: ({ focused }) => (
                            focused ?
                                <View style={styles.focused_view}>
                                    <Image
                                        source={require('../Assets/img/house.png')}
                                        resizeMode='contain'
                                        style={styles.tabIcon}
                                    />
                                </View>

                                :
                                <Image
                                    source={require('../Assets/img/house.png')}
                                    resizeMode='contain'
                                    style={styles.tabIcon}
                                />


                        ),
                    }}
                />

                <Tab.Screen
                    name="User"
                    component={User}
                    options={{
                        unmountOnBlur: true,
                        tabBarIcon: ({ focused }) => (
                            focused ?
                            <View style={styles.focused_view}>
                                <Image
                                    source={require('../Assets/img/account.png')}
                                    resizeMode='contain'
                                    style={styles.tabIcon}
                                />
                                </View>
                                :
                                <Image
                                    source={require('../Assets/img/account.png')}
                                    resizeMode='contain'
                                    style={styles.tabIcon}
                                />
                        ),
                    }}
                />
            </Tab.Navigator>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    tabIcon: {
        height: moderateScale(24),
        width: moderateScale(24),
        tintColor: 'rgba(53,103,61,255)',
    },
    focused_view:{
        height:moderateScale(55),
        width:moderateScale(220),
        borderRadius:moderateScale(25),
        backgroundColor:'rgba(99,71,28,0.1)',
        alignItems:'center',
        justifyContent:'center'
    }
});

export default BottomTab;
