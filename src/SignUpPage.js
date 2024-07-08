import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, Alert } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import CheckBox from 'expo-checkbox';
import axios from 'axios';

const SignUpPage = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmpassword] = useState('');
  const [isSelected, setSelection] = useState(false);
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const toggleSecureTextEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const handlePress = async() => {
    if (password != confirmpassword) {
      Alert.alert("Password not same")
    } else if (username === '') {
      Alert.alert("Enter Username")
    } else if (email === '') {
      Alert.alert("Enter Email")
    } else if (isSelected === false) {
      Alert.alert("Accept terms and conditions")
    } else {
      try {
        const response = await axios.post('http://192.168.1.18:3000/users',{
          username,
          email,
          password,
          cart:[],
          favourites:[],
          address:{}
        })
      navigation.navigate('LoginPage')
        
      } catch (error) {
        console.log('error', error)
      }
    }
  }
  return (
    <KeyboardAvoidingView
      style={styles.mainview}
      behavior={Platform.OS === 'ios' ? 'height' : 'padding'}>
      <View style={styles.container}>
        <View style={styles.imgcontainer}>
          <Image source={require("../Images/Logo.png")} style={styles.logo} />
        </View>
        <View>
          <Text style={styles.welcome}>Sign Up</Text>
          <Text style={styles.plos}>Create a new account</Text>
        </View>
        <View style={styles.credentials}>
          <View>
            <Text style={styles.username}>User Name</Text>
            <TextInput style={styles.inputbox}
              value={username}
              onChangeText={text => setUsername(text)}
            />
          </View>
          <View>
            <Text style={styles.email}>Email</Text>
            <TextInput style={styles.inputbox}
              value={email}
              onChangeText={text => setEmail(text)}
              keyboardType='email-address'
            />
          </View>
          <View>
            <Text style={styles.email}>Password</Text>
            <TextInput style={styles.inputbox}
              value={password}
              onChangeText={text => setPassword(text)}
              secureTextEntry={secureTextEntry}
            />
            <TouchableOpacity onPress={toggleSecureTextEntry} style={styles.icon}>
              <Icon name={secureTextEntry ? 'eye-off' : 'eye'}
                size={24}
                color="grey" />
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.email}>Confirm Password</Text>
            <TextInput style={styles.inputbox}
              value={confirmpassword}
              onChangeText={text => setConfirmpassword(text)}
              secureTextEntry={secureTextEntry}
            />
            <TouchableOpacity onPress={toggleSecureTextEntry} style={styles.icon}>
              <Icon name={secureTextEntry ? 'eye-off' : 'eye'}
                size={24}
                color="grey" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.checkview}>
          <CheckBox
            value={isSelected}
            onValueChange={setSelection}
            color={isSelected ? 'black' : undefined}
            style={styles.checked}
          />
          <Text style={styles.termstext}>By accepting you agree to the terms and conditions</Text>
        </View>
        <View style={styles.lastview}>
          <TouchableOpacity style={styles.login} onPress={handlePress}>
            <View>
              <Text style={styles.logintext}>Register</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  )
}

export default SignUpPage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
  },
  logo: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
  welcome: {
    fontFamily: "PoppinsBold",
    fontSize: 20,
    marginLeft: 20,
  },
  plos: {
    fontFamily: "PoppinsRegular",
    color: "grey",
    marginLeft: 20
  },
  credentials: {
    marginTop: 30,
    marginHorizontal: 20
  },
  username: {
    fontFamily: "PoppinsBold"
  },
  inputbox: {
    borderBottomWidth: 1,
    fontSize: 16,
    fontFamily: "PoppinsMedium",
    position: 'relative'
  },
  email: {
    marginTop: 10,
    fontFamily: "PoppinsBold"
  },
  icon: {
    position: 'absolute',
    right: 0,
    top: 30
  },
  imgcontainer: {
    height: 100,
    width: '100%',
    marginBottom: "5%"
  },
  mainview: {
    flex: 1
  },
  checked: {
    height: 15,
    width: 15,
    marginTop: "3%"
  },
  checkview: {
    flexDirection: "row",
    marginHorizontal: 20,
    marginTop: 20,
    justifyContent: "space-between",
    gap: 5
  },
  termstext: {
    fontFamily: "PoppinsRegular",
    color: "grey"
  },
  login: {
    height: 50,
    width: "80%",
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30

  },
  logintext: {
    color: "white",
    fontFamily: "PoppinsMedium",
    fontSize: 18
  },
  lastview: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20
  }
})