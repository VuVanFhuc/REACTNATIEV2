import React from 'react';
import { View, Text, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

import Welcome from './src/View/Welcome';
import Detail from './src/View/Detail';
import Favourite from './src/View/Favourite';
import Setting from './src/View/Setting';
import Login from './src/View/Login';
import Resigter from './src/View/Resigter';
import Home from './src/View/Home';
import User from './src/View/User';
import Mobile from './src/View/Mobile';
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();


function MyDrawer() {
  return (
    <Drawer.Navigator initialRouteName="Trang chủ">
      <Drawer.Screen
        name="Trang chủ"
        component={Home}
        options={{
          drawerIcon: ({ focused, color, size }) => (
            <Image
              source={require('../ASM/src/img/01.png')}
              style={{ width: size, height: size }}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Chi tiết"
        component={Detail}
        options={{
          drawerIcon: ({ focused, color, size }) => (
            <Image
              source={require('../ASM/src/img/02.png')} 
              style={{ width: size, height: size }}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Yêu thích"
        component={Favourite}
        options={{
          drawerIcon: ({ focused, color, size }) => (
            <Image
              source={require('../ASM/src/img/03.png')} 
              style={{ width: size, height: size }}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Cài đặt"
        component={Setting}
        options={{
          drawerIcon: ({ focused, color, size }) => (
            <Image
              source={require('../ASM/src/img/04.png')} 
              style={{ width: size, height: size }}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Trang chủ" component={MyDrawer} options={{ headerShown: false }} />
        <Stack.Screen name="Chi tiết" component={Detail} options={{ headerShown: false }} />
        <Stack.Screen name="Yêu thích" component={Favourite} options={{ headerShown: false }} />
        <Stack.Screen name="Cài đặt" component={Setting} options={{ headerShown: false }} />
        <Stack.Screen name="Resigter" component={Resigter} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="User" component={User} options={{ headerShown: false }} />
        <Stack.Screen name="Mobile" component={Mobile} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
