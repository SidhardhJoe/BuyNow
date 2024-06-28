import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ProductDetailsPage = () => {
    const navigation = useNavigation();
    const [data, setData] = useState([]);
    const [val, setVal] = useState(0);

    const getAPI = async () => {
        try {
            const url = "http://192.168.1.98:3000/Clothes";
            const result = await fetch(url);
            const data = await result.json();
            setData(data);
        } catch (err) {
            setError('Failed to fetch data');
        }
    };

    useEffect(() => {
        getAPI();
    }, []);



    return (
        <View style={styles.container}>
            <View style={styles.view1}>
                <TouchableOpacity onPress={() => navigation.navigate('TestPage')}>
                    <Image source={{ uri: data[0]?.image }} style={styles.image} />
                </TouchableOpacity>
            </View>
            <View style={styles.view2}>
                <View style={styles.view2sub}>
                    <View>
                        <Text style={styles.itemname}>{data[0]?.description}</Text>
                        <Text style={styles.brandname}>{data[0]?.desc}</Text>
                    </View>
                    <View style={styles.capsule}>
                        <TouchableOpacity onPress={()=>setVal(val-1)}>
                            <Image source={require("../Icons/Minus.png")} />
                        </TouchableOpacity>
                        <Text>{val}</Text>
                        <TouchableOpacity onPress={()=>setVal(val+1)}>
                            <Image source={require("../Icons/Plus.png")} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default ProductDetailsPage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    view1: {
        height: "53%"
    },
    image: {
        height: "100%",
        width: "100%",
        paddingTop: 10
    },
    view2: {
        height: "47%",
        backgroundColor: "white",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        marginTop: -15
    },
    itemname: {
        fontFamily: "PoppinsBold",
        fontSize: 20,
    },
    brandname: {
        fontFamily: "PoppinsRegular",
        color: "grey",
        fontSize: 16,
    },
    capsule: {
        height: "60%",
        width: "25%",
        backgroundColor: "#e2e2e2",
        borderRadius: 20,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 10
    },
    view2sub: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 15,
        marginTop: 20

    }
})