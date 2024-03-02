import React, { useState } from 'react';
import { View, TextInput, StyleSheet, FlatList, Dimensions, Text, Image } from 'react-native';
import HomeHeader from '../../Components/Header/HomeHeader';
import UserListCard from '../../Components/UserListCard';
import { Shadow } from 'react-native-shadow-2';
import { moderateScale } from '../../Constants/PixelRatio';
import { FONTS } from '../../Constants/Fonts';

const { height, width } = Dimensions.get('screen');

const User = () => {
    
    const [search, setSearch] = useState('')
    const [filteredData, setFilteredData] = useState([])
    const userData =[
        {
            empId:'1',
            name:'Arjun ',
            dob:'12-12-00',
            role:'Seftware Devloper'
        },
        {
            empId:'2',
            name:'Aarav ',
            dob:'31-12-01',
            role:'AI Specialist'
        },
        {
            empId:'3',
            name:'Ishita ',
            dob:'15-08-94',
            role:'Network Engineer'
        },
        {
            empId:'4',
            name:'Kavya ',
            dob:'22-03-90',
            role:'Mobile App Developer'
        },
        {
            empId:'5',
            name:'Aditya ',
            dob:'06-07-02',
            role:'UI/UX Designer'
        },
        {
            empId:'6',
            name:'Ananya ',
            dob:'27-10-98',
            role:'Quality Assurance Engineer'
        },
        {
            empId:'7',
            name:'Diya ',
            dob:'17-05-95',
            role:'Cloud Solutions Architect'
        },
        {
            empId:'8',
            name:'Rohan ',
            dob:'03-11-00',
            role:'Machine Learning Engineer'
        },
        {
            empId:'9',
            name:'Shiuli ',
            dob:'13-04-96',
            role:'React Native Devloper'
        },
         {
            empId:'10',
            name:'Riya ',
            dob:'01-06-97',
            role:'Application Engineer'
        },
        {
            empId:'14',
            name:'Shiuli ',
            dob:'13-04-98',
            role:'Cybersecurity Analyst'
        },
        {
            empId:'45',
            name:'Shiuli ',
            dob:'13-04-97',
            role:'Data Scientist'
        },
    ]
    const handleSearchUser = (text) => {
        setSearch(text)
        const filtered = userData.filter(item => item.name.toLowerCase().includes(text.toLowerCase()))
        setFilteredData(filtered)
    }
    return (
        <View style={styles.container}>
            <HomeHeader />
            <View style={styles.Shadow_view}>
                <Shadow distance={9}
                    startColor={'rgba(17,19,18,255)'}
                    endColor={'rgba(31, 25, 28, 0.2)'}
                    offset={[3.4, 4]}>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                            placeholder="Search with name"
                            placeholderTextColor="#727070"
                            textAlign='center'
                            value={search}
                            onChangeText={handleSearchUser}
                        />
                    </View>
                </Shadow>
            </View>
            <View style={{ flex: 1, marginBottom: moderateScale(70) }}>
                <FlatList
                    data={search ? filteredData : userData}
                    contentContainerStyle={{ marginHorizontal: moderateScale(20) }}
                    showsVerticalScrollIndicator={false}
                    ListEmptyComponent={() => (
                        <View style={styles.emptyListContainer}>
                            <Image source={require('../../Assets/img/not-found.png')} style={styles.notfound_img}/>
                            <Text style={styles.notFound_txt}>No User Found</Text>
                        </View>
                    )}
                    renderItem={({ item, index }) => (
                        <UserListCard index={index + 1} item={item} subContract={index % 2 !== 0} />
                    )}
                    keyExtractor={(item) => item.empId}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
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
        fontFamily: FONTS.bold,
        fontSize: moderateScale(15),
        marginTop: moderateScale(4)
    },
    Shadow_view: {
        alignItems: 'center',
        marginTop: moderateScale(45),
        paddingBottom: 10
    },
    emptyListContainer:{
      alignItems:'center',
      marginTop:moderateScale(70)
    },
    notfound_img:{
        height:moderateScale(70),
        width:moderateScale(70),
        resizeMode:'contain',
        tintColor:'rgba(54, 165, 70, 0.7)'
    },
    notFound_txt:{
        fontSize:moderateScale(18),
        marginTop:moderateScale(10),
        fontFamily:FONTS.regular,
        color:'rgba(54, 165, 70, 0.7)'
    }
});

export default User;

