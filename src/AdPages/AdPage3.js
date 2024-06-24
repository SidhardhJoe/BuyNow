import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const AdPage3 = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View>
                <Image source={require("../../Images/Cover3.png")} style={styles.coverimg} />
            </View>
            <View style={styles.textbox}>
                <Text style={styles.text1}>All Types Offers</Text>
                <Text style={styles.text1}>Within Your Reach</Text>
            </View>
            <View style={{ marginTop: 10 }}>
                <Text style={styles.text2}>Get easy access to new fashions</Text>
                <View style={{flexDirection:"row"}}>
                    <Text style={styles.text2}>With just a tap, Welcome to </Text>
                    <Text style={{ fontFamily: "PoppinsBold",}}> BuyNow.</Text>
                </View>
            </View>
            <View style={styles.rowbar}>
                <View style={styles.dots}>
                    <View style={styles.circle}></View>
                    <View style={styles.circle}></View>
                    <View style={styles.longbar}></View>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('SignUpPage')}>
                    <View style={styles.forwardicon}>
                        <Image source={require("../../Icons/Forward.png")} />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default AdPage3

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
        fontFamily: "PoppinsBold",
        marginLeft: 10
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
    text2: {
        fontFamily: "PoppinsRegular",
        marginLeft: 10,
        color: "grey"
    }
})