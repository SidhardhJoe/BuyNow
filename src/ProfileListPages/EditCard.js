import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

const EditCard = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [exp, setExp] = useState('');
  const [cvv, setCvv] = useState('');
  return (
    <ScrollView style={styles.container}>
      <View style={styles.view1}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require("../../Icons/Back.png")} />
        </TouchableOpacity>
        <Image source={require("../../Icons/Card.png")} style={styles.cardlogo} />
      </View>
      <Text style={styles.cardtxt}>Card Details</Text>


      <LinearGradient style={styles.cardview} colors={['#ABA9E0', '#ABC4F2', '#E0E3CE']}>
        <View style={styles.view1grad}>
          <Text style={styles.numberheader}>CARD NUMBER</Text>
          <Text style={styles.numbertxt}>{number}</Text>
        </View>
        <View style={styles.view2grad}>
          <View>
            <Text style={styles.numberheader}>CARDHOLDER NAME</Text>
            <Text style={styles.numbertxt}>{name}</Text>
          </View>
          <View>
            <Text style={styles.numberheader}>VALID THRU</Text>
            <Text style={styles.numbertxt}>{exp}</Text>
          </View>
        </View>
      </LinearGradient>


      <Text style={styles.cardtxt}>Edit Card</Text>
      <TextInput
        style={styles.inputbox1}
        placeholder={"Cardholder Name"}
        value={name}
        onChangeText={text => setName(text)}
      />
      <TextInput
        style={styles.inputbox1}
        placeholder={"Card Number"}
        value={number}
        onChangeText={text => setNumber(text)}
        maxLength={16}
        keyboardType='numeric'
      />
      <View style={{ flexDirection: "row" }}>
        <TextInput
          style={styles.inputbox2}
          placeholder={"Exp Date"}
          value={exp}
          onChangeText={text => setExp(text)}
          keyboardType='numeric'
          maxLength={4}
        />
        <TextInput
          style={styles.inputbox2}
          placeholder={"Cvv"}
          value={cvv}
          onChangeText={text => setCvv(text)}
          maxLength={3}
          keyboardType='numeric'
        />
      </View>
      <View style={styles.lastview}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.canceltxt}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.savetxt}>Save Card</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

export default EditCard

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  view1: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "10%",
    marginHorizontal: "6%"
  },
  cardlogo: {
    height: 40,
    width: 40,
    marginTop: "2%"
  },
  cardtxt: {
    padding: 20,
    fontFamily: "PoppinsBold",
    fontSize: 22
  },
  cardview: {
    height: 150,
    width: 280,
    marginLeft: "10%",
    borderRadius: 10,
  },
  inputbox1: {
    height: 35,
    width: "80%",
    borderWidth: 1,
    borderRadius: 5,
    marginLeft: "10%",
    marginBottom: "3%",
    borderColor: "#8e9eab",
    fontFamily: "PoppinsRegular",
    padding: 5
  },
  inputbox2: {
    height: 35,
    width: "35%",
    borderWidth: 1,
    borderRadius: 5,
    marginLeft: "10%",
    marginBottom: "3%",
    borderColor: "#8e9eab",
    fontFamily: "PoppinsRegular",
    padding: 5
  },
  lastview: {
    flexDirection: "row",
    marginTop: "25%",
    justifyContent: "space-between",
    marginHorizontal: 50
  },
  canceltxt: {
    fontFamily: "PoppinsBold",
    color: "red",
    fontSize: 18
  },
  savetxt: {
    fontFamily: "PoppinsBold",
    color: "#007AFF",
    fontSize: 18
  },
  numberheader: {
    fontFamily: "PoppinsRegular",
    color: "black",
    fontSize: 10,
  },
  numbertxt: {
    fontFamily: "PoppinsMedium",
    color: "black",
    fontSize: 18
  },
  view1grad: {
    padding: 25
  },
  view2grad:{
    flexDirection:"row",
    justifyContent:"space-between",
    marginHorizontal:20
  }
})