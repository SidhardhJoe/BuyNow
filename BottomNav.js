import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './src/HomePages/BottomPages/Home';
import Cart from './src/HomePages/BottomPages/Cart';
import Notifications from './src/HomePages/BottomPages/Notifications';
import Profile from './src/HomePages/BottomPages/Profile';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const BottomNav = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false, }} >
      <Tab.Screen name='Home' component={Home}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? 'home' : 'home-outline'}
              size={size}
              color={color}
            />
          )
        }} />
      <Tab.Screen name='Cart' component={Cart}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? 'cart' : 'cart-outline'}
              size={size}
              color={color}
            />
          )
        }} />
      <Tab.Screen name='Notification' component={Notifications}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? 'notifications' : 'notifications-outline'}
              size={size}
              color={color}
            />
          )
        }} />
      <Tab.Screen name='Profile' component={Profile}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <MaterialCommunityIcons
              name={focused ? 'account' : 'account-outline'}
              size={size}
              color={color} />
          )
        }} />
    </Tab.Navigator>
  )
}

export default BottomNav