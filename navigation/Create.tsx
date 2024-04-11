import {StyleSheet, Text, ToastAndroid, View} from 'react-native';
import React, {useState} from 'react';
import CusInput from '../component/CusInput';
import CustomBottom from '../component/CustomBottom';
import {useDispatch} from 'react-redux';
import {AppDispatch, createCar} from '../redux/store';

const Create = ({navigation}: any) => {
  const [ten_xe_ph34858, setTen_xe_ph34858] = useState('');
  const [mau_sac_ph34858, setMau_sac_ph34858] = useState('');
  const [gia_ban_ph34858, setGia_ban_ph34858] = useState('');
  const [mo_ta_ph34858, setMo_ta_ph34858] = useState('');
  const [hinh_anh_ph34858, setHinh_anh_ph34858] = useState('');

  const dispatch = useDispatch<AppDispatch>();

  const handleCreate = () => {
    let obj = {
      ten_xe_ph34858: ten_xe_ph34858,
      mau_sac_ph34858: mau_sac_ph34858,
      gia_ban_ph34858: gia_ban_ph34858,
      mo_ta_ph34858: mo_ta_ph34858,
      hinh_anh_ph34858: hinh_anh_ph34858,
    };
    if (
      ten_xe_ph34858 === '' ||
      mau_sac_ph34858 === '' ||
      gia_ban_ph34858 === '' ||
      mo_ta_ph34858 === '' ||
      hinh_anh_ph34858 === ''
    ) {
      ToastAndroid.show('Mời nhập thông tin', ToastAndroid.SHORT);
      return;
    }
    if (isNaN(Number(gia_ban_ph34858))) {
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
        onChangeText={txt => setTen_xe_ph34858(txt)}
      />
      <CusInput
        title="Màu xe"
        hint="Nhập màu xe"
        onChangeText={txt => setMau_sac_ph34858(txt)}
      />
      <CusInput
        title="Giá bán"
        hint="Nhập giá bán"
        onChangeText={txt => setGia_ban_ph34858(txt)}
      />
      <CusInput
        title="Mô tả"
        hint="Nhập tên xe"
        onChangeText={txt => setMo_ta_ph34858(txt)}
      />
      <CusInput
        title="Hình ảnh"
        hint="Nhập hình ảnh"
        onChangeText={txt => setHinh_anh_ph34858(txt)}
      />

      <CustomBottom
        text="Create"
        styletext={{fontWeight: 'bold'}}
        style={{marginTop: 10,backgroundColor:"red"}}
        onPress={handleCreate}
      />
    </View>
  );
};

export default Create;

const styles = StyleSheet.create({});
