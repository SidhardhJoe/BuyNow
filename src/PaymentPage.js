import { StyleSheet, Text, View, Image, FlatList, ScrollView, TouchableNativeFeedback } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';

const PaymentPage = () => {
  const navigation = useNavigation();
  const [val, setVal] = useState([]);
  const [address, setAddress] = useState({});

  const getApi = async () => {
    try {
      const data = await AsyncStorage.getItem("cartValues");
      if (data) {
        const changeval = JSON.parse(data);
        const changevalagain = changeval.data;
        console.log('changevalagain', changevalagain)
        setVal(changevalagain?.cart);
        setAddress(changevalagain?.address);
        console.log('changevalagaisadsadsadadn', changevalagain?.address);
      }
    } catch (err) {
      console.log('error', err);
    }
  };

  useEffect(() => {
    getApi();
  }, []);

  const renderItems = ({ item }) => {
    return (
      <View style={styles.containerflatlist}>
        <View style={styles.flatlistimageview}>
          <Image source={{ uri: item.image }} style={styles.flatlistimage} />
        </View>
        <View style={styles.bottomviewflatlist}>
          <Text style={styles.txtbold}>{item.description}</Text>
          <Text style={styles.txtgrey}>{item.desc}</Text>
          <Text style={styles.txtbold}>{item.price}</Text>
        </View>
      </View>
    )
  };
  return (
    <View style={styles.container}>
      <View style={styles.view1}>
        <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
          <Image source={require("../Icons/Back.png")} />
        </TouchableOpacity>
      </View>
      <View style={styles.view2}>
        <Text style={styles.da}>Delivery Address</Text>
        <TouchableOpacity onPress={()=>navigation.navigate('EditAddress')}>
          <Image source={require("../Icons/Settings.png")} />
        </TouchableOpacity>
      </View>
      <View style={styles.view3}>
        <View style={styles.view3sub}>
          <View style={styles.intxtview}>
            <Text style={styles.intxt1}>Street:</Text>
            <Text style={styles.intxt2}>Bluemoon Street 420</Text>
          </View>
          <View style={styles.intxtview}>
            <Text style={styles.intxt1}>City:</Text>
            <Text style={styles.intxt2}>Nagarcoil</Text>
          </View>
          <View style={styles.intxtview}>
            <Text style={styles.intxt1}>State/Province/Area:</Text>
            <Text style={styles.intxt2}>Tamil Nadu</Text>
          </View>
          <View style={styles.intxtview}>
            <Text style={styles.intxt1}>Phone No:</Text>
            <Text style={styles.intxt2}>6942042069</Text>
          </View>
          <View style={styles.intxtview}>
            <Text style={styles.intxt1}>ZipCode:</Text>
            <Text style={styles.intxt2}>658947</Text>
          </View>
          <View style={styles.intxtview}>
            <Text style={styles.intxt1}>Country Code:</Text>
            <Text style={styles.intxt2}>+91</Text>
          </View>
          <View style={styles.intxtview}>
            <Text style={styles.intxt1}>Country:</Text>
            <Text style={styles.intxt2}>India</Text>
          </View>
        </View>
      </View>
      <View style={styles.view2}>
        <Text style={styles.da}>Product Items</Text>
      </View>
      <View style={styles.flatlistview}>
        <FlatList
          data={val}
          renderItem={renderItems}
          keyExtractor={item => item.id.toString()}
          showsVerticalScrollIndicator={false}
        />
      </View>
      <View style={styles.view4}>
        <TouchableOpacity style={{ backgroundColor: 'black', padding: 15, borderRadius: 10 }} onPress={() => navigation.navigate('FinalNavPage')}>
          <Text style={styles.paymentext}>Proceed to Payment</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PaymentPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  view1: {
    marginTop: "12%",
    marginHorizontal: 12
  },
  da: {
    fontFamily: "PoppinsBold",
    fontSize: 20
  },
  view2: {
    padding: 18,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  view3: {
    height: "25%",
    width: "90%",
    marginHorizontal: "5%",
    borderRadius: 10,
    borderWidth: 1,
  },
  intxtview: {
    flexDirection: "row"
  },
  intxt1: {
    fontFamily: "PoppinsBold"
  },
  intxt2: {
    fontFamily: "PoppinsMedium",
    color: "grey"
  },
  view3sub: {
    justifyContent: "space-evenly",
    height: "100%",
    marginLeft: "2%"
  },
  flatlistview: {
    height: "25%",
    width: "90%",
    marginHorizontal: "5%",
    borderRadius: 10,
    borderWidth: 1
  },
  containerflatlist: {
    flexDirection: "row",
    padding: 5
  },
  flatlistimage: {
    height: 60,
    width: 50,
    borderRadius: 10,
  },
  txtbold: {
    fontFamily: "PoppinsBold",
    fontSize: 12
  },
  txtgrey: {
    fontFamily: "PoppinsRegular",
    fontSize: 12
  },
  flatlistimageview: {
    paddingRight: 10
  },
  paymentview: {
    height: "45%",
    width: "100%",
    backgroundColor: "black",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  view4: {
    width: "100%",
    height: "17%",
    justifyContent: "center",
    alignItems: "center",

  },
  paymentext: {
    fontFamily: "PoppinsBold",
    color: "white"
  }
});
