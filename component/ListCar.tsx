import {
  Alert,
  FlatList,
  StyleSheet,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState, deleteCar, fetchAPI} from '../redux/store';
import CustomBottom from './CustomBottom';
interface PropsList {
  onPress?: (item: any) => void;
}

const ListCar = (props: PropsList) => {
  const list = useSelector((state: RootState) => state.car.items);
  console.log('ListCar  list:', list);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchAPI());
  }, [dispatch]);

  const handleDelete = (item: any) => {
    Alert.alert('Thông báo!', 'Bạn có chắc muốn xóa không?', [
      {text: 'Không'},
      {
        text: 'Có',
        onPress: () => {
          dispatch(deleteCar(item)).then(res => {
            ToastAndroid.show('Xóa thành công', ToastAndroid.SHORT);
          });
        },
      },
    ]);
  };

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
        <View>
          <View style={{flexDirection: 'row'}}>
            <Text style={{color: 'black', fontWeight: 'bold'}}>Tên xe: </Text>
            <Text>{item.ten_xe_ph34559}</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={{color: 'black', fontWeight: 'bold'}}>Màu: </Text>
            <Text>{item.mau_sac_ph34559}</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={{color: 'black', fontWeight: 'bold'}}>Giá bán: </Text>
            <Text>{item.gia_ban_ph34559}</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={{color: 'black', fontWeight: 'bold'}}>Mô tả: </Text>
            <Text>{item.mo_ta_ph34559}</Text>
          </View>
        </View>
        <View>
          <CustomBottom
            onPress={() => handleDelete(item.id)}
            text="Delete"
            style={{
              marginBottom: 10,
              width: 80,
              height: 40,
              backgroundColor: 'red',
            }}
          />
          <CustomBottom
            text="Edit"
            style={{height: 40}}
            onPress={() => props.onPress && props.onPress(item)}
          />
        </View>
      </View>
    );
  };
  return (
    <View style={{flex: 1}}>
      <FlatList
        data={list}
        renderItem={PostItem}
        keyExtractor={(e, i) => i.toString()}
      />
    </View>
  );
};

export default ListCar;

const styles = StyleSheet.create({});
