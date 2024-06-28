import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';

const NewArrivalsPage = () => {
    const [data, setData] = useState([]); 
    const getAPI = async () => {
        const url = "http://192.168.1.98:3000/newarrivals";
        const result = await fetch(url);
        const data = await result.json();
        setData(data);
    };

    useEffect(() => {
        getAPI();
    }, []);

    const renderItem = ({ item }) => (
        <View style={styles.itemContainer}>
            <Image source={{ uri: item.image }} style={styles.image} />
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>TestPage</Text>
            <FlatList
                data={data}
                renderItem={renderItem}
                numColumns={2}
                keyExtractor={item => item.id.toString()}
            />
        </View>
    );


};

export default NewArrivalsPage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    list: {
        // alignItems: 'center',
    },
    itemContainer: {
        marginBottom: 10,
        alignItems: 'center',
        borderWidth: 1,
        justifyContent: "center"
    },
    image: {
        width: 100,
        height: 100,
    },
});
