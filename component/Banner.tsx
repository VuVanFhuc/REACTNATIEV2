import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Banner = () => {
  return (
    <View style={{}}>
      <Image
        resizeMode="repeat"
        style={{height: 100}}
        source={{
          uri: 'https://hondakhanhan.com/wp-content/uploads/2023/02/328711339_6723894767637303_1159176353795255621_n.jpg',
        }}
      />
    </View>
  );
};

export default Banner;

const styles = StyleSheet.create({});
