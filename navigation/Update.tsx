import {StyleSheet, Text, ToastAndroid, View} from 'react-native';
import React, {useState} from 'react';
import CustomBottom from '../component/CustomBottom';
import CusInput from '../component/CusInput';
import {useDispatch} from 'react-redux';
import {AppDispatch, updateCar} from '../redux/store';

const Update = ({navigation, route}: any) => {
  console.log('Update  route:', route);

  const [ten_xe_ph34858, setTen_xe_ph34858] = useState(
    route.params.ten_xe_ph34858,
  );
  const [mau_sac_ph34858, setMau_sac_ph34858] = useState(
    route.params.mau_sac_ph34858,
  );
  const [gia_ban_ph34858, setGia_ban_ph34858] = useState(
    route.params.gia_ban_ph34858,
  );
  const [mo_ta_ph34858, setMo_ta_ph34858] = useState(
    route.params.mo_ta_ph34858,
  );
  const [hinh_anh_ph34858, setHinh_anh_ph34858] = useState(
    route.params.hinh_anh_ph34858,
  );
  const [id, setId] = useState(route.params.id);

  const dispatch = useDispatch<AppDispatch>();

  const handleUpdate = () => {
    let obj = {
      ten_xe_ph34858: ten_xe_ph34858,
      gia_ban_ph34858: gia_ban_ph34858,
      mau_sac_ph34858: mau_sac_ph34858,
      mo_ta_ph34858: mo_ta_ph34858,
      hinh_anh_ph34858: hinh_anh_ph34858,
      id: id,
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
    dispatch(updateCar({id: id, data: obj})).then(res => {
      ToastAndroid.show('Sửa thành công', ToastAndroid.SHORT);
      navigation.goBack();
    });
  };

  return (
    <View>
      <View style={{marginHorizontal: 15, marginVertical: 15}}>
        <CusInput
          title="Tên xe"
          hint="Nhập tên xe"
          onChangeText={txt => setTen_xe_ph34858(txt)}
          value={ten_xe_ph34858}
        />
        <CusInput
          title="Màu xe"
          hint="Nhập màu xe"
          onChangeText={txt => setMau_sac_ph34858(txt)}
          value={mau_sac_ph34858}
        />
        <CusInput
          title="Giá bán"
          hint="Nhập giá bán"
          onChangeText={txt => setGia_ban_ph34858(txt)}
          value={gia_ban_ph34858}
        />
        <CusInput
          title="Mô tả"
          hint="Nhập tên xe"
          onChangeText={txt => setMo_ta_ph34858(txt)}
          value={mo_ta_ph34858}
        />
        <CusInput
          title="Hình ảnh"
          hint="Nhập hình ảnh"
          onChangeText={txt => setHinh_anh_ph34858(txt)}
          value={hinh_anh_ph34858}
        />

        <CustomBottom
          text="Update"
          styletext={{fontWeight: 'bold'}}
          style={{marginTop: 10,backgroundColor:"red"}}
          onPress={handleUpdate}
        />
      </View>
    </View>
  );
};

export default Update;

const styles = StyleSheet.create({});
