import {StyleSheet, Text, ToastAndroid, View} from 'react-native';
import React, {useState} from 'react';
import CusInput from '../component/CusInput';
import CustomBottom from '../component/CustomBottom';
import {useDispatch} from 'react-redux';
import {AppDispatch, createCar} from '../redux/store';

const Create = ({navigation}: any) => {
  const [ten_xe_ph34559, setTen_xe_ph34559] = useState('');
  const [mau_sac_ph34559, setMau_sac_ph34559] = useState('');
  const [gia_ban_ph34559, setGia_ban_ph34559] = useState('');
  const [mo_ta_ph34559, setMo_ta_ph34559] = useState('');
  const [hinh_anh_ph34559, setHinh_anh_ph34559] = useState('');

  const dispatch = useDispatch<AppDispatch>();

  const handleCreate = () => {
    let obj = {
      ten_xe_ph34559: ten_xe_ph34559,
      mau_sac_ph34559: mau_sac_ph34559,
      gia_ban_ph34559: gia_ban_ph34559,
      mo_ta_ph34559: mo_ta_ph34559,
      hinh_anh_ph34559: hinh_anh_ph34559,
    };
    if (
      ten_xe_ph34559 === '' ||
      mau_sac_ph34559 === '' ||
      gia_ban_ph34559 === '' ||
      mo_ta_ph34559 === '' ||
      hinh_anh_ph34559 === ''
    ) {
      ToastAndroid.show('Mời nhập thông tin', ToastAndroid.SHORT);
      return;
    }
    if (isNaN(Number(gia_ban_ph34559))) {
      ToastAndroid.show('Giá phải là số', ToastAndroid.SHORT);
      return;
    }

    dispatch(createCar(obj)).then(res => {
      ToastAndroid.show('Thêm thành công', ToastAndroid.SHORT);
      navigation.goBack();
    });
  };

  return (
    <View style={{flex: 1, marginHorizontal: 15, marginVertical: 15}}>
      <CusInput
        title="Tên xe"
        hint="Nhập tên xe"
        onChangeText={txt => setTen_xe_ph34559(txt)}
      />
      <CusInput
        title="Màu xe"
        hint="Nhập màu xe"
        onChangeText={txt => setMau_sac_ph34559(txt)}
      />
      <CusInput
        title="Giá bán"
        hint="Nhập giá bán"
        onChangeText={txt => setGia_ban_ph34559(txt)}
      />
      <CusInput
        title="Mô tả"
        hint="Nhập tên xe"
        onChangeText={txt => setMo_ta_ph34559(txt)}
      />
      <CusInput
        title="Hình ảnh"
        hint="Nhập hình ảnh"
        onChangeText={txt => setHinh_anh_ph34559(txt)}
      />

      <CustomBottom
        text="Create"
        styletext={{fontWeight: 'bold'}}
        style={{marginTop: 10}}
        onPress={handleCreate}
      />
    </View>
  );
};

export default Create;

const styles = StyleSheet.create({});
