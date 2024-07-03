import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Profile = () => {
  const [username, setUsername]=useState();
  const [email, setEmail]=useState();

  const getApi = async() => {
    try{
      const data =await AsyncStorage.getItem("userdata")
      const dataparse = JSON.parse(data)
      setEmail(dataparse[0].email)
      setUsername(dataparse[0].username)
    }
    catch(err){
      console.log("error", err)
    }
  }



useEffect(()=>{
  getApi();
},[])


  return (
    <View style={styles.container}>
      <View style={styles.view1}>
        <Image source={require("../../../Icons/Settings.png")} />
      </View>
      <View style={styles.view2}>
        <View style={styles.view2sub1}>
          <View style={styles.propicview}>
            <Image source={require("../../../Images/profile.jpg")} style={styles.profilepic} />
          </View>
          <View style={styles.textview}>
            <Text style={styles.name1}>{username}</Text>
            <Text style={styles.email1}>{email}</Text>
          </View>
        </View>
      </View>
      <View style={styles.view3}>
        <View style={styles.view3sub}> 

        </View>
      </View>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  view1: {
    marginTop: "12%",
    justifyContent: "flex-end",
    flexDirection: "row",
    paddingHorizontal: 20
  },
  profilepic: {
    height: 60,
    width: 60,
    borderRadius: 5
  },
  view2: {
    marginTop: "5%",
    alignItems: "center",
    height: "12%",
   
  },
  view2sub1: {
    width: "80%",
    height: "100%",
    flexDirection:"row",
    borderWidth:1,
    borderRadius:10
  },
  name1:{
    fontFamily:"PoppinsBold",
    fontSize:18
  },
  email1:{
    fontFamily:"PoppinsMedium",
    color:"grey",
    fontSize:12
  },
  propicview:{
    justifyContent:"center",
    paddingHorizontal:10
  },
  textview:{
    justifyContent:"center",
    height:"100%",
    width:"50%"
  },
  view3sub:{
    height:"60%",
    width:"80%",
    borderRadius:10,
    borderWidth:1
  },
  view3:{
    height:"100%",
    alignItems:"center",
    marginTop:"10%",
  }
})