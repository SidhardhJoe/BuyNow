import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const EditAddressPage = () => {
  const navigation = useNavigation();
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [phone, setPhone] = useState('');
  const [code, setCode] = useState('');
  const [country, setCountry] = useState('');
  const [data, setData] = useState('');

  const getApi = async () => {
    try {
      const get = await AsyncStorage.getItem("cartValues");
      const val = JSON.parse(get)
      console.log('val', val.data)
      setData(val)
    } catch (err) {
      console.log("err", err)
    }
  }

  const postaData = async () => {
    console.log('data.data.email', data.data.id)
    try {
      const response = await axios.put(`http://192.168.1.18:3000/users/${data?.data?.id}`, {
        "cart": data.data.cart,
        "email": data.data.email,
        "favourites": [],
        "id": data.data.id,
        "password": data.data.password,
        "username": data.data.username,
        "address": {
          street,
          city,
          state,
          phone,
          code,
          country
        }
        ,
      })
      navigation.navigate("PaymentPage")
    } catch (err) {
      console.log('err', err)
    }
  }




  useEffect(() => {
    getApi()
  }, [])


  return (
    <ScrollView style={{backgroundColor:"white"}}>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View style={styles.view1}>
            <Image source={require("../Icons/Back.png")} />
          </View>
        </TouchableOpacity>
        <View style={styles.view2} >
          <Text style={styles.editadd}>Edit address</Text>
        </View>
        <View style={styles.view3}>
          <View>
            <Text style={styles.toptext}>Street</Text>
            <TextInput
              style={styles.inputbox}
              value={street}
              onChangeText={text => setStreet(text)}
              placeholder="Street name"
            />
          </View>
          <View>
            <Text style={styles.toptext}>City</Text>
            <TextInput
              style={styles.inputbox}
              value={city}
              onChangeText={text => setCity(text)}
              placeholder="City"
            />
          </View>
          <View>
            <Text style={styles.toptext}>State</Text>
            <TextInput
              style={styles.inputbox}
              value={state}
              onChangeText={text => setState(text)}
              placeholder="State"
            />
          </View>
          <View>
            <Text style={styles.toptext}>Phone</Text>
            <TextInput
              style={styles.inputbox}
              value={phone}
              onChangeText={text => setPhone(text)}
              placeholder="Phone no"
            />
          </View>
          <View>
            <Text style={styles.toptext}>Code</Text>
            <TextInput
              style={styles.inputbox}
              value={code}
              onChangeText={text => setCode(text)}
              placeholder="Zipcode"
            />
          </View>
          <View>
            <Text style={styles.toptext}>Country</Text>
            <TextInput
              style={styles.inputbox}
              value={country}
              onChangeText={text => setCountry(text)}
              placeholder="Country"
            />
          </View>
        </View>
        <TouchableOpacity style={styles.savechangebox} onPress={postaData}>
          <View>
            <Text style={styles.sct}>Save Changes</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

export default EditAddressPage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  view1: {
    marginTop: "12%",
    paddingHorizontal: 20
  },
  view2: {
    marginTop: "5%",
    paddingHorizontal: 20
  },
  editadd: {
    fontFamily: "PoppinsBold",
    fontSize: 20
  },
  inputbox: {
    borderBottomWidth: 1,
    fontSize: 16,
    fontFamily: "PoppinsMedium",
    position: 'relative',
    width: "90%",
    marginBottom: "5%"
  },
  view3: {
    marginTop: 30,
    marginHorizontal: 20
  },
  toptext: {
    fontFamily: "PoppinsBold"
  },
  savechangebox: {
    height: "7%",
    width: "60%",
    backgroundColor: "black",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "20%",
    marginTop: "10%",
    marginBottom:"10%"
  },
  sct: {
    color: "white",
    fontFamily: "PoppinsBold",
    fontSize: 16
  }
})