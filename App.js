import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import InitalPage from './src/InitalPage';
import InitialPage2 from './src/InitialPage2';
import LoginPage from './src/LoginPage';
import AdPage1 from './src/AdPages/AdPage1';
import Adpage2 from './src/AdPages/Adpage2';
import AdPage3 from './src/AdPages/AdPage3';
import SignUpPage from './src/SignUpPage';

export default function App() {

  const Nav = createStackNavigator();


  const BottomNav = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Nav.Navigator screenOptions={{
        headerShown: false, gestureEnabled: true,
        gestureDirection: 'vertical',
        cardStyleInterpolator: Platform.OS === 'ios'
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
      </Nav.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
