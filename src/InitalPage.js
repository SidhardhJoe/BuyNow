import { StyleSheet, ImageBackground } from 'react-native'
import React,{useEffect} from 'react'
import { useNavigation } from '@react-navigation/native';


const InitalPage = () => {
    const navigation  = useNavigation();


  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('InitialPage2'); 
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

    return (
        <ImageBackground source={require("../Images/InitialPage.png")} style={styles.background}>
        </ImageBackground>
    )
}

export default InitalPage

const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'cover', 
        justifyContent: 'center',
        alignItems: 'center',
    }
})