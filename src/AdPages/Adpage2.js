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
                <Text style={styles.text1}>20%  Discount</Text>
                <Text style={styles.text1}>New Arrival Products</Text>
            </View>
            <View>
                <Text>Publish your selfies to make yourself
                </Text>
                <Text>
                    more beautiful with this app
                </Text>
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
        marginTop: 80
    },
    text1: {
        fontSize: 28
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
    }
})