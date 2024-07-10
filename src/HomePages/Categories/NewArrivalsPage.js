import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

const NewArrivalsPage = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.view1}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <View >
                        <Image source={require("../../../Icons/Back.png")} style={styles.icon} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                    <View style={styles.profile}>
                        <Image source={require("../../../Icons/profile.png")} style={styles.icon} />
                    </View>
                </TouchableOpacity>
            </View>
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
    }
});
