import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, ScrollView, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const EditPersonalDetails = () => {
  const navigation = useNavigation();
  const [data, setData] = useState('');
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [email, setEmail] = useState(null);
  const [age, setAge] = useState('');
  const [id, setId] = useState();
  const [pressedComponent, setPressedComponent] = useState(null);

  const getStorage = async () => {
    try {
      const getdata = await AsyncStorage.getItem('userdata');
      if (getdata !== null) {
        const parsedata = JSON.parse(getdata);
        setData(parsedata[0]);
        setId(parsedata[0].id)
        console.log('parsedata', parsedata[0].email);
      }
    } catch (err) {
      console.log('err', err);
    }
  };

  const putData = async () => {
    try {
      const url = await axios.put(`http://192.168.1.71:3000/users/${id}`,
        {
          "email": email?email:data.email,
          "username": username?username:data.username,
          "favourites": [],
          "password": password?password:data.password,
          "id": data.id,
          "address": data.address,
          "cart": data.cart
        }
      )
    }
    catch (err) {
      console.log('error in putting data', err)
    }
  }

  const showAlert = () => {
    Alert.alert(
      'Notice',
      'Login for changes to take effect',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => {
            putData();
            navigation.navigate('LoginPage');
          },
        },
      ],
      { cancelable: false }
    );
  };

  useEffect(() => {
    getStorage();
  }, []);


  useEffect(() => {
    if (data) {
      console.log('Updated data:', data);
      console.log('id', id)
    }
  }, [data, id, pressedComponent]);


  return (
    <View style={styles.container}>
      <View style={styles.view1}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require("../../Icons/Back.png")} style={styles.icon} />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View style={styles.view2}>
          <Image source={require("../../Icons/profile.png")} style={styles.profilepic} />
          <Text style={styles.username}>{data.username}</Text>
        </View>
        <View style={styles.view3}>
          <Text style={styles.editprofile}>Edit Details</Text>
          <Image source={require("../../Icons/Edit.png")} />
        </View>
        <View>
          <View style={styles.inputview1}>
            <Text style={styles.inputusername}>Username</Text>
            <TextInput
              style={styles.inputbox}
              value={username}
              placeholder={data.username}
              onChangeText={text => setUsername(text)}
            />
          </View>
          <View style={styles.inputview1}>
            <Text style={styles.inputusername}>Email</Text>
            <TextInput
              style={styles.inputbox}
              value={email}
              placeholder={data.email}
              onChangeText={text => setEmail(text)}
            />
          </View>
          <View style={styles.inputview1}>
            <Text style={styles.inputusername}>Password</Text>
            <TextInput
              style={styles.inputbox}
              value={password}
              placeholder="password"
              onChangeText={text => setPassword(text)}
            />
          </View>
          <View style={styles.inputview1}>
            <Text style={styles.inputusername}>Age</Text>
            <TextInput
              style={styles.inputbox}
              value={age}
              placeholder="age"
              onChangeText={text => setAge(text)}
              maxLength={2}
            />
          </View>
          <View style={styles.inputview1}>
            <View>
              <Text style={styles.inputusername}>Gender</Text>
            </View>
            <View style={styles.buttoncontainer}>
              <TouchableOpacity style={[styles.button1, pressedComponent === 'Male' && styles.changecolor]} onPress={() => setPressedComponent('Male')}>
                <View >
                  <Text style={styles.text1}>Male</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.button1, pressedComponent === 'Female' && styles.changecolor]} onPress={() => setPressedComponent('Female')}>
                <View >
                  <Text style={styles.text1}>Female</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.lastview}>
          <TouchableOpacity onPress={showAlert}>
            <View style={styles.savebox}>
              <Text style={styles.sctext}>Save Changes</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
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
  view2: {
    height: "15%",
    alignItems: "center",
  },
  profilepic: {
    height: 60,
    width: 60
  },
  username: {
    fontFamily: "PoppinsBold",
    fontSize: 18
  },
  editprofile: {
    fontFamily: "PoppinsBold",
    fontSize: 22,
  },
  inputbox: {
    borderBottomWidth: 1,
    fontSize: 14,
    fontFamily: "PoppinsMedium",
    marginBottom: "2%"
  },
  inputview1: {
    marginHorizontal: "5%"
  },
  inputusername: {
    fontFamily: "PoppinsBold",
    fontSize: 16
  },
  view3: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: "5%",
    marginBottom: "2%",
    marginTop: "15%"
  },
  buttoncontainer: {
    flexDirection: "row"
  },
  button1: {
    height: 35,
    width: "25%",
    marginRight: "3%",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1
  },
  text1: {
    fontFamily: "PoppinsBold",
    fontSize: 16
  },
  changecolor: {
    borderColor: "blue"
  },
  savebox: {
    height: 50,
    width: "50%",
    backgroundColor: "black",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  lastview: {
    marginTop: "10%",
    marginLeft: "5%"
  },
  sctext: {
    color: "white",
    fontFamily: "PoppinsBold",
    fontSize: 16
  }
});