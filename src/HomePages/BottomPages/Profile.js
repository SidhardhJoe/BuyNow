import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native';

const Profile = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();

  const getApi = async () => {
    try {
      const data = await AsyncStorage.getItem("userdata")
      const dataparse = JSON.parse(data)
      setEmail(dataparse[0].email)
      setUsername(dataparse[0].username)
    }
    catch (err) {
      console.log("error", err)
    }
  }



  useEffect(() => {
    getApi();
  }, [])


  return (
    <View style={styles.container}>
      <View style={styles.view1}>
        <Image source={require("../../../Icons/Settings.png")} />
      </View>
      <View style={styles.view2}>
        <View style={styles.view2sub1}>
          <View style={styles.propicview}>
            <Image source={require("../../../Icons/profile.png")} style={styles.profilepic} />
          </View>
          <View style={styles.textview}>
            <Text style={styles.name1}>{username}</Text>
            <Text style={styles.email1}>{email}</Text>
          </View>
        </View>
      </View>
      <View style={styles.view3}>
        <View style={styles.view3sub}>
          <View style={styles.detailsrow}>
            <View style={{ flexDirection: "row", gap: 10 }}>
              <View style={styles.background}>
                <Image source={require("../../../Icons/User.png")} style={{ marginBottom: 5 }} />
              </View>
              <View>
                <Text style={styles.headertxt}>Personal Details</Text>
              </View>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('EditPersonalDetails')}>
              <View>
                <Image source={require("../../../Icons/Expand.png")} />
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.detailsrow}>
            <View style={{ flexDirection: "row", gap: 10 }}>
              <View style={styles.background1}>
                <Image source={require("../../../Icons/Bag.png")} style={{ marginBottom: 5 }} />
              </View>
              <View>
                <Text style={styles.headertxt}>My Order</Text>
              </View>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('MyOrderPage')}>
              <View>
                <Image source={require("../../../Icons/Expand.png")} />
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.detailsrow}>
            <View style={{ flexDirection: "row", gap: 10 }}>
              <View style={styles.background4}>
                <Image source={require("../../../Icons/package.png")} style={{ marginBottom: 5 }} />
              </View>
              <View>
                <Text style={styles.headertxt}>Shipping Address</Text>
              </View>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('EditAddress')} >
              <View>
                <Image source={require("../../../Icons/Expand.png")} />
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.detailsrow}>
            <View style={{ flexDirection: "row", gap: 10 }}>
              <View style={styles.background3}>
                <Image source={require("../../../Icons/Card.png")} style={{ marginBottom: 5 }} />
              </View>

              <View>
                <Text style={styles.headertxt}>My Card</Text>
              </View>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('EditCard')}>
              <View>
                <Image source={require("../../../Icons/Expand.png")} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.view4} onPress={()=>navigation.navigate('LoginPage')}>
        <View >
          <Text style={styles.view4txt}>Logout</Text>
        </View>
      </TouchableOpacity>
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
    marginTop: "8%",
    alignItems: "center",
    height: "12%",


  },
  view2sub1: {
    width: "80%",
    height: "100%",
    flexDirection: "row",
    borderWidth: 1,
    borderRadius: 10
  },
  name1: {
    fontFamily: "PoppinsBold",
    fontSize: 18
  },
  email1: {
    fontFamily: "PoppinsMedium",
    color: "grey",
    fontSize: 12
  },
  propicview: {
    justifyContent: "center",
    paddingHorizontal: 10
  },
  textview: {
    justifyContent: "center",
    height: "100%",
    width: "100%"
  },
  view3sub: {
    height: "65%",
    width: "80%",
    borderRadius: 10,
    borderWidth: 1,
    justifyContent: "space-evenly"
  },
  view3: {
    height: "55%",
    alignItems: "center",
    marginTop: "10%",
  },
  background: {
    height: "90%",
    width: "20%",
    backgroundColor: "#F5F5F5",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  detailsrow: {
    height: "12%",
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 15
  },
  headertxt: {
    fontFamily: "PoppinsBold",
    marginTop: 7
  },
  background1: {
    height: "90%",
    width: "25%",
    backgroundColor: "#F5F5F5",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  background2: {
    height: "90%",
    width: "21%",
    backgroundColor: "#F5F5F5",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  background4: {
    height: "90%",
    width: "19%",
    backgroundColor: "#F5F5F5",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  background3: {
    height: "90%",
    width: "26%",
    backgroundColor: "#F5F5F5",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  background5: {
    height: "90%",
    width: "25%",
    backgroundColor: "#F5F5F5",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  view4: {
    height: "7%",
    width: "50%",
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginLeft: "25%"
  },
  view4txt: {
    color: "white",
    fontFamily: "PoppinsMedium",
    fontSize: 20
  }
})