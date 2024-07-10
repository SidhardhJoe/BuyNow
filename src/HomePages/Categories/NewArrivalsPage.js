import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity, ImageBackground } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

const NewArrivalsPage = () => {
    const navigation = useNavigation();
    const [offer, setOffer] = useState();
    const [newarr, setNewarr] = useState();
    const [value, setValue] = useState(2);

    const getApi = async () => {
        try {
            const url = "http://192.168.1.18:3000/offers";
            const result = await fetch(url);
            const data = await result.json();
            setOffer(data);
            // console.log('offer', data);
        } catch (err) {
            console.log('err', err);
        }
    };

    const getNew = async () => {
        try {
            const url = "http://192.168.1.18:3000/newarrivals"
            const result1 = await fetch(url);
            const data1 = await result1.json();
            console.log('data', data1)
            setNewarr(data1);

        } catch (err) {
            console.log('err', err)
        }
    }

    useEffect(() => {
        getApi();
        getNew();
    }, []);

    const renderItem = ({ item }) => {
        return (
            <ImageBackground source={{ uri: item.image }} style={styles.flatlistview}>
                <View style={styles.flastlistviewinside}>
                    <Text style={styles.percentage}>{item.percentage}% Off</Text>
                    <Text style={styles.detail}>{item.detail}</Text>
                    <Text style={styles.code}>With coupon code {item.code}</Text>
                </View>
                <View>
                    <TouchableOpacity onPress={() => navigation.navigate(`${item.nav}`)}>
                        <View style={styles.buttonpress}>
                            <Text style={styles.offertxt}>Get Offer</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        );
    };

    const renderItem1 = ({ item }) => {
        return (
            <View style={styles.itemContainer}>
                <TouchableOpacity onPress={() => navigation.navigate("ProductDetailsPage", { id: item?.id, category: "newarrivals"})}>
                    <Image source={{ uri: item.image }} style={styles.image} />
                    <View style={{ justifyContent: "center", alignItems: "center" }}>
                        <Text style={styles.desctext}>{item.description}</Text>
                        <Text style={styles.desc1}>{item.desc}</Text>
                        <Text style={styles.desctext}>{item.price}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }


    return (
        <View style={styles.container}>
            <View style={styles.view1}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <View>
                        <Image source={require("../../../Icons/Back.png")} style={styles.icon} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                    <View style={styles.profile}>
                        <Image source={require("../../../Icons/profile.png")} style={styles.icon} />
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.view2}>
                <Text style={styles.view2txt1}>Welcome,</Text>
                <Text style={styles.view2txt2}>Our Fashions App</Text>
            </View>
            <View>
                <FlatList
                    data={offer}
                    renderItem={renderItem}
                    keyExtractor={item => item.id.toString()}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
            <View>
                <Text style={styles.view3txt1}>New Arrivals</Text>
            </View>
            <FlatList
                data={newarr}
                renderItem={renderItem1}
                keyExtractor={item => item.id.toString()}
                numColumns={value}
            />
        </View>
    );
};

export default NewArrivalsPage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    view1: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 20,
        marginTop: "12%"
    },
    profile: {
        height: 45,
        width: 45,
        backgroundColor: "#cdcdcd",
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center"
    },
    icon: {
        height: 40,
        width: 40
    },
    view2: {
        padding: 22
    },
    view2txt1: {
        fontFamily: "PoppinsBold",
        fontSize: 22
    },
    view2txt2: {
        fontFamily: "PoppinsBold",
        fontSize: 20,
        color: "grey"
    },
    flatlistview: {
        height: 115,
        width: 190,
        backgroundColor: "#DCDCDC",
        borderRadius: 10,
        marginHorizontal: 10,
    },
    percentage: {
        fontFamily: "PoppinsBold",
        fontSize: 20
    },
    detail: {
        fontFamily: "PoppinsRegular"
    },
    code: {
        fontFamily: "PoppinsBold",
        fontSize: 10
    },
    flastlistviewinside: {
        padding: 5
    },
    buttonpress: {
        height: 20,
        width: 80,
        backgroundColor: "white",
        borderRadius: 10,
        marginBottom: 20,
        marginLeft: 5,
        justifyContent: "center",
        alignItems: "center"
    },
    offertxt: {
        fontFamily: "PoppinsBold"
    },
    view3txt1: {
        fontFamily: "PoppinsBold",
        fontSize: 22,
        padding: 20
    },
    itemContainer: {
        marginBottom: 10,
        width: "50%",
        alignItems: 'center',
        justifyContent: "center",
    },
    image: {
        width: 150,
        height: 175,
        borderRadius: 10
    },
    desctext: {
        fontFamily: "PoppinsBold",
    },
    desc1: {
        fontFamily: "PoppinsRegular",
        color: "grey"
    }
});
