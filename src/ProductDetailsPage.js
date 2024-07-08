import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';


const ProductDetailsPage = ({ route }) => {
    const { id, category } = route.params

    const navigation = useNavigation();
    const [data, setData] = useState([]);
    const [val, setVal] = useState(0);
    const [userid, setUserId] = useState(null)

    const getAPI = async () => {
        try {
            const url = `http://192.168.1.18:3000/${category}/${id}`; // setting url as the api of clothes with id passed as params from clothes page
            const result = await fetch(url); //  calling the api
            const data = await result.json(); // stores result in data as a json format  
            setData(data); // setting data in useState
            const value = await AsyncStorage.getItem("userdata"); // storing value of userdata which is an asyncstorage in value ... userdata is the data of the particular user which we took from login page using email and password
            const datas = JSON.parse(value) // parsing the value and storing it in datas
            setUserId(datas[0]) // storing userid to data[0] because there data is an array and it is only 1 element so to store it we need to asssing the array position
        } catch (err) {
            setError('Failed to fetch data'); // showing error if any
        }
    };

    const postData = async () => {
        console.log('userid.id', userid.id)
        try {
            const getCart = await axios.get(`http://192.168.1.18:3000/users/${userid.id}`) // getting data of the user with their id
            const response = await axios.put(`http://192.168.1.18:3000/users/${userid.id}`, // updating the details in cart. 
                {
                    "cart": [...getCart.data.cart, data],
                    "email": userid.email,
                    "favourites": [],
                    "id": userid.id,
                    "password": userid.password,
                    "username": userid.username,
                    "address":userid.address
                }
            )
            const getCarts = await axios.get(`http://192.168.1.18:3000/users/${userid.id}`) // once put data we are calling it and storing it in getCarts
            console.log('getCart', getCarts)
            if (getCarts) { // if the data is not empty
                await AsyncStorage.setItem("cartValues", JSON.stringify(getCarts)) // we are setting this item in asyncStorage, it has the deatils of the current logged in user
                navigation.navigate('Cart')
            }
        }
        catch (error) {
            console.log('error', error)
        }
    }

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
                    <View style={styles.view2sub1}>
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
                    <View style={styles.capsuleview} >
                        <View style={styles.capsule}>
                            <TouchableOpacity onPress={() => setVal(val > 0 ? val - 1 : 0)}>
                                <Image source={require("../Icons/Minus.png")} />
                            </TouchableOpacity>
                            <Text style={styles.fontfam}>{val}</Text>
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
                        <Text style={styles.fontfam}>{data?.details}</Text>
                    </View>
                    <View style={styles.priceview}>
                        <View>
                            <Text style={styles.fontfam2}>Total price</Text>
                            <Text style={styles.fontfam1}>{data?.price}</Text>
                        </View>
                        <View style={styles.pricebox}>
                            <View>
                                <TouchableOpacity onPress={postData}>
                                    <Text style={styles.atctext}>Add to cart</Text>
                                </TouchableOpacity>
                            </View>
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
        backgroundColor: "white"
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
        width: "75%",
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
    priceview: {
        flexDirection: "row",
        marginTop: "5%",
        justifyContent: "space-between"

    },
    pricebox: {
        height: "55%",
        width: "50%",
        backgroundColor: "black",
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center"
    },
    fontfam: {
        fontFamily: "PoppinsRegular"
    },
    capsuleview: {
        width: "35%",
        alignItems: "center"
    },
    view2sub1: {
        width: "65%"
    },
    fontfam1: {
        fontFamily: "PoppinsBold",
        fontSize: 18
    },
    fontfam2: {
        fontFamily: "PoppinsRegular",
        fontSize: 12
    },
    atctext: {
        fontFamily: "PoppinsMedium",
        color: "white",
        fontSize: 18
    }
})