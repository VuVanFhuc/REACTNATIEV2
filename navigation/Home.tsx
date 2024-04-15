import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Banner from '../commponent/Banner';
import ListThietBi from '../commponent/ListThietBi';
import CustomBottom from '../commponent/CustomBottom';

const Home = ({navigation}:any) => {
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1}}>
        <Banner />
        <ListThietBi />
      </View>
      <CustomBottom
        text="Giỏ hàng"
        style={{
          borderBottomRightRadius: 0,
          borderBottomLeftRadius: 0,
          height: 50,
        }}
        onPress={()=>navigation.navigate("GioHang")}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
