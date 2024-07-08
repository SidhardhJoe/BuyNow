import { StyleSheet, Text, View, Image, TouchableOpacity, requireNativeComponent, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const FinalNavPage = () => {
    const navigation = useNavigation();
    const [data, setData]=useState();

    const getData = async ()=>{
        try{
            const response = await AsyncStorage.getItem("totalprice")
            const val = JSON.parse(response)
            console.log('val', val)

        }catch(err){
            console.log('err', err)
        }
    }

    useEffect(()=>{
        getData();
    },[])



    return (
        <View style={styles.container}>
            <View style={styles.view1}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={require("../Icons/Back.png")} />
                </TouchableOpacity>
            </View>
            <View style={styles.view2}>
                <Text style={styles.headertxt}>Payment</Text>
            </View>
            <View style={styles.view3}>
                <View style={styles.subview}>
                    <View style={styles.bggg}>
                        <Image source={require("../Images/mastercard.png")} style={styles.logo}/>
                    </View>
                    <View>
                        <Text style={styles.insidetext}>MasterCard</Text>
                    </View>
                </View>
                <View style={styles.subview}>
                    <View style={styles.bggg}>
                        <Image source={require("../Images/PayPal.png")} style={styles.logo1}/>
                    </View>
                    <View>
                        <Text style={styles.insidetext}>PayPal</Text>
                    </View>
                </View>
                <View style={styles.subview}>
                    <View style={styles.bggg}>
                        <Image source={require("../Images/Visa.png")} style={styles.logo2}/>
                    </View>
                    <View>
                        <Text style={styles.insidetext}>Visa Card</Text>
                    </View>
                </View>
                <View style={styles.subview}>
                    <View style={styles.bggg}>
                        <Image source={require("../Images/google.png")} style={styles.logo}/>
                    </View>
                    <View>
                        <Text style={styles.insidetext}>Google Pay</Text>
                    </View>
                </View>
                <View style={styles.subview1}>
                    <Image source={require("../Icons/Plus.png")} style={styles.logo5}/>
                </View>
            </View>
            <View>
                <Button title='press here ' onPress={()=> navigation.navigate('BottomSheet')}/>
            </View>
        </View>
    )
}

export default FinalNavPage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    view1: {
        marginTop: "12%",
        paddingHorizontal: 20
    },
    view2:{
        padding:20
    },
    headertxt:{
        fontFamily:"PoppinsBold",
        fontSize:20
    },
    subview:{
        height:"11%",
        width:"90%",
        flexDirection:"row",
        borderWidth:1,
        borderRadius:10,
        alignItems:"center",
        marginBottom:10
    },
    view3:{
        alignItems:"center"
    },
    bggg:{
        height:"70%",
        width:"12%",
        backgroundColor:"#F5F5F5",
        borderRadius:50,
        justifyContent:"center",
        alignItems:"center",
        marginHorizontal:10
    },
    logo:{
        height:26,
        width:26,
    },
    insidetext:{
        fontFamily:"PoppinsMedium"
    },
    logo1:{
        height:24,
        width:24,
    },
    logo2:{
        height:10,
        width:25
    },
    subview1:{
        height:"11%",
        width:"90%",
        flexDirection:"row",
        borderWidth:1,
        borderRadius:10,
        alignItems:"center",
        marginBottom:10,
        borderColor:"whitesmoke",
        justifyContent:"center"
    },
    logo5:{
        height:28,
        width:28
    }
})