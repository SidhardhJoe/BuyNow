import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Platform } from 'react-native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { useFonts } from 'expo-font';
import InitalPage from './src/InitalPage';
import InitialPage2 from './src/InitialPage2';
import LoginPage from './src/LoginPage';
import AdPage1 from './src/AdPages/AdPage1';
import Adpage2 from './src/AdPages/Adpage2';
import AdPage3 from './src/AdPages/AdPage3';
import SignUpPage from './src/SignUpPage';
import SuccessPage from './src/SuccessPage';
import BottomNav from './BottomNav';
import TestPage from './src/TestPage';



const LoadFonts = () => {
  return useFonts({
    PoppinsBold:require("./Fonts/Poppins-Bold.ttf"),
    PoppinsRegular:require("./Fonts/Poppins-Regular.ttf"),
    PoppinsMedium:require("./Fonts/Poppins-Medium.ttf")
  })
}

const Nav = createStackNavigator();

export default function App() {

  const [Loaded]=LoadFonts();
  if(Loaded){
    return (
      <NavigationContainer>
        <Nav.Navigator screenOptions={{
          headerShown: false, gestureEnabled: true,
          gestureDirection: 'vertical',
          cardStyleInterpolator: Platform.OS === 'Android'
            ? CardStyleInterpolators.forHorizontalIOS
            : CardStyleInterpolators.forRevealFromBottomAndroid,
        }}>
          <Nav.Screen name='InitialPage' component={InitalPage} />
          <Nav.Screen name='InitialPage2' component={InitialPage2} />
          <Nav.Screen name='LoginPage' component={LoginPage} />
          <Nav.Screen name='AdPage1' component={AdPage1} />
          <Nav.Screen name='AdPage2' component={Adpage2} />
          <Nav.Screen name='AdPage3' component={AdPage3} />
          <Nav.Screen name='SignUpPage' component={SignUpPage} />
          <Nav.Screen name='SuccessPage' component={SuccessPage}/>
          <Nav.Screen name='BottomNav' component={BottomNav}/>
          <Nav.Screen name='TestPage' component={TestPage}/>
        </Nav.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
