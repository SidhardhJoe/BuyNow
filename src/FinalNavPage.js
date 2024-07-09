import { StyleSheet, Text, View, Image, TouchableOpacity, requireNativeComponent, Button, Modal } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LinearGradient } from 'expo-linear-gradient';

const FinalNavPage = () => {
    const navigation = useNavigation();
    const [data, setData] = useState();
    const [pressedComponent, setPressedComponent] = useState(null);    
    const [modalVisible, setModalVisible] = useState(false);


    const getData = async () => {
        try {
            await AsyncStorage.setItem("methodselected", JSON.stringify(pressedComponent))
        } catch (err) {
            console.log('err', err);
        }
    };

    useEffect(() => {
        getData();
    }, [pressedComponent]);

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
                <TouchableOpacity
                    onPress={() => setPressedComponent('MasterCard')}
                    style={[styles.subview, pressedComponent === 'MasterCard' && styles.pressed]}
                >
                    <View style={styles.bggg}>
                        <Image source={require("../Images/mastercard.png")} style={styles.logo} />
                    </View>
                    <View>
                        <Text style={styles.insidetext}>MasterCard</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => setPressedComponent('PayPal')}
                    style={[styles.subview, pressedComponent === 'PayPal' && styles.pressed]}
                >
                    <View style={styles.bggg}>
                        <Image source={require("../Images/PayPal.png")} style={styles.logo1} />
                    </View>
                    <View>
                        <Text style={styles.insidetext}>PayPal</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => setPressedComponent('Visa')}
                    style={[styles.subview, pressedComponent === 'Visa' && styles.pressed]}
                >
                    <View style={styles.bggg}>
                        <Image source={require("../Images/Visa.png")} style={styles.logo2} />
                    </View>
                    <View>
                        <Text style={styles.insidetext}>Visa Card</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => setPressedComponent('GooglePay')}
                    style={[styles.subview, pressedComponent === 'GooglePay' && styles.pressed]}
                >
                    <View style={styles.bggg}>
                        <Image source={require("../Images/google.png")} style={styles.logo} />
                    </View>
                    <View>
                        <Text style={styles.insidetext}>Google Pay</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.subview1} onPress={() => setModalVisible(true)}>
                    <Image source={require("../Icons/Plus.png")} style={styles.logo5} />
                </TouchableOpacity>
            </View>
            <View style={styles.finalview}>
                <TouchableOpacity style={styles.orderbox} onPress={() => navigation.navigate("BottomSheet")}>
                    <View>
                        <Text style={styles.ordertext}>Confirm Order</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => navigation.goBack()}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <LinearGradient style={styles.ccview} colors={['#8e9eab', '#eef2f3']}>
                        
                        </LinearGradient>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

export default FinalNavPage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    view1: {
        marginTop: "12%",
        paddingHorizontal: 20
    },
    view2: {
        padding: 20
    },
    headertxt: {
        fontFamily: "PoppinsBold",
        fontSize: 20
    },
    subview: {
        height: "16%",
        width: "90%",
        flexDirection: "row",
        borderWidth: 1,
        borderRadius: 10,
        alignItems: "center",
        marginBottom: 10
    },
    view3: {
        alignItems: "center",
        height: "40%"
    },
    bggg: {
        height: "70%",
        width: "12%",
        backgroundColor: "#F5F5F5",
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 10
    },
    logo: {
        height: 26,
        width: 26,
    },
    insidetext: {
        fontFamily: "PoppinsMedium"
    },
    logo1: {
        height: 24,
        width: 24,
    },
    logo2: {
        height: 10,
        width: 25
    },
    subview1: {
        height: "16%",
        width: "90%",
        flexDirection: "row",
        borderWidth: 1,
        borderRadius: 10,
        alignItems: "center",
        marginBottom: 10,
        borderColor: "whitesmoke",
        justifyContent: "center"
    },
    logo5: {
        height: 28,
        width: 28
    },
    finalview: {
        height: "100%",
        width: "100%",
    },
    orderbox: {
        height: "8%",
        width: "60%",
        backgroundColor: "black",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        marginLeft: "20%",
        marginTop: "45%"
    },
    ordertext: {
        color: "white",
        fontFamily: "PoppinsBold"
    },
    pressed: {
        borderColor: 'blue',
        borderWidth: 2,
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
        width: "80%",
        height: "60%"
    },
    ccview:{
        height:"32%",
        width:"80%",
        borderWidth:1,
        borderRadius:10,
        marginTop:"5%",
        borderColor:"#eef2f3"
    }
});
