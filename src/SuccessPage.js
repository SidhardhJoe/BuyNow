import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const SuccessPage = () => {
  const navigation=useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.view1}>
        <Image source={require("../Icons/accept.png")} style={styles.accept} />
        <Text style={styles.success}>Successful!</Text>
        <Text style={styles.desc}>You have successfully registered in our app and start working in it</Text>
      </View>

      <View style={styles.view2}>
        <TouchableOpacity style={styles.box} onPress={()=>navigation.navigate('BottomNav')} >
          <View >
            <Text style={styles.start}>Start Shopping</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default SuccessPage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center"
  },
  accept: {
    height: 50,
    width: 50,
    marginBottom: "5%"
  },
  view1: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  success: {
    fontSize: 22,
    fontFamily: "PoppinsBold"
  },
  desc: {
    textAlign: "center",
    marginHorizontal: 40,
    fontFamily: "PoppinsRegular",
    color: "grey"
  },
  box: {
    height: "30%",
    width: "80%",
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30
  },
  start: {
    color: "white",
    fontFamily: "PoppinsBold",
    fontSize: 18
  },
  view2: {
    justifyContent: "flex-end",
    paddingTop: 80, width: "100%",
    alignItems: "center"
  }
})