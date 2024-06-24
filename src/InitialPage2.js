import { StyleSheet, Text, View, ImageBackground, } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';

const InitialPage2 = () => {
    const navigation=useNavigation();
    return (
        <ImageBackground source={require("../Images/InitailPage2.png")} style={styles.background}>
            <View style={styles.selector_bar}>
                <TouchableOpacity onPress={()=>navigation.navigate('LoginPage')}>
                    <View style={styles.login_box}>
                        <Text style={styles.text}>Login</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>navigation.navigate('AdPage1')}>
                    <View style={styles.signup_box}>
                        <Text style={styles.text}>Sign Up</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    )
}

export default InitialPage2

const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center',
    },
    selector_bar: {
        marginTop: 550
    },
    login_box: {
        height: 40,
        width: 250,
        backgroundColor: "white",
        marginBottom: 20,
        borderRadius: 20
    },
    signup_box: {
        height: 40,
        width: 250,
        backgroundColor: "white",
        borderRadius: 20
    },
    text: {
        textAlign: "center",
        marginTop: 7,
        fontSize: 18,
        fontFamily:"PoppinsBold"
    }
})