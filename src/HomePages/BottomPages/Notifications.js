import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import axios from 'axios';

const Notifications = () => {
  const [data, setData] = useState([]);

  const getApi = async () => {
    try {
      const response = await axios.get("http://192.168.1.71:3000/notifications");
      if (response.data.length > 0) {
        setData(response.data);
        console.log('response', response.data);
      } else {
        console.log('error in getting data');
      }
    } catch (err) {
      console.log('error in api', err);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      getApi();
    }, [])
  );

  const renderItem = ({ item }) => (
    <View style={styles.flatlistcontainer}>
      <View style={{flexDirection:"row"}}>
        <View style={styles.imgview}>
          <Image source={{ uri: item.image }} style={styles.profilepic} />
        </View>
        <View>
          <Text style={styles.flatname}>{item.name}</Text>
          <Text style={styles.flatcontent}>{item.content}</Text>
          <Text style={styles.flattime}>{item.time} hour ago</Text>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.view1}>
        <Image source={require("../../../Icons/Bell.png")} style={styles.icon} />
      </View>
      <Text style={styles.notitxt}>Notifications</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export default Notifications;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  view1: {
    marginTop: "12%",
    paddingHorizontal: 20
  },
  icon: {
    height: 30,
    width: 30,
  },
  notitxt: {
    padding: 20,
    fontFamily: "PoppinsBold",
    fontSize: 22
  },
  profilepic: {
    height: 55,
    width: 55,
    borderRadius:25,
    paddingVertical:15
  },
  flatlistcontainer: {
    width:"70%"
  },
  imgview:{
    justifyContent:"center",
    alignItems:"center",
    paddingHorizontal:10
  },
  flatname:{
    fontFamily:"PoppinsBold"
  },
  flatcontent:{
    fontFamily:"PoppinsRegular",
    fontSize:10,
    textAlign:"justify"
  },
  flattime:{
    fontFamily:"PoppinsRegular",
    fontSize:8,
    color:"grey"
  }

});
