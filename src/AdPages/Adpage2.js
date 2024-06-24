import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const Adpage2 = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View>
                <Image source={require("../../Images/Cover2.png")} style={styles.coverimg} />
            </View>
            <View style={styles.textbox}>
                <Text style={styles.text1}>Take Advantage</Text>
                <Text style={styles.text1}>Of The Offer Shopping</Text>
            </View>
            <View style={{marginTop:10}}>
                <Text  style={styles.text2}>Offers that drop every week</Text>
                <Text  style={styles.text2}>Get the them by setting drop alerts</Text>
            </View>
            <View style={styles.rowbar}>
                <View style={styles.dots}>

                    <View style={styles.circle}></View>
                    <View style={styles.longbar}></View>
                    <View style={styles.circle}></View>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('AdPage3')}>
                    <View style={styles.forwardicon}>
                        <Image source={require("../../Icons/Forward.png")} />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Adpage2

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