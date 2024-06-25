import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';


const Home = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.view1}>
        <TouchableOpacity>
          <Image source={require("../../../Icons/Back.png")} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require("../../../Icons/Search.png")} style={styles.icon} />
        </TouchableOpacity>
      </View>
      <View style={styles.view2}>
        <Text style={styles.catext}>Categories</Text>
      </View>
      <View style={styles.boxcontainer}>
        <TouchableOpacity>
          <View style={styles.box}>
            <View style={{ flexDirection: "row", gap: 2 }}>
              <Image source={require("../../../Icons/Cart.png")} style={styles.sideicon} />
              <Text style={styles.text}>New Arrivals</Text>
            </View>
            <View style={styles.box1}>
              <Text style={styles.text1}>25 Items</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.box}>
            <View style={{ flexDirection: "row", gap: 2 }}>
              <Image source={require("../../../Icons/Clothes.png")} style={styles.sideicon} />
              <Text style={styles.text}>Clothes</Text>
            </View>
            <View style={styles.box1}>
              <Text style={styles.text1}>18 Items</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.box}>
            <View style={{ flexDirection: "row", gap: 2 }}>
              <Image source={require("../../../Icons/Bags.png")} style={styles.sideicon} />
              <Text style={styles.text}>Bags</Text>
            </View>
            <View style={styles.box1}>
              <Text style={styles.text1}>35 Items</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.box}>
            <View style={{ flexDirection: "row", gap: 2 }}>
              <Image source={require("../../../Icons/Shoes.png")} style={styles.sideicon} />
              <Text style={styles.text}>Shoes</Text>
            </View>
            <View style={styles.box1}>
              <Text style={styles.text1}>20 Items</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.box}>
            <View style={{ flexDirection: "row", gap: 2 }}>
              <Image source={require("../../../Icons/Electronics.png")} style={styles.sideicon} />
              <Text style={styles.text}>Electronics</Text>
            </View>
            <View style={styles.box1}>
              <Text style={styles.text1}>250 Items</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.box}>
            <View style={{ flexDirection: "row", gap: 2 }}>
              <Image source={require("../../../Icons/Ring.png")} style={styles.sideicon} />
              <Text style={styles.text}>Jewelry</Text>
            </View>
            <View style={styles.box1}>
              <Text style={styles.text1}>25 Items</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Home

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
  view2: {
    paddingLeft: 20,
    marginTop: "5%"
  },
  catext: {
    fontFamily: "PoppinsBold",
    fontSize: 20
  },
  icon: {
    height: 40,
    width: 40
  },
  boxcontainer: {
    alignItems: "center",
    paddingTop: 20,
  },
  box: {
    paddingVertical: 18,
    marginBottom: 10,
    width: "80%",
    backgroundColor: "black",
    borderRadius: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20
  },
  text: {
    fontFamily: "PoppinsMedium",
    color: "white",
    fontSize: 18
  },
  text1: {
    color: "white",
    fontFamily: "PoppinsRegular",
    fontSize: 12
  },
  box1: {
    paddingLeft: 25
  },
  sideicon: {
    height: 24,
    width: 24
  }
})