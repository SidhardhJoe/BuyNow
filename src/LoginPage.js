import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const LoginPage = () => {
  return (
    <View style={styles.container}>
      <View>
        <Image source={require("../Images/Logo.png")} style={styles.logo} />
      </View>
      <View>
        <Text style={styles.welcome}>Welcome!</Text>
        <Text style={styles.plos}>Please login or sign up to continue our app</Text>
      </View>
    </View>
  )
}

export default LoginPage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  logo: {
    height: 80,
    width: 130,
    marginTop: 60,
    marginLeft: 115
  },
  welcome:{
    fontFamily:"PoppinsBold",
    fontSize:20,
    marginLeft:10,
    marginTop:20
  },
  plos:{
    fontFamily:"PoppinsRegular",
    color:"grey",
    marginLeft:10
  }
})