import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Banner from '../component/Banner';
import ListCar from '../component/ListCar';

const Home = ({navigation}: any) => {
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1}}>
        <Banner />
        <View style={{marginBottom: 10}} />
        <ListCar onPress={item => navigation.navigate('Update', item)} />
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('Create')}
        style={{
          backgroundColor: 'red',
          height: 50,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{color: 'white', fontWeight: 'bold'}}>Create</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
