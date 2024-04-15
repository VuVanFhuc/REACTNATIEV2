import {
  Alert,
  FlatList,
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  AppDispatch,
  RootState,
  addItemsCart,
  fetchAPI,
} from '../config/store/store';
import CustomBottom from './CustomBottom';

const ListThietBi = () => {
  const list = useSelector((state: RootState) => state.thietBi.items);
  console.log(list);
  const [isVisible, setIsVisible] = useState(false);
  const [item, setItem] = useState({} as any);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchAPI());
  }, [dispatch]);

  const addCart = (item: any) => {
    // Alert.alert('them vao gio hang thanh cong ');
    Alert.alert(
      'Thông báo có thể hủy',
      'Thêm vào giỏ hàng thành công',
      [
        {
          text: 'Hủy',
          onPress: () => console.log('Hủy'),
          style: 'cancel',
        },
        { text: 'OK', onPress: () => console.log('OK') },
      ],
      { cancelable: true }
    );
    let obj = {
      ten_thietbi_ph34559: item.ten_thietbi_ph34559,
      hinh_anh_ph34559: item.hinh_anh_ph34559,
      ngay_nhap_ph34559: item.ngay_nhap_ph34559,
      mota_ph34559: item.mota_ph34559,
      trang_thai_ph34559: item.trang_thai_ph34559,
    };

    dispatch(addItemsCart(obj));
  };

  const PostItem = ({item}: any) => {
    return (
      <TouchableOpacity
        onPress={() => {
          setIsVisible(true);
          setItem(item);
        }}>
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
              <View style={{flexDirection: 'row'}}>
                <Text style={{color: 'black', fontWeight: 'bold'}}>Ngày: </Text>
                <Text>{item.ngay_nhap_ph34559}</Text>
              </View>
            </View>
          </View>
          <View>
            <CustomBottom
              style={{width: 70, marginBottom: 10}}
              text="Add cart"
              onPress={() => addCart(item)}
            />
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={{flex: 1}}>
      <FlatList
        data={list}
        renderItem={PostItem}
        keyExtractor={(item, index) => index.toString()}
      />
      <Modal transparent visible={isVisible} animationType="fade">
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(0,0,0,0.6)',
          }}>
          <View
            style={{
              backgroundColor: 'white',
              width: '90%',
              padding: 15,
              borderRadius: 8,
            }}>
            <Image
              style={{height: 150, borderRadius: 8}}
              source={{uri: item.hinh_anh_ph34559}}
            />
            <View style={{flexDirection: 'row', marginTop: 10}}>
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

            <View style={{marginTop: 10}}>
              <CustomBottom text="Hide" onPress={() => setIsVisible(false)} />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ListThietBi;

const styles = StyleSheet.create({});
