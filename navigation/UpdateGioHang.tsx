import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import CustomInput from '../commponent/CustomInput';
import CustomBottom from '../commponent/CustomBottom';

const UpdateGioHang = ({navigation, route}: any) => {
  const [ten_thietbi_ph34559, setTen_thietbi_ph34559] = useState(
    route.params.ten_thietbi_ph34559,
  );
  const [ngay_nhap_ph34559, setNgay_nhap_ph34559] = useState(
    route.params.ngay_nhap_ph34559,
  );
  const [trang_thai_ph34559, setTrang_thai_ph34559] = useState('');

  const handleUpdate = () => {};

  return (
    <View style={{flex: 1, marginHorizontal: 15, marginVertical: 15}}>
      <CustomInput
        title="Tên thiết bị"
        hint="Nhập tên thiết bị"
        value={ten_thietbi_ph34559}
        onChangeText={txt => setTen_thietbi_ph34559(txt)}
      />
      <CustomInput
        onChangeText={txt => setNgay_nhap_ph34559(txt)}
        value={ngay_nhap_ph34559}
        title="Ngày nhập"
        hint="Nhập ngày nhập"
      />
      <CustomInput
        onChangeText={txt => setTrang_thai_ph34559(txt)}
        value={trang_thai_ph34559}
        title="Trạng thái"
        hint="Nhập trạng thái"
      />
      <CustomInput title="Mô tả" hint="Nhập mô tả" />
      <CustomInput title="Hình ảnh" hint="Nhập link ảnh" />
      <CustomBottom text="Update" onPress={handleUpdate} />
    </View>
  );
};

export default UpdateGioHang;

const styles = StyleSheet.create({});
