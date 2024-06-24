import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native'


const LoginPage = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const toggleSecureTextEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  return (
    <View style={styles.container}>
      <View>
        <Image source={require("../Images/Logo.png")} style={styles.logo} />
      </View>
      <View>
        <Text style={styles.welcome}>Welcome!</Text>
        <Text style={styles.plos}>Please login or sign up to continue our app</Text>
      </View>
      <View style={styles.credentials}>
        <View>
          <Text style={styles.email}>Email</Text>
          <TextInput style={styles.textinput}
            value={email}
            onChangeText={text => setEmail(text)}
            keyboardType='email-address' />
        </View>
        <View>
          <Text style={styles.password}>Password</Text>
          <View style={{ flexDirection: "row", width: 300, borderBottomWidth: 1 }}>
            <TextInput style={styles.textinput1}
              value={password}
              onChangeText={text => setPassword(text)}
              secureTextEntry={secureTextEntry} />
            <TouchableOpacity onPress={toggleSecureTextEntry} style={styles.icon}>
              <Icon name={secureTextEntry ? 'eye-off' : 'eye'}
                size={24}
                color="grey" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View>
        <TouchableOpacity onPress={()=>navigation.navigate('SuccessPage')}>
          <View style={styles.loginbox}>
            <Text style={styles.logintext}>Login</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default LoginPage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  logo: {
    height: 80,
    width: 130,
    marginTop: 60,
    marginLeft: 115
  },
  welcome: {
    fontFamily: "PoppinsBold",
    fontSize: 20,
    marginLeft: 20,
    marginTop: 20
  },
  plos: {
    fontFamily: "PoppinsRegular",
    color: "grey",
    marginLeft: 20
  },
  credentials: {
    marginTop: 30,
    marginLeft: 20
  },
  email: {
    fontFamily: "PoppinsBold"
  },
  textinput: {
    borderBottomWidth: 1,
    height: 24,
    fontSize: 16,
    fontFamily: "PoppinsMedium",
    width: 300
  },
  password: {
    fontFamily: "PoppinsBold",
    marginTop: 15
  },
  textinput1: {
    height: 24,
    fontSize: 16,
    fontFamily: "PoppinsMedium",
    width: 280
  },
  loginbox: {
    height: 45,
    width: 200,
    backgroundColor: "black",
    marginTop: 30,
    marginLeft: 77,
    borderRadius: 30
  },
  logintext: {
    color: "white",
    fontFamily: "PoppinsMedium",
    fontSize: 18,
    textAlign: "center",
    marginTop: 8
  }
})