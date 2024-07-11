import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const MyOderPage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.view1}>
        <Text style={styles.txt6}>Track your order</Text>
        <Image source={require("../../Icons/suitcase.png")} style={styles.suitcase}/>
      </View>
      <View style={styles.view2}>
        <View style={styles.view2sub1}>
          <View>
            <Text style={styles.txt1}>4565 4589 3264 2574</Text>
            <Text style={styles.txt2}>DHL Express</Text>
          </View>
          <View>
            <Text style={styles.txt3}>Transit</Text>
          </View>
        </View>
        <View style={styles.view2sub2}>
          <Image source={require("../../Images/Transit.png")} style={styles.transit}/>
        </View>
        <View style={styles.view2sub3}>
          <View>
            <Text style={styles.txt4}>26 June 2024</Text>
            <Text style={styles.txt5}>Mahatten, NewYork</Text>
          </View>
          <View>
            <Text style={styles.txt4}>30 June 2024</Text>
            <Text style={styles.txt5}>Mumbai, Maharashtra</Text>
          </View>
        </View>
      </View>
      <View style={styles.view3}>
        <Text style={styles.txt6}>Tracking</Text>
      </View>
      <View style={styles.view4}>
        <View style={styles.view4sub1}>
          <Image source={require("../../Icons/package.png")} style={styles.suitcase}/>
        </View>
        <View style={styles.view4sub2}>
          <Text style={styles.txt7}>US123458746</Text>
          <Text style={styles.txt8}>Mumbai</Text>
        </View>
        <View style={styles.view4sub3}>
          <Text style={styles.txt9}>In Transit</Text>
        </View>
      </View>
      <View style={styles.view4}>
        <View style={styles.view4sub1}>
          <Image source={require("../../Icons/package.png")} style={styles.suitcase}/>
        </View>
        <View style={styles.view4sub2}>
          <Text style={styles.txt7}>US123632446</Text>
          <Text style={styles.txt8}>Mumbai</Text>
        </View>
        <View style={styles.view4sub3}>
          <Text style={styles.txt9}>In Transit</Text>
        </View>
      </View>
      <View style={styles.view4}>
        <View style={styles.view4sub1}>
          <Image source={require("../../Icons/package.png")} style={styles.suitcase}/>
        </View>
        <View style={styles.view4sub2}>
          <Text style={styles.txt7}>U4512458746</Text>
          <Text style={styles.txt8}>Mumbai</Text>
        </View>
        <View style={styles.view4sub3}>
          <Text style={styles.txt9}>Delivered</Text>
        </View>
      </View>
      <View style={styles.view4}>
        <View style={styles.view4sub1}>
          <Image source={require("../../Icons/package.png")} style={styles.suitcase}/>
        </View>
        <View style={styles.view4sub2}>
          <Text style={styles.txt7}>US12366446</Text>
          <Text style={styles.txt8}>Mumbai</Text>
        </View>
        <View style={styles.view4sub3}>
          <Text style={styles.txt9}>Delivered</Text>
        </View>
      </View>
      <View style={styles.view4}>
        <View style={styles.view4sub1}>
          <Image source={require("../../Icons/package.png")} style={styles.suitcase}/>
        </View>
        <View style={styles.view4sub2}>
          <Text style={styles.txt7}>US189898746</Text>
          <Text style={styles.txt8}>Mumbai</Text>
        </View>
        <View style={styles.view4sub3}>
          <Text style={styles.txt9}>Cancelled</Text>
        </View>
      </View>
    </View>
  )
}

export default MyOderPage

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"white"
  },
  view1:{
    marginTop:"15%",
    flexDirection:"row",
    marginHorizontal:"5%",
    justifyContent:"space-between"
  },
  suitcase:{
    height:25,
    width:25,
  },
  view2:{
    height:"20%",
    width:"80%", 
    marginLeft:"10%",
    marginTop:"5%",
    borderRadius:10,
    borderWidth:1,
    borderColor:"grey"
  },
  view2sub1:{
    flexDirection:"row",
    marginHorizontal:15,
    justifyContent:"space-between",
    marginTop:"1%"
  },
  txt1:{
    fontFamily:"PoppinsBold"
  },
  txt2:{
    fontFamily:"PoppinsBold",
    color:"grey",
    fontSize:12
  },
  txt3:{
    fontFamily:"PoppinsBold"
  },
  transit:{
    width:280,
    height:20
  },
  view2sub2:{
    marginTop:"3%"
  },
  view2sub3:{
    flexDirection:"row",
    justifyContent:"space-between",
    marginHorizontal:15,
    marginTop:"4%"
  },
  txt4:{
    fontFamily:"PoppinsBold",
    fontSize:12
  },
  txt5:{
    fontFamily:"PoppinsBold",
    fontSize:11
  },
  txt6:{
    fontFamily:"PoppinsBold",
    fontSize:22
  },
  view3:{
    padding:20
  },
  view4:{
    height:"9%",
    width:"80%",
    borderWidth:1,
    marginLeft:"10%",
    borderRadius:10,
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
    marginBottom:"3%"
  },
  view4sub1:{
    height:"70%",
    width:"18%",
    backgroundColor:"#F5F5F5",
    borderRadius:10,
    justifyContent:"center",
    alignItems:"center",
    marginLeft:"5%"

  },
  txt7:{
    fontFamily:"PoppinsBold",
    fontSize:14
  },
  txt8:{
    fontFamily:"PoppinsBold",
    color:"grey",
    fontSize:12
  },
  view4sub3:{
    justifyContent:"center",
    alignItems:"center",
    marginRight:"5%"
  },
  txt9:{
    fontFamily:"PoppinsBold",
    color:"grey"
  }
})