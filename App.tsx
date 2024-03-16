import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './src/View/HomeScreen';
import Ao_cuoi from './src/View/Ao_cuoi';


const Drawer = createDrawerNavigator();
const Stack = createStackNavigator(); 

function MyDrawer() {
  return (
    <Drawer.Navigator initialRouteName="Trang chủ">
      <Drawer.Screen name="Trang chủ" component={HomeScreen} />
      <Drawer.Screen name="Áo cưới" component={Ao_cuoi} />
     
    </Drawer.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Trang chủ">
        <Stack.Screen
          name="Trang chủ"
          component={MyDrawer}
          options={{ headerShown: false }}
        />
    
        <Stack.Screen
          name="Áo cưới"
          component={Ao_cuoi}
          options={{ headerShown: false }}
        />
     
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
