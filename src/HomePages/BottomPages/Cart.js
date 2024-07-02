import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useFocusEffect} from'@react-navigation/native'
const Cart = () => {
  const [value, setValue]=useState([]);

  const getAPI = async () => {
    // try {
    //   const userdata = await AsyncStorage.getItem("userdata"); // calling data from asyncStorage which was saved from login page
    //   if (userdata) { // if there is any user data
    //     const userdataval = JSON.parse(userdata); // parsing the data which we stringify'ed
    //     setVal(userdataval[0].cart); // val is now userdataval
    //     console.log("User Data:", userdataval[0].cart);
    //   } else {
    //     console.log("No user data found in AsyncStorage");
    //   }
    // } catch (err) {
    //   setError('Failed to fetch data');
    //   console.error("Error fetching cart data:", err)
    // }
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // try{
    //   const userdata= await AsyncStorage.getItem("cartValues")
    //   if(userdata){
    //     const userdataval=JSON.parse(userdata);
    //     const finalval =userdataval.data.cart
    //     setVal(finalval)
    //     console.log("final value", val )
    //   }else{
    //     console.log("error")
    //   }
    // }catch(err){
    //   setError('Failed to fetch data')
    //   console.log("error",setError)
    // }

    try{
      const getdata = await AsyncStorage.getItem("cartValues")
      if(getdata){
        const changeval=JSON.parse(getdata);
        const changevalagain=changeval.data
        console.log('changevalagain', changevalagain)
        setValue(changevalagain.cart)
        // console.log("usestate stored value", value)
      }else{
        console.log("no data returned")
      }
    }catch(err){
      console.log("error", err)
    }






  };
  useFocusEffect(
    React.useCallback(()=>{
    getAPI();

    },[])
  )

  useEffect(() => {
    getAPI();
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.image }} style={styles.itemImage} />
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.view1}>
        <TouchableOpacity>
          <Image source={require("../../../Icons/Search.png")} style={styles.icon} />
        </TouchableOpacity>
      </View>
      <View style={styles.view2}>
        <Text style={styles.mycarttext}>My Cart</Text>
      </View>
      <View style={styles.flatlistview}>
        {value&&<FlatList
          data={value}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
          showsVerticalScrollIndicator={false}
        />}
      </View>
      <View style={styles.view3}>
        <View style={styles.details}>
          <Text style={styles.innertext}>Subtotal:</Text>
          <Text style={styles.innertext1}>$500</Text>
        </View>
        <View style={styles.details}>
          <Text style={styles.innertext}>Shipping:</Text>
          <Text style={styles.innertext1}>$17</Text>
        </View>
        <View style={styles.details}>
          <Text style={styles.innertext}>Checkout</Text>
          <Text style={styles.innertext1}>$517</Text>
        </View>
      </View>
      <View style={styles.view4}>
        <TouchableOpacity style={styles.outboxptc}>
          <View>
            <Text style={styles.ptctext}>Proceed to Checkout</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Cart;

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
  icon: {
    height: 40,
    width: 40,
  },
  view2: {
    marginLeft: 20
  },
  mycarttext: {
    fontFamily: "PoppinsBold",
    fontSize: 20
  },
  flatlistview: {
    height: "50%",
    backgroundColor: "grey",
    marginHorizontal: 20
  },
  view3: {
    height: "18%",
    marginTop: "5%",
    marginHorizontal: 20,
    borderRadius: 10,
    borderWidth: 1,
    justifyContent: "center"
  },
  view4: {
    alignItems: "center"
  },
  outboxptc: {
    height: "28%",
    width: "80%",
    backgroundColor: "black",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 13
  },
  ptctext: {
    color: "white",
    fontFamily: "PoppinsMedium",
    fontSize: 18
  },
  details: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10
  },
  innertext: {
    fontFamily: "PoppinsBold"
  },
  innertext1: {
    fontFamily: "PoppinsBold",
    fontSize: 16
  },
  itemContainer: {
    padding: 10,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderColor: '#ccc'
  },
  itemImage: {
    width: 100,
    height: 100,
  }
});
