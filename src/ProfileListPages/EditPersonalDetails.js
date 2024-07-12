import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const EditPersonalDetails = () => {
  const navigation = useNavigation();
  const [data, setData]=useState([])

  const getStorage = async () =>{
    try{
      const getdata = await AsyncStorage.getItem("userdata")
      const parsedata = await JSON.parse(getdata)
      setData(parsedata)
      console.log('parsedata', data)
    }catch(err){
      console.log('err', err)
    }
  }

useEffect(()=>{
  getStorage();
},[])


  return (
    <View style={styles.container}>
      <View style={styles.view1}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require("../../Icons/Back.png")} style={styles.icon} />
        </TouchableOpacity>
      </View>
      <View style={styles.view2}>
        <Image source={require("../../Icons/profile.png")} style={styles.profilepic}/>
        <Text>Name</Text>
      </View>
    </View>
  )
}

export default EditPersonalDetails

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
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
  view2:{
    height:"20%",
    alignItems:"center"
  },
  profilepic:{
    height:60,
    width:60
  }
})