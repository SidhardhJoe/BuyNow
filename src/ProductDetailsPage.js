import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';

const ProductDetailsPage = ({ route }) => {
    const navigation = useNavigation();
    const [data, setData] = useState([]);
    const [val, setVal] = useState(0);
    const { id } = route.params
    const getAPI = async () => {
        console.log('id', id)
        try {
            const url = `http://192.168.1.98:3000/Clothes/${id}`;
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
                    <Image source={{ uri: data?.image }} style={styles.image} />
                </TouchableOpacity>
            </View>
            <View style={styles.view2}>
                <View style={styles.view2sub}>
                    <View>
                        <Text style={styles.itemname}>{data?.description}</Text>
                        <Text style={styles.brandname}>{data?.desc}</Text>
                        <View style={styles.ratingContainer}>
                            <Icon name="star" size={16} color="gold" />
                            <Icon name="star" size={16} color="gold" />
                            <Icon name="star" size={16} color="gold" />
                            <Icon name="star" size={16} color="gold" />
                            <Icon name="star-outline" size={16} color="gold" />
                            <Text style={styles.reviewText}>(320 Review)</Text>
                        </View>
                    </View>
                    <View  >
                        <View style={styles.capsule}>
                            <TouchableOpacity onPress={() => setVal(val > 0 ? val - 1 : 0)}>
                                <Image source={require("../Icons/Minus.png")} />
                            </TouchableOpacity>
                            <Text style={{ fontFamily: "PoppinsRegular" }}>{val}</Text>
                            <TouchableOpacity onPress={() => setVal(val < 10 ? val + 1 : 10)}>
                                <Image source={require("../Icons/Plus.png")} />
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Text style={styles.stock}>{data?.stock}</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.sizeview}>
                    <Text style={styles.sizetext}>Size</Text>
                    <View style={styles.sizedetails}></View>
                    <View>
                        <Text style={styles.descriptiontext}>Description</Text>
                        <Text>{data?.details}</Text>
                    </View>
                    <View style={styles.priceview}>
                        <View>
                            <Text>
                                Total price
                            </Text>
                            <Text>
                                {data?.price}
                            </Text>
                        </View>
                        <View style={styles.pricebox}>

                        </View>
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
        backgroundColor: "black"
    },
    view1: {
        height: "50%"
    },
    image: {
        height: "100%",
        width: "100%",
        paddingTop: 10
    },
    view2: {
        height: "50%",
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
        height: "30%",
        width: "65%",
        backgroundColor: "#e2e2e2",
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
        gap: 15,
        flexDirection: "row"
    },
    view2sub: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 15,
        marginTop: 20,
        gap: 20,
        height: "28%",

    },
    stock: {
        fontFamily: "PoppinsBold",
        fontSize: 12,
        color: "green"

    },
    ratingContainer: {
        flexDirection: "row"
    },
    reviewText: {
        fontFamily: "PoppinsMedium",
        marginLeft: 2
    },
    sizetext: {
        fontFamily: "PoppinsBold",
        fontSize: 20
    },
    sizeview: {
        marginHorizontal: 15
    },
    sizedetails: {
        backgroundColor: "black",
        height: 50
    },
    descriptiontext: {
        fontFamily: "PoppinsBold",
        fontSize: 20
    },
    priceview:{
        flexDirection:"row",
         marginTop:"5%"
    },
    pricebox:{
        height:"100%",
        width:"45%",
        backgroundColor:"black"
    }
})