import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

const HomeScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'cyan',
      }}>
      <Text style={{fontSize: 30}}>Màn hình trang chủ</Text>
    </View>
  );
};
const Infomation = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'cyan',
      }}>
      <Text style={{fontSize: 30}}>Màn hình Infomation</Text>
    </View>
  );
};
const MyDrawer = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="About" component={Infomation} />
    </Drawer.Navigator>
  );
};

function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}

export default App;
