import { Button, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { BlurView } from 'expo-blur';

const BottomSheet = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Pressable onPress={() => navigation.goBack()} style={styles.topressable}>
            </Pressable>
            <BlurView
                experimentalBlurMethod='dimezisBlurView'
                intensity={90}
                tint="light"
                style={styles.detailsview}>
                <Button title='go back' onPress={() => navigation.goBack()} />
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
        width: "100%",
        backgroundColor: "black"
    }
})