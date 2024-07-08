import { Pressable, StyleSheet, Text, TouchableOpacity, View, Modal, Alert, Image } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { BlurView } from 'expo-blur';

const BottomSheet = () => {
    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View style={styles.container}>
            <Pressable onPress={() => navigation.goBack()} style={styles.topressable}>
            </Pressable>
            <BlurView experimentalBlurMethod='dimezisBlurView' intensity={99} tint="light" style={styles.detailsview}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text style={styles.canceltext}>Cancel</Text>
                </TouchableOpacity>
                <View style={styles.view3}>
                    <View style={styles.details}>
                        <Text style={styles.innertext}>Subtotal:</Text>
                        <Text style={styles.innertext1}>$500</Text>
                    </View>
                    <View style={styles.details}>
                        <Text style={styles.innertext}>Shipping:</Text>
                        <Text style={styles.innertext1}>$17.00</Text>
                    </View>
                    <View style={styles.details}>
                        <Text style={styles.innertext}>Total:</Text>
                        <Text style={styles.innertext1}>$517</Text>
                    </View>
                </View>
                <TouchableOpacity style={styles.view4} onPress={() => setModalVisible(true)}>
                    <View>
                        <Text style={styles.pyotext}>Place your order</Text>
                    </View>
                </TouchableOpacity>
                <Text style={styles.tac}>By agreeing to place your order you agree to the terms and conditions of BuyNow.</Text>
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={()=>navigation.goBack()}
                    >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Image source={require("../Icons/Baglast.png")} style={styles.baglogo} />
                            <Text style={styles.successtxt}>Successfull!</Text>
                            <View style={styles.viewsmall}>
                                <Text style={styles.yohbsp}>Your order has been Successfully placed</Text>
                            </View>
                            <TouchableOpacity style={styles.continuebox} onPress={()=>navigation.navigate("Home")}>
                                <View>
                                    <Text style={styles.continuetext}>Continue Shopping</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </BlurView>
        </View>
    )
}

export default BottomSheet

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    topressable: {
        flex: 1
    },
    detailsview: {
        height: "50%",
        position: "absolute",
        bottom: 0,
        width: "100%"
    },
    canceltext: {
        fontFamily: "PoppinsRegular",
        padding: 10,
        fontSize: 16,
        color: "red"
    },
    view3: {
        height: "20%",
        marginHorizontal: 20,
        justifyContent: "center"
    },
    details: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 10
    },
    innertext: {
        fontFamily: "PoppinsBold",
        fontSize: 16
    },
    innertext1: {
        fontFamily: "PoppinsBold",
        fontSize: 16
    },
    view4: {
        height: "15%",
        width: "60%",
        backgroundColor: "black",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        marginLeft: "20%",
        marginTop: "8%"
    },
    pyotext: {
        color: "white",
        fontFamily: "PoppinsBold"
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalView: {
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        width: "60%",
        height: "30%"
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
    baglogo: {
        height: 25,
        width: 25,
        marginTop: "10%"

    },
    continuebox: {
        height: "20%",
        width: "70%",
        backgroundColor: "black",
        borderRadius: 10,
        marginTop: "10%",
        justifyContent: "center",
        alignItems: "center"
    },
    continuetext: {
        color: "white",
        fontFamily: "PoppinsBold",
        fontSize: 12
    },
    successtxt: {
        fontFamily: "PoppinsBold",
        marginTop: "5%"
    },
    viewsmall: {
        width: "70%",
        textAlign: "justify",
        alignItems: "center"
    },
    yohbsp: {
        fontFamily: "PoppinsRegular",
        fontSize: 12
    },
    tac:{
        fontFamily:"PoppinsRegular",
        color:"grey",
        fontSize:10,
        marginHorizontal:30,
        marginTop:"2%"

    }
})