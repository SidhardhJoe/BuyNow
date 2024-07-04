import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native';
import React, { useState } from 'react';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Cart = () => {
  const navigation = useNavigation();
  const [value, setValue] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const getAPI = async () => {
    try {
      const getdata = await AsyncStorage.getItem("cartValues"); // getting data from the product details page
      if (getdata) { // if data not empty
        const changeval = JSON.parse(getdata); // parsing data
        const changevalagain = changeval.data; // getting the data from the api, getting rid of other elements
        console.log('changevalagain', changevalagain);

        const total = changevalagain.cart.reduce((sum, item) => { // takes in 2 parameters, sum (value of previous iterations) and item(value of current item) 
          const price = parseFloat(item.price.replace('$', '')); // converts string to floating point values
          return sum + price; // returns sum+price
        }, 0); // setting initial value to 0

        setValue(changevalagain.cart);
        setTotalPrice(total);
        console.log('totalprice', total);
        await AsyncStorage.setItem("totalprice", JSON.stringify(totalPrice))
      } else {
        console.log("no data returned");
      }
    } catch (err) {
      console.log("error", err);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      getAPI();
    }, [])
  );

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <View style={styles.view5}>
        <View>
          <Image source={{ uri: item.image }} style={styles.itemImage} />
        </View>
        <View style={styles.detailstext}>
          <View>
            <Text style={styles.descriptiontext}>{item.description}</Text>
            <Text style={styles.desctext}>{item.desc}</Text>
          </View>
          <View>
            <Text style={styles.descriptiontext}>{item.price}</Text>
          </View>
        </View>
      </View>
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
        {value && (
          <FlatList
            data={value}
            renderItem={renderItem}
            keyExtractor={item => (item.id ? item.id.toString() : Math.random().toString())}
            showsVerticalScrollIndicator={false}
          />
        )}
      </View>
      <View style={styles.view3}>
        <View style={styles.details}>
          <Text style={styles.innertext}>Subtotal:</Text>
          <Text style={styles.innertext1}>${totalPrice.toFixed(2)}</Text>
        </View>
        <View style={styles.details}>
          <Text style={styles.innertext}>Shipping:</Text>
          <Text style={styles.innertext1}>$17.00</Text>
        </View>
        <View style={styles.details}>
          <Text style={styles.innertext}>Total:</Text>
          <Text style={styles.innertext1}>${(totalPrice + 17).toFixed(2)}</Text>
        </View>
      </View>
      <View style={styles.view4}>
        <TouchableOpacity style={styles.outboxptc} onPress={() => navigation.navigate('PaymentPage')}>
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
    borderRadius: 10
  },
  view5: {
    flexDirection: "row"
  },
  descriptiontext: {
    fontFamily: "PoppinsBold"
  },
  desctext: {
    fontFamily: "PoppinsRegular",
    fontSize: 14,
    color: "grey"
  },
  detailstext: {
    justifyContent: "space-between",
    marginHorizontal: 10,
    marginVertical: 2
  }
});
