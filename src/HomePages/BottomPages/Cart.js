import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Cart = ({route}) => {
  const navigation = useNavigation();
  const [cartData, setCartData] = useState([]);
  const [error, setError] = useState(null);
  // const {id}=route.params

  const getAPI = async () => {
    try {
      const pass = await AsyncStorage.getItem("cartValues"); // getting all data of the user from product details page
      if (pass) {
        const passval = JSON.parse(pass); // parsing the value and storing it in passval
        setCartData(passval.data.cart); // setting cartData to passval.data.cart
        console.log("Cart Data: ", passval.data.cart);
        // console.log("id value", id)
      }
    } catch (err) {
      setError('Failed to fetch data');
      console.error("Error fetching cart data: ", err);
    }
  };

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
        <FlatList
          data={cartData}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
          showsVerticalScrollIndicator={false}
        />
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
