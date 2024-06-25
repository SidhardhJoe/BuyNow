import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './src/HomePages/BottomPages/Home';
import Cart from './src/HomePages/BottomPages/Cart';
import Notifications from './src/HomePages/BottomPages/Notifications';
import Profile from './src/HomePages/BottomPages/Profile';

const Tab = createBottomTabNavigator();

const BottomNav = () => {
  return (
    <Tab.Navigator>
        <Tab.Screen name='Home' component={Home}/>
        <Tab.Screen name='Cart' component={Cart}/>
        <Tab.Screen name='Notification' component={Notifications}/>
        <Tab.Screen name='Profile' component={Profile}/>
    </Tab.Navigator>
  )
}

export default BottomNav