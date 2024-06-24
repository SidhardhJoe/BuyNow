import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native';

const AdPage1 = () => {
    const navigation=useNavigation();
    return (
        <View style={styles.container}>
            <View>
                <Image source={require("../../Images/Cover1.png")} style={styles.coverimg} />
            </View>
            <View style={styles.textbox}>
                <Text style={styles.text1}>20%  Discount</Text>
                <Text style={styles.text1}>New Arrival Products</Text>
            </View>
            <View style={{marginTop:10}}>
                <Text style={styles.text2}>Publish your selfies to make yourself</Text>
                <Text style={styles.text2}>more beautiful with this app</Text>
            </View>
            <View style={styles.rowbar}>
                <View style={styles.dots}>
                    <View style={styles.longbar}></View>
                    <View style={styles.circle}></View>
                    <View style={styles.circle}></View>
                </View>
                <TouchableOpacity onPress={()=>navigation.navigate('AdPage2')}>
                    <View style={styles.forwardicon}>
                        <Image source={require("../../Icons/Forward.png")} />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default AdPage1

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        flex: 1
    },
    coverimg: {
        height: 350,
        width: 340,
        marginTop: 40,
        marginLeft: 10,
        borderRadius: 20
    },
    textbox: {
        marginTop: 70
    },
    text1: {
        fontSize: 28,
        fontFamily:"PoppinsBold",
        marginLeft:10
    },
    circle: {
        height: 10,
        width: 10,
        backgroundColor: "grey",
        borderRadius: 5
    },
    dots: {
        marginTop: 80,
        marginLeft: 20,
        flexDirection: "row",
        gap: 5
    },
    longbar: {

        height: 10,
        width: 20,
        backgroundColor: "black",
        borderRadius: 10
    },
    rowbar: {
        flexDirection: "row",
        gap: 220
    },
    forwardicon: {
        marginTop: 60,
    },
    text2:{
        fontFamily:"PoppinsRegular",
        marginLeft:10,
        color:"grey"
    }
})