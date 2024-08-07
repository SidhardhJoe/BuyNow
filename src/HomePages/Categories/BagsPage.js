import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const BagsPage = () => {
    const navigation = useNavigation();
    const [data, setData] = useState([]);
    const getAPI = async () => {
        const url = "http://192.168.1.71:3000/bags";
        const result = await fetch(url);
        const data = await result.json();
        setData(data);
    };

    useEffect(() => {
        getAPI();
    }, []);

    const renderItem = ({ item }) => (
        <View style={styles.itemContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('ProductDetailsPage', { id: item?.id, category: 'bags' })}>
                <Image source={{ uri: item.image }} style={styles.image} />
                <View style={{ justifyContent: "center", alignItems: "center" }}>
                    <Text style={styles.desctext}>{item.description}</Text>
                    <Text style={styles.desc1}>{item.desc}</Text>
                    <Text style={styles.desctext}>{item.price}</Text>
                </View>
            </TouchableOpacity>
        </View>
    );

    return (
        <View style={styles.container}>
            <View style={styles.view1}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <Image source={require("../../../Icons/Back.png")} style={styles.icon} />
                </TouchableOpacity>
                <Image source={require("../../../Icons/Search.png")} style={styles.icon} />
            </View>
            <View  >
                <Text style={styles.jewellerytext}>Bags</Text>
            </View>
            <FlatList
                data={data}
                renderItem={renderItem}
                numColumns={2}
                keyExtractor={item => item.id.toString()}
            />
        </View>
    );


};

export default BagsPage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
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
    view1: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 10,
        marginTop: "10%"
    },
    icon: {
        height: 40,
        width: 40
    },
    jewellerytext: {
        fontFamily: "PoppinsBold",
        fontSize: 20,
        paddingTop: 10,
        paddingLeft: 10
    },
    desctext: {
        fontFamily: "PoppinsBold",
    },
    desc1: {
        fontFamily: "PoppinsRegular",
        color: "grey"
    }
});
