import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Banner = () => {
  return (
    <View>
      <Image
        style={{height: 200}}
        source={{
          uri: 'https://inkythuatso.com/uploads/images/2022/01/banner-thiet-bi-dien-inkythuatso-24-13-24-06.jpg',
        }}
      />
    </View>
  );
};

export default Banner;

const styles = StyleSheet.create({});
