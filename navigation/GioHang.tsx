import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../config/store/store';
import CustomBottom from '../commponent/CustomBottom';


const GioHang = ({navigation}:any) => {
  const list = useSelector((state: RootState) => state.cart.items);
  console.log(list);
  const PostItem = ({item}: any) => {
    return (
      <View
        style={{
          marginHorizontal: 15,
          marginVertical: 15,
          backgroundColor: 'white',
          elevation: 5,
          padding: 15,
          borderRadius: 8,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={{marginEnd: 5}}>
            <Image
              style={{width: 60, height: 60, borderRadius: 8}}
              source={{
                uri: item.hinh_anh_ph34559,
              }}
            />
          </View>
          <View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{color: 'black', fontWeight: 'bold'}}>Tên: </Text>
              <Text>{item.ten_thietbi_ph34559}</Text>
            </View>
            <View style={{flexDirection: 'row', marginTop: 5}}>
              <Text style={{color: 'black', fontWeight: 'bold'}}>
                Ngày nhập:{' '}
              </Text>
              <Text>{item.ngay_nhap_ph34559}</Text>
            </View>
            <View style={{flexDirection: 'row', marginTop: 5}}>
              <Text style={{color: 'black', fontWeight: 'bold'}}>
                Trạng thái:{' '}
              </Text>
              <Text>{item.trang_thai_ph34559}</Text>
            </View>
            <View style={{flexDirection: 'row', marginTop: 5}}>
              <Text style={{color: 'black', fontWeight: 'bold'}}>Mô tả: </Text>
              <Text>{item.mota_ph34559}</Text>
            </View>
          </View>
        </View>

        <View>
          <CustomBottom
            style={{width: 70, marginBottom: 10}}
            text="Update"
            onPress={() => navigation.navigate('Update',item)}
          />
        </View>
      </View>
    );
  };
  return (
    <View>
      <FlatList
        data={list}
        renderItem={PostItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default GioHang;

const styles = StyleSheet.create({});
