import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const PaymentPage = () => {
    const navigation=useNavigation();
  return (
    <View style={styles.container}>
      <Text>PaymentPage</Text>
    </View>
  )
}

export default PaymentPage

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"white"
    }
})