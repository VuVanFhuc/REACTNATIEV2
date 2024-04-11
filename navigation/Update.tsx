import {StyleSheet, Text, ToastAndroid, View} from 'react-native';
import React, {useState} from 'react';
import CustomBottom from '../component/CustomBottom';
import CusInput from '../component/CusInput';
import {useDispatch} from 'react-redux';
import {AppDispatch, updateCar} from '../redux/store';

const Update = ({navigation, route}: any) => {
  console.log('Update  route:', route);

  const [ten_xe_ph34559, setTen_xe_ph34559] = useState(
    route.params.ten_xe_ph34559,
  );
  const [mau_sac_ph34559, setMau_sac_ph34559] = useState(
    route.params.mau_sac_ph34559,
  );
  const [gia_ban_ph34559, setGia_ban_ph34559] = useState(
    route.params.gia_ban_ph34559,
  );
  const [mo_ta_ph34559, setMo_ta_ph34559] = useState(
    route.params.mo_ta_ph34559,
  );
  const [hinh_anh_ph34559, setHinh_anh_ph34559] = useState(
    route.params.hinh_anh_ph34559,
  );
  const [id, setId] = useState(route.params.id);

  const dispatch = useDispatch<AppDispatch>();

  const handleUpdate = () => {
    let obj = {
      ten_xe_ph34559: ten_xe_ph34559,
      gia_ban_ph34559: gia_ban_ph34559,
      mau_sac_ph34559: mau_sac_ph34559,
      mo_ta_ph34559: mo_ta_ph34559,
      hinh_anh_ph34559: hinh_anh_ph34559,
      id: id,
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
          onChangeText={txt => setTen_xe_ph34559(txt)}
          value={ten_xe_ph34559}
        />
        <CusInput
          title="Màu xe"
          hint="Nhập màu xe"
          onChangeText={txt => setMau_sac_ph34559(txt)}
          value={mau_sac_ph34559}
        />
        <CusInput
          title="Giá bán"
          hint="Nhập giá bán"
          onChangeText={txt => setGia_ban_ph34559(txt)}
          value={gia_ban_ph34559}
        />
        <CusInput
          title="Mô tả"
          hint="Nhập tên xe"
          onChangeText={txt => setMo_ta_ph34559(txt)}
          value={mo_ta_ph34559}
        />
        <CusInput
          title="Hình ảnh"
          hint="Nhập hình ảnh"
          onChangeText={txt => setHinh_anh_ph34559(txt)}
          value={hinh_anh_ph34559}
        />

        <CustomBottom
          text="Update"
          styletext={{fontWeight: 'bold'}}
          style={{marginTop: 10}}
          onPress={handleUpdate}
        />
      </View>
    </View>
  );
};

export default Update;

const styles = StyleSheet.create({});
